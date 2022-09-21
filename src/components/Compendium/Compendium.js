import { usePokemon } from '../../hooks/usePokemon';
import './Compendium.css';

export default function Compendium() {
  const { loading } = usePokemon();
  if (loading) return <div className="loader"></div>;
  return <div></div>;
}
