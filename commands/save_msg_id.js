/*CMD
  command: save_msg_id
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

if (options && options.result) {
  User.setProperty("last_msg_id", options.result.message_id, "integer");
}
