// const { envs } = require('./config/env');
// const { startServer } = require('./server/server')

import { envs } from "./config/env.js";
import { startServer } from "./server/server.js";

function main () {
  startServer( {
    port: envs.PORT,
    path: envs.PUBLIC_PATH
  })
}

( async () => {
  main()
}
)()