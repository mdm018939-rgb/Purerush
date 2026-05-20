/*CMD
  command: /addbalance
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
  command: /addbalance
  need_reply: false
CMD*/

var amount = options.amount
if (!amount || amount <= 0) return;

var balance = Libs.ResourcesLib.userRes("balance")
balance.add(amount)

Bot.sendMessage(
  "💰 *আপনার Account এ " + amount + " টাকা যোগ করা হয়েছে!*\n\n" +
  "💳 *বর্তমান Balance:* " + balance.value().toFixed(2) + " টাকা",
  { parse_mode: "Markdown" }
)
