/*CMD
  command: 📢 What's App Earning
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

let banStat = Bot.getProperty("" + user.telegramid + "?Ban");
if (banStat == "ban") {
  Bot.sendMessage("*You're Banned From Using The Bot ❌*", { parse_mode: "Markdown" });
  return;
}

if (request && request.data) {
  Api.deleteMessage({
    chat_id: request.message.chat.id,
    message_id: request.message.message_id
  })
}

var type = Bot.getProperty("wa_type");

if (!type) {
  Bot.sendMessage("⚠️ এখনো কোনো content set করা হয়নি!");
  return;
}

if (type == "photo") {
  var file_id = Bot.getProperty("wa_file_id");
  var caption = Bot.getProperty("wa_caption") || "";

  Api.sendPhoto({
    photo: file_id,
    caption: caption
  });
  return;
}

if (type == "text") {
  var text = Bot.getProperty("wa_text");
  Bot.sendMessage(text);
  return;
}
