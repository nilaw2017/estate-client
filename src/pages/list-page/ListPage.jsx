import React, { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";

import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import "./ListPage.scss";


export default function ListPage() {
  const { postResponse } = useLoaderData(); 
  console.log("POST RESPONSE>>>>>>>>",postResponse);
  
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />

          <Suspense fallback={<p>Loading ...</p>}>
            <Await
              resolve={postResponse}
              errorElement={<p>Error loading posts.</p>}
            >
              {(response) => {
                const posts = response.data;
                console.log("POSTS >>>>>>>>>>", posts);
                return (
                  <>
                    {posts.map((post) => (
                      <Card key={post.id} item={post} />
                    ))}
                  </>
                );
              }}
            </Await>
          </Suspense>
        </div>
      </div>

      <div className="mapContainer">
        {/* If you want Map to wait for posts too, you can move it inside <Await>.
           If you're okay with default/empty map first, leave it here and handle empty items. */}
           <Suspense fallback={<p>Loading ...</p>}>

           <Await 
              resolve={postResponse} 
              errorElement={<p>Error Loading Map.</p>}
            >
              {(response) => {
                const posts = response.data;
                console.log("MAP POSTS >>>>>>>>>>", posts);
                return (
                  <>
                    <Map items={posts}/>
                  </>
                );
                }}
           </Await>
           </Suspense>
      </div>
    </div>
  );
}
