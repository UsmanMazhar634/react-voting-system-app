import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const HomeItem = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        
        <Link to={props.path} className={props.btn} >{props.action}</Link>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default HomeItem;
