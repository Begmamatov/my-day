'use client'

import React from 'react'
import styles from "./banner.module.css"
import Carousel from 'react-elastic-carousel'

const dataImage = [
  {
    id: 1,
    image: '/banner/Card 1.png',
  },
  {
    id: 2,
    image: '/banner/Card 2.png',
  },
  {
    id: 3,
    image: '/banner/Card 3.png',
  },
  {
    id: 1,
    image: '/banner/Card 1.png',
  },
  {
    id: 2,
    image: '/banner/Card 2.png',
  },
  {
    id: 3,
    image: '/banner/Card 3.png',
  },
]

const BannerItem = ({ url }: { url: string }) => {
  return (
    <div className={styles.card}>
      <img draggable="false" src={url} />
    </div>
  )
}

const Banner = () => {

  const [itemsToShow, setItemsToShow] = React.useState(3)

  React.useEffect(() => {
    if (window.innerWidth < 576) {
      setItemsToShow(1)
    } else if (window.innerWidth < 768) {
      setItemsToShow(2)
    } else if (window.innerWidth < 992) {
      setItemsToShow(3)
    } else {
      setItemsToShow(3)
    }
  }, [window.innerWidth])

  return (
    <div className={styles.container}>
      {/* @ts-ignore  */}
      <Carousel itemsToShow={1} easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        itemPadding={[0, 20]}
        transitionMs={700} showArrows={false} enableAutoPlay autoPlaySpeed={3000}>
        {
          dataImage.map((item, index) => {
            return (
              <BannerItem key={index} url={item.image} />
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Banner
