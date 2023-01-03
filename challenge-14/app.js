getOptimalPath([[0], [2, 3]])

getOptimalPath([[0], [3, 4], [9, 8, 1]])

getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])

function getOptimalPath(path) {
  return path
    .reverse()
    .reduce((acc, curr) => curr.map((e, i) =>  
      e + Math.min(acc[i], acc[i + 1])
    ))[0]
}
