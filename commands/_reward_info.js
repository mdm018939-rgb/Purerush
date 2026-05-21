/*CMD
  command: /reward_info
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

if (request && request.data) {
  Api.deleteMessage({
    chat_id: request.message.chat.id,
    message_id: request.message.message_id
  })
}

Bot.sendMessage(
  "🎁 *প্রতি ৭ দিনে টপ ১০ জনকে বিশেষ পুরস্কার দেওয়া হবে!*\n\n" +
  "বেশি বেশি রেফার করুন আর পুরস্কার জিতুন! 🏆\n\n" +
  "আপনার বন্ধুদের invite করুন এবং leaderboard এ শীর্ষে থাকুন!",
  { parse_mode: "Markdown" }
)
