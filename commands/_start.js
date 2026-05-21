/*CMD
  command: /start
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
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  aliases: 
  group: 
CMD*/

if (chat.chat_type != "private") {
  return;
}

// Ban check
let banStat = Bot.getProperty("" + user.telegramid + "?Ban");
if (banStat == "ban") {
  Bot.sendMessage("*You're Banned From Using The Bot ❌*", { parse_mode: "Markdown" });
  return;
}

let channels = [
  { name: "PureRush Official", url: "https://t.me/PureRushOfficial" },
  { name: "PureRush Support", url: "https://t.me/PureRush_Support" },
  { name: "PureRush Backup", url: "https://t.me/PureRushBackup" }
]

function showJoinMessage() {
  let keyboard = channels.map(ch => [{ text: "🔗 Join " + ch.name, url: ch.url }]);
  keyboard.push([{ text: "🟢 Joined", callback_data: "/joined" }]);
  Api.sendMessage({
    text:
      "<b>⛔ Must Join All Our Channels</b>\n\n" +
      "✅ <b>After Joining, Click on 🟢 Joined</b>",
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: keyboard }
  });
}

function touchingOwnLink() {
  Bot.sendMessage("*❌ Stop Clicking Your Own Link*")
}

function attractedByUser(refUser) {
  Api.sendMessage({
    chat_id: refUser.telegramid,
    text:
      "<b>🔋 You Got a New Referral:</b> " +
      "<a href='tg://user?id=" + user.telegramid + "'>User</a>\n" +
      "<i>💡 Reward after joining all channels</i>",
    parse_mode: "html"
  })
}

function alreadyStarted() {
  Api.getChatMember({
    chat_id: "@PureRushOfficial",
    user_id: user.telegramid,
    on_result: "check1"
  });
}

/* ========== BROADCAST USER LIST (GLOBAL) ========== */

let broadcastUsers = Bot.getProperty("broadcast_list", [])
if (!broadcastUsers.includes(user.telegramid) &&
    !broadcastUsers.includes(String(user.telegramid)) &&
    !broadcastUsers.includes(parseInt(user.telegramid))) {
  broadcastUsers.push(user.telegramid)
  Bot.setProperty("broadcast_list", broadcastUsers, "json")
}

/* ========== New User Notification ========== */

if (!User.getProperty("UserDone")) {
  User.setProperty("UserDone", true, "boolean")

  let stat = Libs.ResourcesLib.anotherChatRes("status", "global")
  stat.add(1)

  Api.sendMessage({
    chat_id: 6625019627,
    text:
      "➕ <b>New User Notification</b> ➕\n\n" +
      "👤 <b>User:</b> <a href='tg://user?id=" + user.telegramid + "'>" + user.first_name + "</a>\n" +
      "🆔 <b>ID:</b> <code>" + user.telegramid + "</code>\n" +
      "📊 <b>Total Users:</b> " + stat.value(),
    parse_mode: "html"
  })
}

/* ========== END ========== */

let isOldUser = User.getProperty("REFLIB_old_user") || User.getProperty("REFLIB_attracted_by_user");

if (isOldUser) {
  alreadyStarted();
} else {
  RefLib.track({
    onTouchOwnLink: touchingOwnLink,
    onAtractedByUser: attractedByUser,
    onAlreadyAttracted: alreadyStarted,
    linkPrefix: 'Bot'
  })
  showJoinMessage();
}
