const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['263715882540'] //ganti nomer lu
global.ownername = "𝗘𝗔𝗭𝗬" //ganti nama lu
global.developer = "𝗘𝗔𝗭𝗬" //name
global.ytname = "YT: SPARKY MON 777" //ur yt chanel name
global.socialm = "https://www.instagram.com/aswin_sparky.exe" //taroh sosialmedia lu kalo ga punya biarin aja
global.sgc = "https://chat.whatsapp.com/JTUrdnOziKD44ScoBoggmh" //ganti group lu
global.location = "Kerala,TVM,Varkala" //ganti lokasi lu

//bot bomdy 
global.owner = ['263715882540'] //ur number
global.ownernomer = "263715882540" //ur number
global.ownertag = '263715882540' //ur tag number
global.premium = ['263715882540'] //ur premium number
global.botname = '𝗘𝗔𝗭𝗬 𝗕𝗢𝗧 𝗠𝗗+' //ur bot name
global.ownername = "𝗘𝗔𝗭𝗬"
global.linkz = "https://youtube.com/@sparkymon777" //your theme url which will be displayed on whatsapp
global.dana = "263715882540"
global.pulsa = "263715882540"
global.websitex = "https://youtube.com/@sparkymon777" //ur website to be displayed
global.websitex1 = "https://sparkymodswa.blogspot.com"
global.botscript = 'https://github.com/eazy2003/SPARKY-BOT-MD' //script link
global.themeemoji = "👀" //ur theme emoji
global.packname = "𝗘 𝗔 𝗭 𝗬" //ur sticker watermark packname
global.author = "𝗘𝗔𝗭𝗬" //ur sticker watermark author
global.wm = "𝗘 𝗔 𝗭 𝗬" //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Done✓',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'In process...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}
global.limitawal = {
    premium: "Infinity",
    free: 50
}
global.thum = fs.readFileSync("./Media/theme/sparky.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Media/theme/sparky.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Media/theme/sparky.jpg") //ur error pic
global.thumb = fs.readFileSync("./Media/theme/sparky.jpg") //ur thumb pic
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//module api
module.exports = {
api:{
     removebg: ['zNKnayDFH1nugtA81fkPMzXn','5CyygkXiT5vrki2Z6ZsUCE8u','Mz4yJkagrCLotdgsr4Ms39ud','vEeWnzQws9kJoYNMYKhbT1s6','2arViktax9HUdMqy9U7wFLKT','sfZpRHNwVPAG57nZVHijYZ9v','oqVVyQ2rBDYdUrxThg4GdjhA','rGp4axHpQ56Y5tRLX7J789QC','NfPx6NgTkpVYLnKUZHCAM1P3'],//https://remove.bg/api
     unscreen: ['N6J4Bjbyh2V4eqhAPTWYtFER','fcKJkPstNXp4pjntYt3bR38E'],
     upscaling: '1255173112',
     imgsuper: ['198f69d4b2msh0021bb0690669a6p1f3a80jsn9cab1ae485cc','85731a45bbmshf7bd86f09b300c2p14e544jsncd18a8d5dba2'],//https://super-image1.p.rapidapi.com/
     speechtotext: ['897beebb3ac74ceeaa6f8d0903b2297a']
   }
   }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
