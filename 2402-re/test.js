var fs = require('fs')
try {
  fs.accessSync('etc/passwd', fs.constants.R_OK | fs.constants.W_OK)
  console.log('can read/write')
} catch (err) {
  console.error('no 11access!')
}
