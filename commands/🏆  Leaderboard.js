/*CMD
  command: 🏆  Leaderboard
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
  command: 🏆  Leaderboard
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
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

let list = Libs.ReferralLib.getTopList()

list.order_by = "integer_value"
list.order_ascending = false
list.page = 1
list.per_page = 10

var items = list.get()

var medals = ["🥇", "🥈", "🥉"]
var msg = "🏆 *Leaderboard*\n\n"

var prop
for (var ind in items) {
  prop = items[ind]
  var medal = medals[ind] || "🔹"
  msg += medal + " " + String(parseInt(ind) + 1) + ". " +
    prop.user.first_name +
    " — " + String(prop.value) + " রেফার\n"
}

Api.sendMessage({
  text: msg,
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [{ text: "🔙 Back", callback_data: "/mainmenu" }]
    ]
  }
})
