/*CMD
  command: /select_method_bkash
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

User.setProperty("wallet_type", "বিকাশ", "string");

if (request && request.data) {
  Api.deleteMessage({ message_id: request.message.message_id })
}

Bot.runCommand("/setwallet_bkash");
