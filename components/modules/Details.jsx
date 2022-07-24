import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    setDetailsContent,
    setDetailsSwiperContent,
} from "../../redux/toolkitSlice";
import { addToCart, incrQuantity, decrQuantity } from "../../redux/bucket";
import DetailsModalSwiper from "./DetailsModalSwiper";

import "swiper/css";
import "swiper/css/navigation";
import styles from "../../styles/modules/Details.module.scss";

const Details = () => {
    const detailsContent = useSelector((state) => state.toolkit.detailsContent);
    const isDetailsEmpty = Object.keys(detailsContent).length === 0;
    const dispatch = useDispatch();

    const bucketCollection = useSelector((state) => state.bucket.collection);
    const currentCardInBucket = bucketCollection.filter(
        (bucket) => bucket.id === detailsContent.id
    )[0];

    const handleClose = (e) => {
        if (
            (e && e.target.classList.contains("foodtruck-modal-overflow")) ||
            !e
        ) {
            document.querySelector("html").classList.remove("hidden");
            dispatch(setDetailsContent({}));
        }
    };

    return (
        <>
            <DetailsModalSwiper />
            <div
                onClick={(e) => handleClose(e)}
                className={
                    !isDetailsEmpty
                        ? `${styles.overflow} ${styles.overflowActive} foodtruck-modal-overflow`
                        : `${styles.overflow} foodtruck-modal-overflow`
                }
            >
                <div className={`${styles.modal} container`}>
                    <button
                        onClick={() => handleClose()}
                        className={styles.close}
                    >
                        <svg
                            width="45"
                            height="44"
                            viewBox="0 0 50 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <mask
                                id="path-1-outside-1_273_776"
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="-1"
                                width="50"
                                height="45"
                                fill="black"
                            >
                                <rect
                                    fill="white"
                                    y="-1"
                                    width="50"
                                    height="45"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.343 13.8833L13.1277 4.24278C13.2951 3.96386 13.68 3.91648 13.91 4.14649L24.1321 14.3687L35.4408 5.04863C35.6011 4.91649 35.8264 4.89727 36.0068 5.00035L44.9509 10.1113C45.25 10.2822 45.2907 10.6972 45.0306 10.923L31.9992 22.2358L41.3715 31.6082C41.5189 31.7556 41.5594 31.9789 41.4731 32.1687L38.3648 39.0057C38.2289 39.3045 37.847 39.3936 37.593 39.1857L24.6617 28.6056L13.8328 38.0063C13.6583 38.1579 13.4025 38.17 13.2144 38.0356L4.20938 31.6035C3.94195 31.4124 3.92839 31.0198 4.18201 30.8107L15.7273 21.2956L7.45513 14.5275C7.26304 14.3704 7.21531 14.0961 7.343 13.8833Z"
                                />
                            </mask>
                            <path
                                d="M13.1277 4.24278L9.69783 2.18468L9.69782 2.18469L13.1277 4.24278ZM7.343 13.8833L3.9131 11.8252L3.91308 11.8252L7.343 13.8833ZM13.91 4.14649L16.7385 1.31807L16.7385 1.31807L13.91 4.14649ZM24.1321 14.3687L21.3037 17.1971L23.8726 19.766L26.6761 17.4555L24.1321 14.3687ZM35.4408 5.04863L32.8968 1.96185L32.8968 1.96186L35.4408 5.04863ZM36.0068 5.00035L37.9914 1.52738L37.9914 1.52738L36.0068 5.00035ZM44.9509 10.1113L46.9355 6.6383L46.9355 6.6383L44.9509 10.1113ZM45.0306 10.923L42.4084 7.90238V7.90238L45.0306 10.923ZM31.9992 22.2358L29.377 19.2152L26.1356 22.0291L29.1707 25.0642L31.9992 22.2358ZM41.3715 31.6082L38.543 34.4366L38.5431 34.4366L41.3715 31.6082ZM41.4731 32.1687L45.1144 33.8241L45.1145 33.8241L41.4731 32.1687ZM38.3648 39.0057L42.0061 40.6612L42.0061 40.6612L38.3648 39.0057ZM37.593 39.1857L40.1259 36.0899L40.1259 36.0899L37.593 39.1857ZM24.6617 28.6056L27.1946 25.5098L24.5853 23.3749L22.0395 25.585L24.6617 28.6056ZM13.8328 38.0063L11.2106 34.9858L11.2106 34.9858L13.8328 38.0063ZM13.2144 38.0356L10.8895 41.2906L10.8895 41.2906L13.2144 38.0356ZM4.20938 31.6035L1.88442 34.8584L1.88443 34.8584L4.20938 31.6035ZM4.18201 30.8107L1.63802 27.724L1.63801 27.724L4.18201 30.8107ZM15.7273 21.2956L18.2713 24.3824L22.0303 21.2844L18.2602 18.1998L15.7273 21.2956ZM7.45513 14.5275L4.92217 17.6233L4.92218 17.6233L7.45513 14.5275ZM9.69782 2.18469L3.9131 11.8252L10.7729 15.9414L16.5576 6.30087L9.69782 2.18469ZM16.7385 1.31807C14.6684 -0.752006 11.2041 -0.325584 9.69783 2.18468L16.5576 6.30088C15.3861 8.2533 12.6916 8.58497 11.0816 6.97491L16.7385 1.31807ZM26.9606 11.5403L16.7385 1.31807L11.0816 6.97491L21.3037 17.1971L26.9606 11.5403ZM32.8968 1.96186L21.5882 11.2819L26.6761 17.4555L37.9847 8.1354L32.8968 1.96186ZM37.9914 1.52738C36.3678 0.599638 34.3397 0.772623 32.8968 1.96185L37.9847 8.13541C36.8624 9.06036 35.285 9.1949 34.0223 8.47333L37.9914 1.52738ZM46.9355 6.6383L37.9914 1.52738L34.0223 8.47332L42.9664 13.5842L46.9355 6.6383ZM47.6529 13.9436C49.9938 11.9114 49.6269 8.17629 46.9355 6.6383L42.9664 13.5842C40.873 12.388 40.5877 9.48297 42.4084 7.90238L47.6529 13.9436ZM34.6214 25.2564L47.6529 13.9436L42.4084 7.90238L29.377 19.2152L34.6214 25.2564ZM44.1999 28.7797L34.8276 19.4074L29.1707 25.0642L38.543 34.4366L44.1999 28.7797ZM45.1145 33.8241C45.8908 32.1164 45.5264 30.1062 44.1999 28.7797L38.5431 34.4366C37.5113 33.4049 37.2279 31.8414 37.8317 30.5132L45.1145 33.8241ZM42.0061 40.6612L45.1144 33.8241L37.8317 30.5132L34.7234 37.3502L42.0061 40.6612ZM35.06 42.2816C37.3461 44.152 40.7837 43.35 42.0061 40.6612L34.7234 37.3502C35.6742 35.2589 38.3479 34.6351 40.1259 36.0899L35.06 42.2816ZM22.1287 31.7014L35.06 42.2816L40.1259 36.0899L27.1946 25.5098L22.1287 31.7014ZM16.4551 41.0269L27.2839 31.6262L22.0395 25.585L11.2106 34.9858L16.4551 41.0269ZM10.8895 41.2906C12.5826 42.4999 14.8839 42.3909 16.4551 41.0269L11.2106 34.9858C12.4326 33.9249 14.2225 33.8401 15.5394 34.7807L10.8895 41.2906ZM1.88443 34.8584L10.8895 41.2906L15.5394 34.7807L6.53434 28.3485L1.88443 34.8584ZM1.63801 27.724C-0.644527 29.6052 -0.522458 33.1392 1.88442 34.8584L6.53435 28.3485C8.40636 29.6857 8.50131 32.4344 6.726 33.8975L1.63801 27.724ZM13.1833 18.2089L1.63802 27.724L6.72599 33.8975L18.2713 24.3824L13.1833 18.2089ZM4.92218 17.6233L13.1943 24.3915L18.2602 18.1998L9.98808 11.4317L4.92218 17.6233ZM3.91308 11.8252C2.76385 13.7405 3.19343 16.2089 4.92217 17.6233L9.98808 11.4317C11.3327 12.5318 11.6668 14.4517 10.7729 15.9413L3.91308 11.8252Z"
                                fill="white"
                                mask="url(#path-1-outside-1_273_776)"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.343 13.8833L13.1277 4.24278C13.2951 3.96386 13.68 3.91648 13.91 4.14649L24.1321 14.3687L35.4408 5.04863C35.6011 4.91649 35.8264 4.89727 36.0068 5.00035L44.9509 10.1113C45.25 10.2822 45.2907 10.6972 45.0306 10.923L31.9992 22.2358L41.3715 31.6082C41.5189 31.7556 41.5594 31.9789 41.4731 32.1687L38.3648 39.0057C38.2289 39.3045 37.847 39.3936 37.593 39.1857L24.6617 28.6056L13.8328 38.0063C13.6583 38.1579 13.4025 38.17 13.2144 38.0356L4.20938 31.6035C3.94195 31.4124 3.92839 31.0198 4.18201 30.8107L15.7273 21.2956L7.45513 14.5275C7.26304 14.3704 7.21531 14.0961 7.343 13.8833Z"
                                fill="#646464"
                            />
                        </svg>
                    </button>
                    {!isDetailsEmpty && (
                        <div className={styles.wrapper}>
                            <section className={styles.top}>
                                {detailsContent.gallery ? (
                                    <Swiper
                                        modules={[Navigation]}
                                        slidesPerView="auto"
                                        className={`${styles.swiper} gallery__swiper`}
                                        grabCursor
                                        autoHeight
                                        breakpoints={{
                                            1170: {
                                                spaceBetween: 20,
                                                centeredSlides: true,
                                            },
                                            0: {
                                                spaceBetween: 10,
                                                centeredSlides: true,
                                            },
                                        }}
                                    >
                                        {detailsContent.gallery &&
                                            detailsContent.gallery.map(
                                                (imgSrc, index) => (
                                                    <SwiperSlide
                                                        onClick={() =>
                                                            dispatch(
                                                                setDetailsSwiperContent(
                                                                    Object.assign(
                                                                        {
                                                                            content:
                                                                                detailsContent.gallery,
                                                                            activeIndex:
                                                                                index,
                                                                        }
                                                                    )
                                                                )
                                                            )
                                                        }
                                                        className={
                                                            styles.swiperSlide
                                                        }
                                                        key={index}
                                                    >
                                                        <div className="slide-wrapper">
                                                            <div
                                                                className={`${styles.slide}`}
                                                            >
                                                                <Image
                                                                    src={imgSrc}
                                                                    layout="fill"
                                                                    alt="slide"
                                                                />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            )}
                                    </Swiper>
                                ) : (
                                    <div className={styles.imgBlock}>
                                        <Image
                                            src={detailsContent.imgSrc}
                                            layout="responsive"
                                            width="365"
                                            height="229"
                                            alt="slide"
                                        />
                                    </div>
                                )}
                                <div className="container">
                                    <h2 className={`${styles.title} stn-title`}>
                                        {detailsContent.caption}
                                    </h2>
                                    {detailsContent.descr?.map(
                                        (description, index) => (
                                            <p
                                                key={index}
                                                className={styles.descr}
                                            >
                                                {description}
                                            </p>
                                        )
                                    )}

                                    <div className={styles.priceBlock}>
                                        <div className={styles.priceItem}>
                                            <p className={styles.price}>
                                                {detailsContent.startPrice1} ₽
                                                <span>Первые 4 часа</span>
                                            </p>
                                        </div>
                                        <div className={styles.priceItem}>
                                            <p className={styles.price}>
                                                {detailsContent.startPrice2} ₽
                                                <span>Следующий час</span>
                                            </p>
                                        </div>
                                    </div>
                                    {!currentCardInBucket ? (
                                        <button
                                            className={styles.btn}
                                            onClick={() =>
                                                dispatch(
                                                    addToCart(detailsContent)
                                                )
                                            }
                                        >
                                            + Добавить в корзину
                                        </button>
                                    ) : (
                                        <div className={styles.quantityBlock}>
                                            <button
                                                onClick={() =>
                                                    dispatch(
                                                        decrQuantity(
                                                            currentCardInBucket
                                                        )
                                                    )
                                                }
                                            >
                                                <svg
                                                    width="17"
                                                    height="3"
                                                    viewBox="0 0 17 3"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M0 1.25C0 0.559644 0.559644 0 1.25 0H15.75C16.4404 0 17 0.559644 17 1.25C17 1.94036 16.4404 2.5 15.75 2.5H1.25C0.559644 2.5 0 1.94036 0 1.25Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </button>
                                            <span>
                                                {currentCardInBucket.quantity}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    dispatch(
                                                        incrQuantity(
                                                            currentCardInBucket
                                                        )
                                                    )
                                                }
                                            >
                                                <svg
                                                    width="17"
                                                    height="17"
                                                    viewBox="0 0 17 17"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M8.5 0C9.19036 0 9.75 0.559644 9.75 1.25V7H15.75C16.4404 7 17 7.55964 17 8.25C17 8.94036 16.4404 9.5 15.75 9.5H9.75V15.75C9.75 16.4404 9.19036 17 8.5 17C7.80964 17 7.25 16.4404 7.25 15.75V9.5H1.25C0.559644 9.5 0 8.94036 0 8.25C0 7.55964 0.559644 7 1.25 7H7.25V1.25C7.25 0.559644 7.80964 0 8.5 0Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </section>
                            {detailsContent.include && (
                                <section className={styles.include}>
                                    <h3 className={styles.caption}>
                                        Что входит в стоимость
                                    </h3>
                                    <div className={styles.flex}>
                                        {detailsContent.include.map(
                                            (item, index) => (
                                                <div
                                                    key={index}
                                                    className={styles.item}
                                                >
                                                    <div
                                                        className={
                                                            styles.itemImg
                                                        }
                                                    >
                                                        <Image
                                                            src={item.imgSrc}
                                                            alt="card"
                                                            width="192"
                                                            height="130"
                                                        />
                                                    </div>
                                                    <h4
                                                        className={
                                                            styles.itemDescr
                                                        }
                                                    >
                                                        {item.caption}
                                                    </h4>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </section>
                            )}
                            {detailsContent.upsale && (
                                <section className={styles.upsale}>
                                    <h3 className={styles.caption}>
                                        Дополнительно можете заказать
                                    </h3>
                                    <p className={styles.notice}>
                                        Уточняйте у менеджера
                                    </p>
                                    <div className={styles.flex}>
                                        {detailsContent.upsale.map(
                                            (item, index) => (
                                                <div
                                                    key={index}
                                                    className={styles.item}
                                                >
                                                    <div
                                                        className={
                                                            styles.itemImg
                                                        }
                                                    >
                                                        <Image
                                                            src={item.imgSrc}
                                                            alt="card"
                                                            width="192"
                                                            height="130"
                                                        />
                                                    </div>
                                                    <h4
                                                        className={
                                                            styles.itemDescr
                                                        }
                                                    >
                                                        {item.caption}
                                                    </h4>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </section>
                            )}
                            {detailsContent.characteristic && (
                                <section className={styles.characteristic}>
                                    <h3 className={styles.caption}>
                                        {detailsContent.characteristic.title}
                                    </h3>
                                    <div className={styles.block}>
                                        {detailsContent.characteristic.information.map(
                                            (item, index) => (
                                                <div
                                                    key={index}
                                                    className={styles.blockItem}
                                                >
                                                    <p
                                                        className={
                                                            styles.blockCaption
                                                        }
                                                    >
                                                        {item.caption}
                                                    </p>
                                                    {item.descr && (
                                                        <span
                                                            className={
                                                                styles.blockText
                                                            }
                                                        >
                                                            {item.descr}
                                                        </span>
                                                    )}
                                                </div>
                                            )
                                        )}
                                    </div>
                                </section>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Details;
