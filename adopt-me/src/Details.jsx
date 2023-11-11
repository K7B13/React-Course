import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./FetchPet";

const Details = () =>{
    const { id }= useParams();
    const resoluts = useQuery(["details", id], fetchPet);

    if(resoluts.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">|</h2>
            </div>
        )
    }
    const pet = resoluts.data.pets[0];
    
    return(
        <div className="details">
            <div>
                <h1>
                    {pet.name}
                </h1>
                <h2>
                    {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
                    <button>
                        Adopt {pet.name}
                    </button>
                    <p>
                        {pet.description}
                    </p>
                </h2>

            </div>
        </div>
    )
}

export default Details;