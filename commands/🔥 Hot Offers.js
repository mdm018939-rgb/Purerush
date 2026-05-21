/*CMD
  command: 🔥 Hot Offers
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var text = Bot.getProperty("ho_text") || "";
var photo = Bot.getProperty("ho_photo") || "";
var video = Bot.getProperty("ho_video") || "";
var voice = Bot.getProperty("ho_voice") || "";
var caption = Bot.getProperty("ho_caption") || "";

if (!text && !photo && !video && !voice) {
  Bot.sendMessage("⚠️ এখনো কোনো Hot Offer সেট করা হয়নি!");
  return;
}

// Photo + Video একসাথে → MediaGroup
if (photo && video) {
  Api.sendMediaGroup({
    media: JSON.stringify([
      { type: "photo", media: photo, caption: caption },
      { type: "video", media: video }
    ])
  });
  if (text) Bot.sendMessage(text);
  return;
}

// শুধু Photo
if (photo) {
  Api.sendPhoto({ photo: photo, caption: caption || text });
  return;
}

// শুধু Video
if (video) {
  Api.sendVideo({ video: video, caption: caption || text });
  return;
}

// শুধু Voice
if (voice) {
  Api.sendVoice({ voice: voice });
  if (text) Bot.sendMessage(text);
  return;
}

// শুধু Text
if (text) {
  Bot.sendMessage(text);
}
