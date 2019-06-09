class BotInterface {
  constructor(botApi) {
    this.botApi = botApi;
  }

  sendText(chatId, message) {
    return this.botApi.sendMessage({
      chat_id: chatId,
      text: message,
      parse_mode: "HTML"
    });
  }

  sendAudio(chatId, caption, fileStream) {
    return this.botApi.sendAudio({
      chat_id: chatId,
      caption,
      audio: fileStream
    });
  }

  sendVideo(chatId, caption, fileStream) {
    return this.botApi.sendVideo({
      chat_id: chatId,
      caption,
      video: fileStream
    });
  }

  forward(chatId, fromChatId, messageId, disableNotification = false) {
    return this.botApi.forwardMessage({
      chat_id: chatId,
      from_chat_id: fromChatId,
      message_id: messageId,
      disable_notification: disableNotification
    });
  }

  getMessage(messageId) {

  }
}

export default BotInterface;
