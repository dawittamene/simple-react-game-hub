import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGride from "./components/GameGride";

import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import GenreList from "./components/GenreList";
import { platform } from "./hooks/useGames";


export interface GameQuery{
  genre:Genre | null;
  platform:platform | null;
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
        <PlatformSelector selectedplatform={gamequery.platform} onSelectPlatform={(platform)=>setGameQuery({...gamequery,platform})}/>
        <GameGride gameQuery={gamequery} />
      </GridItem>
    </Grid>
  );
}

export default App;
