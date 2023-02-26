'use client'
import useRootStore from '@/app/hook/useRootStore';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import styles from "./productList.module.css";

const ProductList = () => {

    const { show } = useRootStore().visiblestore
    const { setProduct } = useRootStore().productStore
    const { Products } = useRootStore().categoryStore
    const [products, setProducts] = useState<any[]>([])

    const showProductInfo = (e: any) => {
        setProduct(e)
        show('productInfo')
    }

    function shuffle(array: any[]) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        setProducts(array)
    }

    useEffect(() => {
        shuffle(Products)
        console.log(Products);
    }, [Products])


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {products.map((e, index) => {
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
                                <button onClick={showProductInfo.bind(this, e)}>Buyurtma berish</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default observer(ProductList)
