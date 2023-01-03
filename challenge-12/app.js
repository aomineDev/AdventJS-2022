const distance = 30
const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 }
]

selectSleigh(distance, sleighs)

function selectSleigh(distance, sleighs) {
  const reindeer = sleighs
    .reverse()
    .filter(e => e.consumption * distance <= 20)
  
  reindeer.push({ name: null })

  return reindeer[0].name
}
