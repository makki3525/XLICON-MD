const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "923257607934"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = '༫᳀֎𝕸𝖆𝖐𝖐𝖎༈֎⸔༫👑҉*' // add your username
global.sudo = process.env.SUDO || '923257607934' 
global.devs = '923257607934';
global.website = 'wa.me/+923245643588' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/1254429e54bde2099d4f9.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUluNG05R2VXS1N2dlE5UnJsWG1UKys0NWd4MFRZaFh4SlV0YkF4VHpuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHZxQUNZTmdldGMra09vdFFWRURjbk1MajBJeWZscXN6ZnJDZ2RUSm13MD0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTkxhNDVMdEdRR0RMQ01jV1hPeisrVWJKUWpVS0VNUnFMTGE4UGQrS0h3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6bStQaDRaeFI1NUZXamhSelM4RmUvQy9rdlRHL1ltSVRTdDRjM2IyYkhFPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVLNVVpanVkNDNjSDA4TndGR3FBcktBdGNJVFA0a3JTOXVFd0tQbGl4VlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InV4SWZXWE5scFZTSWx6c0xzNFRCMjY2L0ZwRHJHcG0yZkdMcS9GcDMvazQ9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNVXpiTGN3K0cvQ3ZTeFM0S2x6bkVyWlpNUVl1ZXFmblZnNDRBMUtseEFzT1RZMzlPVTdha0lEU0QwYldsb2RhWmNwS3cwYnpsRHBhWmQzWDcxZ1dEUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE4NSwiYWR2U2VjcmV0S2V5IjoialNvd2hPcG9YYUlNRTJHWS9RN3hkcFRlYW01Zlp2cEZIaytGcEx1VkdiVT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoia2lCQlJXNVpRNWUzR3NKdkkwN1VadyIsInBob25lSWQiOiI2MzVlODMzNC0wZjE1LTRlOTMtYjhmOC01MWZkNmU5YWMxODMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVBiUGV1VTVzQ3dWNFc1NXQvQWZHNDlMN1pzPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoZWozbGZ2aFA0ZDlRa1B1Q3E5NU5meldmZ2c9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNNzY2d3NROU9hTnJRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJsQjVIZnp4WFBhMlgySGFGZWR6cldwcXpGazFndFROUjFubHE1NDZSbUVVPSIsImFjY291bnRTaWduYXR1cmUiOiJGYm95WUlVdXZzTk5tbC9qWWQvbHdtRTRLb05KOU13Y2pRZk5USUZFU3dDY1ZrV0RsMTdzT3gwbnk5VEpRTzUyVnNSRkxRbnNxc3duZmZiMnZwQVhEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiV0Q4NlFyNVY2UE5CeWZ0dnl1Wjh6MFk5NEo3akFGR0tmb05iY2d4UmJwR0c4Unp2UDM0K2hUVlVja1hsU2JlNEN4ZHlNZ3o5ZHQ1UG9YRGZ1QStqRFE9PSJ9LCJtZSI6eyJpZCI6IjkyMzI1NzYwNzkzNDozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik11aGFtbWFkIE1ha2tpIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI1NzYwNzkzNDozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpRZVIzODhWejJ0bDloMmhYbmM2MXFhc3haTllMVXpVZFo1YXVlT2taaEYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDUyMTA3NDR9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '༫᳀֎𝕸𝖆𝖐𝖐𝖎༈֎⸔༫👑҉*',
  packname:  process.env.PACK_NAME || '• 𝚰𝚻𝐒 𝚳𝚵 ▸ 👻🤍⚔️

•
•

•
•

•
•

•

•
•

•
•
•

•
•

     +𝟵𝟮𝟯𝟰𝟲𝟬𝟳𝟳𝟳𝟰𝟴𝟯 : 🇵🇰
༫᳀֎𝕸𝖆𝖐𝖐𝖎༈֎⸔༫👑҉  ⃙°お°_',
   
  botname:   process.env.BOT_NAME === undefined ? "֎𝕸𝖆𝖐𝖐𝖎༈֎⸔༫👑-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '༫᳀֎𝕸𝖆𝖐𝖐𝖎༈֎⸔༫👑҉*' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'warn' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'We Are ALive. Send Your Message' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? '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' : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? true : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||true,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '706cfc39-e535-4a5a-9f3c-e6bf1ae084e6' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
