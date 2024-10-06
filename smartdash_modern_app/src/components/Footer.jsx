import styles from "../style";
import { logo_smartdas } from "../assets/assets";
import { InstagramIMG, FacebookIMG, LinkedinIMG } from "../assets/assets";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col  w-full`}>
       <div className="flex-1 flex flex-row justify-start mr-10">
        {/* posibilitate de logo aici */}
       </div>
       <div>
        <p className={styles.paragraph}>COPYRIGHT SMARTDASH RETAIL SOLUTIONS S.R.L.</p>
        <p className={styles.paragraph}>ALL RIGHTS RESERVED.</p>

        <div className="flex flex-row md:mt-0 mt-6">
          <a href="https://www.facebook.com/smartdashcart">
            <img src={FacebookIMG} className="w-[48px] h-[48px] mb-5 mt-5 mr-5" />
          </a>

          <a href="https://www.instagram.com/smartdashcart/">
            <img src={InstagramIMG} className="w-[48px] h-[48px] mb-5 mt-5 mr-5" />
          </a>
        </div>
        
       </div>
    </div>
  </section>
)

export default Footer