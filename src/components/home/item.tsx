import React, { useState } from "react";

export type ItemData = {
  collectionAddress: string;
  collectionName: string;
  imageUrl: string;
  name: string;
  tokenAddress: string;
  traits: Array<{ trait_type: string; value: string }>;
};

type Props = {
  data: ItemData;
  onChange: any
};

export function Item({ data, onChange }: Props) {
  const [selected, setSelected] = useState(false)
  const name = data.name;
  const collection = data.collectionName;
const toggleSelect = () => {
    setSelected(!selected)
    onChange(data)
}
  return (
    <a className={`card shadow-xl bg-neutral text-neutral-content ${selected?"border-4 border-solid border-indigo-500":""} `} onClick={toggleSelect}>
      {data.imageUrl && (
        <figure className="relative h-80">
          <img
            className="object-cover h-80 w-96 aspect-square	"
            src={data.imageUrl}
            alt={`Picture of ${name}`}
          />
        </figure>
      )}
      <div className="card-body p-4 items-center text-center">
        <h2 className="card-title m-0">{name}</h2>
        {collection && <p>{collection}</p>}
      </div>
    </a>
  );
}
