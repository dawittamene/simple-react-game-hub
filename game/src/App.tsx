import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGride from "./components/GameGride";

import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import GenreList from "./components/GenreList";
import { platform } from "./hooks/useGames";

function App() {
  const [slelctedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedplatform, setSelectedPlatform] = useState<platform | null >(null)
  
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
          <GenreList selectedGenre={slelctedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector selectedplatform={selectedplatform} onSelectPlatform={(platform)=>setSelectedPlatform(platform)}/>
        <GameGride selectedplatform={selectedplatform} selectedGenre={slelctedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
