import { card } from '../assets'
import styles , { layout } from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <div className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Find a better card deal <br className='sm:block hidden'/>
         in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 pb-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button title="Get Started" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="alt" 
        className="w-[100%] h-[100%]" />

      </div>
    </div>
  )
}

export default CardDeal