let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  await m.reply(subscribe yaa\n youtube.com/c/KYURA
  m.reply(text + '\n' + users.map(v => '@' + v.replace(/@.+/, '')).join`\n`, null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.command = /^tagall/i

handler.admin = true
handler.group = true

module.exports = handler
