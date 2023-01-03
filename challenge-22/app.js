const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]

checkStepNumbers(systemNames, stepNumbers)

checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])

function checkStepNumbers(systemNames, stepNumbers) {
  const newSN = systemNames.map((e, i) => [e, stepNumbers[i]])
  
  return [...new Set(systemNames)]
    .map(e => newSN.filter(el => e === el[0]))
    .map(e => e.map(e => e[1]))
    .every(e => e.slice(1).every((el, i) => el > e[i]))  
}
