/*CMD
  command: /doaddbal
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

var uid = options.uid
var amount = options.amount

let res = Libs.ResourcesLib.anotherUserRes("balance", uid)
let oldBal = res.value()
res.add(amount)
let newBal = res.value()

Api.sendMessage({
  chat_id: parseInt(uid),
  text:
    "🔔 *Balance Updated!*\n\n" +
    "📌 *Added:* `+" + amount + "` টাকা\n" +
    "💰 *Old Balance:* `" + oldBal + "`\n" +
    "💳 *New Balance:* `" + newBal + "`\n\n" +
    "👮 *Updated by Admin*",
  parse_mode: "Markdown"
})
