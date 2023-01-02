const reindeerTypes = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 1 },
  { type: 'Diesel', weightCapacity: 5 }
]

const gifts = [
  { country: 'Spain', weight: 30 },
  { country: 'France', weight: 17 },
  { country: 'Italy', weight: 50 }
]

howManyReindeers(reindeerTypes, gifts)


function howManyReindeers(reindeerTypes, gifts) {
  //Les doy un pro tip
  // Sumen todos los que pueden usar
  // y hagan
  // los regalos a entregar / la suma de los que pueden usar
  // y vean que les da, es todo lo que dire

  //--------------------------------------------------------------------------------------------

  // 10 pts - using recursivity
  // function findCombination (arr, target) {
  //   function backtrack (temp, target) {
  //     if (target === 0) return temp

  //     arr.forEach(({ weightCapacity: wc }, i) => {
  //       if (target - wc >= 0) {
  //         temp[i].num++
  //         target -= wc
  //       }
  //     })
  
  //     return backtrack(temp, target)
  //   }

  //   const temp = arr.map(({ type }) => ({ type, num: 0 }))

  //   return backtrack(temp, target)
  // }

  // reindeerTypes.sort((a, b) => a.weightCapacity - b.weightCapacity)

  // return gifts.map(({ country, weight }) => {
  //   const validReindeers = reindeerTypes.filter(
  //     ({ weightCapacity: wc }) => wc < weight
  //   )

  //   const reindeers = findCombination(validReindeers, weight).reverse()

  //     return { country, reindeers }
  // })

  //--------------------------------------------------------------------------------------------

  // Error: Script execution timed out after 1000ms - Usinng backtracking algorithm
  // function combinationSum (arr, target) {
  //   function backtrack (temp, sum, index) {
  //     if (sum > target) return null
  //     if (sum === target) {
  //       const isValid = temp
  //         .slice(1)
  //         .every((e, i) => e >= temp[i])
        
  //       if (isValid) return temp
  //       return null
  //     }
  //     for (let i = index; i < temp.length; i++) {
  //       const newTemp = [...temp]
  //       newTemp[i]++
  //       const result = backtrack(
  //         newTemp, 
  //         sum + arr[i].weightCapacity, 
  //         i
  //       )
  //       if (result !== null) return result
  //     }

  //     return null
  //   }

  //   const temp = arr.map(() => 0)

  //   return backtrack(temp, 0, 0)
  // }

  // reindeerTypes.sort((a, b) => b.weightCapacity - a.weightCapacity)

  // return gifts.map(({ country, weight }) => {
  //   const validR = reindeerTypes.filter(
  //     ({ weightCapacity: wc }) => wc < weight
  //   )

  //   const reindeers = combinationSum(validR, weight)
  //     .map((num, i) => ({ type: validR[i].type, num }))

  //   return { country, reindeers }
  // })
}