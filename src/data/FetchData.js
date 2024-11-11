import useFetch from "../data/useFetch";

function FetchData() {
  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");

  if (comments && users && posts) {
    return posts.map((p) => {
      return {
        user: users.find((u) => u.id === p.userId),
        post: p,
        comments: comments.filter((c) => c.postId === p.id),
      };
    });
  }

  return []; // Ensure it returns an empty array while data is loading
}

export default FetchData;
