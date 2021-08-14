const { TelegramBaseController } = require('telegram-node-bot');


const { MessageService } = require('../services');

const messageService = new MessageService();

class MessageController extends TelegramBaseController {
  async handle($) {
    messageService.handle($);
  }

  async start($) {
    messageService.start($);
  }

  async hentai($) {
    messageService.hentai($);
  }

  async help($) {
    messageService.help($);
  }

  get routes() {
    return {
      start: 'start',
      help: 'help',
      hentai:'hentai'
    };
  }
}

module.exports = MessageController;
