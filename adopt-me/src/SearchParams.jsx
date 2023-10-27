import { useState, useEffect } from "react";
import Pet from "./Pet"

const Animals = ["bird", "cat", "dog", "frog", "fish"];
const SearchParams = () => {
    
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, SetPets] = useState([]);
    const breeds = [];

    useEffect(() => {
        requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function requestPets() {
        const res = await fetch(
            "http://pets-v2.dev-apis.com/pets?animal="
            +animal+"&location="+location+"&breed="+breed+""
        );
        const json = await res.json();
        SetPets(json.pets);
       
    };
    return(
        <div className="search-params">
            <form onSubmit={e => {
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
           {pets.map((pet)=>(
                <Pet 
                name={pet.name} 
                animal={pet.animal} 
                breed={pet.breed}
                key={pet.id}  
                />
             
            ))}
        </div> 
    )
}

export default SearchParams;