import { SimpleGrid } from "@chakra-ui/react";
import useGames, { platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";


interface props{
  gameQuery:GameQuery
 
}


const GameGride = ({gameQuery}: props ) => {
  const {data,error, isLoading} = useGames(gameQuery);
  const skeletons = [1,2,3,4,5,6];
  
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5 }} padding='10px' spacing={3}>
        {isLoading && skeletons.map(skeleton => 
        <GameCardContainer key={skeleton}>
          <GameCardSkeleton />
          </GameCardContainer>)}
        {data.map((game) => (
          <GameCardContainer key={game.id} >
          <GameCard game={game} />
          </GameCardContainer>
          
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGride;
