/*CMD
  command: /approve_request
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
  command: /approve_request
  need_reply: false
CMD*/

var adminID = 6625019627
if (user.telegramid != adminID) return;

var uid = parseInt(params)
var requests = Bot.getProperty("withdraw_requests") || []

var req = null
var reqIndex = -1
for (var i = 0; i < requests.length; i++) {
  if (requests[i].uid == uid) {
    req = requests[i]
    reqIndex = i
    break
  }
}

if (!req) {
  Bot.sendMessage("⚠️ Request পাওয়া যায়নি!")
  return
}

requests.splice(reqIndex, 1)
Bot.setProperty("withdraw_requests", requests, "json")

if (request && request.message) {
  Api.deleteMessage({
    chat_id: request.message.chat.id,
    message_id: request.message.message_id
  })
}

Api.sendMessage({
  chat_id: req.uid,
  text:
    "🎊 <b>আপনার Withdraw Approved ✨</b>\n\n" +
    "💰 <b>Amount:</b> " + req.amount + " টাকা\n" +
    "💵 <b>Final Amount:</b> " + req.finalAmount + " টাকা\n" +
    "💳 <b>মাধ্যম:</b> " + req.walletType + "\n" +
    "📱 <b>নাম্বার:</b> " + req.wallet,
  parse_mode: "html"
})

Bot.sendMessage("✅ Approved!")
