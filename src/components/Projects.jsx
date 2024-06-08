import styles from "../style"
import Cards from "./Cards"
import { image ,image2 , image3} from '../assets';
const Projects = () => {
    
  return (
    <div className="flex flex-col">
        <h1 className={`${styles.paddingY} ${styles.heading2} text-gradient font-poppins`}>Projects:</h1>
        <div className="flex flex-col items-center md:flex-row justify-around">
            <Cards name = 'World-Travel' inceptionYear= '1st Year' tech = 'HTML , CSS , JS' img = {image} link ="https://eclectic-tapioca-030655.netlify.app/home.html" />
            <Cards name = 'Swap-King' inceptionYear= '2nd Year' tech = 'TypeScript ,Prisma ,Nodejs' img = {image2} link ="https://github.com/GaudD/Esummit-Hackathon-2024-Azurites/tree/main/web" />
            <Cards name = 'MoneyZap' inceptionYear= '2st Year' tech = 'React.js , Express.js' img = {image3} link ="https://github.com/Sanshray06/MoneyZab-React.js-Express.js/tree/master" />
        </div>
    </div>
  )
}

export default Projects
