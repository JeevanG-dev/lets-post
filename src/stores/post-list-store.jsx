import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
}



const PostList = createContext(DEFAULT_CONTEXT);

function postListReducer(currPostList,action){
    return currPostList;
}

const PostListProvider = ({ children }) => {



const [postList,dispatchPostList]=useReducer(postListReducer,{postList:[],addPost,deletePost})

function addPost(){

}

function deletePost(){

}
  return <PostList.Provider value={{postList,addPost,deletePost}
}>{children}</PostList.Provider>;
};

export default PostListProvider;
