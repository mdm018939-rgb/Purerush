/*CMD
  command: userlist
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

/* COMMAND: /userlist */

let adminID = 6625019627
if(user.telegramid != adminID){
  Bot.sendMessage("❌ Only admin can view user list!")
  return
}

let stat = Libs.ResourcesLib.anotherChatRes("status","global").value()

Bot.sendMessage("👥 *Total Users:* " + stat, {parse_mode:"Markdown"})
