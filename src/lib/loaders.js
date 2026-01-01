import {apiRequest} from "./apiRequest"
export const SinglePageLoader = async ({request,params})=>{
    const res = await apiRequest.get(`/posts/${params.id}`);
    console.log("ressssssssss", res.data);
    
    return res.data;    
}

export const ListPageLoader = async ({request,params})=>{
    const query = request.url.split("?")[1]
    const res = await apiRequest.get(`/posts?${query}`);
    // console.log("ressssssssss", res.data);
    
    return res.data;    
}