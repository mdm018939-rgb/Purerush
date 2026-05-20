/*CMD
  command: 📢 What's App Set
  help: 
  need_reply: true
  auto_retry_time: 
  folder: admin panel

  <<ANSWER
📢 What's App Earning Content Set

Text বা Photo+Caption পাঠান:
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var ADMIN_ID = 6625019627;
if (user.telegramid != ADMIN_ID) return;

var msg = request.message;

// Photo পাঠালে
if (msg && msg.photo && msg.photo.length > 0) {
  var file_id = msg.photo[msg.photo.length - 1].file_id;
  var caption = msg.caption || "";

  Bot.setProperty("wa_type", "photo", "string");
  Bot.setProperty("wa_file_id", file_id, "string");
  Bot.setProperty("wa_caption", caption, "string");

  Bot.sendMessage("✅ Photo সেট হয়েছে!");
  return;
}

// Text পাঠালে
if (message && message.trim() != "") {
  Bot.setProperty("wa_type", "text", "string");
  Bot.setProperty("wa_text", message, "string");

  Bot.sendMessage("✅ Text সেট হয়েছে!");
  return;
}

Bot.sendMessage("⚠️ Text বা Photo পাঠান!");
