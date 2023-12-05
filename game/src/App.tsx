import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGride from "./components/GameGride";

import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import GenreList from "./components/GenreList";
import { platform } from "./hooks/useGames";
import SortSelecteor from "./components/SortSelecteor";


export interface GameQuery{
  genre:Genre | null;
  platform:platform | null;
  sortOrder:string
}

function App() {
  const [gamequery, setGameQuery] = useState({} as GameQuery)
  
  return (
    <Grid
      templateAreas={{
        base: `"nav " " main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={gamequery.genre} onSelectGenre={(genre) => setGameQuery({...gamequery,genre})}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector selectedplatform={gamequery.platform} onSelectPlatform={(platform)=>setGameQuery({...gamequery,platform})}/>
        <SortSelecteor sortOrder={gamequery.sortOrder} onSelectedOrder={(sortOrder)=> setGameQuery({...gamequery,sortOrder})}/>
        </HStack>
        

        <GameGride gameQuery={gamequery} />
      </GridItem>
    </Grid>
  );
}

export default App;
