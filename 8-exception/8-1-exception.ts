// Java: Exception
// Javascript: Error
// const array = new Array(1000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {}
const fileName = "file";

try {
  console.log(readFile(fileName));
} catch (error) {
  console.log(`catched!!`);
} finally {
  closeFile(fileName);
  console.log(`finally!!`);
}
console.log(`!!!`);
closeFile(fileName);

function run() {
  const fileName = "file";

  // 에러가 발생하는 부분만 핸들링
  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log(`catched!!`);
    return;
  } finally {
    // catch에서 return해도 실행 보장
    closeFile(fileName);
    console.log(`finally!!`);
  }
}
