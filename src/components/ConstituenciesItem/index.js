import './styles.css';
import Table from 'react-bootstrap/Table';

const Constituencies = (props) => {
  const Constituencies = props.constituencies ; 

  return(
    <div>
       <Table striped bordered hover className= "table hover">
        <thead>
          <tr>
            <th scope="col">Constituency Id</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        
        <tbody>
          {Constituencies.map((constituency) => { 
            return(<tr key={constituency.id}>
              <th scope="row"> {constituency.id}</th>
              <td>NA {constituency.name}</td>
            </tr>)
          })}
        </tbody>
      </Table>
    </div>
  ); 
}; 

export default Constituencies ; 

