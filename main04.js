//f is a callback function
function func1(x, f) {
  let value = -1;
  if (x > 0) {
    value = 42;
  }
  setTimeout(f, 1000, value);
}

function dbl(x) {
  return 2 * x;
}

function funcFactory(f1, f2) {
  return x => f1(f2(x));
}

func1(1, funcFactory(console.log, dbl));
