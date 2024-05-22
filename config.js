const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="akashsithum90@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "ht";
global.gurl  =process.env.GURL  || "https";
global.website=process.env.GURL || "https://N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "akash sithum²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94703562651";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_33_05_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMixcbiAgICAgICAgMixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDUyLFxuICAgICAgICA3NixcbiAgICAgICAgNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI4LFxuICAgICAgICAzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIzLFxuICAgICAgICA1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NixcbiAgICAgICAgNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk2LFxuICAgICAgICA2NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAxLFxuICAgICAgICA2MixcbiAgICAgICAgMTk4LFxuICAgICAgICA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDk5LFxuICAgICAgICA5NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MyxcbiAgICAgICAgMixcbiAgICAgICAgNjEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzcsXG4gICAgICAgIDc1LFxuICAgICAgICAyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEzLFxuICAgICAgICA3OCxcbiAgICAgICAgNixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMixcbiAgICAgICAgMTIwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDk5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOWNLdTNxRVROTVhFR1Q4dk1wN1ZrUUFFQllDdTA0WlJGUW55VWNoSHV4dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX3FuRXY5b3VTR0tDbmR2OEFpV21pZ1wiLFxuICBcInBob25lSWRcIjogXCJlZmEzYjg4NS02MmE1LTRjNzctYjQ3Yy01N2ZkNTU2OTVhMDZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAxNTUsXG4gICAgICAyMyxcbiAgICAgIDIwOSxcbiAgICAgIDE0OCxcbiAgICAgIDQ2LFxuICAgICAgNzMsXG4gICAgICAxMzgsXG4gICAgICAxMzUsXG4gICAgICAyMjksXG4gICAgICA2OSxcbiAgICAgIDI0NSxcbiAgICAgIDEzMCxcbiAgICAgIDIwOSxcbiAgICAgIDE3MyxcbiAgICAgIDgzLFxuICAgICAgOTYsXG4gICAgICA3MSxcbiAgICAgIDIyMSxcbiAgICAgIDkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgMjIsXG4gICAgICAxODEsXG4gICAgICAxNjAsXG4gICAgICAxMTEsXG4gICAgICA0MyxcbiAgICAgIDIxOSxcbiAgICAgIDE3NSxcbiAgICAgIDY3LFxuICAgICAgMTksXG4gICAgICAyMTMsXG4gICAgICA2OSxcbiAgICAgIDEsXG4gICAgICAwLFxuICAgICAgMzYsXG4gICAgICA2LFxuICAgICAgMTgwLFxuICAgICAgMjUyLFxuICAgICAgMTg2LFxuICAgICAgMTY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldDSzdZWDlGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcwMzU2MjY1MTo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFrYXNoIFNpdGh1bVwiLFxuICAgIFwibGlkXCI6IFwiMjI5MDU0MTI5NDgxNDY6NDRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0czemZJQ0VQanF0YklHR0JvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQNVZ0T0dBYitReUZSOEN6NG9GeDNWRWYyck8yVmhoRXIyVVQxK0lVdW1FPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZYNUFieGdMUVVMVlQ2N1lRRmsxYU51d2EwVDN0SGh2K0xnMTdaUjNVK0xUUU9SNktQWXV3cVIrMnNzbFVZdjVlWjlBM2dJdWE5NXJQbzMycG1WYkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhTTGx0dlZocFRyRmNGY2NsOFV5cGloUUFpUVl2Yy9SSzBzUmdtdkZ1aWlmQ1pyWkpRYXRsRGRLTUVnR3NWamw0VUt5enVXWTE4MUYvQVJRU2V4cGdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzAzNTYyNjUxOjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjM1MjM3OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1taFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTW1oLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMnFjN3VYbElVdU5RU1FOOXpQdENERm1ld2FaMnl5WmJpdlJ0bzNsSWhNRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NzcyMTQ5NDUsXCJjdXJyZW50SW5kZXhcIjoyNSxcImRldmljZUluZGV4ZXNcIjpbMCwyMSw3LDI1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "𝘼𝙆𝘼𝙎𝙃 𝙨𝙞𝙩𝙝𝙪𝙢" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Akash-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Akash",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
