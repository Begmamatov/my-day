'use client'

import productStore from '@/app/store/PraductInfo';
import { observer } from 'mobx-react-lite';
import visibleStore from '../../store/VisibleStore'
import { ProductData } from './productData';
import styles from "./productList.module.css";

const ProductList = () => {

    const { show } = visibleStore
    const { setProduct } = productStore

    const showProductInfo = (e: any) => {
        setProduct(e)
        show('productInfo')
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {ProductData.map((e, index) => {
                    return (
                        <div className={styles.box} key={index}
                            onClick={showProductInfo.bind(this, e)}
                        >
                            <div className={styles.listImgBox}>
                                <img src={e.image} alt="" />
                            </div>
                            <div className={styles.listAbout}>
                                <p className={styles.price}>{e.price}<span className={styles.cost}>{e.cost}</span></p>
                                <p className={styles.name}>{e.name}</p>
                                <button onClick={showProductInfo.bind(this, e)} >Buy</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default observer(ProductList)
