const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="itscato666@gmail.com"
global.location="lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Nothing is permanent " 


global.devs = "923167441892" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923167441892";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923167441892";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923167441892,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // SUHAIL_07_39_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDYzLFxuICAgICAgICA4MixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI2LFxuICAgICAgICA1NixcbiAgICAgICAgOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA5OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDc3LFxuICAgICAgICAyNCxcbiAgICAgICAgMCxcbiAgICAgICAgODUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0LFxuICAgICAgICA0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDYwLFxuICAgICAgICA0NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDUxLFxuICAgICAgICA2MCxcbiAgICAgICAgOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMwLFxuICAgICAgICA1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODcsXG4gICAgICAgIDUwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMixcbiAgICAgICAgNjIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDcxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NixcbiAgICAgICAgMTk1LFxuICAgICAgICA0NixcbiAgICAgICAgMTY1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHL3F2RE5kaFFuVGxXUkJWeERNVFBLSVR3aHVoaTZGclFNaUtyaXB0NW5JPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE2NzQ0MTg5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDA2QzBBOENBQTJCN0YwNDZFMzg3ODA1MUQzRDNBQ0VcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTg0MzQ5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpYdWhacnZwUURhMEZDb0tpLTZ2Y0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGI2ZWI3ZjktYmQ0OC00ODU2LWI4OWEtMWJjYWI4NzgzOTRkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU1LFxuICAgICAgMTksXG4gICAgICA4MSxcbiAgICAgIDEyNyxcbiAgICAgIDE3NixcbiAgICAgIDI0NixcbiAgICAgIDE2NCxcbiAgICAgIDEyMyxcbiAgICAgIDcyLFxuICAgICAgNDAsXG4gICAgICAxNjAsXG4gICAgICAxNzgsXG4gICAgICAxOTEsXG4gICAgICA4MixcbiAgICAgIDIwOCxcbiAgICAgIDMyLFxuICAgICAgMjUzLFxuICAgICAgMjM1LFxuICAgICAgMixcbiAgICAgIDE0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgNDcsXG4gICAgICA0MCxcbiAgICAgIDIxNSxcbiAgICAgIDEzNSxcbiAgICAgIDI1NSxcbiAgICAgIDIsXG4gICAgICA5OSxcbiAgICAgIDEyNyxcbiAgICAgIDI0MCxcbiAgICAgIDE0OSxcbiAgICAgIDkwLFxuICAgICAgOTksXG4gICAgICAzNixcbiAgICAgIDE0OCxcbiAgICAgIDE3OCxcbiAgICAgIDIyMCxcbiAgICAgIDE2MSxcbiAgICAgIDYsXG4gICAgICAyMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPcWhrcUlDRUpLYXNyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlpUK1hDRCtUemZKVVRaalBYK2dsMWV1T0FCUlBhREYydktFWFNIbjdSMGc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQXp4d2sxYlAzeUE4RTZOOXNVZTA2aStBZFdoNTF2TzBLZzQ5MXdOcnBPMUZ1ekltY0xZUno2cGRJWVhoMm82V0ZSVHo0Z0s4VUhqcy9udG8zQitsRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWTNOcWZGM2RKd3lib0VmVlI4NDFFd0pNVWZ0dXBER0syYXNoY2dlWTVxcHRYRUlucXFGVWVCU1UweGlSaGRRcHYzV282NENOUEpDNVBjVGVzQXRxRGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNjc0NDE4OTI6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NTQ2MjM4ODU4ODY5MzoxNkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE2NzQ0MTg5MjoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1ODQzNDNcbn0iCn0=


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 Nothing is permanent  』```", //*『Hacker x Banner』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "🏳️‍🌈",
  packname: process.env.PACK_NAME || "Ayaan",
  botname : process.env.BOT_NAME  || "Akuma-x-Ayaan",
  ownername:process.env.OWNER_NAME|| "Love🏳️‍🌈Fucker🌚Ayan🥵💦",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Ayaan"  ).toUpperCase(),



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
