import './styles.css';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const Users = (props) => {
  const users = props.users ; 

  return(
    <div>
       <Table striped bordered hover className= "table hover">
        <thead>
          <tr>
            <th scope="col">Voter Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">CNIC</th>
            <th scope="col">Constituency</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        
        <tbody>
          {users.map((user) => {
              
              return(<tr key={user.id}>
                <th scope="row"> {user.id}</th>
                <td>{user.first_name}</td>
                <td>{user.email}</td>
                <td>{user.cnic}</td>
                <td>{user.constituency}</td>

                {user.image ?  <td> <Link to={`/users/${user.id}`}  className="btn btn-success" >Show Profile</Link> </td> : <td>No Profile Provided.</td>}

               
              </tr>)
          })}
        </tbody>
      </Table>
    </div>
  ); 
}; 

export default Users ; 

