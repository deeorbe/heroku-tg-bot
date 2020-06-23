const TelegramBot = require('node-telegram-bot-api');
const token = '1189037689:AAEvSk5bVm_udSK-niuXBw40YbZCop874PI';


console.log('Bot has been started . . .')
const bot = new TelegramBot(token, { polling: true });



bot.on('message',msg=>{

    const chatId = msg.chat.id;
    bot.sendMessage(chatId,`Hello ${msg.from.first_name} !`)
})