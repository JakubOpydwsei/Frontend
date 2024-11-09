import { useParams } from "react-router-dom";
import useFetch from "../data/useFetch";

function Post() {
  const { id } = useParams();
  const [post] = useFetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/posts/" + id + "/comments");

  console.log(comments);
  if (comments) {
    return (
      <>
      <br />
        <h2> {post.title}</h2>
        <hr />
        {comments.map((e) => (
          <div className="card" key={e.id}>
            <h6>{e.name}</h6>
            <p>{e.body}</p>
            <h6>{e.email}</h6>
          </div>
        ))}
      </>
    );
  }
}

export default Post;
