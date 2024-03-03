import styles from "./App.module.css";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
    </div>
  );
}

export default App;