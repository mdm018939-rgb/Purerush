/*CMD
  command: ❓  Help
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
  command: ❓  Help
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

var totalPayouts = Libs.ResourcesLib.userRes("payouts").value().toFixed(2)
var balance = Libs.ResourcesLib.userRes("balance").value().toFixed(2)

Api.sendMessage({
  text:
    "🔹❓  * Help* \n\n" +
    "🔹 👤 *My Profile* — আপনার তথ্য দেখুন\n" +
    "🔹 👥 *Invite & Earn* — রেফার লিংক পান\n" +
    "🔹 💸 *Withdraw* — টাকা উত্তোলন করুন\n" +
    "🔹 💳 *Set Wallet* — পেমেন্ট নাম্বার সেট করুন\n" +
    "🔹 🏆 *Leaderboard* — টপ রেফারার দেখুন\n" +
    "🔹 📢 *What's App Earning* — আলাদা আয়\n\n" +
    "💰 *আপনার বর্তমান Balance:* " + balance + " টাকা\n" +
    "✅ *আপনার মোট Withdraw:* " + totalPayouts + " টাকা\n\n" +
    "❓ সমস্যা হলে গ্রুপে যোগাযোগ করুন।",
  parse_mode: "Markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [
        { text: "📢 PureRush Official", url: "https://t.me/PureRushOfficial" },
        { text: "📢 PureRush Support", url: "https://t.me/PureRush_Support" }
      ],
      [
        { text: "📢 PureRush Backup", url: "https://t.me/PureRushBackup" },
        { text: "💌 Support Admin", url: "https://t.me/PureRushAdmin" }
      ],
      [{ text: "🔙 Back", callback_data: "/mainmenu" }]
    ]
  }
})
