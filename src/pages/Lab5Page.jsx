// import useFetch from "../data/useFetch";
import TableHeader from "../components/TableHeader";
import Table from "react-bootstrap/Table";
import TableDataReducer from "../data/TableDataReducer";
import { useReducer } from "react";
import Accordion from "react-bootstrap/Accordion";

import FetchData from "../data/FetchData";
import { useEffect } from "react";
import { useState } from "react";

function Lab5Page() {
  const tableDatainit = FetchData();
  const [tableData, dispatch] = useReducer(TableDataReducer, []);
  const [isDataInitialized, setIsDataInitialized] = useState(false);

  useEffect(() => {
    if (
      tableDatainit.length > 0 && // sprawdź, czy dane są dostępne
      tableDatainit[0]?.post && 
      tableDatainit[0]?.user &&
      tableDatainit[0]?.comments.length &&
      !isDataInitialized
    ) {
      // Inicjalizowanie danych za pomocą dispatch
      dispatch({ type: "INIT_DATA", data: tableDatainit });
      setIsDataInitialized(true);
    }
  }, [tableDatainit, isDataInitialized]);
  
  // console.log(tableData);
  // console.log(tableDatainit);

  if (!isDataInitialized) {
    return <div>Fetching data...</div>;
  }

  if (
    tableData.length > 0 && // sprawdź, czy dane są dostępne
    tableData[0]?.post && 
    tableData[0]?.user &&
    tableData[0]?.comments.length
  )  {
    // console.log("z data");
    return (
      <>
        <h1>LAB5</h1>
        <Table striped bordered hover size="sm">
          <TableHeader dispatch={dispatch}></TableHeader>
          <tbody>
            {tableData.map((e) => (
              <tr key={e.post.id}>
                <td>
                  <a href={`/lab5/users/${e.user?.id}`}>
                    {e.user?.username || "Unknown User"}
                  </a>
                </td>
                <td>
                  <Accordion defaultActiveKey="0" style={{ width: "700px" }}>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>{e.post?.title}</Accordion.Header>
                      <Accordion.Body>{e.post?.body}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </td>
                <td>
                  <a href={`/lab5/posts/${e.post?.id}/comments`}>
                    {e.comments?.length || "Unknown comments number"}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  } else {
    // console.log("z api")
    return (
      <>
        <h1>LAB5</h1>
        <Table striped bordered hover size="sm">
          <TableHeader dispatch={dispatch}></TableHeader>
          <tbody>
            {tableDatainit.map((e) => (
              <tr key={e.post.id}>
                <td>
                  <a href={`/lab5/users/${e.user?.id}`}>
                    {e.user?.username || "Unknown User"}
                  </a>
                </td>
                <td>
                  <Accordion defaultActiveKey="0" style={{ width: "700px" }}>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>{e.post?.title}</Accordion.Header>
                      <Accordion.Body>{e.post?.body}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </td>
                <td>
                  <a href={`/lab5/posts/${e.post?.id}/comments`}>
                    {e.comments?.length || "Unknown comments number"}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

export default Lab5Page;
