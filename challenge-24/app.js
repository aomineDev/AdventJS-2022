canExit([
  ['W', ' ', 'W', ' ', 'S'],
  [' ', ' ', ' ', 'W', ' '],
  [' ', 'W', ' ', 'W', ' '],
  [' ', 'W', ' ', ' ', ' '],
  [' ', 'W', 'W', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
])

canExit([
  [' ', ' ', 'W', 'W', ' '],
  [' ', ' ', ' ', 'W', 'E'],
  [' ', 'W', ' ', 'W', ' '],
  ['S', 'W', ' ', 'W', 'W'],
  [' ', ' ', 'W', ' ', ' ']
])

canExit([['E', ' ', ' ', ' ', 'S']])

function canExit(maze) {
  function fillRow (rowI) {
    maze[rowI] = maze[rowI]
      .join('').split('W')
      .map(e => e.replace(/\s*S\s*/g, e => 'S'.repeat(e.length)))
      .join('W').split('')
  }

  function findPath (currI, prevOrNextI) {
    if (maze[prevOrNextI]) {
      maze[currI].forEach((e, i) => {
        if (e === ' ' && maze[prevOrNextI][i] === 'S') maze[currI][i] = 'S'
      })
    }

    fillRow(currI)
  }

  maze.forEach((_, currI) => {
    const prevI = currI - 1
    const nextI = currI + 1

    findPath(currI, prevI)

    maze.slice(0, currI).forEach((_, i, arr) => {
      const nextI = arr.length - i
      const currI = nextI - 1

      findPath(currI, nextI)
    })

    maze.slice(1, nextI).forEach((_, prevI) => {
      const currI = prevI + 1

      findPath(currI, prevI)
    })
  })

  const ExitIndexGlobal = maze.flat().join('').indexOf('E')
  const x = Math.floor(ExitIndexGlobal / maze[0].length)
  const y = ExitIndexGlobal % maze[0].length

  const hasExit = [
    [x, y - 1],
    [x, y + 1],
    [x - 1, y],
    [x + 1, y]
  ]

  return hasExit
    .filter(arr => maze[arr[0]])
    .filter(arr => maze[arr[0]][arr[1]])
    .some(arr => ['S'].includes(maze[arr[0]][arr[1]]))

  //-------------------------------------------------------------------------------

  // 900 pts - wrapping maze with walls 
  // maze = [
  //   new Array(maze[0].length+2).fill('W'),
  //   ...maze.map(e => ['W', ...e, 'W']),
  //   new Array(maze[0].length+2).fill('W')
  // ]

  // function fillRow (index) {
  //   maze[index] = maze[index]
  //     .join('').split('W')
  //     .map(e => e.replace(/\s*S\s*/g, e => 'S'.repeat(e.length)))
  //     .join('W').split('')
  // }

  // function findPath (currI, prevOrNextI) {
  //   maze[currI].forEach((e, i) => {
  //     if (e === ' ' && maze[prevOrNextI][i] === 'S') maze[currI][i] = 'S'
  //   })

  //   fillRow(currI)
  // }

  // maze.slice(1).forEach((_, prevI) => {
  //   const currI = prevI + 1
  //   const nextI = currI + 1

  //   findPath(currI, prevI)

  //   maze.slice(0, currI).forEach((_, i, arr) => {
  //     const nextI = arr.length - i
  //     const currI = nextI - 1

  //     findPath(currI, nextI)
  //   })

  //   maze.slice(1, nextI).forEach((_, prevI) => {
  //     const currI = prevI + 1

  //     findPath(currI, prevI)
  //   })
  // })

  // const ExitIndexGlobal = maze.flat().join('').indexOf('E')
  // const x = Math.floor(ExitIndexGlobal / maze[0].length)
  // const y = ExitIndexGlobal % maze[0].length

  // const hasExit = [
  //   maze[x][y - 1],
  //   maze[x][y + 1],
  //   maze[x - 1][y],
  //   maze[x + 1][y]
  // ].includes('S')

  // return hasExit

  //-------------------------------------------------------------------------------

  // 3000pts - with recursion
  // const r = ([x, y]) => {
  //   const val = maze[x][y]
  //   delete maze[x][y]
  //   return (
  //     ['E'].includes(val) +
  //     [
  //       [x + 1, y],
  //       [x - 1, y],
  //       [x, y + 1],
  //       [x, y - 1]
  //     ]
  //       .filter((arr) => maze[arr[0]])
  //       .filter(arr => ['E', ' '].includes(maze[arr[0]][arr[1]]))
  //       .some(r)
  //   )
  // }

  // const n = maze.flat().join('').indexOf('S')
  // const x = ~~(n / maze[0].length)
  // const y = n % maze[0].length

  // return !!r([x, y])
}
