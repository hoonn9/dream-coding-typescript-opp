/**
 * Type Inference
 * 웬만하면 타입을 정확히 명시하자.
 * 타입추론은 편하지만 좋지많은 않다.
 */

{
  let text = "hello";

  text = "hi";
  //   text = 3;

  function print(message) {
    console.log(message);
  }

  print("hello");
  print(3);

  // 리턴 Type 추론
  function add(x: number, y: number) {
    return x + y;
  }

  const result = add(1, 2);
}
