/*CMD
  command: check
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
  command: check
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  aliases: 
  group: 
CMD*/

let channels = [
  "@PureRushOfficial",
  "@PureRush_Support",
  "@PureRushBackup"
];

let channels_url = [
  "https://t.me/PureRushOfficial",
  "https://t.me/PureRush_Support",
  "https://t.me/PureRushBackup"
];

// options বা options.result না থাকলে stop
if (!options || !options.result) {
  Bot.sendMessage("❌ কিছু একটা সমস্যা হয়েছে, আবার চেষ্টা করো।");
  return;
}

let status = options.result.status;
let idx = User.getProperty("check_index") || 0;

if (status == "left" || status == "kicked") {
  User.setProperty("userStatus", "left", "string");

  let keyboard = channels_url.map((url, i) => [
    { text: "🔗 Join Channel " + (i + 1), url: url }
  ]);
  keyboard.push([{ text: "🟢 Joined", callback_data: "/joined" }]);

  Api.sendMessage({
    text: "<b>⛔ সব চ্যানেলে জয়েন করোনি!</b>\n\n" +
          "Channel " + (idx + 1) + " এ জয়েন নেই ❌\n\n" +
          "✅ <b>সব জয়েন করে 🟢 Joined চাপো</b>",
    parse_mode: "html",
    reply_markup: { inline_keyboard: keyboard }
  });
  return;
}

// এই চ্যানেলে আছে, পরেরটা check করো
idx = idx + 1;

if (idx < channels.length) {
  User.setProperty("check_index", idx, "integer");
  Api.getChatMember({
    chat_id: channels[idx],
    user_id: user.telegramid,
    on_result: "check"
  });
} else {
  // সব চ্যানেলে আছে ✅
  User.setProperty("userStatus", "member", "string");
  Bot.runCommand("/mainmenu");
}
