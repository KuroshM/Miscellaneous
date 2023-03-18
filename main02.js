let a = 0;

function SetA(x) {
  a = x;
}

//f(x,y,z,t): setTimeout(f, 1000, x,y,z,t)

async function doWork() {
  const x = setTimeout(SetA, 1000, 5);
}

doWork();

console.log(a);
