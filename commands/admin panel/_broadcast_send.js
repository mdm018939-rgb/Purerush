/*CMD
  command: /broadcast_send
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
  command: /broadcast_send
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

var list = Bot.getProperty("broadcast_list") || []

var uniqueList = []
for (var i in list) {
  var id = parseInt(list[i])
  if (uniqueList.indexOf(id) === -1) {
    uniqueList.push(id)
  }
}
Bot.setProperty("broadcast_list", uniqueList, "json")

var msg = User.getProperty("broadcast_msg")

Bot.sendMessage("✅ *" + uniqueList.length + " জন কে সফলভাবে Broadcast করা হয়েছে!*", { parse_mode: "Markdown" })

for (var i in uniqueList) {
  Api.sendMessage({
    chat_id: uniqueList[i],
    text: msg
  })
}
