import styles from '../style'
import { smartCartTraced, robot } from '../assets/assets'

// as a note, se poate pune className la divul de la src="smartDash" pentru a face gradienturile fixe

const Hero = () => (
  // left side of the screen 
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[56px] text-[36px] text-white">
          The Future Of <br className="sm:block hidden"/> {" "}
          <span className="text-gradient"> Automated Shopping </span> {" "}
          Is Us. 
        </h1>

      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Hello! We are a Romanian start-up that provides "smart carts" for retailers. A smart cart can scan products (barcode or RFID-based) on the flight and validate them using weight sensors, making the shopping experience unique and pleasant for the customer, all through an interactive interface that manages all the tasks, including payment. </p>
    </div>

    <div >
      <img src={smartCartTraced} alt="smartCartTraced" className="w-[100%] h-[100%] opacity-30 relative z-[5]" />

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
    </div>

    
  </section>
)


export default Hero