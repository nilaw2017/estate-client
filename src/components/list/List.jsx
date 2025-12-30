import React from "react";

import { listData } from "../../lib/dummydata";
import Card from "../card/Card";
import "./List.scss";

function List() {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}

export default List;
