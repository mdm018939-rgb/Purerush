/*CMD
  command: /select_method_recharge
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

User.setProperty("wallet_type", "মোবাইল রিচার্জ", "string");

if (request && request.data) {
  Api.deleteMessage({ message_id: request.message.message_id })
}

Bot.runCommand("/setwallet_recharge");
