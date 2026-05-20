/*CMD
  command: 💳  Check Balance
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
  command: 💳  Check Balance
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

var balance = Libs.ResourcesLib.userRes("balance")
var wallet = User.getProperty("wallet", "⛔ সেট করা হয়নি")
var walletType = User.getProperty("wallet_type", "❌ সেট করা হয়নি")
var refCount = RefLib.getRefCount()
var latestBalance = balance.value().toFixed(2)
var userLink = "<a href='tg://user?id=" + user.telegramid + "'>" + user.first_name + "</a>"

Api.sendMessage({
  text:
    " 👤 <b>My Profile</b>\n\n" +
    "🔹 <b>নাম:</b> " + userLink + "\n" +
    "🔹 <b>ইউজার আইডি:</b> <code>" + user.telegramid + "</code>\n" +
    "🔹 <b>ইউজারনেম:</b> " + (user.username ? "@" + user.username : "❌ সেট করা হয়নি") + "\n" +
    "🔹 <b>পেমেন্ট মাধ্যম:</b> " + walletType + "\n" +
    "🔹 <b>নাম্বার:</b> <code>" + wallet + "</code>\n" +
    "🔹 <b>মোট রেফার:</b> " + refCount + "\n\n" +
    "💰 <b>বর্তমান ব্যালেন্স:</b> " +
    "<code>" + latestBalance + " টাকা</code>\n\n" +
    "🪢 <i>বন্ধুদের আমন্ত্রণ করুন এবং আয় বাড়ান!</i>",
  parse_mode: "html",
  disable_web_page_preview: true
})
