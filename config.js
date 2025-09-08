
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~hETMsPVK7nwRBa4NzqcM", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "ALI-MD~H4sIAAAAAAAAA61Vy47jRBT9l9o6In4/IrWE7TiJ8047TjpGLKrtsuOOX11VduyMWmLDjh9giYSE2CDEZiS+hBGrYclXICfdTEsMTSONN/WwfeucU/fc+wZkeUzQBDWg9wYUOK4gRe2UNgUCPWCUYYgw6IAAUgh6YDc+bQLbEgLbvvGCGZl4SuhPzZu0tq3JdLbe7/NVfNQTebS7Ag8dUJS3Sey/EPAuELTBZDiTZVKm15tEXkWnmp4CU1yUqVsOl8142EBmsU/IFXhoI8IYx1lkFXuUIgyTCWqWMMavgx8tu3y+6q92o3IXLoWErG35Hgfje0rs/k7A6dFN7ZmQigPyOviV45b4lDlY95VpsF6dGC/XXDjsCsEunmz9rC5G+2Bidw/HC3wSRxkK7ABlNKbNq3VHpl/dmz5/WHbvFG3nBHvXCxnnTide0l1dK6NUFNNEiWRu9TrgWym1b2nX4Xdb5Drr8cEk+XbWHwezbXA3WvON6o0knzMmo8Nz4Ev8lCuH/6O7bTSHo13h+tqZO3q/Kw/pwjHiiPB1ir2V0kyZxbwYV4vtK3WvZ6oiu/xpvnA4MlWYjXq6T1Q8HtFpV+kbtnRsZmteHQ0S/wN8SEv8EspEI9iRM94zrv2xMZer9Z0X3bGLxpw7cZwNurceXB8tXcg5a3vwTc8No+tsdrTI0Qmn0ooonp+4R8kXbyxuUV5zaMnEx6szowNq7AD0uIcOwCiKCcWQxnl23lPEDoBB5SAfI3qWF+TyqTCWQy/a1AaXQ385WJzujEpiJTidivyKqbZx5t6S4V10BTqgwLmPCEHBKCY0x80MEQIjREDvi/NNtaQxSnOKxnEAekDjBVEVWIFnOfFz8tlxDymBRfFZhijogBDn6QyBHsUl6oDzD7rJaQNd0waWKmkmz+mCKEmqwSucLvGsYLYU08uh6zhFhMK0aJlJiiBosiI9dD4VDk3QZY3jZEuWDLlvcaY04Axd4HRWFlnuP3DInw4Hbw5YQ5cVS+b6oiBaojHgLYlTDF7RTOtFHArLfzoc+sAyZVNkVc1UDU1VB1KrCC8rrCDoyss4OPnhyw7IUE0vvm6zUeA6IIwxoW5WFkkOgyfTP72Evp+XGXWazDfbCcKg92wbURpnEWmZlRnE/j6ukNnyAL0QJgT9bQCEUfDE5bGom3nQ+nK7Gq6X/es5aLG3gf6hTe8j6iTnrziZFziZ4yWJVWRO7omft/sdkME2FPjtl99+ev/2u3dfvfvq/dsf2uHPb399tnr/9ud2+OPtj5fV9+3w7uvfv2mFfKTYIgoQhXFCQA+Y06UuI9a0bKwzqjsc6lakm5EOPkjyVHou1i67N1M2kdzueG3NT0P7IMSqh0KxLykzRU5mMt0oIyrYc16/+kiQtgmHy42u1JOqcWcC3Hun2NLXmq+uT+ncNZhMEq17eUFr6Z5P+t2RwiT6/BZum/vc5eFsmhts12IYrlI2cVcrkcGTStVXV+1pAapiHz0/bDbcBM2QVWmT5cmhuOmKuS/V+8W1zPBdxzb6UnPIbwcDuxj3t2las1zoK7Yi1kNLN4eTfaVl2m6LarnxBj4TepBr9lF0KYrnopw8NsP4sVzF52UYo3Nveby3/7r8C+42RdmHzrMQj83qXwq+cVtxjTZGm2Xj1n2/jsdzsRreZIzOoNOCKdYLvEG1EjT9IAIPrVeKBNIwxynoAZgFOD/nFs7LNuftLMxfOMzUXbu/uhBPIKH6Bx99rFRxl6+WOC9GkOxBD/AbRbl3W1M0elE4FNInWwK9faarEjz8BQfoYn7RCQAA", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄 ‹³策", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
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
