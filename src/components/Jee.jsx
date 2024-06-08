import styles from "../style"


const Jee = () => {
  return (
    <div className={` ${styles.flexCenter} w-[140px] h-[140px] rounded-full border border-black bg-blue-gradient p-[3px]`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23px]">
                <span className="text-gradient">9.16 CGPA</span>
            </p>
        </div>
      </div>
    </div>
  )
}

export default Jee
