import useData from "./useData";
import { platform } from "./useGames";



interface props{
    id:number;
    name:string
    slug:string
}

const usePlatforms = () =>{
    return useData<platform>('/platforms/lists/parents');
}

export default usePlatforms