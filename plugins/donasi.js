let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • XL [081998903280]
│ • Gopay/OVO/Dana [081998903280]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281998903280
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
