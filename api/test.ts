import { NowRequest, NowResponse } from "@now/node";

export default (request: NowRequest, response: NowResponse) => {
  response.json({
    hello: "World!",
    body: request.body,
    query: request.query,
    cookies: request.cookies,
  });
};
