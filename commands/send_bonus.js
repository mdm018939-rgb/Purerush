/*CMD
  command: send_bonus
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

// ২ নম্বর বট থেকে পাঠানো ডেটা রিসিভ করা হচ্ছে
var target_user = options.target_id;
var bonus = options.bonus_amount;

// সরাসরি টেলিগ্রাম এপিআই ব্যবহার করে ইউজারকে মেসেজ পাঠানো
if (target_user) {
    Api.sendMessage({
        chat_id: target_user,
        text: "🎉 অভিনন্দন! আপনি আপনার অ্যাকাউন্টে " + bonus + " টাকা বোনাস পেয়েছেন।"
    });
}
