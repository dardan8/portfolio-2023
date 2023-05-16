import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/global/Navbar/Navbar";
import Header from "./components/main/Header/Header";
import Projects from "./components/main/Projects/Projects";
import Footer from "./components/main/Footer/Footer";
import ProjectCard from "./components/global/ProjectCard/ProjectCard";
export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header />
      <Projects />
      <Footer />
    </main>
  );
}
