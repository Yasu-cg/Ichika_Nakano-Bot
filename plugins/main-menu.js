let handler = async (m, { conn, args }) => {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let user = global.db.data.users[userId]
    let name = conn.getName(userId)
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length
    
    let txt = `
    
╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    
✧✈︎ ✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭◇୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙. ║
✧: ➪ *𝑯𝑶𝑳𝑨,   @${userId.split('@')[0]}, ${saludo}, Mi nombre es ${botname}
╰──────────────✧ 🌹 •°•°

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭♡୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬ Modo: publico
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۪۬ Bot » ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Prem Bot 🅑')}
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘۬ Activada » ${uptime}
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘ Usuarios » ${totalreg}
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘ Comandos » ${totalCommands}
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪⚘ Baileys » Multi Device
╰ׄ┄ׅׄ─ׅׄ┄ׅׄ─ׂׅ┄ׅׄ─ׂׅ┄ׅׄ─ׅׄ┄ׅׄ─ׂׅ┄ׅׄ─ׂׅ┄ׅׄ─ׅׄ─ׂׅ┄ׅׄ─ׂ╯ 
    
      
 
✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭♡୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷   ɪɴғᴏ
├• ✐; ₊˚✦୧︰ Bᴏᴛ .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ ❀ _ *#help • #menu*
┣ ඬ⃟ ❀ _ *#uptime • #runtime*
┣ ඬ⃟ ❀ _ *#sc • #script*
┣ ඬ⃟ ❀ _ *#staff • #colaboradores*
┣ ඬ⃟ ❀ _ *#serbot • #serbot code*
┣ ඬ⃟ ❀ _ *#bots • #sockets*
┣ ඬ⃟ ❀ _ *#creador*
┣ ඬ⃟ ❀ _ *#status • #estado*
┣ ඬ⃟ ❀ _ *#links • #grupos*
┣ ඬ⃟ ❀ _ *#infobot • #infobot*
┣ ඬ⃟ ❀ _ *#sug • #newcommand*
┣ ඬ⃟ ❀ _ *#p • #ping*
┣ ඬ⃟ ❀ _ *#reporte • #reportar*
┣ ඬ⃟ ❀ _ *#sistema • #system*
┣ ඬ⃟ ❀ _ *#speed • #speedtest*
┣ ඬ⃟ ❀ _ *#views • #usuarios*
┣ ඬ⃟ ❀ _ *#funciones • #totalfunciones*
┣ ඬ⃟ ❀ _ *#ds • #fixmsgespera*
┣ ඬ⃟ ❀ _ *#editautoresponder*
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ
    
✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭◇୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Bᴜsᴄᴀᴅᴏʀᴇs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 𖤍 _*#tiktoksearch • #tiktoks*
┣ ඬ⃟ 𖤍 _ *#tweetposts*
┣ ඬ⃟ 𖤍 _ *#ytsearch • #yts*
┣ ඬ⃟ 𖤍 _ *#githubsearch*
┣ ඬ⃟ 𖤍 _ *#cuevana • #cuevanasearch*
┣ ඬ⃟ 𖤍 _ *#google*
┣ ඬ⃟ 𖤍 _ *#pin • #pinterest*
┣ ඬ⃟ 𖤍 _ *#imagen • #image*
┣ ඬ⃟ 𖤍 _ *#infoanime*
┣ ඬ⃟ 𖤍 _ *#hentaisearch • #searchhentai*
┣ ඬ⃟ 𖤍 _ *#xnxxsearch • #xnxxs*
┣ ඬ⃟ 𖤍 _ *#xvsearch • #xvideossearch*
┣ ඬ⃟ 𖤍 _ *#pornhubsearch • #phsearch*
┣ ඬ⃟ 𖤍 _ *#npmjs*
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭♡୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  
├• ✐; ₊˚✦୧︰Dᴇsᴄᴀʀɢᴀs .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 𐂡 _ *#tiktok • #tt*
┣ ඬ⃟ 𐂡 _ *#mediafire • #mf*
┣ ඬ⃟ 𐂡 _ *#pinvid • #pinvideo* + [enlacé]
┣ ඬ⃟ 𐂡 _ *#mega • #mg* + [enlacé]
┣ ඬ⃟ 𐂡 _ *#play • #play2*
┣ ඬ⃟ 𐂡 _ *#ytmp3 • #ytmp4*
┣ ඬ⃟ 𐂡 _ *#fb • #facebook*
┣ ඬ⃟ 𐂡 _ *#twitter • #x* + [Link]
┣ ඬ⃟ 𐂡 _ *#ig • #instagram*
┣ ඬ⃟ 𐂡 _ *#tts • #tiktoks* + [busqueda] 
┣ ඬ⃟ 𐂡 _ *#terabox • #tb* + [enlace]
┣ ඬ⃟ 𐂡 _ *#ttimg • #ttmp3* + <url>
┣ ඬ⃟ 𐂡 _ *#gitclone* + <url> 
┣ ඬ⃟ 𐂡 _ *#xvideosdl*
┣ ඬ⃟ 𐂡 _ *#xnxxdl*
┣ ඬ⃟ 𐂡 _ *#apk • #modapk*
┣ ඬ⃟ 𐂡 _ *#tiktokrandom • #ttrandom*
┣ ඬ⃟ 𐂡 _ *#npmdl • #npmdownloader*
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭◇୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Rᴘɢ - Lɪᴍɪᴛᴇs
├• ✐; ₊˚✦୧︰ Eᴄᴏɴᴏᴍɪᴀ.
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ ✦ _*#w • #work • #trabajar*
┣ ඬ⃟ ✦ _*#slut • #protituirse*
┣ ඬ⃟ ✦ _*#cf • #suerte*
┣ ඬ⃟ ✦ _*#crime • #crimen
┣ ඬ⃟ ✦ _*#ruleta • #roulette • #rt*
┣ ඬ⃟ ✦ _*#casino • #apostar*
┣ ඬ⃟ ✦ _ *#slot*
┣ ඬ⃟ ✦ _ *#cartera • #wallet*
┣ ඬ⃟ ✦ _*#banco • #bank*
┣ ඬ⃟ ✦ _*#deposit • #depositar • #d*
┣ ඬ⃟ ✦ _*#with • #retirar • #withdraw*
┣ ඬ⃟ ✦ _*#transfer • #pay*
┣ ඬ⃟ ✦ _ *#miming • #minar • #mine*
┣ ඬ⃟ ✦ _*#buyall • #buy*
┣ ඬ⃟ ✦ _*#daily • #diario*
┣ ඬ⃟ ✦ _*#cofre*
┣ ඬ⃟ ✦ _*#weekly • #semanal*
┣ ඬ⃟ ✦ _*#monthly • #mensual*
┣ ඬ⃟ ✦ _*#steal • #robar • #rob*
┣ ඬ⃟ ✦ _*#robarxp • #robxp*
┣ ඬ⃟ ✦ _*#eboard • #baltop*
┣ ඬ⃟ ✦ _*#aventura • #adventure*
┣ ඬ⃟ ✦ _*#curar • #heal*
┣ ඬ⃟ ✦ _*#cazar • #hunt • #berburu*
┣ ඬ⃟ ✦ _*#inv • #inventario*
┣ ඬ⃟ ✦ _*#mazmorra • #explorar*
┣ ඬ⃟ ✦ _*#halloween*
┣ ඬ⃟ ✦ _*#christmas • #navidad*
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭♡୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷Gacha 
├• ✐; ₊˚✦୧:  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ ❥ _ *#rollwaifu • #rw • #roll*
┣ ඬ⃟ ❥ _ *#claim • #c • #reclamar*
┣ ඬ⃟ ❥ _ *#harem • #waifus • #claims*
┣ ඬ⃟ ❥ _  *#charimage • #waifuimage • #wimage* 
┣ ඬ⃟ ❥ _ *#charinfo • #winfo • #waifuinfo*
┣ ඬ⃟ ❥ _ *#givechar • #givewaifu • #regalar*
┣ ඬ⃟ ❥ _ *#vote • #votar*
┣ ඬ⃟ ❥_ *#waifusboard • #waifustop • #topwaifus*
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭◇୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Stickers 
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ ☬ _ *#sticker • #s*
┣ ඬ⃟ ☬ _ *#setmeta*
┣ ඬ⃟ ☬ _ *#delmeta*
┣ ඬ⃟ ☬ _ *#pfp • #getpic*
┣ ඬ⃟ ☬ _ *#qc*
┣ ඬ⃟ ☬ _ *#toimg • #img*
┣ ඬ⃟ ☬ _ *#brat • #ttp • #attp*︎ 
┣ ඬ⃟ ☬ _ *#emojimix*
┣ ඬ⃟ ☬ _ *#wm*
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭♡୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Hᴇʀʀᴀᴍɪᴇɴᴛᴀs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 〄 _ *#calcular • #calcular • #cal*
┣ ඬ⃟ 〄 _*#tiempo • #clima*
┣ ඬ⃟ 〄 _ *#horario*
┣ ඬ⃟ 〄 _*#fake • #fakereply*
┣ ඬ⃟ 〄 _*#enhance • #remini • #hd*
┣ ඬ⃟ 〄 _ *#letra*
┣ ඬ⃟ 〄 _*#read • #readviewonce • #ver*
┣ ඬ⃟ 〄 _*#whatmusic • #shazam*
┣ ඬ⃟ 〄 _*#ss • #ssweb*
┣ ඬ⃟ 〄 _*#length • #tamaño*
┣ ඬ⃟ 〄 _*#say • #decir* + [texto]
┣ ඬ⃟ 〄 _*#todoc • #toducument*
┣ ඬ⃟ 〄 _ *#translate • #traducir • #trad*
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭◇୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷ Perfil
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ ☙ _ *#reg • #verificar • #register*
┣ ඬ⃟ ☙ _ *#unreg*
┣ ඬ⃟ ☙ _ *#profile*
┣ ඬ⃟ ☙ _ *#marry* [mension / etiquetar]
┣ ඬ⃟ ☙ _ *#divorce*
┣ ඬ⃟ ☙ _ *#setgenre • #setgenero*
┣ ඬ⃟ ☙ _ *#delgenre • #delgenero*
┣ ඬ⃟ ☙ _ *#setbirth • #setnacimiento*
┣ ඬ⃟ ☙ _ *#delbirth • #delnacimiento*
┣ ඬ⃟ ☙ _ *#setdescription • #setdesc*
┣ ඬ⃟ ☙ _ *#deldescription • #deldesc*
┣ ඬ⃟ ☙ _ *#lb • #lboard* + <Paginá>
┣ ඬ⃟ ☙ _ *#level • #lvl* + <@Mencion>
┣ ඬ⃟ ☙ _ *#comprarpremium • #premium*
┣ ඬ⃟ ☙ _ *#confesiones • #confesar*
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭♡୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Gʀᴜᴘᴏs
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ ♚ _ *#hidetag*
┣ ඬ⃟ ♚ _ *#gp • #infogrupo*
┣ ඬ⃟ ♚ _ *#linea • #listonline*
┣ ඬ⃟ ♚ _ *#setwelcome*
┣ ඬ⃟ ♚ _ *#setbye*
┣ ඬ⃟ ♚ _ *#link*
┣ ඬ⃟ ♚ _ *admins • admin*
┣ ඬ⃟ ♚ _ *#restablecer • #revoke*
┣ ඬ⃟ ♚ _ *#grupo • #group* [open / abrir]
┣ ඬ⃟ ♚ _ *#grupo • #gruop* [close / cerrar]
┣ ඬ⃟ ♚ _ *#kick* [número / mension]
┣ ඬ⃟ ♚ _ *#add • #añadir • #agregar* [número]
┣ ඬ⃟ ♚ _ *#promote* [mension / etiquetar]
┣ ඬ⃟ ♚ _ *#demote* [mension / etiquetar]
┣ ඬ⃟ ♚ _ *#gpbanner • #groupimg*
┣ ඬ⃟ ♚ _ *#gpname • #groupname*
┣ ඬ⃟ ♚ _ *#gpdesc • #groupdesc*
┣ ඬ⃟ ♚ _ *#advertir • #warn • #warning*
┣ ඬ⃟ ♚ _ ︎*#unwarn • #delwarn*
┣ ඬ⃟ ♚ _ *#advlist • #listadv*
┣ ඬ⃟ ♚ _ *#bot on*
┣ ඬ⃟ ♚ _ *#bot off*
┣ ඬ⃟ ♚ _ *#mute* [mension / etiquetar]
┣ ඬ⃟ ♚ _ *#unmute* [mension / etiquetar]
┣ ඬ⃟ ♚ _ *#encuesta • #poll*
┣ ඬ⃟ ♚ _ *#delete • #del*
┣ ඬ⃟ ♚ _ *#fantasmas*
┣ ඬ⃟ ♚ _ *#kickfantasmas*
┣ ඬ⃟ ♚ _ *#invocar • #tagall • #todos*
┣ ඬ⃟ ♚ _ *#setemoji • #setemo*
┣ ඬ⃟ ♚ _ *#listnum • #kicknum*
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭◇୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Anime 
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ 𖤍 _ *#angry • #enojado* + <mencion>
┣ ඬ⃟ 𖤍 _*#bite* + <mencion>
┣ ඬ⃟ 𖤍 _ *#bleh* + <mencion>
┣ ඬ⃟ 𖤍 _ *#blush* + <mencion>
┣ ඬ⃟ 𖤍 _ *#bored • #aburrido* + <mencion>
┣ ඬ⃟ 𖤍 _ *#cry* + <mencion>
┣ ඬ⃟ 𖤍 _ *#cuddle* + <mencion>
┣ ඬ⃟ 𖤍 _ *#dance* + <mencion>
┣ ඬ⃟ 𖤍 _ *#drunk* + <mencion>
┣ ඬ⃟ 𖤍 _ *#eat • #comer* + <mencion>
┣ ඬ⃟ 𖤍 _ *#facepalm* + <mencion>
┣ ඬ⃟ 𖤍 _ *#happy • #feliz* + <mencion>
┣ ඬ⃟ 𖤍 _ *#hug* + <mencion>
┣ ඬ⃟ 𖤍 _ *#impregnate • #preg* + <mencion>
┣ ඬ⃟ 𖤍 _ *#kill* + <mencion>
┣ ඬ⃟ 𖤍 _ *#kiss • #besar* • #kiss2 + <mencion>
┣ ඬ⃟ 𖤍 _ *#laugh* + <mencion>
┣ ඬ⃟ 𖤍 _ *#lick* + <mencion>
┣ ඬ⃟ 𖤍 _ *#love • #amor* + <mencion>
┣ ඬ⃟ 𖤍 _ *#pat* + <mencion>
┣ ඬ⃟ 𖤍 _ *#poke* + <mencion>
┣ ඬ⃟ 𖤍 _ *#pout* + <mencion>
┣ ඬ⃟ 𖤍 _ *#punch* + <mencion>
┣ ඬ⃟ 𖤍 _ *#run* + <mencion>
┣ ඬ⃟ 𖤍 _ *#sad • #triste* + <mencion>
┣ ඬ⃟ 𖤍 _ *#scared* + <mencion>
┣ ඬ⃟ 𖤍 _ *#seduce* + <mencion>
┣ ඬ⃟ 𖤍 _ *#shy • #timido* + <mencion>
┣ ඬ⃟ 𖤍 _ *#slap* + <mencion>
┣ ඬ⃟ 𖤍 _ *#dias • #days*
┣ ඬ⃟ 𖤍 _ *#noches • #nights*
┣ ඬ⃟ 𖤍 _ *#sleep* + <mencion>
┣ ඬ⃟ 𖤍 _ *#smoke* + <mencion>
┣ ඬ⃟ 𖤍 _ *#think* + <mencion>
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭♡୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  NSFW 
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ ❦ _ *#anal* + <mencion>
┣ ඬ⃟ ❦ _ *#waifu*
┣ ඬ⃟ ❦ _ *#bath* + <mencion>
┣ ඬ⃟ ❦ _ *#blowjob • #mamada • #bj* + <mencion>
┣ ඬ⃟ ❦ _ *#boobjob* + <mencion>
┣ ඬ⃟ ❦ _ *#cum* + <mencion>
┣ ඬ⃟ ❦ _ *#fap* + <mencion>
┣ ඬ⃟ ❦ _ *#ppcouple • #ppcp*
┣ ඬ⃟ ❦ _ *#footjob* + <mencion>
┣ ඬ⃟ ❦ _ *#fuck • #coger • #fuck2* + <mencion>
┣ ඬ⃟ ❦ _ *#cafe • #coffe*
┣ ඬ⃟ ❦ _ *#violar • #perra + <mencion>
┣ ඬ⃟ ❦ _ *#grabboobs* + <mencion>
┣ ඬ⃟ ❦ _ *#grop* + <mencion>
┣ ඬ⃟ ❦ _ *#lickpussy* + <mencion>
┣ ඬ⃟ ❦ _ *#rule34 • #r34* + [Tags]
┣ ඬ⃟ ❦ _ *#sixnine • #69* + <mencion>
┣ ඬ⃟ ❦ _ *#spank • #nalgada* + <mencion>
┣ ඬ⃟ ❦ _ *#suckboobs* + <mencion>
┣ ඬ⃟ ❦ _ *#undress • #encuerar* + <mencion>
┣ ඬ⃟ ❦ _*#yuri • #tijeras* + <mencion>
╘━ꥇ۬⏝۬︶⊹̇︶ٜ⊹︶ׅ⊹ֺ︶߭⊹︶۬⊹︶ꥇ̇ꥈׄ̇⏝۬ꥇ

✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭◇୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
├┈ ↷  Juegos 
├• ✐; ₊˚✦୧︰  .
├┈・──・──・﹕₊˚ ✦・୨୧・
┣ ඬ⃟ ♡ _ *#amistad • #amigorandom* 
┣ ඬ⃟ ♡ _ *#chaqueta • #jalamela*
┣ ඬ⃟ ♡ _ *#chiste*
┣ ඬ⃟ ♡_ *#consejo* 
┣ ඬ⃟ ♡ _ *#doxeo • #doxear* + <mencion>
┣ ඬ⃟ ♡ _ *#facto*
┣ ඬ⃟ ♡ _ *#formarpareja*
┣ ඬ⃟ ♡ _ *#formarpareja5*
┣ ඬ⃟ ♡ _ *#frase*
┣ ඬ⃟ ♡ _ *#huevo*
┣ ඬ⃟ ♡ _ *#chupalo* + <mencion>
┣ ඬ⃟ ♡ _ *#aplauso* + <mencion>
┣ ඬ⃟ ♡ _ *#marron* + <mencion>
┣ ඬ⃟ ♡ _ *#suicidar*
┣ ඬ⃟ ♡ _ *#iq • #iqtest* + <mencion>
┣ ඬ⃟ ♡ _ *#meme*
┣ ඬ⃟ ♡ _ *#morse*
┣ ඬ⃟ ♡ _ *#nombreninja*
┣ ඬ⃟ ♡ _ *#paja • #pajeame* 
┣ ඬ⃟ ♡ _ *#personalidad* + <mencion>
┣ ඬ⃟ ♡ _ *#piropo*
┣ ඬ⃟ ♡ _ *#pregunta*
┣ ඬ⃟ ♡ _ *#ship • #pareja*
┣ ඬ⃟ ♡ _ *#sorteo*
┣ ඬ⃟ ♡ _ *#top*
┣ ඬ⃟ ♡ _ *#formartrio* + <mencion>
┣ ඬ⃟ ♡ _ *#ahorcado*
┣ ඬ⃟ ♡ _ *#mates • #matematicas*
┣ ඬ⃟ ♡ _ *#ppt*
┣ ඬ⃟ ♡ _ *#sopa • #buscarpalabra*
┣ ඬ⃟ ♡ _ *#pvp • #suit* + <mencion>
┣ ඬ⃟ ♡ _ *#ttt*
╰┉ͦ━ᷫ━ⷭ┈ ⃘⵿݂۪۪۪࣭࣭፝۬۬۬͞☬ꫂ❀ᰰ᷒|²⁰|²|²³ ♡┈⊷ꫂ፝۬۬۬͞ᜓ⃘݂۪۪۪࣭࣭.─𖤍⃟ᬽ፝֟━❥ᰰຼ᭢╯
  `.trim()

  await conn.sendMessage(m.chat, { 
      text: txt,
      contextInfo: {
          mentionedJid: [m.sender, userId],
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterJid: channelRD.id,
              newsletterName: channelRD.name,
              serverMessageId: -1,
          },
          forwardingScore: 999,
          externalAdReply: {
              title: wm,
              body: dev,
              thumbnailUrl: banner,
              sourceUrl: redes,
              mediaType: 1,
              showAdAttribution: true,
              renderLargerThumbnail: true,
          },
      },
  }, { quoted: m })

}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler

function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60)
    let minutes = Math.floor((ms / (1000 * 60)) % 60)
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
    return `${hours}h ${minutes}m ${seconds}s`
}
