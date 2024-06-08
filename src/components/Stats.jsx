import styles from "../style"

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      <div className={`flex-1 flex justify-around items-center flex-row m-3`}>
        <div className="flex flex-col items-center m-3">
          <h4 className="font-poppins font-semibold xs:text-[30px] text-[20px] xs:leading-[53px] leading-[43px] text-white">500+</h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[10px] xs:leading-[26px] leading-[43px] text-gradient uppercase">Leetcode</p>
        </div>
        <div className="flex flex-col items-center m-3">
          <h4 className="font-poppins font-semibold xs:text-[30px] text-[20px] xs:leading-[53px] leading-[43px] text-white">3 Star</h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[10px] xs:leading-[26px] leading-[43px] text-gradient uppercase">CodeChef</p>
        </div>
        <div className="flex flex-col items-center m-3">
          <h4 className="font-poppins font-semibold xs:text-[30px] text-[20px] xs:leading-[53px] leading-[43px] text-white">Experience</h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[10px] xs:leading-[26px] leading-[43px] text-gradient uppercase">Artesian, QuarkCity</p>
        </div>
      </div>
    </section>
  )
}

export default Stats
