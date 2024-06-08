import styles, { layout } from "../style"


const Experience = () => {
  return (
    <section className={`${layout.section} max-w-[1300px]`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2} text-gradient`}>
          Experience: SDE Intern <br className="sm:block hidden" />
          Artesian, QuarkCity Mohali
        </h2>
        <h3 className="text-white font-poppins">
          11th Dec, 2023 - 11th Feb, 2024
        </h3>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          As an intern, I worked on a real-time project for Barrett Jackson, utilizing React, Python, Flask API, and MSSQL.
        </p>
      </div>

      <div className="text-gradient items-start  font-poppins mt-20 font-semibold  ">
        <p className="">Got Training over react.js and JavaScript</p><br />
        <p>Learned about MSSQL and databeses basics</p><br />
        <p>Finally landed over a real-Time Project and put my inputs there.</p>
      </div>
      

    </section>
  )
}

export default Experience
