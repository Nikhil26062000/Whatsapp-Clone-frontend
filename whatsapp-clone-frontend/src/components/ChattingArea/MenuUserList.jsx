import React, { useEffect, useState } from "react";
import { getUser } from "../../services/api.js";

const MenuUserList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUser();
      console.log(response.userData);
      setUserData(response.userData);
    };

    fetchData()
  }, []);
  return <div>
    {
      userData && userData.map((userData) =>{
        return <div>
          {userData.name}
        </div>
      })
    }
  </div>;
};

export default MenuUserList;
