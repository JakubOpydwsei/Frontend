import Dropdown from "react-bootstrap/Dropdown";

function TableHeader({ dispatch }) {
  return (
    <>
      <thead>
        <tr>
          <th>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Users
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() =>
                    dispatch({ type: "SORT_BY_USER", order: "asc" })
                  }
                >
                  Ascending order
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    dispatch({ type: "SORT_BY_USER", order: "desc" })
                  }
                >
                  Descending order
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  onClick={() => window.location.reload()}
                >
                  Natural order
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </th>
          <th>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Posts titles
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() =>
                    dispatch({ type: "SORT_BY_TITLE", order: "asc" })
                  }
                >
                  Ascending order
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    dispatch({ type: "SORT_BY_TITLE", order: "desc" })
                  }
                >
                  Descending order
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  onClick={() => window.location.reload()}
                >
                  Natural order
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </th>
          <th>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Numbers of comments
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() =>
                    dispatch({ type: "SORT_BY_COMMENTS", order: "asc" })
                  }
                >
                  Ascending order
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    dispatch({ type: "SORT_BY_COMMENTS", order: "desc" })
                  }
                >
                  Descending order
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  onClick={() => window.location.reload()}
                >
                  Natural order
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </th>
        </tr>
      </thead>
    </>
  );
}

export default TableHeader;
