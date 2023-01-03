dryNumber(1, 15)

dryNumber(2, 20)

function dryNumber(dry, numbers) {
  return new Array(numbers)
    .fill()
    .map((_, i) => i + 1)
    .filter(e => `${e}`.includes(dry))
}
