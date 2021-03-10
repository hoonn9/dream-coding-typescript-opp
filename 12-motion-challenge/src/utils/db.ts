export type UrlBlock = {
  type: "url";
  blockType: "video" | "image";
  title: string;
  url: string;
};

export type BodyBlock = {
  type: "body";
  blockType: "note" | "task";
  title: string;
  body: string;
};

export type BlockType = UrlBlock | BodyBlock;

export type BlockData<T> = {
  id: number;
  block: T;
};

export const selectAllBlocks = (): BlockData<BlockType>[] => {
  const prev = window.localStorage.getItem("blocks");
  if (prev) {
    const prevBlocks: BlockData<UrlBlock | BodyBlock>[] = JSON.parse(prev).blocks;
    return prevBlocks;
  }
  return [];
};

export const addBlock = <T>(newBlock: BlockData<T>) => {
  let addedBlocks = {};
  const prev = window.localStorage.getItem("blocks");
  if (prev) {
    const prevBlocks = JSON.parse(prev).blocks;
    addedBlocks = {
      blocks: [...prevBlocks, newBlock],
    };
  } else {
    addedBlocks = {
      blocks: [newBlock],
    };
  }

  window.localStorage.setItem("blocks", JSON.stringify(addedBlocks));
};
