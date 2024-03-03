import styles from "./App.module.css";
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/navbar/hero/Hero";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;