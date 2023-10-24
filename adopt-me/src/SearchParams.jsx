import { useState } from "react";

const Animals = ["bird", "cat", "dog", "frog", "fish"];
const SearchParams = () => {
    
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");

    const breeds = ["Poodle"];
    return(
        <div className="search-params">
            <form action="">
                <label htmlFor="location">
                    Loaction
                    <input onChange={ (e) => setLocation(e.target.value)} id="location" value={location} placeholder="Loacation" />
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
                    <option></option>
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
                    <option></option>
                  {breeds.map((breed) => (
                    <option key={breed}>{breed}</option>
                  ))}
                   </select>
                </label>
                <button>
                    Submit
                </button>
            </form>

        </div>
    )
}

export default SearchParams;