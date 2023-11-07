import { useQuery } from "@tanstack/react-query"
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal){

   const resoluts = useQuery(["breeds", animal], fetchBreedList);
// if this is available give me that if not dont give an error but if fails just give me back empty array
    return [resoluts?.data?.breeds ?? [], resoluts.status];
}