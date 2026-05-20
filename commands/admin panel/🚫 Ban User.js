/*CMD
  command: 🚫 Ban User
  help: 
  need_reply: true
  auto_retry_time: 
  folder: admin panel

  <<ANSWER
🚫 Ban User

যে User কে Ban করতে চান তার Telegram ID লিখুন:
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let adminID = 6625019627;
if (user.telegramid != adminID) {
  Bot.sendMessage("❌ Access Denied: Only Admin Allowed!");
  return;
}

let uid = message.trim();
if (!uid || isNaN(uid)) {
  Bot.sendMessage("⚠️ সঠিক Telegram ID লিখুন!");
  return;
}

Bot.setProperty(uid + "?Ban", "ban", "string");
Bot.sendMessage("🚫 User " + uid + " কে Ban করা হয়েছে!");
