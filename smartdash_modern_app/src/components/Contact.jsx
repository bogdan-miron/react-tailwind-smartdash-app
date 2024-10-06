import styles from "../style"

const Contact = () => (
  <section id="contact" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-contact-gradient rounded-[20px] box-shadow`}>
    <div className="text-center">
      <h2 className={styles.heading2}>Reach out to us!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Contact us at: smartdashretailsolutions@gmail.com </p>
    </div>

  </section>
)


export default Contact