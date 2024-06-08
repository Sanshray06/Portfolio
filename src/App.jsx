import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Stats from "./components/Stats"
import styles from "./style"
import Footer123 from "./components/Footer123"
import { useRef } from "react"
const App = () => {
  const projectsRef = useRef(null);
  const statsRef = useRef(null);
  const moreRef = useRef(null);
  
  return (
    <div className = "bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar projectsRef={projectsRef} statsRef={statsRef} moreRef = {moreRef} />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`} >
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`} >
          <section ref = {statsRef}>
            <Stats />
          </section>
          <Experience />
          <section ref={projectsRef}>
            <Projects  />
          </section>
          <section ref = {moreRef}>
           <Footer123  />
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
