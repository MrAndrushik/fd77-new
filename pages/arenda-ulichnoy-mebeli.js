import Head from "next/head";
import Hero from "../components/modules/Hero";
import Catalog from "../components/modules/Catalog";
import Upsale from "../components/modules/Upsale";

// DATA
import HeroData from "../public/data/furniture/hero.json";
import CatalogData from "../public/data/furniture/catalog.json";
import UpsaleData from "../public/data/furniture/upsale.json";

export default function FoodTrucks() {
    return (
        <>
            <Head itemScope itemType="http://schema.org/WPHeader">
                <title itemProp="headline">Мебель в аренду</title>
                <meta
                    itemProp="description"
                    name="description"
                    content=""
                />
            </Head>
            <Hero partial={true} obj={HeroData} />
            <Catalog partial={true} bucket={true} obj={CatalogData} />
            <Upsale obj={UpsaleData} />
        </>
    );
}
