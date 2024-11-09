import useFetch from "../data/useFetch";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";

function Lab5Page() {
  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");
  const tableData = posts.map((p) => {
    return {
      user: users.find((u) => u.id === p.userId),
      post: p,
      comments: comments.filter((c) => c.postId === p.id),
    };
  });

  //   console.log(posts);
  //   console.log(users);
  //   console.log(comments);
  return (
    <>
      <h1>LAB5</h1>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Users
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Ascending order
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Descending order
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-3">Natural order</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </th>
            <th>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Posts titles
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Ascending order
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Descending order
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-3">Natural order</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </th>
            <th>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Numbers of comments
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Ascending order
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Descending order
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-3">Natural order</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* mapa po tablicy - generowane kontetntu */}
          {console.log(tableData)}
          {tableData.map((e) => (
            <tr key={e.post.id}>
              <td>{e.user?.username || "Unknown User"}</td>
              <td>{e.post.title}</td>
              <td>{e.comments.length}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Lab5Page;
