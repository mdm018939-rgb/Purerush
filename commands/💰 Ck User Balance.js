/*CMD
  command: 💰 Ck User Balance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
💰 Check User Balance

যে ইউজারের balance দেখতে চান তার Telegram ID লিখুন:
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (message != "💰 Ck User Balance") {

    let uid = message.trim();

    // শুধু সংখ্যা হলে চলবে
    if (!/^\d+$/.test(uid)) {
        Bot.sendMessage(
            "❌ সঠিক Telegram ID দিন।"
        );
        return;
    }

    let res =
    Libs.ResourcesLib.anotherUserRes(
        "balance",
        uid
    );

    let val =
    res.value() || 0;

    let refs = 0;

    let list =
    Libs.ReferralLib.getTopList();

    list.per_page =
    999999;

    let data =
    list.get();

    for (var i in data) {

        if (
            String(
                data[i].user.telegramid
            )
            ==
            String(uid)
        ) {

            refs =
            data[i].value || 0;

            break;

        }

    }

    Bot.sendMessage(

        "👤 *User:* `" + uid + "`\n" +

        "💰 *Balance:* `" +
        val.toFixed(2) +
        " টাকা`\n" +

        "👥 *Referrals:* `" +
        refs +
        " জন`\n" +

        "──────────────────\n" +

        "✨ _Check completed successfully!_",

        {
            parse_mode:
            "Markdown"
        }

    );

}
