/*CMD
  command: /page_info
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
  command: /page_info
  help: 
  need_reply: false
  folder: 
CMD*/

let parts = params.split(" ")
let page = parts[0]
let total = parts[1]

Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "📄 Page " + page + " of " + total,
  show_alert: false
})
