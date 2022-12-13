var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USEREMAIL,//companies email address
    pass: process.env.PASSWORD// companies password
  }
});

var mailOptions = {
  from: 'maddnesseverywhere@outlook.com',//companies address
  to: 'vicidundun@gmailcom',// receievers address
  subject: 'Checking if this madness works!',//Topic to send 
  text: 'Well it works!'//text to pass to the reciever.
};

// function that does the sending
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
