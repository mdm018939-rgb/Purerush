/*CMD
  command: ➖ Charge Set
  help: 
  need_reply: true
  auto_retry_time: 
  folder: admin panel

  <<ANSWER
➖ Charge Set

নতুন charge amount লিখুন:
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var ADMIN_ID = 6625019627;
if (user.telegramid != ADMIN_ID) return;

var amount = parseInt(message);
if (isNaN(amount) || amount < 0) {
  Bot.sendMessage("⚠️ সঠিক amount লিখুন!");
  return;
}

Bot.setProp("charge_amount", amount, "integer");
Bot.sendMessage("✅ Charge " + amount + " টাকা সেট হয়েছে!");
