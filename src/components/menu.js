import { faBeerMugEmpty, faBurger, faCookie, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Articulos from './Articulos';

const Menu = () => {


  return (
    <div id="#menu">

      <Tabs
        defaultActiveKey="menu"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="menu" title={<><FontAwesomeIcon icon={faBurger} fontSize="20px"/> Comidas rapidas</>} >
          <Articulos />
        </Tab>
        <Tab eventKey="bebidas" title={<><FontAwesomeIcon icon={faBeerMugEmpty} fontSize="20px"/> Bebidas</> } >
        <Articulos/>
        </Tab>
        <Tab eventKey="adicionales" title={<><FontAwesomeIcon icon={faCookie} fontSize="20px"/> Adicionales</>} >
        <Articulos/>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Menu;