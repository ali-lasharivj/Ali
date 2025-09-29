
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA5VU2ZKiSBT9l3zFaFlFiaiIQURZpBTEjYl+QEgxZa3MBKQ6/PcOrKqufpjpqeEpyeXcc+859/4ARYkItGEHlB+gwqgJKeyXtKsgUMC0Pp8hBgMQhzQECsidduHwbZEd9s/i5lRHa833xAIPvbJ2Q3NpFYWbG9uTaRyfwH0AqvqUoegPgCLaT58PTVdfV+zRyocvgQsZK4joPMKISMcjj0TWXXuMkDyBe48YIoyKRK8uMIc4zGzYrUOEv0afWfqbU8OHl/XpTPb1tlucFltj0b1Mx7ltmLYUWZ4/zrPnVP8a/XmtW4VtH7ybxQtn1zEPzxwnb7SmDvZmkablZjnxqJdreftGn6CkgLEZw4Ii2n257tBcp9E1ONJJjFVGHZczYcQscA7H8pl67s7Ra/sYSB06tF8jfoibxOQ06Ferm6rb5QtGou457YnZh6Oo2BkCH7n6glz19Hfia/zhlfT/1D0xrvF8LwWv0OCYFduuV3Y18di0MY+L/SubTg+2urtNbXWx/Rr9HU/ZEetLsbWMIH3ZaEF2mhjo6J4Wr3HkO6+Cc5Zc42q9kk/6Ia3xn1hGY1H0rzKuDV/Uh13ACxHEIzbDOE0kS+tetvKSngrptWwCTkxmaarX7UoYr65TRqrNdiEFvD5D1qgYBZuZTWK/3V7Up0dGKezMGCjcfQAwTBChOKSoLB57I3YAwrjZwAhD+igvcKL2Jl+0fcYVbHIV4HbsTYLW3Es1adpKr9fh9gpNnj8WyRMYgAqXESQExgYitMSdAwkJE0iA8vf3ASjgjb4J14cTuAE4I0zotqirrAzjD1U/DsMoKuuCbroi0voFxEBhP7chpahISF/HughxdEEN1C4hJUA5hxmBvzKEGMZAobiGv7pWK+O+8OOJs9PEqQQGIH8IgmKggAk3YcfjsSzIHK9w8l/kW9vDhlX1rYAUDEAR9rdBinAIBiB7POImo5HIiTzLC6zMCv27/uD+i28PH0MaoowABWjPw1wYRnN9NXPF6LhYqHqiaokKPvP7MMqbEHoEDaa9DfnFTBrHL9ZzM2L2M10V3SVFQ6fBUpf6847hivTpH0CAAoyZhleBiEppSQh7MFZ+172o84M7Km4zS5wRIZjY8QiVRL/ivZ/TDRteb7LsxbUDTbXOtIljH6rcqQx/s2OWzvwSa72rBiCGDYrg78FaC54DaZFRc3yRJasTnaGp77hDuZHc/YU4B9RmfF55a6PZbt3W78T13tXVQE+FmVtc6bAMeOtEtGDq0enN3skRq6J3Cz9aKHsfXehhrl65/veM4GMSvCv0n0q+Ee8Nx94Hv2G8z5Z/6c+pZxiXIXHOk0vCnI0Q+SemyZKbutI1+di8LkdMVOm3qKGBBO737wNQZSE9lzgHCiD5qXcNLuvevmZxLv8QSVMTc+q+pZ2FhKqfLeGjHBIa5hVQOFmasBw/GYlvt9a4rIyQXIACeGdur93e351aVRsa0o8OA2r/mastuP8EH22k+H0HAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
ANTI_DELETE: process.env.ANTI_DELETE || "true",
ANTI_DELETE_SET: process.env.ANTI_DELETE_SET || "chat", 
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
