import { Suspense, useContext} from "react";
import { Await, Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";

import "./ProfilePage.scss";
function ProfilePage() {  
  const { postResponse, chatResponse } = useLoaderData(); 

  // console.log("CHAT RESPONSE>>>",chatResponse);
  
  const {currentUser} = useContext(AuthContext);

  

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar: <img src={currentUser.avatar} alt="" />
            </span>
            <span>
              Name: <b>{currentUser.username}</b>
            </span>
            <span>
              Email: <b>{currentUser.email}</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/add-post">
              <button>Create New Post</button>
            </Link>
          </div>
          <Suspense fallback={<p>Loading ...</p>}>
            <Await
              resolve={postResponse}
              errorElement={<p>Error loading posts.</p>}
            >
              {(response) => {
                const userCount = response.data.userPosts?.length ?? 0;
                // console.log("RESPONSE >>>>>>", userCount);
                return (
                  <>
                    {
                      userCount === 0 ?<p>No User Posts Available</p>:<List posts={response.data.userPosts}/>
                    }
                  </>
                )
              } }
            </Await>
          </Suspense>
          
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <Suspense fallback={<p>Loading ...</p>}>
            <Await
              resolve={postResponse}
              errorElement={<p>Error loading posts.</p>}
            >
              {(response) =>{
                const savedCount = response.data.savedPosts?.length ?? 0;
                return (
                  <>
                    {
                      savedCount === 0 ?<p>No Saved Posts Available</p>:<List posts={response.data.savedPosts}/>
                    }
                  </>
                )
              }}
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Suspense fallback={<p>Loading ...</p>}>
            <Await
              resolve={chatResponse}
              errorElement={<p>Error loading chats.</p>}
            >
              {(response) =>{
                console.log("RESPONSE",response.data);
                
                const numberOfChats = response.data.length ?? 0;
                return (
                  <>
                    {
                      numberOfChats === 0 ?<p>No Chats Available</p>:<Chat chats={response.data}/>
                    }
                  </>
                )
              }}
            </Await>
          </Suspense>
          
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
