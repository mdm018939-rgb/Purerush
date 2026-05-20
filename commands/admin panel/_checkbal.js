/*CMD
  command: /checkbal
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

/* COMMAND: /checkbal */

let adminID = 6625019627
if(user.telegramid != adminID){
  Bot.sendMessage("❌ Access Denied: Only Admin Allowed!")
  return
}

let parts = message.split(" ")
if(parts.length < 2){
  Bot.sendMessage("⚠ Usage:\n/checkbal userid")
  return
}

let uid = parts[1]

// ⭐ Correct method to read other user's balance
let res = Libs.ResourcesLib.anotherUserRes("balance", uid)

Bot.sendMessage(
  "👤 *User:* `" + uid + "`\n" +
  "💰 *Balance:* `" + res.value() + " Points`\n" +
  "──────────────────────\n" +
  "✨ _Check completed successfully!_",
  { parse_mode: "Markdown" }
)
