import { useContext, useRef } from "react";
import {PostList} from "../stores/post-list-store";

function CreatePost() {
const {addPost}= useContext(PostList)

const userIdElement =useRef();
const postTitleElement =useRef();
const postBodyElement =useRef();
const reactionsElement =useRef();
const tagsElement =useRef();

function handleSubmit(){
event.preventDefault();
const userId = userIdElement.current.value;
const postTitle = postTitleElement.current.value;
const postBody = postBodyElement.current.value;
const reactions = reactionsElement.current.value;
const tags = tagsElement.current.value.split(/(\s+)/);

userIdElement.current.value = "";
postTitleElement.current.value = "";
postBodyElement.current.value = "";
reactionsElement.current.value = "";
tagsElement.current.value = "";


addPost(userId,postTitle,postBody,reactions,tags);
}



  return (
    <form className="create-post" onSubmit={handleSubmit}>


<div className="mb-3">
        <label htmlFor="userId" className="form-label">
    Enter Your User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={userIdElement}
     placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
         Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={postTitleElement}
     placeholder="Title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
    Post Content
        </label>
        <textarea
          type="text"
          className="form-control"
          id="body"
          rows="4"
          ref={postBodyElement}
     placeholder="... How are you Feeling today"
        />
      </div>

     
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
    Number of Reaction
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          ref={reactionsElement}
     placeholder="How many people reacted to this post"
        />
      </div>


      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
   Enter Your # here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
     placeholder="Please enter your tag using space"
        />
      </div>
     
      <button type="submit" className="btn btn-primary">
        POST
      </button>
    </form>
  );
}
export default CreatePost;
