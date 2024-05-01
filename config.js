const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="jastinmtewa@yahoo.com"
global.location="Morogoro,Tanzania."
global.mongodb= process.env.MONGODB_URI || ""

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Dodoma";
global.github=process.env.GITHUB|| "https://github.com/kingjux/Venocyber-md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255625335309";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2,
global.disablepm = process.env.DISABLE_PM || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "255625335309";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "255625335309";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255625335309";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic05iTXM5SUhlbVNYeU5pKzFZN1NuOVpzRmdja0x3ZDV2UjFOd2d5QlYzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWERoUTlVQW92dERrWW9IT2RxdHlmaUF1UnFNL3oyRkR3aUZNckxnc1VFND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSW5nc2RCbTl1N0JZYWJJS25BOTd2aDdLdVptT0hPWjlsaFVQd25aRjFBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2MkEvS2YwTG1mZnRhWUpnWmFDVjIwZ3FyTVR2b1Z6UWZuZW5JbXRqNlNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZCRE80WFFZN3ErbkNSQXlMK3pySkJWNVpITTIybGpQNHdCNXRtVXY5Mjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndQVmhWMFVtcWo1N212bDZaZEpLUGdYV1lreTJVZW9ndUxRdCtidEZ2Rjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUJPRVhXTFpOY3k4SUt2cHhDNWJLK3BHTVNFUXlHVzR5NUtiZkVHeUtGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajRTUWN3WW5tM3JveVY5WVAva21qcHVzOE1uQm1rVVZSdCtMeUxVZTVYND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJmWldEam9aYXEwRllOVUtFbVd4WTU5ZHR0V0Q5eUM4OVVIRzc3T09kR1lWZENBRVl0SENsdzl5WlZTM011VGNLZVE4ZlhRdFh6UVJoYUpMTjhzUmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODUsImFkdlNlY3JldEtleSI6InRwN25veTRlQTI0RUl6ekJkSnZvRnVuSThwNkY0ejdxa0d2cnFwU01wa3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlZhb1pnUDgxU0VLMHpIejhEUEk0TnciLCJwaG9uZUlkIjoiMTdlYjEyMjktNzE3OS00N2UxLTk1YzItYTgyY2IxYjUwOWQ0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRrL01pRjMvdk5tcmpEZy82by9OeTR6MVdNcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiOVRkeFVJL3FJK2xvTmNVZlI5V0E0R2VzcUU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRkFMQ1cyMlMiLCJtZSI6eyJpZCI6IjI1NTYyNTMzNTMwOToxM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZ6R8J2ekvCdnpPwnZmU8J2el/CdnpfwnZ6X8J2fs/Cdn7MifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0plN24yMFE1UERKc1FZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImRXWll6YTVqVkJweFRCVlBRYUMvbUU3aHVBZVRXSmJLeGFMek04d2dWVU09IiwiYWNjb3VudFNpZ25hdHVyZSI6InlTbkZla2h0ZTBGTVV0L1BZR3RPcjRnNXREZFMvS3A4bE9acVBaeVlBY29PR0VnQWZSUk1MRHhqMGlLZ1FSeXNGdzhkeEhVSzJ5cXlNTVZyTVBlc0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJiUUZMalhEMGpDR2JEai93eVVpa3JiRmlFY0QvRmZEc2tmRkgzLzhINXQzVUFxRnc2Y0o2dzBwK0lsMHpGVzVpVTQzaTkxTVFiVitHUkFIRGF6ZHJnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTYyNTMzNTMwOToxM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYVm1XTTJ1WTFRYWNVd1ZUMEdndjVoTzRiZ0hrMWlXeXNXaTh6UE1JRlZEIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE0NTgzNjY1fQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Venocyber-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.0.0",
  caption : process.env.CAPTION || "©²⁰²⁴ ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ" , // ```『 ²⁴ ᴠᴇɴᴏᴄʏʙᴇʀ-ᴍᴅ 』```", //*『ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ』*\n youtube.com/@JASTINMTEWA-vn9pl"),
 
  author : process.env.PACK_AUTHER|| "𝞑𝞒𝞓𝙔𝞗𝞗𝞗𝟳𝟳",
  packname: process.env.PACK_NAME || "𝞑𝞒𝞓𝙔𝞗𝞗𝞗𝟳𝟳",
  botname : process.env.BOT_NAME  || "𝞑𝞒𝞓𝙔𝞗𝞗𝞗𝟳𝟳",
  ownername:process.env.OWNER_NAME|| "𝞑𝞒𝞓𝙔𝞗𝞗𝞗𝟳𝟳",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "VENOCYBER",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
