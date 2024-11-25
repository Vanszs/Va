var monoSpace = '```'

exports.listmenu3 = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam,no) => {
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
 
 `
}
