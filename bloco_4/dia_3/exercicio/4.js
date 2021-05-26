let n = 9;

for (i = 1; i <= (n + 1)/2; i += 1) {
  let line = "";
  for (j = 1; j <= (n - 1)/2 - (i - 1); j += 1) {
    line = line + " "
  }
  for (j = 1; j <= (i * 2) - 1; j += 1) {
    line = line + "*"
  }
  console.log(line)
}