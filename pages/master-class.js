import Head from "next/head";
import Hero from "../components/modules/Hero";
import Poster from "../components/master-class/Poster";
import Catalog from "../components/modules/Catalog";
import Upsale from "../components/modules/Upsale";

// DATA
import HeroData from "../public/data/master-class/hero.json";
import CatalogData from "../public/data/master-class/catalog.json";
import UpsaleData from "../public/data/furniture/upsale.json";

export default function FoodTrucks() {
    return (
        <>
            <Head itemScope itemType="http://schema.org/WPHeader">
                <title itemProp="headline">Выездной кулинарный мастер-класс на мероприятия и корпоративы в Москве 👨‍🍳</title>
                <meta
                    itemProp="description"
                    name="description"
                    content="Организация выездных мастер-классов с обучением кулинарии и приготовлением блюд на детские дни рождения и корпоративные мероприятия для компаний."
                />
            </Head>
            <Hero partial={true} obj={HeroData} />
            <Poster />
            <Catalog partial={true} bucket={true} obj={CatalogData} />
            <Upsale obj={UpsaleData} />
        </>
    );
}
