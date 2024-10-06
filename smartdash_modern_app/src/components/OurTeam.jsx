import { employee } from "../constants";
import styles from "../style";
import EmployeeCard from './EmployeeCard';

const OurTeam = () => (
  <section id="team" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="w-full flex justify-between text-center flex-row sm:mb-16 mb-6 relative z-[1]">
      <h1 className={`${styles.heading2}`}>Meet Our Team!</h1>
    </div>

    <div className="absolute z-[1] w-[100%] h-[70%] right-20 bottom-20 blue__gradient"/>
    <div className="absolute z-[1] w-[20%] h-[30%] right-20 bottom-20 pink__gradient"/>

    <div className="flex flex-wrap sm:justify-start justify-center w-full employee-container relative z-[2]">
      {employee.map((card) => (
        <EmployeeCard key={card.id} {...card}/>
      ))}
    </div>
    
  </section>
)


export default OurTeam