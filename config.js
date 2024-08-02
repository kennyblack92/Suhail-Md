const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://wa.me/message/E3WLNO4GSPOHA1";
global.website=process.env.GURL || "https://wa.me/message/E3WLNO4GSPOHA1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ garri²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348162195613";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_46_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NixcbiAgICAgICAgMixcbiAgICAgICAgMTAzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDY4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAzNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDM1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MixcbiAgICAgICAgMTIyLFxuICAgICAgICA2NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMSxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY1LFxuICAgICAgICA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI5LFxuICAgICAgICA5NixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3MCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMTM5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKd1B0alBxWG45MTV0SVpHUE0zS0taSXFQVGUwNVhMRnBZbkZlbkRSTFc0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyVmYtTnhZaFFhZTlSa1l4NFNyYUt3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjU0YzdmNjQ3LTRkYzQtNDZhMC04NzhhLTNhNGY2MWNlOGQ4MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzksXG4gICAgICA4NSxcbiAgICAgIDk4LFxuICAgICAgMjI2LFxuICAgICAgMTcxLFxuICAgICAgMjI5LFxuICAgICAgNDYsXG4gICAgICAyMzEsXG4gICAgICAxMzgsXG4gICAgICA0MCxcbiAgICAgIDYwLFxuICAgICAgMTI5LFxuICAgICAgMTg5LFxuICAgICAgMTE0LFxuICAgICAgNzUsXG4gICAgICAyNDIsXG4gICAgICAyMDQsXG4gICAgICAxNzksXG4gICAgICAyMjgsXG4gICAgICA0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICAxMixcbiAgICAgIDM1LFxuICAgICAgMTk2LFxuICAgICAgMjQwLFxuICAgICAgMTg3LFxuICAgICAgMTQwLFxuICAgICAgMjU1LFxuICAgICAgNjAsXG4gICAgICA1MixcbiAgICAgIDYwLFxuICAgICAgMjQ1LFxuICAgICAgMzYsXG4gICAgICA4MyxcbiAgICAgIDEyMixcbiAgICAgIDI0MSxcbiAgICAgIDE4NixcbiAgICAgIDEwNCxcbiAgICAgIDIxNixcbiAgICAgIDI1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaODRUWDFHQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwOTQ0NTQzOToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzOTY2MDE4MTA1MzYyNzoyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcImxrdWx0dW3inKjinaTvuI/wn6W6XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmlYMEpNRUVOZlZzclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2UXNPUHVXd25MTHBrY0RUUUpxUGRHSmxPcE05cjJzZitBbHYzcHVjekJjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1jSmFvaDBybmFNZkpEZlF4SjVGbFoxZkN4V1NWZUlvMW5ReWkwOGNOTXVDTE02UG5Sb2E1RGJaVkhTWEswLzJqODNOR1UvUGlrSU40RW5TSUhWNkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdObFhqc1RJYSt4NzJUMzJzMmpLOGVIK2FNQ3JDd2tMOTJmT0hqeUxPMFdPa0h5TUs0RmVlUGk2Ty9QWnpZWll0LzhKWlNUdUlaM1lFdEsvNzcyNGh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDk0NDU0Mzk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1OTE5NjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBU1pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFTWi5qc29uIjogIntcImtleURhdGFcIjpcImV2b21ZZzhwM1dKY0lvQVN5UDRlVDMrbmJrMjZQejN0ZlZnK25WdWorOFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTExNDkwMTQ2NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNTkxOTY4NzU2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ garri²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "garri-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "garri",


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
  
