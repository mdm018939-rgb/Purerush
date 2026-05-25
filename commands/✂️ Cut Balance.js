/*CMD
  command: ✂️ Cut Balance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
✂️ Cut Balance

যে User এর Balance কাটতে চান তার Telegram ID লিখুন:
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: ✂️ Cut Balance
  need_reply: true
CMD*/

let adminID = 6625019627
if (user.telegramid != adminID) {
  Bot.sendMessage("❌ Access Denied!")
  return
}

if (message == "✂️ Cut Balance") return;

let uid = message.trim()
if (isNaN(uid) || !uid) {
  Bot.sendMessage("⚠️ সঠিক Telegram ID লিখুন!")
  return
}

let res = Libs.ResourcesLib.anotherUserRes("balance", uid)

let refs = 0
let list = Libs.ReferralLib.getTopList()
list.per_page = 999999
let data = list.get()
for (var i in data) {
  if (String(data[i].user.telegramid) == String(uid)) {
    refs = data[i].value || 0
    break
  }
}

User.setProperty("cut_uid", uid, "string")

Bot.sendMessage(
  "👤 *User ID:* `" + uid + "`\n" +
  "💰 *Balance:* " + res.value().toFixed(2) + " টাকা\n" +
  "👥 *Referrals:* " + refs + " জন\n\n" +
  "কত টাকা কাটবেন? লিখুন:",
  { parse_mode: "Markdown" }
)

Bot.runCommand("/cutbal_amount")
