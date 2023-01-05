carryGifts(['game', 'bike', 'book', 'toy'], 10)

carryGifts(['game', 'bike', 'book', 'toy'], 7)

carryGifts(['game', 'bike', 'book', 'toy'], 4)

carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)

function carryGifts(gifts, maxWeight) {
  return gifts
    .reduce((acc, curr) => {
      const l = acc.length - 1,
      w = curr.length

      if (acc[l].w + w <= maxWeight) {
        acc[l].w += w
        acc[l].g.push(curr)
      }
      else if (w <= maxWeight) acc.push({ w, g: [curr] })

      return acc
    }, [{ w: 0, g: [] }])
    .filter(e => e.w)
    .map(e => e.g.join(' '))

  //-------------------------------------------------------------------------------
  
  // 260pts - Regex solution
  // const regex = new RegExp(`\\b(\\w ?){1,${maxWeight}}(?= |$)`, 'g')
  // return gifts.join(' ').match(regex) || []
}
