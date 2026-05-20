/*CMD
  command: ✅ Unban User
  help: 
  need_reply: true
  auto_retry_time: 
  folder: admin panel

  <<ANSWER
✅ Unban User

যে User কে Unban করতে চান তার Telegram ID লিখুন:
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

Bot.setProperty(uid + "?Ban", "", "string");
Bot.sendMessage("✅ User " + uid + " কে Unban করা হয়েছে!");
