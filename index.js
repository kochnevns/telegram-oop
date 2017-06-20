'use strict';

const TelegramBot = require('./../node-telegram-bot-api/src/telegram');

class TelegramBotOOP extends TelegramBot{

    constructor(token) {
        super(token, {polling: true});
        this.on('location', this.onLocation.bind(this));
        this.on('callback_query', this.onCallbackQuery.bind(this));
    }
    onLocation() {
        throw new Error('Функция на локейшн не назначена');
    }
    onCallbackQuery() {
        throw new Error('Функция на калбек квери не назначена');
    }
    getUserName(msg) {
        return;
    }
    registerOnTextCallback(regexp, cb) {
      console.log(cb)
        this.onText(regexp, cb);
    }
}

module.exports = TelegramBotOOP;
