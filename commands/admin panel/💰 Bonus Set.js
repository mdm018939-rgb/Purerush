/*CMD
  command: 💰 Bonus Set
  help: 
  need_reply: true
  auto_retry_time: 
  folder: admin panel

  <<ANSWER
💰 Referral Bonus Set

নতুন amount লিখুন:
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let admin = 6625019627;
if (user.telegramid != admin) return;

if (message == "💰 Bonus Set") {
  Bot.sendMessage(
    "💰 Referral Bonus Set\n\n" +
    "বর্তমান: " + (Bot.getProperty("ref_bonus") || 1) + " টাকা\n\n" +
    "নতুন amount লিখুন:"
  );
  return;
}

var amount = parseInt(message);
if (isNaN(amount) || amount <= 0) {
  Bot.sendMessage("⚠️ সঠিক amount লিখুন!");
  return;
}

Bot.setProperty("ref_bonus", amount, "integer");
Bot.sendMessage("✅ Referral Bonus " + amount + " টাকা সেট হয়েছে!");
