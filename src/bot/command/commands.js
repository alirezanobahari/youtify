import { downloadVideo } from "../../controller/video.controller";

export const startCmd = (telegramMessage, botInterface) => {
  botInterface.sendText(
    telegramMessage.chat.id,
    "Hi! \n Please send us youtube video link or youtube video id."
  );
};

export const defaultCmd = (telegramMessage, botInterface) =>
  downloadVideo(telegramMessage, botInterface);
