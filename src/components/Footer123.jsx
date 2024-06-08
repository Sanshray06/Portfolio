
import styles from "../style"

const Footer123 = () => {
  return (
    <div >
      <section className={`${styles.paddingY} ${styles.flexStart} flex-col`}>
        <div className="flex md:flex-row flex-col mb-8 w-full">
          <div className="flex-[1.5] w-full flex flex-wrap justify-between md:mt-0 mt-10">
            <div className="flex flex-col ss:my-0 my-4 w-[1400px]">
              <h4 className={`text-white font-poppins font-semibold mb-4 flex justify-center ${styles.heading2} `}>Profiles</h4>
              <ul className="flex flex-row justify-around ">
                <li className="mb-2">
                  <a href="https://leetcode.com/u/Sanshray03/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                    LeetCode
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://www.codechef.com/users/sanshray076" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                    CodeChef
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://github.com/Sanshray06" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                    GitHub
                  </a>
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
