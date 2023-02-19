'use client'
import Modal from '@mui/material/Modal';
import visibleStore from '../../store/VisibleStore'
import { observer } from 'mobx-react-lite';
import styles from "./productInfo.module.css"


const ProductInfo = () => {

  const { hide, visiable } = visibleStore

  return (
    <Modal
      open={visiable.productInfo}
      onClose={() => hide('productInfo')}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <img src="/bg5.png" alt="" />
        </div>
        <div className={styles.rightBox}>
          <h3 className={styles.name}>Sweet Corn</h3>
          <p className={styles.leght}>1lb</p>
          <p className={styles.info}>
            Maize, also known as corn, is a cereal grain
            first domesticated by indigenous peoples in
            southern Mexico about 10,000 years ago. The
            leafy stalk of th...
            Maize, also known as corn, is a cereal grain
            first domesticated by indigenous peoples in
            southern Mexico about 10,000 years ago. The
            leafy stalk of th...
          </p>
          <h2 className={styles.price}>$4.00<span className={styles.sprice}>$5.00</span></h2>
          <div className={styles.btnBox}>
            <button>-</button>
            <h4 className={styles.size}>1</h4>
            <button>+</button>
          </div>
          <div className={styles.bottom}>
            <input type="tel" className={styles.numberInput} />
            <button className={styles.buyBtn}>Buy</button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default observer(ProductInfo)