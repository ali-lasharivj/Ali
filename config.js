
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA5VUa6+iSBD9K5v+qhl5CILJTQa5KAgIPvCqm/nQQoMtr7ZpVJz43zd4X7PJ7uxdPjVFU3Wqzjn1ExQlrpCNGjD8CQjFZ8hQe2QNQWAIRnUcIwq6IIIMgiGYO0nhYJr33fW14hbqTHDYgh6W1tyRKnZNNdO7zWjkFOv0Cdy7gNT7DIe/ScjxjuCY2XKUr1w5C32D143duqMlh6MqLhrozJ8H6SZQFcN4Avc2I8QUF4lBDihHFGY2anyI6dfgy3ohrb2UJebNysSBPlEolmLTHyS9eNs08YWf7SwysRZp8DX49W5DD648KvVlwZNsHh5oZIlT6ihMyMzR/jpXVu5mHYmF8gq/wkmBIitCBcOs+fLcOU/eCRuSTqyzO97vvEzIJLaxvBe3nw74jn8zjLCmxBe4y9eA9wfhzi0WYz/b1MGhk9pcke5vHcVJI1YbMK93o15tcxpe/A24T9+1kv6fuZ+8a2D5R1JsK/wy35wWB38fmlN+H05xdIwn69QSxJiEVzH8GnxvHYiJv1gQpz4WObeUT9f9pZejpe/d4Fg4nast0rbBqeSCT/iQ1fR3KKf1uOdf7Rc5C/z5ZXktiudovc3Uw5HYA2Jo4tTtX5pVlZH92eB9grTZS8/gnZs/ppHlbTczLs2kBdvzKLjk5uXUP+EkeXp0lKLGisCQv3cBRQmuGIUMl8UjJohdAKPzEoUUscd4QeCvJDFeFbf0lEfkpuqpzQnK2Ul9sdGvgTS+FS/XamLMEPcEuoDQMkRVhSITV6ykjYuqCiaoAsM/f3RBga7slbi2nMh3QYxpxYKiJlkJo3dW3z/CMCzrgi2bItTbA6JgyH2GEWO4SKp2jnUBaXjAZ6QfIKvAMIZZhT46RBRFYMhojT5cq5dRO/jJdDszZ4YNuiB/EIIjMAQqr3KKogzEAS8M+e/Vt0ubFRLyrUAMdEEB28ugqvOy+IOWDeiC7PEjr8pyn+8LnCByA04c8t/b+P0DclshQgzirAJDoE83iexyhmEP0ircTiaakWh6ooHPFt+18soFcaWI7whbtUJRtNEvpiE/Zx15qUoSWwbV5CzNOnZS0suifPqHJC1ke2I6yYgWxOjBJiOd2boXhfWI7ixcNxszsW/p5UVWBjjQNnJqhsvt+ey4zaA6QFHGfs+Us2jNq/FR8ngvIzSJtlorrC6I0BmH6Ndi/PTYH6/UUJnp5+0AXQI+4Y9yFCiJMuKl/NlbLpyXenKmo62b1TTO583+pJIVM8b81Tr2smc/w4uVflRmt4Fqi8hV9nj+quKHi7K37YUf+mrJa19jjB7L4I2l/yLzFXcrOe7e/SXF23b5F4eO4MrbRDHL/b1ZbNaXanT1Eimu0zNC+yBzRrSzinFp24oBwf3+owtIBllc0rxlId9D0AW0rFsBW0Vc/qaSriXW6K3rDFZM+zTFCueoYjAnYMgPJEUQVK4vvt7yaUlMWB3AEAju2PbnrcIbjZAlg+zdY0BrH69Owf0vdPUe6n8HAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "true", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄 ‹³策", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "🩵", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
