
import { nooo, yo, yesss } from "../assets";
import styles from "../style"

const Footer123 = () => {
  return (
    <div >
      <section className={`${styles.paddingY} ${styles.flexStart} flex-col`}>
        <div className="flex md:flex-row flex-col mb-8 w-full">
          <div className="flex-[1.5] w-full flex flex-wrap justify-between md:mt-0 mt-10">
            <div className="flex flex-col ss:my-0 my-4 w-[1400px] ">
              <h4 className={`text-white font-poppins font-semibold mb-4 flex justify-center ${styles.heading2} `}>Profiles</h4>
              <ul className="flex flex-row justify-around ">
                <li className="mb-2">
                  <div className="flex flex-row items-center ">
                    <img src={yesss} alt="LeetCode Logo" className="sm:w-[70px] sm:h-[70px] w-[40px] h-[40px] mr-2" />
                    <a href="https://leetcode.com/u/Sanshray03/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                      LeetCode
                    </a>
                  </div>
                </li>
                <li className="mb-2">
                  <div className="flex flex-row items-center ss:ml-0 ml-3">
                    <img src={nooo} alt="Codechef Logo" className="sm:w-[70px] sm:h-[70px] w-[40px] h-[40px] mr-2" />
                    <a href="https://leetcode.com/u/Sanshray03/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                      CodeChef
                    </a>
                  </div>
                </li>
                <li className="mb-2">
                  <div className="flex flex-row items-center ss:ml-0 ml-3">
                    <img src={yo} alt="Github Logo" className="sm:w-[70px] sm:h-[70px] w-[40px] h-[40px] mr-2" />
                    <a href="https://leetcode.com/u/Sanshray03/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                      Github
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400">Thank you For visiting my profile</p>
        </div>
      </section>
    </div>
  )
}

export default Footer123;
