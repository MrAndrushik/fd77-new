import Head from "next/head";
// import Hero from "../../components/modules/Hero";
import Hero from "../../components/foodtrucks/Hero";
import StepsBlock from "../../components/modules/StepsBlock";
import Advantages from "../../components/foodtrucks/Advantages";
import Questions from "../../components/foodtrucks/Questions";
import Catalog from "../../components/modules/Catalog";
import Upsale from "../../components/modules/Upsale";

// DATA
import HeroData from "../../public/data/foodtrucks/hero.json";
import StepsData from "../../public/data/foodtrucks/steps.json";
import AdvantagesData from "../../public/data/foodtrucks/advantages.json";
import QuestionData from "../../public/data/foodtrucks/questions.json";
import CatalogData from "../../public/data/foodtrucks/catalog.json";
import UpsaleData from "../../public/data/foodtrucks/upsale.json";

export default function FoodTrucks() {
    return (
        <>
            <Head itemScope itemType="http://schema.org/WPHeader">
                <title itemProp="headline">Фургоны с едой — кейтеринг и торговые точки на мероприятие 🍔</title>
                <meta
                    itemProp="description"
                    name="description"
                    content="Организуем мобильную кухню с точкой питания для гостей мероприятия. Большой каталог фудтраков и прицепов и сопутствующего оборудования для праздников."
                />
            </Head>
            {/* <Hero obj={HeroData} /> */}
            <Hero />
            <StepsBlock obj={StepsData} />
            <Advantages obj={AdvantagesData} />
            <Questions arr={QuestionData} />
            <Catalog obj={CatalogData} link={true} />
            <Upsale obj={UpsaleData} />
        </>
    );
}
