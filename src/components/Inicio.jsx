import React, { useEffect, useState } from "react";
import { allPokemon } from "../fuctions/Funciones";

export const Inicio = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    allPokemon(setPokemon);
  }, []);
  return (
    <>
      {pokemon != null
        ? pokemon.map((pokemon) => (
            <div key={pokemon.id}>
              <a href=".">{pokemon.name}</a>
            </div>
          ))
        : "No hay Pokemons"}
    </>
  );
};
