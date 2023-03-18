fetch("data01.json")
  .then(result => {
    console.log(result);
    return result.json();
  })
  .then(data => console.log(data))
  .catch(data => console.log("failed operation: " + data));

console.log("continue...");

async function doWork() {
  const result = await fetch("data01.json");
  const data = await result.json();
  return data;
}
doWork().then(console.log);

// async function doWork() {
//   try {
//     const result = await fetch("data01.json");
//     try {
//       const data = await result.json();
//       return data;
//     } catch {
//       return "JSON failed";
//     }
//   } catch {
//     return "file not found";
//   }
// }
