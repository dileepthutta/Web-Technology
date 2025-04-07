
//OS module is the module which provides the os details.


//Importing the module
const os = require('os')

//It returns the Type of our OS
console.log(os.type())

//It returns the version of our OS
console.log(os.version())

//It returns the Free memory of my system.
console.log(os.freemem())

//It returns the cpu status.
console.log(os.cpus())

//To Check the current dir
console.log(__dirname)

//To Check the dir+file_name
console.log(__filename)
