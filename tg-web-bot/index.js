const TelegramBot = require('node-telegram-bot-api');

const token = '6189470960:AAGpX0KGybLUnIAlOIditetJOYvsJ9Kunas';

const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
});
