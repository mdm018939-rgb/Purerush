/*CMD
  command: claim_bonus
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

if (params) {
    var parts = params.split(" ");
    var amount = parseFloat(parts[0]);
    var bonus_id = parts[1];

    if (bonus_id && amount > 0) {
        // ডাবল ক্লেইম চেক করার জন্য লক
        var claimCheck = Libs.ResourcesLib.userRes("bonus_lock_" + bonus_id);
        
        if (claimCheck.value() > 0) {
            if (request.message && request.message.message_id) {
                Api.deleteMessage({
                    chat_id: chat.chatid,
                    message_id: request.message.message_id
                });
            }
            return;
        }

        // ক্লেইম লক সাকসেস
        claimCheck.add(1);

        // মেইন ব্যালেন্স রিসোর্স
        var balance = Libs.ResourcesLib.userRes("balance");
        
        // টাকা যোগ করার আগে পুরাতন ব্যালেন্স সেভ করে রাখা
        var oldBalance = balance.value();
        
        // টাকা যোগ করা
        balance.add(amount);
        
        // নতুন ব্যালেন্স
        var newBalance = balance.value();

        // পপ-আপ মেসেজ
        Api.answerCallbackQuery({
            callback_query_id: request.id,
            text: "", 
            show_alert: false
        });

        // বাটনওয়ালা মেসেজ ডিলিট
        if (request.message && request.message.message_id) {
            Api.deleteMessage({
                chat_id: chat.chatid,
                message_id: request.message.message_id
            });
        }

        // নতুন ফরম্যাটে মেসেজ পাঠানো
        Bot.sendMessage(
            "💰 *আপনার একাউন্টে " + amount + " টাকা যোগ করা হয়েছে!*\n\n" +
            "💰 *Old Balance:* " + oldBalance.toFixed(2) + " টাকা\n" +
            "💳 *New Balance:* " + newBalance.toFixed(2) + " টাকা",
            { parse_mode: "Markdown" }
        );
    }
}
