import { useEffect, useState } from "react";
import getUsers from "../../api";
import Loader from "../Loader";
import { useParams } from "react-router-dom";
import { Row, Col, Image } from 'react-bootstrap';
import './profile.css';

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  const fetchProfile = async () => {
    try {
      const res = await getUsers(`/users/${id}`);
      setProfile(res.data);
      console.log('msla h');

      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="container text-dark">
      <div className="row">
        <h5 className="mb-4 text-color">Profile Picture from API</h5>
          <Row className="justify-content-center">
            <Col xs={4}>
                <Image src={profile.image} width = "450" height = "400" fluid />
            </Col>
          </Row>
      </div>
      {loader && <Loader />}
    </div>
  );
}

export default Profile;
