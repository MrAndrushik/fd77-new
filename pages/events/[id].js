import Image from "next/image";
import Head from "next/head";
// next breadcrumb
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideBtn from "../../components/modules/SlideBtn";

import "swiper/css";
import "swiper/css/navigation";

import styles from "../../styles/modules/Events.module.scss";
import Breadcrumbs from "../../components/modules/Breadcrumbs";
import data from "../../public/data/events.json";

const EventsDetails = ({ events }) => {
    const event = events[0];

    if (!event)
        return (
            <section className={styles.section}>
                <h1 className={styles.mainTitle}>Новость отсутсвует</h1>
            </section>
        );

    return (
        <>
            <Head itemScope itemType="http://schema.org/WPHeader">
                <title itemProp="headline">{event.metaTitle}</title>
                <meta
                    itemProp="description"
                    name="description"
                    content={`${event.metaDescr}`}
                />
                <meta
                    itemProp="keywords"
                    name="keywords"
                    content="ключевые_слова_для_страницы"
                />
            </Head>
            <section className={styles.section}>
                <Breadcrumbs caption={event.caption} />
                <article
                    itemProp="blogPosts"
                    itemScope
                    itemType="http://schema.org/BlogPosting"
                    key={event.id}
                    className={styles.container}
                >
                    <h1 itemProp="headline" className={styles.mainTitle}>
                        {event.caption}
                    </h1>
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
                        {event.gallery.map((item, index) => (
                            <SwiperSlide
                                className={styles.swiperSlide}
                                key={index}
                            >
                                <div className="slide-wrapper">
                                    <div
                                        itemProp="image"
                                        className={`${styles.slide}`}
                                    >
                                        <Image
                                            src={item}
                                            layout="fill"
                                            alt="slide"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <SlideBtn adaptive="desktop" type="next" />
                    </Swiper>
                    <div itemProp="articleBody" className={styles.textBlock}>
                        <h2 className={styles.descrTitle}>Описание</h2>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: event.fullDescr,
                            }}
                        ></div>
                    </div>
                </article>
            </section>
        </>
    );
};

EventsDetails.getInitialProps = ({ query }) => {
    return {
        events: data.filter(
            (item) => item.id?.toString() === query.id?.toString()
        ),
    };
};

export default EventsDetails;
