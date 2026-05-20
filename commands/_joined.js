/*CMD
  command: /joined
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

/*CMD
  command: /joined
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  aliases: 
  group: 
CMD*/

let stat = Bot.getProperty("" + user.telegramid + "?Ban");
if (stat == "ban") {
  Bot.sendMessage("*You're Banned From Using The Bot ❌*");
  return;
}

if (request && request.data) {
  Api.deleteMessage({ message_id: request.message.message_id });
}

Api.getChatMember({
  chat_id: "@PureRushOfficial",
  user_id: user.telegramid,
  on_result: "check1"
});
