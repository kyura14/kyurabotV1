const free = 500
const prem = 5000
let handler = async (m, { isPrems }) => {
  let time = global.DATABASE._data.users[m.sender].lastclaim + 86400000
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim < 86400000) throw `anda sudah ☕ngopi hari ini\nmohon tunggu ☕ngopi selama ${msToTime(time - new Date())} lagi`
  global.DATABASE._data.users[m.sender].exp += isPrems ? prem : free
  m.reply(`☕slurppp....akhhhhh pahitnya seperti cinta ku yg diabaikan wkwk kyura ada ada aja\nanda sudah ☕ngopi hari ini dan mendapat +${isPrems ? prem : free} XP`)
  global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['ngopi']
handler.tags = ['xp']
handler.command = /^(ngopi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 15

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit"
}
