{
  interface IStack {
    push(value: string): void;
    pop(): string;
    readonly size: number;
  }

  interface NodeProvider {}

  class Node implements NodeProvider {
    constructor(public data: string, public next?: Node) {}
  }

  class Stack implements IStack {
    private head: Node;
    constructor() {
      this.head = {
        data: "",
      };
    }

    push(value: string) {
      const newNode = new Node(value, this.head.next);
      // if (this.head.next) {
      //   newNode.next = this.head.next;
      // }
      this.head.next = newNode;
    }

    pop() {
      if (!this.head.next) {
        throw Error("cannot pop. cause not enough size");
      }
      const headNode = this.head.next;
      this.head.next = headNode.next;

      return headNode.data;
    }
    get size() {
      let size = 0;
      let next = this.head.next;

      while (true) {
        if (!next) {
          break;
        }
        next = next.next;
        size += 1;
      }

      return size;
    }
  }

  const stack = new Stack();
  stack.push("a");
  stack.push("b");
  stack.push("c");
  stack.push("d");
  console.log(stack.size); // 4
  const popped = stack.pop();
  console.log(popped); // d
  console.log(stack.size); // 3
  const popped2 = stack.pop();
  console.log(popped2); // c
  stack.push("e");
  stack.push("f");
  console.log(stack.size); // 4
  const popped3 = stack.pop();
  console.log(popped3); // f
  stack.pop();
  stack.pop();
  stack.pop();
  console.log(stack.size); // 0
}
