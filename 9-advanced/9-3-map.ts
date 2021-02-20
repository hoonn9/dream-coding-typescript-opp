{
  // type Video = {
  //   title: string;
  //   author: string;
  //   description: string;
  // }

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // }

  // type VideoReadOnly = {
  //   readonly title?: string;
  //   readonly author?: string;
  //   readonly description?: string;
  // }

  type Video = {
    title: string;
    author: string;
    description: string;
  };

  type Optional<T> = {
    // [] // for...in 과 같은 순환  type 내에서
    [P in keyof T]?: T[P];
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: "hi",
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: "dog",
  };

  const video: ReadOnly<Video> = {
    title: "hi",
    author: "me",
    description: "blabla",
  };
  // video.author = '213'

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: "hi",
    author: null,
    description: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  // Proxy type 으로 감싸는
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
