{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;
    constructor(private capacity: number) {}

    get size() {
      return this._size;
    }
    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error("Stack is full!");
      }
      const node = {
        value: value,
        next: this.head,
      };
      this.head = node;
      this._size++;
    }
    pop(): T {
      // == 으로 null, undefined 동시 Check
      if (this.head == null) {
        throw new Error("Stack is empty!");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }
  const stackStr = new StackImpl<string>(32);
  stackStr.push("3");
  stackStr.push("24");
  stackStr.push("1523");
  console.log(stackStr.pop());

  const stack = new StackImpl<number>(32);
  stack.push(3);
  stack.push(2);
  stack.push(1);
  console.log(stack.pop());
}
