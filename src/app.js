const { envs } = require('./config/env');
const { startServer } = require('./server/server')

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