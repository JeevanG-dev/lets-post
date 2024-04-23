import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineAddReaction } from "react-icons/md";
import {PostList} from "../stores/post-list-store";


function Post({post}) {

const {deletePost} = useContext(PostList);

  return (
    <div className="card post-card " >
      <div className="card-body">
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>{deletePost(post.id)}}>
        <MdDeleteOutline />
    <span className="visually-hidden">unread messages</span>
  </span>

  <div className="box">
        <h5 className="card-title title">{post.title}
       </h5>
  <span className="badge d-flex reactions align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
        <MdOutlineAddReaction />   {post.reaction}
  </span>
  </div>
        <p className="card-text">
          {post.body}
        </p>
        {post.tags.map((tag)=> (<span key={tag} className="badge text-bg-primary hashtag">{tag}</span>))}
     
      </div>
    </div>
  );
}
export default Post;
 