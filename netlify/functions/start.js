const serverless = requier("serverless-http");
const { app } = require("./dist/cifrado-ssr/server/main")

exports.handler = serverless(app());
