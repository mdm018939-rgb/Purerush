/*CMD
  command: check2
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
  command: check2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  aliases: 
  group: 
CMD*/

var status = options.result.status;

if (status == "member" || status == "administrator" || status == "creator") {
  Api.getChatMember({
    chat_id: "@PureRushBackup",
    user_id: user.telegramid,
    on_result: "check3"
  });
} else {
  Api.sendMessage({
    text:
      "<b>⛔ Must Join All Our Channels</b>\n\n" +
      "❌ PureRush Support গ্রুপে জয়েন করোনি!\n\n" +
      "✅ <b>সব জয়েন করে 🟢 Joined চাপো</b>",
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [{ text: "🔗 PureRush Official", url: "https://t.me/PureRushOfficial" }],
        [{ text: "🔗 PureRush Support", url: "https://t.me/PureRush_Support" }],
        [{ text: "🔗 PureRush Backup", url: "https://t.me/PureRushBackup" }],
        [{ text: "🟢 Joined", callback_data: "/joined" }]
      ]
    }
  });
}
