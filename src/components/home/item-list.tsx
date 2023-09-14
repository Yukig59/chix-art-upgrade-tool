"use client";
import { Item, ItemData } from "@components/home/item";
import React from "react";

type Props = {
  items: Array<ItemData> | undefined;
};

export function ItemList({ items }: Props) {
  const [selectedList, setSelectedList] = React.useState<ItemData[]>([]);
  if (!items) {
    return null;
  }
  let chixNfts = items.filter((item) => {
    return item.collectionAddress === "CzrvMt4eVNtgkvTsiMUcZGbpJQyvBxaqxLkGVk1RoKD8";
  });
  const toggleSelectNFT = (item: ItemData) => {
    if (selectedList.includes(item)) {
      setSelectedList(selectedList.filter((i) => i !== item));
    } else {
      setSelectedList([...selectedList, item]);
    }
  }
  const freeze = () => {
    console.log(selectedList);
  }
  return (
  <>
<div className={"flex flex-row justify-center mb-5"}>
  <button className={"btn btn-primary"} onClick={freeze}>Upgrade NFTs</button>

</div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.length === 0 ? (
        <p className="p-4">No NFTs in your wallet</p>
      ) : (
        chixNfts.map((item) => <Item data={item} key={item.tokenAddress} onChange={toggleSelectNFT}/>)
      )}
    </div>
  </>
  );
}
