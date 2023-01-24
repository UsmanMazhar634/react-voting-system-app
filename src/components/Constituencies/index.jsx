import { useEffect, useState } from "react";
import getUsers from "../../api";
import ConstituenciesItem from "../ConstituenciesItem";
import Loader from "../Loader";
import './styles.css';


const Constituencies = () => {
  const [constituencies, setConstituencies] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchConstituencies = async () => {
    try {
      const res = await getUsers("/constituencies");
      setConstituencies(res.data);
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchConstituencies();
  }, []);

  return (
    <div>
      <div className="row">
        <h5 className="mb-4 text-color">Constituencies from API</h5>
          <ConstituenciesItem constituencies={constituencies} />;
      </div>
      {loader && <Loader />}
    </div>
  );
}

export default Constituencies;
