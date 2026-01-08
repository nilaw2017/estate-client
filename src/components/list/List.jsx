import React from "react";

// import { listData } from "../../lib/dummydata";
import Card from "../card/Card";
import "./List.scss";

function List({posts}) {
  return (
    <div className="list">
      {posts.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}

export default List;
