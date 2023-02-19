import React from 'react'
import styles from "./category.module.css"

const CategoryData = [
    {
        id: 1,
        name: "Popular"
    },
    {
        id: 2,
        name: "Popular"
    },
    {
        id: 3,
        name: "Popular"
    },
    {

        id: 4,
        name: "Popular"
    },


    {
        id: 5,
        name: "Popular"

    },
    {
        id: 6,
        name: "Popular"
    },
    {
        id: 7,
        name: "Popular"
    },
    {
        id: 8,
        name: "Popular"

    },
    {
        id: 9,
        name: "Popular"
    },
    {
        id: 10,
        name: "Popular"
    },
]

const Category = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {
                    CategoryData.map((item) => {
                        return (
                            <button
                                className={styles.box}
                                key={item.id}
                            >
                                {item.name}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category
