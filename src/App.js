import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';

import Inicio from './pages/Inicio';
import Menu_page from './pages/Menu_page';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <div className='App'>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="menu" element={<Menu_page/>} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;