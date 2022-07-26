import styles from "../../styles/contacts/Hero.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Facebook } from "../modules/SvgSprite";

const Hero = () => {
    return (
        <section className={styles.section}>
            <div className={`${styles.container} container`}>
                <h1 className={styles.title}>Контакты</h1>
                <div
                    className={styles.wrapper}
                    itemScope
                    itemType="http://schema.org/Organization"
                >
                    <div className={styles.imgBlock}>
                        <Image
                            width={560}
                            height={271}
                            alt="map"
                            src="/img/map.png"
                            layout="responsive"
                        />
                    </div>
                    <div className={styles.content}>
                        <a itemProp="telephone" href="tel:+74951521445">
                            <span className={styles.tel}>8 495 152 14-45</span>
                        </a>
                        <div
                            className={styles.adress}
                            itemProp="address"
                            itemScope
                            itemType="https://schema.org/PostalAddress"
                        >
                            <span itemProp="addressLocality">Москва</span>,{" "}
                            <span itemProp="streetAddress">
                                Егорьевский проезд, 2а стр. 24
                            </span>
                        </div>
                        <a itemProp="email" href="mailto:info@fud-trak77.ru">
                            <span className={styles.mail}>
                                info@fud-trak77.ru
                            </span>
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="#"
                        >
                            <Facebook fill="#9F9F9F" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
