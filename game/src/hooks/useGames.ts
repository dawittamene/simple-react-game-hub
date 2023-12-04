import useData from "./useData";
import { Genre } from "./useGenres";

export interface platform{
    id:number;
    name:string
    slug:string

}

export interface Game {
    id: number;
    name: string;
    background_image:string
    parent_platforms: {platform:platform}[]
    metacritic:number
  }


const useGames = (selectedGenre: Genre | null, selectedplatform:platform | null) => useData<Game>
('/games', {params:{genres: selectedGenre?.id, platforms:selectedplatform?.id}}, [selectedGenre?.id,selectedplatform?.id]);
export default useGames