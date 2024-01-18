 import {useState} from "react";

 function UseGeolocation(){
  const [position,setPosition] = useState({});
  const [error, setError] = useState(null);
  const [isLoading,setIsLoading] = useState(false);

  //const {lat , lng } = position;
  

  function getPosition(){
   
   
    if(!navigator.geolocation)
    return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition(
    {
      lat : pos.coords.latitude,
      lng : pos.coords.longitude
    });
    setIsLoading(false);
  },
  (error) => {
    setError(error.message);
    setIsLoading(false);
  }
  );
  }
  return {position,error,isLoading,getPosition};
 }

 export default function App(){
   
   //create state 
 
  const [countClicks, setCountClicks] = useState(0);
  
  const {
    position : {lat,lng},error,isLoading,getPosition
  } = UseGeolocation();


  function handleClick(){
    setCountClicks(c => c + 1);
    getPosition();
  }
  return(



    <div>
      <p>Trinadh get Location System</p>
      <button onClick = {handleClick} disabled = {isLoading}>Get my position</button>

      {isLoading && <p> Loading position...</p>}
      {error && <p> {error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a 
            target = "_blank"
            rel = "noreferrer"
            href = {`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
            >
              {lat},{lng}
            </a>
        </p>
      )}

      <p>you requested position {countClicks} times</p>
    </div>
  );
}