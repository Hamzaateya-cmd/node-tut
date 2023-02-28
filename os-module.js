const os = require('os')
// Info about current user
const user = os.userInfo()

//method returns the system uptime in seconds
console.log(os.uptime())

const currentOs = {
  name : os.type() ,
  release : os.release(),
  totalMem : os.totalmem(),
  freeMem : os.freemem()
}
console.log(currentOs)