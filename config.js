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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_13_10_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk2LFxuICAgICAgICAwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDczLFxuICAgICAgICA0MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQzLFxuICAgICAgICA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDU5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDU2LFxuICAgICAgICA1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDczLFxuICAgICAgICA3MCxcbiAgICAgICAgNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODksXG4gICAgICAgIDUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDksXG4gICAgICAgIDc0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDYzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICA0MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDkwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTExLFxuICAgICAgICA5NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMixcbiAgICAgICAgMTU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDcxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ25nNjlzZlFKbTY0SUtVcVJoRU9nRHJ6VEpLSEZaNUFyVTJoSWhGVFNhUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLThLRUFQTnRTY09RU0haT2NDSENQd1wiLFxuICBcInBob25lSWRcIjogXCIyZjdlN2U5Yi1jNDdkLTRhOGMtOTg5YS04MWYzOWU1YmQ4NzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODIsXG4gICAgICAxMzYsXG4gICAgICAzOSxcbiAgICAgIDIwNCxcbiAgICAgIDk0LFxuICAgICAgNjEsXG4gICAgICAxMjUsXG4gICAgICAyNDIsXG4gICAgICAxMzAsXG4gICAgICAxNDMsXG4gICAgICA4OSxcbiAgICAgIDIwMixcbiAgICAgIDIwMCxcbiAgICAgIDIyMSxcbiAgICAgIDIyLFxuICAgICAgNDMsXG4gICAgICAxOTYsXG4gICAgICAyNDIsXG4gICAgICAxNzcsXG4gICAgICAxNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgMjAwLFxuICAgICAgMTk4LFxuICAgICAgMjEyLFxuICAgICAgOCxcbiAgICAgIDE3MCxcbiAgICAgIDg3LFxuICAgICAgMjI5LFxuICAgICAgNDgsXG4gICAgICAxMjYsXG4gICAgICAxNjQsXG4gICAgICA4MSxcbiAgICAgIDE3MCxcbiAgICAgIDIxOCxcbiAgICAgIDIyMSxcbiAgICAgIDEyOSxcbiAgICAgIDI5LFxuICAgICAgMTM0LFxuICAgICAgMTA1LFxuICAgICAgMjM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdYR1lFNTlTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDgyMTU2MTg4OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjg3MzczNTg1MzY4MTE6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1RSenJBQkVPZUUzYmdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQTlZhcFQ5cFc2eEpLczB1bEt4eDJiYUl3VkFGR3d0d1k5RDFIY3NiTWpRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImc2ZzRKRzhTMHNiYkt6RXZaWEZ2ODdMS0tLMjYvOVA1OTJFb2dwdDAxWmhkUDdPTjdOaHRUdG9WeGtPYnlxaDNpTG5pWHRTeVJmVVhUb3ljYk0xVkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNmZzlLa1VhQTBRWXhWMUVUQ3hha2Y4U1lVTkVNZlErU2dyaCtzdHdJd240cnRjQ3dTQitoVTFqTEtDcVBKUEpIYzluTXFmTk1vMHRVVEVUZ2V2akJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwODIxNTYxODg6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5NTc3NTc5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
