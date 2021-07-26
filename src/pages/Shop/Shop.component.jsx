import React, { useState } from "react";
import { SHOP_DATA } from "@data/shop";
import CollectionPreview from "@components/collection-preview/collection-preview.component";

export const Shop = () => {
  const [collections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      <h1>SHOP</h1>
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} id={id} {...collectionProps} />
      ))}
    </div>
  );
};
