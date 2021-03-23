module.exports = {
  name: "invite",
  description: "Send bot invite link",
  execute(message) {
    return message.member
      .send(
        `Hey, Thanks for using the invite command but unfortunately this is a bot made authentically for Winstoner's server's purpose...
But no worries we can provide you the link of a bot of the same script and more enhanced quality for your server!!
Click on the link below to invite Pixel bot in your server :
https://discord.com/api/oauth2/authorize?client_id=770339643732131873&permissions=37088320&scope=bot
    `
      )
      .catch(console.error);
  }
};
