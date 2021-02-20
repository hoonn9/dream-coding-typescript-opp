type PageInfo = {
  title: string;
};

type Page = "home" | "about" | "contact";

//page 를 key로 pageInfo 를 value
const nav: Record<Page, PageInfo> = {
  home: {
    title: "home",
  },
  about: {
    title: "about",
  },
  contact: {
    title: "contact",
  },
};

type Product = "cat" | "dog";
type NewProduct = Capitalize<Product>;
