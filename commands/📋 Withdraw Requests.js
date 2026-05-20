/*CMD
  command: 📋 Withdraw Requests
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
  command: 📋 Withdraw Requests
  need_reply: false
CMD*/

var adminID = 6625019627
if (user.telegramid != adminID) return;

var requests = Bot.getProperty("withdraw_requests") || []

if (requests.length == 0) {
  Bot.sendMessage("📋 *কোনো Pending Request নেই!*", { parse_mode: "Markdown" })
  return
}

for (var i = 0; i < requests.length; i++) {
  var req = requests[i]

  Bot.sendInlineKeyboard([
  { title: "✅ Approve", command: "/approve_request " + req.uid },
  { title: "❌ Reject", command: "/reject_request " + req.uid }
],
    "💸 *Withdraw Request #" + (i + 1) + "*\n\n" +
    "👤 *Name:* " + req.name + "\n" +
    "🆔 *ID:* `" + req.uid + "`\n" +
    "💳 *মাধ্যম:* " + req.walletType + "\n" +
    "📱 *নাম্বার:* `" + req.wallet + "`\n" +
    "💰 *Amount:* " + req.amount + " টাকা\n" +
    "💵 *Final Amount:* " + req.finalAmount + " টাকা"
  )
}
