/*CMD
  command: /reject_request
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
  command: /reject_request
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

var balance = Libs.ResourcesLib.anotherUserRes("balance", req.uid)
balance.add(req.amount)

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
    "❌ <b>কোন এক সমস্যার কারনে আপনার উত্তলন অটোমেটিক রিজেক্ট হয়েছে!</b>\n\n" +
    "💰 <b>Amount:</b> " + req.amount + " টাকা\n" +
    "💳 <b>মাধ্যম:</b> " + req.walletType + "\n\n" +
    "♻️ আপনার balance ফেরত দেওয়া হয়েছে। দয়া করে আবার চেষ্টা করুন!",
  parse_mode: "html"
})

Bot.sendMessage("❌ Rejected!")
