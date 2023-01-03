const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

distributeGifts(packOfGifts, reindeers)

function distributeGifts(packOfGifts, reindeers) {
  return Math.floor(reindeers.reduce((a, r) => 
    a + (r.length * 2), 0)
    / packOfGifts.reduce((a, g) => a + g.length, 0)
  )
}
