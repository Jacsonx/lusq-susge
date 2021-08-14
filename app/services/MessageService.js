const { telegramConfig } = require('../configs');

class MessageService {
  async handle($) {
    try {
      const message = 'Command not found';

      $.sendMessage(message);
    } catch (ex) {
      console.error(ex);
    }
  }

  async start($) {
    try {
      const message = `Hello, ${$.message.from.firstName}`;

      $.sendMessage(message);
    } catch (ex) {
      console.error(ex);
    }
  }

  async hentai($) {
    try {
      const message = `Hentai?, @luusqq`;

      $.sendPhoto({ url: telegramConfig.image })
      $.sendMessage(message);
    } catch (ex) {
      console.error(ex);
    }
  }

  async help($) {
    try {
      const message = 'I can help you.\n\nYou can control me by sending these commands:\n\n/help - command list\n\n/hentai - susge @lusqq ';

      $.sendMessage(message);
    } catch (ex) {
      console.error(ex);
    }
  }
}

module.exports = MessageService;
