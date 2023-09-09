/*

    Created & Base By ArxzyDev
   Jika Ingin Recode Silakan Tapi Ingat Creditnya
   Sc Adrian-MD Akan Terus Di Update.
   Jika Ingin Beli Apikey Chat Owner Lolhuman
   
*/

const fs = require('fs')
const chalk = require('chalk')

global.apikey = '' // LOLHUMAN
global.ibeng = 'tamvan' // FREE APIKEY IBENG
global.rosekey = 'cba86fac49e37d63f9bd4561' // ROSE
global.keyai = '' // https://platform.openai.com/account/api-keys

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'ɴᴄʙᴏᴛᴢ-ᴍᴅ'
global.namaowner = '𝕾𝖙𝖊𝖛.'
global.wagc = "https://chat.whatsapp.com/"

//—————「 Setting Owner 」—————//
global.owner = ['6282141099076']
global.nomerowner = '6282141099076'
global.premium = ['6282141099076']

//—————「 Set Wm 」—————//
global.packname = 'ɴᴄʙᴏᴛᴢ-ᴍᴅ'
global.author = '𝙉𝙖𝙣𝙤 𝘾𝙚𝙣𝙙𝙮𝙨 𝘽𝙤𝙩𝙯\n𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱: +62 821-4109-9076\n𝘕𝘢𝘮𝘢 : 𝕾𝖙𝖊𝖛.\nInstagram: @stev.aja_ya498'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !\n\n🎯 *Premium Cuma 5k Permanen* 😋',
    error: '🚫 Fitur Sedang Error !',
    prem: '🚫 Fitur Khusus Premium!\n\n♨️ Buy Premium Cuma 5k Permanen',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 100
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/7c134f718f8babd2185a1.png'
global.link = 'https://youtu.be/dOycbiwwVo0'
global.thumb = fs.readFileSync('./media/koneko.jpg')
global.logo = fs.readFileSync('./media/logo.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
