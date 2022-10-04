import axios from "axios";

const allPokemon = async (state) => {
  const request = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=1000"
  );
  state(request.data.results);
  console.log(request.data.results);
};

export { allPokemon };
