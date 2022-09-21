import { useState, useEffect } from 'react';
import { fetchPokemon, fetchTypes } from '../services/pokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState('bug');
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      console.log('running useEffect', Math.random());
      // load the data from the API
      try {
        const data = await fetchPokemon(selectedType);
        // set the data in state
        setPokemon(data);
        // set loading to false to stop the loader
        setLoading(false);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    };
    loadData();
  }, [selectedType]);

  useEffect(() => {
    const loadTypes = async () => {
      try {
        const data = await fetchTypes();
        setTypes(data.map((type) => type.type));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    };
    loadTypes();
  }, []);

  return { loading, pokemon, types, setSelectedType };
}
