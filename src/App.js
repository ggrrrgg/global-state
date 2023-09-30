
import ApiTester from './ApiTester';
import './App.css';
import UserDisplay from './UserDisplay';
import ConnectionProvider from './context/ConnectionContext';

import UserGlobalData from './context/UserContext';

function App() {




  return (
    <div className="App">

      
      <UserGlobalData>
        <ConnectionProvider>

          <ApiTester />
          <UserDisplay />


        </ConnectionProvider>
          
        
      </UserGlobalData>
    </div>
  );
}

export default App;
