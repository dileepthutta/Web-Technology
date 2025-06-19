import inquirer from 'inquirer';
import qr from 'qr-image'
import fs from 'fs'
inquirer
  .prompt([
    {
    message:"Type your message to change into (QR -image) :",
    name:"URL",
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    //Using qr-image module to store create the image.
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    // Now to write the data into file.
    fs.writeFile('URL.txt',url, (err)=>{
        if (err) throw err;
        console.log("The QR code has been created\nThe messsage has saved.")
    });

    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });