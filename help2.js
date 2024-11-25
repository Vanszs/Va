
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu2 = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no) => {
return`
 𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢
 ID : @${sender.split('@')[0]}
 Nama : ${namenya}
 Premium : ${premnya}

 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
 Time : ${jam} WIB
 Date : ${tanggal}
 Terdaftar : ${usernya}
 Room Chat : ${romnya}

 *MAIN MENU*
 > ${prefix}menu
 > ${prefix}onwerm (Menu Owner)
 > ${prefix}rules
 > ${prefix}owner
 > ${prefix}infobot
 > ${prefix}donasi
 > ${prefix}sewabot
 > ${prefix}gcbot

 *USER MENU*
 > ${prefix}verify
 > ${prefix}report
 > ${prefix}request
 > ${prefix}transfer
 > ${prefix}menfess
 > ${prefix}buatroom
 > ${prefix}secretchat
 > ${prefix}cekprem
 > ${prefix}daftarprem
 > ${prefix}changename

 *STORE MENU (Khusus Premium)*
 > ${prefix}kali 1 2
 > ${prefix}bagi 1 2
 > ${prefix}kurang 1 2
 > ${prefix}tambah 1 2
 > ${prefix}dellist key
 > ${prefix}addlist key@response
 > ${prefix}update key@response
 > ${prefix}done <reply orderan>
 > ${prefix}proses <reply orderan>
 > ${prefix}list <only group>
 > ${prefix}shop <only group>
 
 *GROUP MENU*
 > ${prefix}delete
 > ${prefix}revoke
 > ${prefix}tagall
 > ${prefix}hidetag
 > ${prefix}setdesc
 > ${prefix}linkgrup
 > ${prefix}infogroup
 > ${prefix}setppgrup
 > ${prefix}setnamegrup
 > ${prefix}group open
 > ${prefix}group close
 > ${prefix}antilink on
 > ${prefix}antilink off
 > ${prefix}welcome on
 > ${prefix}welcome off
 > ${prefix}tiktokauto on
 > ${prefix}tiktokauto off
 > ${prefix}kick @tag
 > ${prefix}demote @tag
 > ${prefix}promote @tag
 
 *DOWNLOAD MENU* ( Beberapa sedang perbaikan : D )
 > ${prefix}tiktok
 > ${prefix}ytmp3
 > ${prefix}ytmp4
 > ${prefix}pinterest
 > ${prefix}playmp3
 > ${prefix}playmp4
 > ${prefix}gitclone
 > ${prefix}mediafire
 > ${prefix}wikimedia
 > ${prefix}soundcloud
 > ${prefix}infogempa

 *CONVERT MENU*
 > ${prefix}tts
 > ${prefix}ttp
 > ${prefix}ttp2
 > ${prefix}attp
 > ${prefix}attp2
 > ${prefix}tourl
 > ${prefix}upload
 > ${prefix}toimg
 > ${prefix}toimage
 > ${prefix}tomp3
 > ${prefix}toaudio
 > ${prefix}tomp4
 > ${prefix}tovideo
 > ${prefix}emojimix
 > ${prefix}emojmix
 > ${prefix}emojinua
 > ${prefix}mixemoji
 > ${prefix}stiker
 > ${prefix}sticker
 > ${prefix}sgif
 > ${prefix}stikergif
 > ${prefix}stickergif
 > ${prefix}swm
 > ${prefix}stikerwm
 > ${prefix}stickerwm
 > ${prefix}smeme
 > ${prefix}memestiker
 > ${prefix}stikermeme
 > ${prefix}stickermeme
 > ${prefix}takesticker
 > ${prefix}emojinua2
 > ${prefix}mixemoji2
 > ${prefix}emojmix2
 > ${prefix}emojimix2
 
 *ANONYMOUS MENU*
 > ${prefix}buatroom 628xxx
 > ${prefix}room <only owner>
 > ${prefix}stopchat <only room>
 > ${prefix}menfess 628xx|bot|hai

 *SOSMED MENU*
 > ${prefix}pricelist <layanan>
 > ${prefix}order <cara order>
 > ${prefix}like jumlah|target
 > ${prefix}view jumlah|target
 > ${prefix}follower jumlah|username
 > ${prefix}cekstatus <idtrx>
 > ${prefix}komisi <owner only>
 > ${prefix}tarikkomisi <owner only>
 
 *RANDOM MENU* 
 > ${prefix}cecan
 > ${prefix}cogan
 > ${prefix}mobil
 > ${prefix}islamic
 > ${prefix}darkjokes
 > ${prefix}boneka
 > ${prefix}wallhp
 > ${prefix}tatasurya
 > ${prefix}programing

 *PRIMBON MENU* ( kayake error, kalo ga dibales berarti error :D )
 > ${prefix}ramaljodoh
 > ${prefix}ramalanjodoh
 > ${prefix}nomorhoki
 > ${prefix}artimimpi
 > ${prefix}artinama
 > ${prefix}sifatusaha
 > ${prefix}tafsirmimpi
 > ${prefix}pasangan
 > ${prefix}suamiistri
 > ${prefix}ramalcinta
 > ${prefix}ramalancinta
 > ${prefix}ramaljodohbali
 > ${prefix}ramalanjodohbali
 > ${prefix}cocoknama
 > ${prefix}kecocokannama
 > ${prefix}cocokpasangan
 > ${prefix}kecocokanpasangan


 *INFORMATION MENU*
 > ${prefix}gempa
 > ${prefix}jadwaltv
 > ${prefix}gempanow
 > ${prefix}bioskopnow
 > ${prefix}latintoaksara
 > ${prefix}aksaratolatin

 *FUN MENU*
 > ${prefix}goblokcek 
 > ${prefix}jelekcek 
 > ${prefix}gaycek
 > ${prefix}lesbicek
 > ${prefix}gantengcek 
 > ${prefix}cantikcek
 > ${prefix}begocek 
 > ${prefix}suhucek
 > ${prefix}pintercek
 > ${prefix}jagocek
 > ${prefix}nolepcek
 > ${prefix}babicek
 > ${prefix}bebancek
 > ${prefix}baikcek
 > ${prefix}jahatcek
 > ${prefix}anjingcek
 > ${prefix}haramcek
 > ${prefix}pakboycek
 > ${prefix}pakgirlcek
 > ${prefix}sangecek 
 > ${prefix}bapercek
 > ${prefix}fakboycek
 > ${prefix}alimcek
 > ${prefix}suhucek
 > ${prefix}fakgirlcek
 > ${prefix}kerencek
 > ${prefix}wibucek

 *WALLPAPER MENU*
 > ${prefix}milf
 > ${prefix}loli
 > ${prefix}wallml
 > ${prefix}waifu
 > ${prefix}husbu
 > ${prefix}cosplay
 > ${prefix}ppcouple
 > ${prefix}wallpaperislami
 > ${prefix}wallpaperinori
 > ${prefix}wallpaperanime
 > ${prefix}wallpapergamer
 > ${prefix}wallpapermeme
 > ${prefix}wallpaperprogamer
 > ${prefix}wallpaperteknologi
 > ${prefix}wallpapercyber

 `
}
