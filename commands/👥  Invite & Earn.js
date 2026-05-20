/*CMD
  command: 👥  Invite & Earn
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /invite
  group: 
CMD*/

/*CMD
  command: 👥  Invite & Earn
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  aliases: /invite
  group: 
CMD*/

var perref = Bot.getProperty("ref_bonus") || 2
var minwith = Bot.getProperty("min_withdraw") || 50
let stat = Bot.getProperty("" + user.telegramid + "?Ban")

if (stat == "ban") {
  Bot.sendMessage("*You're Banned From Using The Bot ❌*")
  return
}

let invLink = RefLib.getRefLink(bot.name, "Bot")

if(request.data){
  Api.deleteMessage({
    message_id : request.message.message_id
  })
}

Api.sendMessage({
  text:
    "✨ <b>রেফার ও আয় সিস্টেম</b> ✨\n\n" +
    "👥 <b>Total Refers:</b> " + RefLib.getRefCount() + " জন\n\n" +
    "🔗 <b>Your Invite Link:</b>\n" + invLink + "\n\n" +
    "💰 <b>প্রতি রেফারে " + perref + " টাকা</b>\n" +
    "🏧 <b>" + minwith + " টাকা হলে উত্তলন করা যাবে!</b>",
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [
        { text: "🔍 আমার রেফার", callback_data: "/myrefers" },
        { text: "🔙 Back", callback_data: "/mainmenu" }
      ]
    ]
  }
})
