import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CitiesContext = createContext();

const BASE_URL = "http://localhost:9000";

function CitiesProvider({children}){
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});
  
    useEffect(function () {
      async function fetchCities() {
        try {
          const res = await fetch(`${BASE_URL}/cities`);
          const data = await res.json();
         // console.log(data);
          setCities(data);
        } catch {
          alert("Therew as an Error loading data...");
        } finally {
          setIsLoading(false);
        }
      }
      fetchCities();
    }, []);

    async function getCity(id){
      try{
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        setCurrentCity(data);
      }catch{
        alert("There was an errro loading data...");
      }finally{
        setIsLoading(false);
      }
    }

    return (
        <CitiesContext.Provider
            value = {{
                cities,
                isLoading,
                currentCity,
                getCity,
            }}
        >
            {children}
        </CitiesContext.Provider>
    );
}


//use useCities();

function useCities(){
    const context = useContext(CitiesContext);

    if(context === undefined)
      throw new Error("CitiesContext was used outside the CitiesProvider");
    return context; 
}
export {CitiesProvider, useCities};