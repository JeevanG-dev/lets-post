import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

function postListReducer(currPostList, action) {

let newPostList = currPostList;

if(action.type ==="DELETE_POST"){
  newPostList= currPostList.filter((post) => post.id !== action.payload.postID)
}
else if(action.type === "ADD_POST"){
  newPostList = [action.payload, ...currPostList]
}

  return newPostList;
}

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST);

  function addPost(userId,postTitle,postBody,reactions,tags) {
    dispatchPostList(
      {
        type:'ADD_POST',
        payload: {
          id:Date.now(),
    title: postTitle,
    body: postBody,
    reaction: reactions,
    userId:userId,
    tags: tags,
        }
      }
    )
  }

  function deletePost(postID) {

    dispatchPostList(
   {
    type:'DELETE_POST',
    payload: {
      postID,
    }
   }   
    )

  }
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Gorakpur",
    body: "Hello friends I am going to gorakpur to meet my queen",
    reaction: 2,
    userId: "user-9",
    tags: ["vaction", "mumbai", "Enjoying"],
  },
  
];

export default PostListProvider;


