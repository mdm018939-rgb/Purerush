/*CMD
  command: 🛠  Admin Panel
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
  command: 🛠  Admin Panel
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  aliases: 
  group: 
CMD*/

var adminId = 6625019627

if (user.telegramid != adminId) {
  Bot.sendMessage("*❌ You are not authorized!*", { parse_mode: "Markdown" })
  return
}

if (request && request.data) {
  Api.deleteMessage({
    chat_id: request.message.chat.id,
    message_id: request.message.message_id
  })
}

Bot.sendKeyboard(
  "💰 Bonus Set      ,   💸 Min Withdraw Set\n" +
  "⬆️ Max Withdraw Set      ,   ➖ Charge Set\n" +
  "📢 What's App Set      ,   📋 Withdraw Requests\n" +
  "👥 Total Users      ,   📣 Broadcast\n" +
  "🚫 Ban User      ,   ✅ Unban User\n" +
  "🔙 Main Menu",
  "🛠 *Admin Panel*\n\n👇 একটা অপশন সিলেক্ট করুন:",
  { parse_mode: "Markdown" }
)
