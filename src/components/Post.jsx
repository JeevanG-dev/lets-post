import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineAddReaction } from "react-icons/md";
function Post({post}) {
  return (
    <div className="card post-card " >
      <div className="card-body">
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        <MdDeleteOutline />
    <span class="visually-hidden">unread messages</span>
  </span>

  <div className="box">
        <h5 className="card-title title">{post.title}
       </h5>
  <span class="badge d-flex reactions align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
        <MdOutlineAddReaction />   {post.reaction}
  </span>
  </div>
        <p className="card-text">
          {post.body}
        </p>
        {post.tags.map((tag)=>   <span class="badge text-bg-primary hashtag">{tag}</span>)}
     
      </div>
    </div>
  );
}
export default Post;
 