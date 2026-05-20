/*CMD
  command: 💳 Set Wallet
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
  command: 💳 Set Wallet
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
  Api.deleteMessage({ message_id: request.message.message_id })
}

Api.sendMessage({
  text:
    "💳 <b>পেমেন্ট মাধ্যম সিলেক্ট করুন:</b>\n\n" +
    "⚠️ সঠিক ১১ ডিজিটের নাম্বার দিন!\n" +
    "যেমন: 01XXXXXXXXX",
  parse_mode: "html",
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "💚 বিকাশ", callback_data: "/select_method_bkash" }],
      [{ text: "🟠 নগদ", callback_data: "/select_method_nagad" }],
      [{ text: "📱 মোবাইল রিচার্জ", callback_data: "/select_method_recharge" }]
    ]
  }),
  on_result: "save_msg_id"
});
