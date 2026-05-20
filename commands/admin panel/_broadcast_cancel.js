/*CMD
  command: /broadcast_cancel
  help: 
  need_reply: false
  auto_retry_time: 
  folder: admin panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: /broadcast_cancel
  need_reply: false
CMD*/

var adminID = 6625019627
if (user.telegramid != adminID) return;

if (request && request.message) {
  Api.deleteMessage({
    chat_id: request.message.chat.id,
    message_id: request.message.message_id
  })
}

User.setProperty("broadcast_msg", "", "string")
Bot.sendMessage("❌ *Broadcast বাতিল করা হয়েছে!*", { parse_mode: "Markdown" })
