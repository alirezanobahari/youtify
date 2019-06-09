import download from "../core/download/download";

const youtubeVideoBaseUrl = "https://www.youtube.com/watch?v=";

export const downloadVideo = async (telegramMessage, botInterface) => {
  try {
    const { text } = telegramMessage;
    const videoId =
      text.startsWith(youtubeVideoBaseUrl) === true
        ? text.replace(youtubeVideoBaseUrl, "")
        : text;
    const videoStream = await download(videoId);
    botInterface.sendVideo(telegramMessage.chat.id, "", videoStream);
  } catch (e) {}
};
