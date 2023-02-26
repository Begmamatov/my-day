'use client'

import useRootStore from '@/app/hook/useRootStore';
import { Notifocation } from '@/app/store/Notification';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import Modal from 'react-modal';
import styles from "./productInfo.module.css";


const ProductInfo = () => {

  const { hide, visiable } = useRootStore().visiblestore
  const { oneProduct, form, setForm, clearForm } = useRootStore().productStore
  const [loading, setLoading] = useState(false)



  var data = {
    service_id: 'gmail',
    template_id: 'my-day',
    user_id: 'n1bsvEOtpEtAp4_Oc',
    template_params: {
      ...form
    }
  };

  const sendEmail = async () => {
    if (form.tel.length < 18) {
      Notifocation.error('Telefon raqamni to`liq kiriting')
      return
    }
    setLoading(true)
    await axios({
      method: 'post',
      url: 'https://api.emailjs.com/api/v1.0/email/send',
      data: data,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      Notifocation.success('Sizning buyurtmangiz qabul qilindi, tez orada siz bilan bog`lanamiz')
      hide('productInfo')
      clearForm()
    }).catch(err => {
      Notifocation.error('Xatolik yuz berdi')
    })
    setLoading(false)
  }

  return (
    <Modal
      isOpen={visiable.productInfo}
      onRequestClose={() => hide('productInfo')}
      className={styles.modal}
      overlayClassName={styles.overlay}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000
        }
      }}
    >
      <div className={styles.container}>
        <div className={styles.closeBtn} onClick={() => hide('productInfo')}>
          <img src="/x.svg" alt="" />
        </div>
        <div className={styles.leftBox} >
          <div style={{
            backgroundImage: `url(${oneProduct.image})`,
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 1000,
            filter: 'blur(5px)'
          }}></div>
          <img src={oneProduct.image} alt="" />
        </div>
        <div className={styles.rightBox}>
          <div className={styles.tetxsbox}>
            <h3 className={styles.name}>{oneProduct.name}</h3>
            <p className={styles.leght}>{oneProduct.criterion}</p>
            <p className={styles.info}>
              {
                oneProduct.description
              }
            </p>
            <h2 className={styles.price}>{`${oneProduct.price} ${oneProduct.cost ? "so'm" : ''} `}<span className={styles.sprice}>{oneProduct.discountPrice == 0 ? '' : oneProduct.discountPrice}</span></h2>
          </div>
          <div className={styles.btnBox}>
            <button onClick={() => setForm(form.amount - 1, 'amount')}>-</button>
            <h4 className={styles.size}>{form.amount}</h4>
            <button onClick={() => setForm(form.amount + 1, 'amount')}>+</button>
          </div>
          <div className={styles.bottom}>
            <InputMask
              className={styles.numberInput}
              mask="+ \9\98 99 999 99 99"
              maskChar=" "
              alwaysShowMask={true}
              value={form.tel}
              onChange={(e) => setForm(e.target.value, 'tel')}
            />
            <button
              className={styles.buyBtn}
              onClick={sendEmail}
            >
              {
                loading ? <img src='./Loader.svg' className={styles.spinner} /> : 'Buy'
              }
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default observer(ProductInfo)