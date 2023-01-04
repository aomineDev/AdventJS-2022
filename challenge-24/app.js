// canExit([
//   [' ', ' ', 'W', ' ', 'S'],
//   [' ', ' ', ' ', ' ', ' '],
//   [' ', ' ', ' ', 'W', ' '],
//   ['W', 'W', ' ', 'W', 'W'],
//   [' ', ' ', ' ', ' ', 'E']
// ])

canExit([
  [' ', ' ', 'W', 'W', 'S'],
  [' ', ' ', ' ', 'W', ' '],
  [' ', 'W', ' ', ' ', ' '],
  [' ', 'W', 'W', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
])

// canExit([
//   [' ', ' ', ' ', 'W', 'S'],
//   [' ', 'W', ' ', ' ', ' '],
//   [' ', 'W', 'W', 'W', ' '],
//   [' ', 'W', ' ', 'W', 'W'],
//   [' ', ' ', ' ', ' ', 'E']
// ])


// canExit([
//   [' ', ' ', 'W', 'W', 'S'],
//   [' ', ' ', ' ', 'W', ' '],
//   [' ', ' ', ' ', 'W', ' '],
//   ['W', 'W', ' ', 'W', 'W'],
//   [' ', ' ', ' ', ' ', 'E']
// ])

function canExit(maze) {
  const a = maze[0].findIndex(e => e === 'S')
  const b = maze[maze.length - 1].findIndex(e => e === 'E')

  function fillRow (index) {
    maze[index] = maze[index]
      .join('').split('W')
      .map(e => e.replace(/\s*S\s*/g, e => 'S'.repeat(e.length)))
      .join('W').split('')
  }
  maze.forEach((e, ind, arr) => {
    // const a = e.join('').replace(/\s/g, 'x')
    // console.log(a)
    if (ind === 0) return fillRow(ind)
    
    e.forEach((e, i) => {
      if (e === ' ' && maze[ind-1][i] === 'S') maze[ind][i] = 'S'
    }) 

    fillRow(ind)
  })

  console.log(maze)
}

// console.log('012346'.replace(/2.*5/, e => 'x'.repeat(e.length)))