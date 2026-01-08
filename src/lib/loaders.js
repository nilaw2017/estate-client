import {apiRequest} from "./apiRequest"
export const SinglePageLoader = async ({request,params})=>{
    const res = await apiRequest.get(`/posts/${params.id}`);
    // console.log("ressssssssss", res.data);
    
    return res.data;    
}

export const ListPageLoader = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.toString();

  const postResponse = apiRequest.get(`/posts?${query}`);

  const delayedPostResponse = postResponse.then((res) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(res), 3000);  
    });
  });

  return { postResponse: delayedPostResponse };
};

export const ProfilePageLoader = async () => {

  const postResponse = apiRequest.post(`/users/profile-posts`);
  console.log("LOADER POST RESPONSE>>>>>>", postResponse);
  
  const delayedPostResponse = postResponse.then((res) => {
    console.log("PROFILE PAGE LOADER RES>>>>>>>>>", res);
    
    return new Promise((resolve) => {
      setTimeout(() => resolve(res), 3000);  
    });
  });

  return { postResponse: delayedPostResponse };
};