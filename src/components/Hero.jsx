import { discount, runner } from "../assets"
import styles from "../style"
import Jee from "./Jee"


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph}`}>
            <span className="text-white">In top 20% coders on Leetcode in the World</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] sm:text-[50px] text-[30px] text-white ss:leading-[100px] leading-[75px]">
            Sanshray Mittu<br />
            {" "}
            <span className="text-gradient">
              PEC , Chandigarh <br />
            </span>{" "}
            ECE
          </h1>
          <div className="ss:flex hidden mr-0 md:mb-20 z-10">
            <Jee />
          </div>
          
        </div>

        <p className={`${styles.paragraph} max-w-[500px] mt-5`}>Experienced and accomplished Software Development Engineering Intern with proficiency in Cpp (DSA), JavaScript, and web technologies, complemented by hands-on experience in real-time project environments</p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} justify-center items-center relative`}>
        <img src={runner} alt="runner" className="w-[100%] h-auto" />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
      </div>
      
    </section>
  )
}

export default Hero
