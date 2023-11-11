import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Results from "./Results";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearc";
const Animals = ["bird", "cat", "dog", "frog", "fish"];

const SearchParams = () => {
    const [requestParams, SetRequestParams] = useState({
        location: "",
        animal: "",
        breed: "",
    });
    const [animal, setAnimal] = useState("");
    const [breeds, status] = useBreedList(animal);
    const results = useQuery(["search", requestParams], fetchSearch);
    const pets = results?.data?.pets ?? [];
    return(
        <div className="search-params">
            <form onSubmit={(e) => {
                e.preventDefault();
               const formData = new FormData(e.target);
               const obj = {
                animal: formData.get("animal") ?? "",
                breed: formData.get("breed") ?? "",
                location: formData.get("location") ?? "",
               };
               SetRequestParams(obj);
            }}>
                <label htmlFor="location">
                    Loaction
                    <input 
                    name="location"
                    id="location" 
                    placeholder="Loacation" />
                </label>
                <label htmlFor="animal">   
                    Animal
                   <select 
                    id="animal" 
                   value={animal}
                   onChange={(e) => {
                    setAnimal(e.target.value);
                   }}>
                    <option>Select a animal</option>
                  {Animals.map((animal) => (
                    <option key={animal}>{animal}</option>
                  ))}
                   </select>
                </label>
                <label htmlFor="breed">
                Breed
                   <select 
                    id="breed" 
                    name="breed"
                    disabled = {breeds.length === 0}
                   >
                    <option value="">Select a breed</option> {/* Set a default value */}
                  {breeds.map((breed) => (
                    <option key={breed} value={breed}>{breed}</option>
                  ))}
                   </select>
                   {status === "loading" && <p>Loading...</p>}
                </label>
                <button>
                    Submit
                </button>
            </form>
           
        <Results pets={pets} />
        </div> 
    )
}

export default SearchParams;