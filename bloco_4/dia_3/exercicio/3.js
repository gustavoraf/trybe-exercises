let n;

for (i = 1; i <= n; i += 1){
  let line = "";
  for (let j = 1; j <= n; j += 1) {
    if (j >= (n + 1 - i)) {
      line = line + "*"
    }
    else {
      line = line + " "
    }
  }
  console.log(line)
}

console.log(5/2)