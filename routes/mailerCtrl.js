/* eslint-disable */
const nodemailer = require("nodemailer");

module.exports = {
  mailer: function(req, res){

    const formName = req.body.formName;
    const formDiscord = req.body.formDiscord;
    const formBattleTag =req.body.formBattleTag;
    const formAvailability =req.body.formAvailability;
    const formCharacter =req.body.formCharacter;
    const formXpWow = req.body.formXpWow;
    const formXpMmo = req.body.formXpMmo;
    const formWhy = req.body.formWhy;
    const formYou = req.body.formYou;

    let testAccount = nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'contactgamenews019@gmail.com', 
        pass: 'Games123456@', 
      }
    });
  
    let info = transporter.sendMail({
      from: '"Dwarven Overlords" <contactgamenews019@gmail.com>', 
      to: "y.redjah@gmail.com", 
      subject: "Recruitement Message ✔", 
      text: `You have a new message : \n 
      Name : ${formName} \n
      Discord : ${formDiscord} \n
      Battletag : ${formBattleTag} \n
      Availability : ${formAvailability} \n
      Character : ${formCharacter} \n
      Xp WoW : ${formXpWow} \n
      Xp MMO : ${formXpMmo} \n
      Why our guild : ${formWhy} \n
      Your IRL : ${formYou}` 
    });
  
    console.log("Message sent: %s", info.messageId);
  
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  },
};
