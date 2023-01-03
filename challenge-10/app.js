checkJump([1, 3, 8, 5, 2])

checkJump([1, 7, 3, 5])

function checkJump(heights) {
  const max = Math.max(...heights)
  const indexOfMax = heights.lastIndexOf(max)

  const uper = heights.splice(0, indexOfMax + 1)
    .filter(e => e !== max)

  const r1 = uper
    .slice(1)
    .every((e, i) => e >= uper[i])

  const r2 = heights
    .slice(1)
    .every((e, i) => e <= heights[i])

  return !!uper.length && !!heights.length && r1 && r2
}
