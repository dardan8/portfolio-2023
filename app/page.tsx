import styles from "./page.module.scss";
import Navbar from "./components/global/Navbar/Navbar";
import Header from "./components/main/Header/Header";
import Projects from "./components/main/Projects/Projects";
import Footer from "./components/main/Footer/Footer";
import LastCTA from "./components/main/LastCTA/LastCTA";
export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header />
      <Projects />
      <LastCTA />
      <Footer />
    </main>
  );
}
