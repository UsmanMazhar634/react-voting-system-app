import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import HomeItem from './HomeItem';
import "./styles.css";

const Home = () => {
  return (
    <div className='d-flex justify-content-center gap-3'>
   <HomeItem image="https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-50426.jpg?w=1380&t=st=1662123477~exp=1662124077~hmac=b3b94c755f304c3d156cc68ae6dcd352fdce211d25bccf4bc2d8de89b47f5ebb" action="Show Users List" path="/users" btn="btn btn-danger"/>
   <HomeItem image="https://i0.wp.com/asiatimes.com/wp-content/uploads/2018/06/iStock-955531076.jpg?fit=1200%2C815&ssl=1" action="Show Constituencies" path="/constituencies" btn="btn btn-primary"/>
    </div>
  );
}

export default Home;
