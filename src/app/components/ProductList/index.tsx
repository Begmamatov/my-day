'use client'

import { observer } from 'mobx-react-lite';
import visibleStore from '../../store/VisibleStore'
import { ProductData } from './productData';
import styles from "./productList.module.css";

const ProductList = () => {

    const { show } = visibleStore

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {ProductData.map((e, index) => {
                    return (
                        <div className={styles.box} key={index}>
                            <div className={styles.listImgBox}>
                                <img src={e.image} alt="" />
                            </div>
                            <div className={styles.listAbout}>
                                <p className={styles.price}>{e.price}<span className={styles.cost}>{e.cost}</span></p>
                                <p className={styles.name}>{e.name}</p>
                                <button onClick={() => show('productInfo')} >Buy</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default observer(ProductList)
