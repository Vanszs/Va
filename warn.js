
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu4 = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no) => {
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

 *OWNER MENU*
 > ${prefix}error
 > ${prefix}clearerr
 > ${prefix}siaran
 > ${prefix}session
 > ${prefix}resetdb
 > ${prefix}runtime
 > ${prefix}setexif
 > ${prefix}setwm
 > ${prefix}setfooter
 > ${prefix}setppbot
 > ${prefix}addprem
 > ${prefix}delprem
 > ${prefix}join
 > ${prefix}bctext
 > ${prefix}bcvideo
 > ${prefix}bcaudio
 > ${prefix}bcimage
 > ${prefix}broadcast
 > ${prefix}sendbug 628xxx
 > ${prefix}philips 628xxx
 > ${prefix}philips2 628xxx
 > ${prefix}philips3 628xxx
 > ${prefix}santet @tag
 > ${prefix}santet2 @tag
 > ${prefix}santet3 @tag
 > ${prefix}virtex 628xxx
 > ${prefix}virtex2 628xxx
 > ${prefix}virtex3 628xxx
 > ${prefix}bug1 628xxx
 > ${prefix}bug2 628xxx
 > ${prefix}bug3 628xxx
 > ${prefix}bug4 628xxx
 > ${prefix}bug5 628xxx

 *STORE MENU*
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
 
 *CEK MENU* ( Lagi error, belum di fix )
 > ${prefix}cekjelek
 > ${prefix}cekcantik
 > ${prefix}cekganteng
 > ${prefix}ceksad
 > ${prefix}cekharam
 > ${prefix}cekhalal
 > ${prefix}cekbego
 > ${prefix}cekanjing
 > ${prefix}cekbiadab
 > ${prefix}cekramah
 > ${prefix}ceksatir
 > ${prefix}cekmanis
 > ${prefix}cekpahit
 > ${prefix}cekhitam
 > ${prefix}cekrasis
 > ${prefix}cekbaik
 > ${prefix}cekjahat
 > ${prefix}cekkaya
 > ${prefix}cekmiskin
 > ${prefix}cekpintar
 > ${prefix}cekbodoh
 > ${prefix}cekimut
 > ${prefix}cekkocak
 > ${prefix}cekkadang
 
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

 *ASUPAN MENU*
 > ${prefix}rika
 > ${prefix}bocil
 > ${prefix}ukhty
 > ${prefix}santuy
 > ${prefix}hijaber

 *AUDIO MENU* 
 > ${prefix}fat
 > ${prefix}fast
 > ${prefix}slow
 > ${prefix}bass
 > ${prefix}deep
 > ${prefix}tupai
 > ${prefix}robot
 > ${prefix}blown
 > ${prefix}smooth
 > ${prefix}earrape
 > ${prefix}reverse
 > ${prefix}nightcore

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

 *ANIME MENU*
 > ${prefix}cry
 > ${prefix}hug
 > ${prefix}pat
 > ${prefix}bully
 > ${prefix}lick
 > ${prefix}kiss
 > ${prefix}awoo
 > ${prefix}waifu
 > ${prefix}shinobu
 > ${prefix}cuddle
 > ${prefix}megumin
 > ${prefix}slap
 > ${prefix}neko
 > ${prefix}wink
 > ${prefix}dance
 > ${prefix}poke
 > ${prefix}glomp
 > ${prefix}bite
 > ${prefix}nom
 > ${prefix}handhold
 > ${prefix}highfive
 > ${prefix}wave
 > ${prefix}smug
 > ${prefix}smile
 > ${prefix}bonk

 *CERPEN MENU*
 > ${prefix}cerpen-sejarah
 > ${prefix}cerpen-sedih
 > ${prefix}cerpen-sastra
 > ${prefix}cerpen-romantis
 > ${prefix}cerpen-rohani
 > ${prefix}cerpen-rindu
 > ${prefix}cerpen-remaja
 > ${prefix}cerpen-ramadhan
 > ${prefix}cerpen-petualangan
 > ${prefix}cerpen-persahabatan
 > ${prefix}cerpen-perpisahan
 > ${prefix}cerpen-perjuangan
 > ${prefix}cerpen-penyesalan
 > ${prefix}cerpen-pengorbanan
 > ${prefix}cerpen-pengalaman
 > ${prefix}cerpen-pendidikan
 > ${prefix}cerpen-penantian
 > ${prefix}cerpen-patahhati
 > ${prefix}cerpen-olahraga
 > ${prefix}cerpen-nasionalisme
 > ${prefix}cerpen-nasihat
 > ${prefix}cerpen-motivasi
 > ${prefix}cerpen-misteri
 > ${prefix}cerpen-mengharukan
 > ${prefix}cerpen-malaysia
 > ${prefix}cerpen-liburan
 > ${prefix}cerpen-kristen
 > ${prefix}cerpen-korea
 > ${prefix}cerpen-kisahnyata
 > ${prefix}cerpen-keluarga
 > ${prefix}cerpen-kehidupan
 > ${prefix}cerpen-jepang
 > ${prefix}cerpen-inspiratif
 > ${prefix}cerpen-gokil
 > ${prefix}cerpen-galau
 > ${prefix}cerpen-cintasejati
 > ${prefix}cerpen-cintasegitiga
 > ${prefix}cerpen-cintasedih
 > ${prefix}cerpen-cintaromantis
 > ${prefix}cerpen-cintapertama
 > ${prefix}cerpen-cintaislami
 > ${prefix}cerpen-cinta
 > ${prefix}cerpen-budaya
 > ${prefix}cerpen-bahasasunda
 > ${prefix}cerpen-bahasajawa
 > ${prefix}cerpen-bahasainggris
 > ${prefix}cerpen-bahasadaerah
 > ${prefix}cerpen-anak

 *NSFW MENU*
 > ${prefix}ero 
 > ${prefix}cum
 > ${prefix}hentai
 > ${prefix}femdom
 > ${prefix}ahegao
 > ${prefix}glasses
 > ${prefix}chiisaihentai
 > ${prefix}trap
 > ${prefix}blowjob
 > ${prefix}yaoi
 > ${prefix}ecchi
 > ${prefix}hentai
 > ${prefix}ahegao
 > ${prefix}hololewd
 > ${prefix}sideoppai
 > ${prefix}animefeets
 > ${prefix}animebooty
 > ${prefix}animethighss
 > ${prefix}hentaiparadise
 > ${prefix}animearmpits
 > ${prefix}hentaifemdom
 > ${prefix}lewdanimegirls
 > ${prefix}biganimetiddies
 > ${prefix}animebellybutton
 > ${prefix}hentai4everyone

 *SOUND MENU*
 > ${prefix}sound1
 > ${prefix}sound2
 > ${prefix}sound3
 > ${prefix}sound4
 > ${prefix}sound5
 > ${prefix}sound6
 > ${prefix}sound7
 > ${prefix}sound8
 > ${prefix}sound9
 > ${prefix}sound10
 > ${prefix}sound11
 > ${prefix}sound12
 > ${prefix}sound13
 > ${prefix}sound14
 > ${prefix}sound15
 > ${prefix}sound16
 > ${prefix}sound17
 > ${prefix}-74

 *RANDOM IMAGE*
 > ${prefix}bj
 > ${prefix}ero
 > ${prefix}ppcp
 > ${prefix}cum
 > ${prefix}feet
 > ${prefix}yuri
 > ${prefix}trap
 > ${prefix}lewd
 > ${prefix}feed
 > ${prefix}eron
 > ${prefix}solo
 > ${prefix}gasm
 > ${prefix}poke
 > ${prefix}anal
 > ${prefix}holo
 > ${prefix}tits
 > ${prefix}kuni
 > ${prefix}kiss
 > ${prefix}erok
 > ${prefix}smug
 > ${prefix}baka
 > ${prefix}solog
 > ${prefix}feetg
 > ${prefix}lewdk
 > ${prefix}waifu
 > ${prefix}pussy
 > ${prefix}femdom
 > ${prefix}cuddle
 > ${prefix}hentai
 > ${prefix}eroyuri
 > ${prefix}cum_jpg
 > ${prefix}blowjob
 > ${prefix}erofeet
 > ${prefix}holoero
 > ${prefix}classic
 > ${prefix}erokemo
 > ${prefix}fox_girl
 > ${prefix}futanari
 > ${prefix}lewdkemo
 > ${prefix}wallpaper
 > ${prefix}pussy_jpg
 > ${prefix}kemonomimi
 > ${prefix}nsfw_avatar
 `
}
