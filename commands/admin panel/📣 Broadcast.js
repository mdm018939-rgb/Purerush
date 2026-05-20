/*CMD
  command: 📣 Broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: admin panel
  answer: 📣 আপনার broadcast message পাঠান

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: 📣 Broadcast
  need_reply: true
CMD*/

var adminID = 6625019627
if (user.telegramid != adminID) return;

if (message == "📣 Broadcast") return;

var list = Bot.getProperty("broadcast_list") || []

User.setProperty("broadcast_msg", message, "string")

Bot.sendInlineKeyboard([
  { title: "✅ Next", command: "/broadcast_send" },
  { title: "❌ Cancel", command: "/broadcast_cancel" }
],
  "📢 *Total Users:* " + list.length + " জন\n\n" +
  "📝 *Message:*\n" + message + "\n\n" +
  "পাঠাবেন?"
)
