import { useContext } from 'react';
import { AppContext } from '../../context';

const Header = () => {
  const appContext = useContext(AppContext);
  
  console.log(appContext.favorites); // exibe no console as informações

  return <header>Selecionados {appContext.favorites.length}</header> // retorna o texto junto com a contagem de favoritos
} 

export default Header;
