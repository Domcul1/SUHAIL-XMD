const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') :"2347068041303,2348083477600"
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_12_10_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDg5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI4LFxuICAgICAgICAyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY1LFxuICAgICAgICA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDkxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NixcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgODEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA5LFxuICAgICAgICA0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMTA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwLFxuICAgICAgICAyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk3LFxuICAgICAgICA0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5LFxuICAgICAgICAxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2LFxuICAgICAgICA5LFxuICAgICAgICA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAzNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQwLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDcyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYsXG4gICAgICAgIDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NixcbiAgICAgICAgMjUwLFxuICAgICAgICA4NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NyxcbiAgICAgICAgODksXG4gICAgICAgIDI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzksXG4gICAgICAgIDk0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NixcbiAgICAgICAgMTU0LFxuICAgICAgICA4NSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJQRzgxNXZBL0gzOGhUKzluRG5qSlRTK1lQckw1emFLS0V3c0pQNUZQVG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhfczByNUJFUnotVVc2MHJmRmNnQndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDUwY2UyMmUtZWUwOC00NWIwLTlkYTEtNDM1NzI5ZDQxMTMzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgMTc1LFxuICAgICAgMzIsXG4gICAgICA1NCxcbiAgICAgIDE2NixcbiAgICAgIDcwLFxuICAgICAgMTU1LFxuICAgICAgMjMzLFxuICAgICAgMTA4LFxuICAgICAgMTY4LFxuICAgICAgMTcxLFxuICAgICAgMTk5LFxuICAgICAgNDQsXG4gICAgICAxMDgsXG4gICAgICAyMDQsXG4gICAgICA5NCxcbiAgICAgIDE4MyxcbiAgICAgIDE5MixcbiAgICAgIDU0LFxuICAgICAgMTEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOCxcbiAgICAgIDE4NyxcbiAgICAgIDE2MCxcbiAgICAgIDEzNyxcbiAgICAgIDczLFxuICAgICAgMjA1LFxuICAgICAgMjQ4LFxuICAgICAgOSxcbiAgICAgIDE5MyxcbiAgICAgIDE5MyxcbiAgICAgIDIyNixcbiAgICAgIDksXG4gICAgICAxMzksXG4gICAgICAyMjIsXG4gICAgICAxOTMsXG4gICAgICAyNTIsXG4gICAgICAxNDMsXG4gICAgICAxODMsXG4gICAgICAyMzksXG4gICAgICAyMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQVM3NjNBVzRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwODIxNTYxODg6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyODczNzM1ODUzNjgxMToxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPSFJ6ckFCRUxpZjFMZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBOVmFwVDlwVzZ4SktzMHVsS3h4MmJhSXdWQUZHd3R3WTlEMUhjc2JNalE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic2xaUzdxU0ZxOU1aNmRvRjhram1JT1FkSnA0UlBrY2xxZlptbTluWHRhcWhkR0FkTzNPeW1jaFBHRFFuWGhJMGlDNEFGbEoybUdhK0xyNDBhWWtWQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM1BZUUU0bHZmT0tlbzlMQ213MnRaOXY5bWJoS1pFWHIrQytrWm94TXErbitYU005OEZ3eUVIdDhSVUJNMDVLTGttZkdVWVNrc2JaN2l5NU8wcXoxRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA4MjE1NjE4ODoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk0MzM1MzNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "kay",
  botname : process.env.BOT_NAME  || "kay",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
