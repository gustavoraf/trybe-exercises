function endsIn(start, end) {
  let ref = start.length - end.length
  let ref2 = 0
  for (let i = ref ; i < start.length ; i += 1) {
    if (start[i] == end[i - ref]) {
      ref2 = ref2 + 1
    }
  }
  if (ref2 == end.length) {
    return true
  }
  else {
    return false
  }
}
console.log(endsIn("joaofernando", "fernan"))