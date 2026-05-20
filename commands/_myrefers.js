/*CMD
  command: /myrefers
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

if(request.data){
  Api.deleteMessage({
    chat_id: request.message.chat.id,
    message_id: request.message.message_id
  })
}

let refList = Libs.ReferralLib.getRefList();

if (!refList.exist) {
  Bot.sendMessage("❌ আপনি এখনো কাউকে রেফার করেননি!");
  return
}

var users_rows = ""
var users = refList.getUsers()
for (var ind in users) {
  users_rows =
    users_rows +
    "\n\n<b>➡️ Your Total Reffer: " +
    Libs.ReferralLib.getRefCount() +
    "\n\n👨‍👨‍👦 Your Reffer Users ⬇️</b>\n\n👤 " +
    "<a href='tg://user?id=" + users[ind].telegramid + "'>" + users[ind].first_name + "</a>"
}

var inl = [[{ text: "🔙 Back", callback_data: "/mainmenu" }]]

Api.sendMessage({
  text: users_rows,
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: inl }
})
