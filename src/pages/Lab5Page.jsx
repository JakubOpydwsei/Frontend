import useFetch from "../data/useFetch";
import TableHeader from "../components/TableHeader";
import Table from "react-bootstrap/Table";
import TableDataReducer from "../data/TableDataReducer";
import { useReducer } from "react";

function Lab5Page() {
  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");


  const tableDatainit = posts.map((p) => {
    return {
      user: users.find((u) => u.id === p.userId),
      post: p,
      comments: comments.filter((c) => c.postId === p.id),
    };
  });

  const [tableData, dispatch] = useReducer(TableDataReducer, tableDatainit);

  // console.log(tableDatainit)
  // console.log(tableData)
  
  if (!tableDatainit.length) {
    return <div>Fetching data...</div>;
  }

  if (tableDatainit.length) {
    return (
      <>
        <h1>LAB5</h1>
        <Table striped bordered hover size="sm">
          <TableHeader dispatch={dispatch}></TableHeader>
          <tbody>
            {tableDatainit.map((e) => (
              <tr key={e.post.id}>
                <td><a href={`/lab5/user/${e.user?.id}`}>{e.user?.username || "Unknown User"}</a></td>
                <td><a href={``}>{e.post?.title || "Unknown Title"}</a></td>
                <td><a href={``}>{e.comments?.length || "Unknown comments number"}</a></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

export default Lab5Page;
