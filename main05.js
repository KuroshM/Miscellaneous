function f(a, b) {}

function func1(value) {
  return new Promise((resolve, reject) => {
    if (value >= 0) {
      const answer = 42;
      setTimeout(resolve, 1000, answer);
    } else {
      setTimeout(reject, 1000, "value must be positive");
    }
  });
}

function dbl(value) {
  return new Promise((resolve, reject) => {
    if (value > 10) {
      reject("Value is too large!");
    }
    setTimeout(resolve, 100, 2 * value);
  });
}

// func1(-3).then(console.log);
// func1(-3).then(x=>{console.log(x)});

func1(3)
  .then(data => {
    console.log(`Done: ${data}`);
  })
  .catch(data => {
    console.log(`Error: ${data}`);
  });

dbl(7).then(data => {
  console.log(data);
});

func1(3)
  .then(data => {
    dbl(data).then(console.log);
  })
  .catch(data => {
    console.log(`Error: ${data}`);
  });

func1(7)
  .then(dbl)
  .then(console.log)
  .catch(data => {
    console.log(`Error: ${data}`);
  });
