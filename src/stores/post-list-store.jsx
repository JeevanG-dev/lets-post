import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

function postListReducer(currPostList, action) {
  return currPostList;
}

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST);

  function addPost() {}

  function deletePost() {}
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
  {
    id: "2",
    title: "Learnig coding",
    body: "since 3 months",
    reaction: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
];

export default PostListProvider;
