import React, { useEffect, useState} from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {

  const data = useLoaderData();
  /*const [data, setData] = useState([]); // 'data' is defined here

  useEffect(() => {
   /* fetch("https://api.github.com/users/SajeelAhsan")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data); // Update state with the fetched user data
      })
      .catch((error) => console.error("Error fetching user data:", error)); // Handle errors
  }, []);*/
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      {data ? ( // Check if data is available
        <>
          <p>Github followers: {data.followers}</p>
          <img src={data.avatar_url} alt="GitHub Avatar" width={300} />
        </>
      ) : (
        <p>Loading...</p> // Show a loading message while data is being fetched
      )}
    </div>
  );
}
export default Github;

const githubInfoLoader = async () => {
const response = await fetch("https://api.github.com/users/SajeelAhsan");
return response.json();
}
export {githubInfoLoader};