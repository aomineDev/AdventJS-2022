decorateTree('B P R P')

decorateTree('B B')

function decorateTree(base) {
  const rules = {
    'RB': 'P',
    'BR': 'P',
    'PR': 'B',
    'RP': 'B',
    'PB': 'R',
    'BP': 'R',
    'BB': 'B',
    'RR': 'R',
    'PP': 'P'
  }

  let z = base.split(' ')

  const result = new Array(z.length - 1).fill().map(() => {
    z = z.slice(1).map((e, i) => rules[e + z[i]])

    return z.join(' ')
  })

  result.unshift(base)

  return result.reverse()

  //-------------------------------------------------------------------------------

  // const rules = {
  //   'RB': 'P',
  //   'BR': 'P',
  //   'PR': 'B',
  //   'RP': 'B',
  //   'PB': 'R',
  //   'BP': 'R',
  //   'BB': 'B',
  //   'RR': 'R',
  //   'PP': 'P'
  // }

  // let z = base.split(' ')
  // const result = [base]

  // new Array(z.length - 1).fill().forEach(() => {
  //   z = z.slice(1).map((e, i) => rules[e + z[i]])

  //   result.unshift(z.join(' '))
  // })

  // return result

  //-------------------------------------------------------------------------------

  // const rules = {
  //   'RB': 'P',
  //   'BR': 'P',
  //   'PR': 'B',
  //   'RP': 'B',
  //   'PB': 'R',
  //   'BP': 'R',
  //   'BB': 'B',
  //   'RR': 'R',
  //   'PP': 'P'
  // }

  // const z = base.split(' ')

  // return new Array(z.length - 1).fill()
  //   .reduce(acc => {
  //     const x = acc[0]
  //       .slice(1)
  //       .map((e, i) => rules[e + acc[0][i]])

  //     acc.unshift(x)

  //     return acc
  //   }, [z])
  //   .map(e => e.join(' '))
}
