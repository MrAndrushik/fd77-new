import Head from "next/head";
import Hero from "../components/home/Hero";
import Rent from "../components/home/Rent";
import Gallery from "../components/modules/Gallery";
import { wrapper } from "../redux/store";

// DATA
import StepsData from "../public/data/home/steps.json";
import RentData from "../public/data/home/rent.json";
import GalleryData from "../public/data/home/gallery.json";

export default function Home() {
    return (
        <>
            <Head itemScope itemType="http://schema.org/WPHeader">
                <title itemProp="headline">Аренда фудтрака на мероприятие в Москве 🌭</title>
                <meta
                    itemProp="description"
                    name="description"
                    content="Заказать еду на колёсах на мероприятие, аренда фудтраков с кухонным оборудованием, мобильных фургонов и прицепов. Услуги торговых точек для фестивалей и праздников."
                />
            </Head>
            <Hero obj={StepsData} />
            <Rent arr={RentData} />
            <Gallery obj={GalleryData} />
        </>
    );
}
