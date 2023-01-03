const lastBackup = 1546300800
const changes = [
  [ 3, 1546301100 ],
  [ 2, 1546300800 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ]
]

getFilesToBackup(lastBackup, changes)

function getFilesToBackup(lastBackup, changes) {
  return changes
    .filter(e => e[1] > lastBackup)
    .map(e => e[0])
    .filter((e, i, arr) => i === arr.indexOf(e))
    .sort((a, b) => a - b)
}
