fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `)

fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?")

function fixLetter(letter) {
  return letter
    .trim()
    .replace(/,/g, ', ')
    .replace(/\s+/g, ' ')
    .replace(/\s([,\.\?\!])/g, '$1')
    .replace(/\?+/g, '?')
    .replace(/santa\sclaus/ig, 'Santa Claus')
    .replace(/([^.\?\!])$/, '$1.')
    .replace(/^.|[\?\!\.]\s[a-z]/gi, e => e.toUpperCase())
}
