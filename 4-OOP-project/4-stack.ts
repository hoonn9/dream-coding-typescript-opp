{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;
    constructor(private capacity: number) {}

    get size() {
      return this._size;
    }
    push(value: string) {
      if (this.size === this.capacity) {
        throw new Error("Stack is full!");
      }
      const node: StackNode = {
        value: value,
        next: this.head,
      };
      this.head = node;
      this._size++;
    }
    pop(): string {
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

  const stack = new StackImpl();
  stack.push("zzz 1");
  stack.push("zzz 2");
  stack.push("zzz 3");
  console.log(stack.pop());
}
