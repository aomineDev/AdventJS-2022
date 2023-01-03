getMaxGifts([12, 3, 11, 5, 7], 20, 3) 
getMaxGifts([50], 15, 1)
getMaxGifts([50], 100, 1)
getMaxGifts([50, 70], 100, 1)
getMaxGifts([50, 70, 30], 100, 2)
getMaxGifts([50, 70, 30], 100, 3)
getMaxGifts([50, 70, 30], 100, 4)

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  //Algoritmo - Backtraking with iterations
  return Math.max(...giftsCities
    .slice(1)
    .reduce((acc, curr) => {
      const combinations = acc
        .filter(e => e.length < maxCities)
        .map(e => e.concat(curr))

      return acc.concat(combinations)
    }, [[], [giftsCities[0]]])
    .map(e => e.reduce((a, c) => a + c, 0))
    .filter(e => e <= maxGifts)
  )

//-------------------------------------------------------------------------------

  // Algoritmo - Fuerza Bruta
  // return Math.max(...new Array(2 ** giftsCities.length)
  //   .fill()
  //   .map((_, i) => giftsCities
  //     .filter((_, j) => i & (1 << j))
  //   )
  //   .filter(e => e.length <= maxCities)
  //   .map(e => e.reduce((acc, curr) => acc + curr, 0))
  //   .filter(e => e <= maxGifts)
  // )
}
