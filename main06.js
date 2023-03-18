function f1() {
  return 42;
}

async function f2() {
  return 42;
}

function f3() {
  return new Promise((resolve, reject) => {
    resolve(42);
  });
}

console.log(f1());

f2().then(console.log);
f3().then(console.log);
