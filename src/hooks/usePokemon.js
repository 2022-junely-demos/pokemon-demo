import { useState, useEffect } from 'react';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      // load the data from the API
      // set the data in state
    };
    loadData();
  }, []);

  return { loading };
}
