module.exports = {
    name: "join",
    description: "To join the vc",
    aliases: ["j"],
    execute(message) {
        const vc = message.member.voice.channel;
        if(vc) {
            const connection = vc.join();
            message.channel.send('I joined the vc');
        } else {
            message.reply('Ýou need to join vc first');
        }
    }
}