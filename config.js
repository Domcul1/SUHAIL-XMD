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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_01_10_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTExLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NixcbiAgICAgICAgNzYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NixcbiAgICAgICAgNjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDg4LFxuICAgICAgICAyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDg2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQwLFxuICAgICAgICAzNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU2LFxuICAgICAgICA0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNixcbiAgICAgICAgMTE1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU1LFxuICAgICAgICAzNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRGFoY1o4TGF3bHdHT0N5VWY0QXd1QkUxWHBSN1ppMWt4U1VXUm9CUkorcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibmk1ZEV5VGRUa21fQ2M2QzVBVmJ4QVwiLFxuICBcInBob25lSWRcIjogXCJiYWYyZGYxNy1mNjAxLTRmN2EtOTYyZC1hMTg3MzJkNTBmNGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA5LFxuICAgICAgMTcwLFxuICAgICAgMjQyLFxuICAgICAgMTUyLFxuICAgICAgMTgwLFxuICAgICAgMTAyLFxuICAgICAgMTcsXG4gICAgICAxOTcsXG4gICAgICAxNDYsXG4gICAgICAxMTAsXG4gICAgICA2MCxcbiAgICAgIDIxMyxcbiAgICAgIDE3NCxcbiAgICAgIDgzLFxuICAgICAgMTA5LFxuICAgICAgMTUzLFxuICAgICAgMjcsXG4gICAgICAxMzcsXG4gICAgICAxNDcsXG4gICAgICA0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgMTA0LFxuICAgICAgMTUzLFxuICAgICAgMjgsXG4gICAgICAzOSxcbiAgICAgIDIwMSxcbiAgICAgIDIzMSxcbiAgICAgIDkwLFxuICAgICAgMjMwLFxuICAgICAgMSxcbiAgICAgIDIxNCxcbiAgICAgIDExLFxuICAgICAgMjM4LFxuICAgICAgMTg4LFxuICAgICAgNTksXG4gICAgICAxODQsXG4gICAgICAxMDcsXG4gICAgICAyMjEsXG4gICAgICAzNyxcbiAgICAgIDE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQ4UkZQNzFBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDgyMTU2MTg4OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyODczNzM1ODUzNjgxMTo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ043UnpyQUJFSlQzZ0xnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUE5WYXBUOXBXNnhKS3MwdWxLeHgyYmFJd1ZBRkd3dHdZOUQxSGNzYk1qUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHN3VMN0phUXRJaEZ4VEpLZWd3OFZoM0o0czlEOElQNFpUKytMKzNpU1NMTTNTODNtNVlIUy9yaGdxN3lxUTNyUXhSVlBGMDFUbFpCOXlVK2QvZW1BUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHVkJ0Mk1DR3AxWTNrRTFGUHRNUXBwaUVzUnJRUzBuTUJXVjBFaklmSHVSWlNReTNpVHV2dmcyVnVDMnVlSG8zV1J2M1RkOEgwQjNZb21QcHRWYm5CQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDgyMTU2MTg4OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MDY4NTA0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
