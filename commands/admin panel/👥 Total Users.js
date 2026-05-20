/*CMD
  command: 👥 Total Users
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

var ADMIN_ID = 6625019627;
if (user.telegramid != ADMIN_ID) return;

var stat = Libs.ResourcesLib.anotherChatRes("status", "global");

Bot.sendMessage(
  "👥 *Total Users*\n\n" +
  "📊 *মোট User:* " + stat.value() + " জন",
  { parse_mode: "Markdown" }
)
