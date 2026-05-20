/*CMD
  command: /addbal
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

/* COMMAND: /addbal */

let adminID = 6625019627
if(user.telegramid != adminID){
  Bot.sendMessage("❌ Access Denied: Only Admin Allowed!")
  return
}

let parts = message.split(" ")
if(parts.length < 3){
  Bot.sendMessage("⚠ Usage:\n/addbal userid amount")
  return
}

let uid = parts[1]
let amount = parseFloat(parts[2])

let res = Libs.ResourcesLib.anotherUserRes("balance", uid)
let oldBal = res.value()       // previous balance
res.add(amount)
let newBal = res.value()       // new balance

// ✔ Notify admin
Bot.sendMessage("💹 Added *" + amount + "* points to User *" + uid + "*", {parse_mode:"Markdown"})

// ✔ Notify user
Api.sendMessage({
  chat_id: uid,
  text: 
    "🔔 *Balance Updated!* \n\n" +
    "📌 *Added:* `+"+amount+"` Points\n" +
    "💰 *Old Balance:* `"+oldBal+"`\n" +
    "💳 *New Balance:* `"+newBal+"`\n\n" +
    "👮 *Updated by Admin*",
  parse_mode: "Markdown"
})
