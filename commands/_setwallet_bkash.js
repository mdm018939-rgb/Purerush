/*CMD
  command: /setwallet_bkash
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ✅ আপনার বিকাশ নাম্বার লিখুন

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let number = message.trim()

if (number.length !== 11 || !number.startsWith("01") || isNaN(number)) {
  Bot.sendMessage(
    "⚠️ *সঠিক ১১ ডিজিটের নাম্বার দিন!*\n" +
    "যেমন: 01XXXXXXXXX",
    { parse_mode: "Markdown" }
  )
  return
}

User.setProperty("wallet_type", "বিকাশ", "string")
User.setProperty("wallet", number, "string")

Bot.sendMessage(
  "*✅ নাম্বার সফলভাবে সেভ হয়েছে!*\n\n" +
  "💳 *মাধ্যম:* বিকাশ\n" +
  "📱 *নাম্বার:* `" + number + "`",
  { parse_mode: "Markdown" }
)
