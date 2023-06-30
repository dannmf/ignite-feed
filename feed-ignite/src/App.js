import './global.css';
import styles from './App.module.css';
import {Header} from './components/header/Header';
import {Sidebar} from './components/sidebar/Sidebar';

function App() {
  return (
    <div>
      <Header />
      <div className = {styles.wrapper}>
        <Sidebar />
        <main><h1>Teste</h1></main>
      </div>
    </div>
  );
}

export default App;
