import { useState, useEffect } from "react";
import Results from "./Results";
import useBreedList from "./useBreedList";
const Animals = ["bird", "cat", "dog", "frog", "fish"];

const SearchParams = () => {
    
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, SetPets] = useState([]);
    const [breeds, status] = useBreedList(animal);

    useEffect(() => {
        requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    {
        console.log("Animal selected:", animal);
        console.log("Breeds:", breeds);
    }

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        SetPets(json.pets);
            console.log(json)
    };
    return(
        <div className="search-params">
            <form onSubmit={(e) => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Loaction
                    <input onChange={(e) => setLocation(e.target.value)} id="location" value={location} placeholder="Loacation" />
                </label>
                <label htmlFor="animal">   
                    Animal
                   <select 
                    id="animal" 
                   value={animal}
                   onChange={(e) => {
                    setAnimal(e.target.value);
                    setBreed("")
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
                    disabled = {breeds.length === 0}
                   value={breed}
                   onChange={(e) => {
                    setBreed(e.target.value);
                   }}>
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