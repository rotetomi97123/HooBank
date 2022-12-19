import { features } from "../constants"
import styles, { layout } from "../style"
import Button from './Button'


const Feature = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px]
  ${index !== features.length - 1 ? "mb-6":"mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibol text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-semibol text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <div id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 pb-10`}>
        With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <Button title="Get Started"/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((featarue, index) => (
          <Feature key={featarue.id} {...featarue} index={index} />
        ))}
      </div>

    </div>
  )
}

export default Business