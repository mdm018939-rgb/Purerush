/*CMD
  command: add_balance_from_group
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

let uid = options.uid
let amount = parseFloat(options.amount)

// তোমার বটের আসল balance system
let res =
Libs.ResourcesLib.anotherUserRes(
"balance",
uid
)

res.add(amount)

// ইউজারকে জানাও
Api.sendMessage({
 chat_id: uid,
 text:
"💰 আপনার অ্যাকাউন্টে +" +
amount +
" টাকা যোগ হয়েছে!"
})
