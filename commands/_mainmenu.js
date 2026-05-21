/*CMD
  command: /mainmenu
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
  command: /mainmenu
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  aliases: 
  group: 
CMD*/

// Ban check
let banStat = Bot.getProperty("" + user.telegramid + "?Ban");
if (banStat == "ban") {
  Bot.sendMessage("*You're Banned From Using The Bot ❌*", { parse_mode: "Markdown" });
  return;
}

var refAmount = parseFloat(Bot.getProperty("ref_bonus") || 2)
var userStat = User.getProperty("userStatus")

if (!userStat || userStat == "left") {
  Bot.runCommand("/start")
  return
}

if (
  userStat == "member" ||
  userStat == "administrator" ||
  userStat == "creator"
) {

  var referCount = User.getProperty("ReferStatus")
  if (referCount == undefined) {
    let refUser = RefLib.getAttractedBy()
    if (refUser) {
      var refbal = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
      refbal.add(refAmount)

      Api.sendMessage({
        chat_id: refUser.telegramid,
        text:
          "<b>🎉 Referral Bonus Received!</b>\n\n" +
          "You earned <b>" + refAmount + " টাকা</b> from <a href='tg://user?id=" +
          user.telegramid + "'>" + user.first_name + "</a> 🙌",
        parse_mode: "html"
      })

      User.setProperty("ReferStatus", "valid", "string")
    }
  }

  if (request && request.data) {
    Api.deleteMessage({ message_id: request.message.message_id })
  }

  var adminId = 6625019627

  if (user.telegramid == adminId) {
    Bot.sendKeyboard(
      "💳  Check Balance      ,   👥  Invite & Earn\n" +
      "💸 Withdraw      ,   💳 Set Wallet\n" +
      "🏆  Leaderboard      ,   ❓  Help\n" +
      "🔥 Hot Offers\n" +
      "🛠  Admin Panel",
      "🏠 *Welcome Back " + user.first_name + "!*\n\n" +
      "✨ _Main Menu is ready!_\n" +
      "👇 *Pick an option to continue:*",
      { parse_mode: "Markdown" }
    )
  } else {
    Bot.sendKeyboard(
      "💳  Check Balance      ,   👥  Invite & Earn\n" +
      "💸 Withdraw      ,   💳 Set Wallet\n" +
      "🏆  Leaderboard      ,   ❓  Help\n" +
      "🔥 Hot Offers",
      "🏠 *Welcome Back " + user.first_name + "!*\n\n" +
      "✨ _Main Menu is ready!_\n" +
      "👇 *Pick an option to continue:*",
      { parse_mode: "Markdown" }
    )
  }
}
