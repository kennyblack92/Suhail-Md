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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_08_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDMxLFxuICAgICAgICA0NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjksXG4gICAgICAgIDk5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDM5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMixcbiAgICAgICAgNzksXG4gICAgICAgIDQxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAzNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU4LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NyxcbiAgICAgICAgODcsXG4gICAgICAgIDUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjEsXG4gICAgICAgIDU1LFxuICAgICAgICAzNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidkdGQVNRSzlvMjZQemo0MGFyMExKTFc5cE81TzNsZjQxWUxjR2p6SWJjdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwianZVUFFycV9UbDZyMnVLcldLQVI1d1wiLFxuICBcInBob25lSWRcIjogXCI2YTMwNTMyNS03ZDU0LTQ2MDgtOTIxYy0wMDUyN2VlMWJkYzlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDksXG4gICAgICAyNTAsXG4gICAgICAxMTQsXG4gICAgICAyMTUsXG4gICAgICA2NixcbiAgICAgIDcyLFxuICAgICAgNjEsXG4gICAgICAyNDAsXG4gICAgICA0NSxcbiAgICAgIDE3NyxcbiAgICAgIDEyLFxuICAgICAgODYsXG4gICAgICA1MixcbiAgICAgIDIwMixcbiAgICAgIDE1MSxcbiAgICAgIDI0NCxcbiAgICAgIDQwLFxuICAgICAgMTg4LFxuICAgICAgMzEsXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OSxcbiAgICAgIDE5NSxcbiAgICAgIDEzMSxcbiAgICAgIDkyLFxuICAgICAgMTg3LFxuICAgICAgODYsXG4gICAgICAyMTgsXG4gICAgICA2MSxcbiAgICAgIDUxLFxuICAgICAgMTg5LFxuICAgICAgNCxcbiAgICAgIDExOSxcbiAgICAgIDExNCxcbiAgICAgIDQzLFxuICAgICAgODcsXG4gICAgICAxOTIsXG4gICAgICAxNDAsXG4gICAgICAxOCxcbiAgICAgIDEwMSxcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJLNEJSTDlFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYyMTk1NjEzOjkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiR2FycmkgVFZcIixcbiAgICBcImxpZFwiOiBcIjE0NDMxNTkzNDQ3NjYzOjkwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BEa3VaVUZFSnVTeTdVR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNVhpbjVrRFprajJBbmozRUdQRitkeFc5UllCT0VER2VSWXlrUWlBbDRCMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpelkvMWRUS0h2T1FUeU82ZTVFSktGMVJ3bm04a3E1S1dLa25ENzVMZ2ZzR3RDVml3eVAvb2tCNE1lemZKWlBBL25ZWDlhbWN5SDdNSWp0emdmcXJEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRMHBvREZ6U2dmVzQ2bkJPV0ZtM1ZKbFhtN3ZHTnpoV0w2MTlCLzM1SlZBTWpuTVJadVcwRVk1VUVFNE41TXREa0dKSXNRVmNiMlpPb0V3K1IzZHRpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTYyMTk1NjEzOjkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjk5MjkyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUM4NVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQzg1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiOUZlR3ZEVkZuck1zY3RKeHI0akRmMG9RZXN2cytHdUZONEUyRWJkK3JJdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzg3MTY0MjcyLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
