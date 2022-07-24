import Events from "../../components/modules/Events";
import Head from "next/head";

const AllEvents = () => {
    return (
        <>
            <Head itemScope itemType="http://schema.org/WPHeader">
                <title itemProp="headline">Проведенные мероприятия</title>
                <meta
                    itemProp="description"
                    name="description"
                    content=""
                />
            </Head>
            <Events limit={false} />
        </>
    );
};
export default AllEvents;
