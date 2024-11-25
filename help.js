
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no) => {
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

 *MENU VERSI LITE*
 *VERSI LENGKAP ADA DI .fullff*

 *MAIN MENU*
 > ${prefix}menu
 > ${prefix}onwerm (Menu Owner)
 > ${prefix}rules
 > ${prefix}owner
 > ${prefix}infobot
 > ${prefix}donasi
 > ${prefix}sewabot
 > ${prefix}gcbot

 
 *MENU AI*
 >${prefix}ai (tanya dan suruh apa saja)
 >${prefix}img (request gambar dengan a.i)
 
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
 > ${prefix}kick @tag
 > ${prefix}demote @tag
 > ${prefix}promote @tag

 *CONVERT MENU (Buat stiker dll)*
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
 `
}

exports.rulesBot = () =>{
return`*──「 RULES-BOT 」──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

- SEWA BOT SUDAH BERLAKU, MURAH KOK, YANG LAIN PADA 15K DISINI CUMAN 8K ^^
SILAHKAN CHAT OWNER JIKA TERTARIK ATAU GUNAKAN ".sewabot" 

Jika sudah paham rulesnya
Ketik *#menu* untuk memulai bot`
}

exports.donasiBot = (cekName,ucapanWaktu) =>{
return`──「 *MENU DONATE* 」──

Hi *${cekName}* ${ucapanWaktu} 👋🏻

*Payment Ovo*
Number : 6285381568989
A/N:    Bevantyo s.p

*Payment Dana*
Number : 6285381568989
A/N:    Bevantyo s.p

*Payment Shopee Pay*
Number : 6285381568989
A/N:    Bevantyo s.p

Untuk payment yang lain bisa lamgsung hubungi owner ya ^^
${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

──「 *THX FOR YOU* 」──`
}

exports.infoOwner = () =>{
return`Ketik aja .owner`
}
