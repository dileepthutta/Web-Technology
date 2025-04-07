const path = require('path')

//To Known the Path 
console.log(path.dirname(__filename))

//Console the file_name only of present working dir
console.log(path.basename(__filename))

//Console the extention of our file.
console.log(path.extname(__filename))


// It an object  which contains the  details of our present working dir.
console.log(path.parse(__filename))
