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

let refList = Libs.ReferralLib.getRefList()

if (!refList.exist) {
  Bot.sendMessage("❌ আপনি এখনো কাউকে রেফার করেননি!")
  return
}

let users = refList.getUsers()
let totalRef = Libs.ReferralLib.getRefCount()

// Pagination
let page = parseInt(params) || 1
let perPage = 10
let totalPages = Math.ceil(users.length / perPage)
let start = (page - 1) * perPage
let pageUsers = users.slice(start, start + perPage)

// Header আলাদা — loop এর বাইরে
var users_rows = "➡️ <b>Total Refers: " + totalRef + " জন</b>\n\n👨‍👨‍👦 <b>Your Referred Users:</b>\n"

for (var ind in pageUsers) {
  users_rows += "\n👤 <a href='tg://user?id=" + pageUsers[ind].telegramid + "'>" + pageUsers[ind].first_name + "</a>"
}

// Navigation buttons
var navRow = []
if (page > 1) {
  navRow.push({ text: "⬅️ Prev", callback_data: "/myrefers " + (page - 1) })
}
navRow.push({ text: "📄 " + page + "/" + totalPages, callback_data: "/page_info " + page + " " + totalPages })
if (page < totalPages) {
  navRow.push({ text: "Next ➡️", callback_data: "/myrefers " + (page + 1) })
}

var inl = [
  navRow,
  [{ text: "🔙 Back", callback_data: "/mainmenu" }]
]

if(request.data){
  Api.editMessageText({
    chat_id: request.message.chat.id,
    message_id: request.message.message_id,
    text: users_rows,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inl }
  })
} else {
  Api.sendMessage({
    text: users_rows,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inl }
  })
}
