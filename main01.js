function opFactory(name) {
  if (name == "add") {
    return (a, b) => a + b;
  }
  if (name == "mult") {
    return (a, b) => a * b;
  }
}

function dbl(x) {
  return 2 * x;
}

function operation(f, a, b) {
  return f(a, b);
}

function add3(x, y, z) {
  let sum = 0;
  if (x) {
    sum += x;
  }
  if (y) {
    sum += y;
  }
  if (z) {
    sum += z;
  }
  return sum;
}

const b = operation(add3, 2, 5, 8);

const add = opFactory("add");

const a = operation(add, 2, 3);

console.log(b);

operation(console.log, "hello", 5);

const a = [1, 2, 3];

const b = a.map(x => {
  return x * x;
});

console.log(b);
