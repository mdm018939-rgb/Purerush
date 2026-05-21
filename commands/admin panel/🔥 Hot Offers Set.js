/*CMD
  command: 🔥 Hot Offers Set
  help: 
  need_reply: true
  auto_retry_time: 
  folder: admin panel

  <<ANSWER
🔥 Hot Offers Set

Text, Photo, Video বা Voice পাঠান:
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var ADMIN_ID = 6625019627;
if (user.telegramid != ADMIN_ID) return;

Bot.setProperty("ho_text", "", "string");
Bot.setProperty("ho_photo", "", "string");
Bot.setProperty("ho_video", "", "string");
Bot.setProperty("ho_voice", "", "string");
Bot.setProperty("ho_caption", "", "string");

var msg = tgUpdate.message || tgUpdate.edited_message;
var saved = [];

// Photo
if (msg && msg.photo && msg.photo.length > 0) {
  Bot.setProperty("ho_photo", msg.photo[msg.photo.length - 1].file_id, "string");
  saved.push("Photo");
}

// Video
if (msg && msg.video) {
  Bot.setProperty("ho_video", msg.video.file_id, "string");
  saved.push("Video");
}

// Voice
if (msg && msg.voice) {
  Bot.setProperty("ho_voice", msg.voice.file_id, "string");
  saved.push("Voice");
}

// Caption বা Text
if (msg && msg.caption) {
  Bot.setProperty("ho_caption", msg.caption, "string");
  saved.push("Caption");
} else if (message && message.trim() != "") {
  Bot.setProperty("ho_text", message, "string");
  saved.push("Text");
}

if (saved.length > 0) {
  Bot.sendMessage("✅ সেট হয়েছে: " + saved.join(", "));
} else {
  Bot.sendMessage("⚠️ কিছু পাঠান!");
}
