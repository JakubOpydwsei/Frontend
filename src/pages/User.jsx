import { useParams } from "react-router-dom";
import useFetch from "../data/useFetch";

function User() {
  const { id } = useParams();
  const URL = "https://jsonplaceholder.typicode.com/users/" + id;
  const [user] = useFetch(URL);
  console.log(user);

  if (user.name) {
    return (
        <div
          className="person-card"
          style={{ border: "1px solid black", padding: "3rem" }}
        >
          <h5>Name: {user.name}</h5>
          <h5>Username: {user.username}</h5>
          <h5>Email: {user.email}</h5>
          <h5>Phone number: {user.phone}</h5>
          <h5>Website: {user.website}</h5>
          {/* <h6>Address: {user.address}</h6> */}
        </div>
      );
  }
  
}

export default User;
