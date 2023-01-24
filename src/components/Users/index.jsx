import { useEffect, useState } from "react";
import getUsers from "../../api";
import UsersItem from "../UsersItem";
import Loader from "../Loader";
import "./styles.css";


const Users = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await getUsers("/users");
      setUsers(res.data);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container text-dark">
      <div className="row">
        <h5 className="mb-4 text-color">Users from API</h5>
        <UsersItem users={users} />;
      </div>
      {loader && <Loader />}
    </div>
  );
}

export default Users;
