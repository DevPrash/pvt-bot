module.exports = {
    name: "join",
    description: "To join the vc",
    aliases: ["j"],
    execute(message) {
        const vc = message.member.voice.channel;
        if(vc) {
            const connection = vc.join();
            message.channel.send('Joined the VC');
        } else {
            message.reply('You need to join a VC first');
        }
    }
}
