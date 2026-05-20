/*CMD
  command: 💸 Withdraw
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 💰 কত টাকা Withdraw করতে চান? লিখুন:

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: 💸  Withdraw
  need_reply: true
CMD*/

let banStat = Bot.getProperty("" + user.telegramid + "?Ban");
if (banStat == "ban") {
  Bot.sendMessage("*You're Banned From Using The Bot ❌*", { parse_mode: "Markdown" });
  return;
}

var minwith = parseFloat(Bot.getProp("min_withdraw") || 50)
var maxwith = parseFloat(Bot.getProp("max_withdraw") || 500)
var charge = parseFloat(Bot.getProp("charge_amount") || 0)

var wallet = User.getProperty("wallet")
var walletType = User.getProperty("wallet_type")
var balance = Libs.ResourcesLib.userRes("balance")
var userLink = "<a href='" + (user.username ? "https://t.me/" + user.username : "tg://user?id=" + user.telegramid) + "'>" + user.first_name + "</a>"

// Wallet set না থাকলে
if (!wallet) {
  Bot.sendMessage(
    "⚠️ আগে 💳 *Set Wallet* থেকে পেমেন্ট নাম্বার সেট করুন!",
    { parse_mode: "Markdown" }
  )
  return
}

// প্রথমবার command চাপলে info দেখাও
if (message == "💸  Withdraw") {
  Api.sendMessage({
    text:
      "💸 <b>Withdraw</b>\n\n" +
      "💰 <b>আপনার Balance:</b> " + balance.value().toFixed(2) + " টাকা\n" +
      "💳 <b>মাধ্যম:</b> " + walletType + "\n" +
      "📱 <b>নাম্বার:</b> " + wallet + "\n\n" +
      "⚠️ <b>Minimum Withdraw:</b> " + minwith + " টাকা\n" +
      "⬆️ <b>Maximum Withdraw:</b> " + maxwith + " টাকা\n" +
      "➖ <b>Charge:</b> " + charge + " টাকা\n\n" +
      "💰 <b>কত টাকা Withdraw করতে চান?</b>",
    parse_mode: "html"
  })
  return
}

// Amount process
var adminID = 6625019627
var payouts = Libs.ResourcesLib.anotherChatRes("payouts", "global")

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

if (!isNumeric(message)) {
  Bot.sendMessage("*📛 শুধু সংখ্যা লিখুন!*", { parse_mode: "Markdown" })
  return
}

var amount = parseFloat(message)

if (amount < minwith) {
  Bot.sendMessage("❌ *Minimum Withdraw " + minwith + " টাকা!*", { parse_mode: "Markdown" })
  return
}

if (amount > maxwith) {
  Bot.sendMessage("❌ *Maximum Withdraw " + maxwith + " টাকা!*", { parse_mode: "Markdown" })
  return
}

if (amount > balance.value()) {
  Bot.sendMessage(
    "❌ *Balance কম!*\n💰 আপনার Balance: _" + balance.value().toFixed(2) + " টাকা_",
    { parse_mode: "Markdown" }
  )
  return
}

var finalAmount = amount - charge

// Request save করো
var requests = Bot.getProperty("withdraw_requests") || []
requests.push({
  uid: user.telegramid,
  name: user.first_name,
  username: user.username || "",
  amount: amount,
  finalAmount: finalAmount,
  walletType: walletType,
  wallet: wallet
})
Bot.setProperty("withdraw_requests", requests, "json")

balance.remove(amount)
payouts.add(amount)

Bot.sendMessage(
  "*✅ Withdraw Request সফলভাবে পাঠানো হয়েছে!*\n\n" +
  "💰 *Amount:* " + amount + " টাকা\n" +
  "➖ *Charge:* " + charge + " টাকা\n" +
  "💵 *Final Amount:* " + finalAmount + " টাকা\n" +
  "💳 *মাধ্যম:* " + walletType + "\n" +
  "📱 *নাম্বার:* " + wallet + "\n\n" +
  "⏰ _৩ দিনের মধ্যে অটো পেমেন্ট করা হবে।_",
  { parse_mode: "Markdown" }
)

Api.sendMessage({
  chat_id: adminID,
  text:
    "<b>💸 New Withdraw Request!</b>\n\n" +
    "<b>👤 Name:</b> " + userLink + "\n" +
    "<b>🆔 ID:</b> <code>" + user.telegramid + "</code>\n" +
    "<b>💳 মাধ্যম:</b> " + walletType + "\n" +
    "<b>📱 নাম্বার:</b> <code>" + wallet + "</code>\n" +
    "<b>💰 Amount:</b> " + amount + " টাকা\n" +
    "<b>➖ Charge:</b> " + charge + " টাকা\n" +
    "<b>💵 Final Amount:</b> " + finalAmount + " টাকা\n" +
    "<b>👥 Referrals:</b> " + RefLib.getRefCount(),
  parse_mode: "html"
})
