createCube(1)
createCube(2)
createCube(3)

function createCube(size) {
  let cubeTop = '',
  cubeBot = ''
  
  new Array(size)
    .fill()
    .forEach((_, i) => {
      cubeTop += ' '.repeat(size - i - 1)
        + '/\\'.repeat(i + 1)
        + '_\\'.repeat(size)
        + '\n'
      cubeBot += ' '.repeat(i)
        + '\\/'.repeat(size - i)
        + '_/'.repeat(size)
        + '\n'
    })
  
  return cubeTop + cubeBot.slice(0, -1)
}
