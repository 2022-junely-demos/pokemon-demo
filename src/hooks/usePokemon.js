import { useState, useEffect } from 'react';
import { fetchPokemon } from '../services/pokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      // load the data from the API
      try {
        const data = await fetchPokemon();
        // set the data in state
        setPokemon(data);
        // set loading to false to stop the loader
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    };
    loadData();
  }, []);

  return { loading, pokemon };
}
