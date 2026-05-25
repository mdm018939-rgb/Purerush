/*CMD
  command: /cutbal_amount
  help: 
  need_reply: true
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
  command: /cutbal_amount
  need_reply: true
CMD*/

let adminID = 6625019627
if (user.telegramid != adminID) return;

let uid = User.getProperty("cut_uid")
let amount = parseFloat(message)

if (isNaN(amount) || amount <= 0) {
  Bot.sendMessage("⚠️ সঠিক amount লিখুন!")
  return
}

let res = Libs.ResourcesLib.anotherUserRes("balance", uid)
let oldBal = res.value()

if (oldBal < amount) {
  Bot.sendMessage("❌ User এর balance কম!\n💰 Balance: " + oldBal.toFixed(2) + " টাকা")
  return
}

res.remove(amount)
let newBal = res.value()

Bot.sendMessage(
  "✅ *সফলভাবে Balance কাটা হয়েছে!*\n\n" +
  "👤 *User ID:* `" + uid + "`\n" +
  "✂️ *কাটা হয়েছে:* " + amount + " টাকা\n" +
  "💰 *নতুন Balance:* " + newBal.toFixed(2) + " টাকা",
  { parse_mode: "Markdown" }
)

Api.sendMessage({
  chat_id: parseInt(uid),
  text:
    "⚠️ *সিস্টেম থেকে আপনার Balance অটোমেটিক কাটা হয়েছে!*\n\n" +
    "✂️ *কাটা হয়েছে:* " + amount + " টাকা\n" +
    "💰 *আগের Balance:* " + oldBal.toFixed(2) + " টাকা\n" +
    "💳 *নতুন Balance:* " + newBal.toFixed(2) + " টাকা\n\n" +
    "👮 *সিস্টেম থেকে অটো আপডেট করা হয়েছে।*",
  parse_mode: "Markdown"
})
