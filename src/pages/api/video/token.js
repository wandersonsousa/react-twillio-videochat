import Cors from "cors";
import config from "./config";
import { videoToken } from "./tokens";

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}
const sendTokenResponse = (token, res) => {
  res.send(
    JSON.stringify({
      token: token.toJwt(),
    })
  );
};

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  if (req.method === "GET") {
    const identity = req.query.identity;
    const room = req.query.room;
    const token = videoToken(identity, room, config);
    return sendTokenResponse(token, res);
  }
  if (req.method === "POST") {
    const identity = req.body.identity;
    const room = req.body.room;
    const token = videoToken(identity, room, config);
    return sendTokenResponse(token, res);
  }
}
