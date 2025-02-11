import Card from "./Card";

const Details = ({ details }) => {

    const detailsList = {
        Name: "Name",
        Country: "Country",
        Currency: "Currency",
        Exchange: "Exchange",
        LatestQuarter: "Latest Quarter",
        MarketCapitalization: "Market Capitalization",
        Industry: "Industry",
    };

    const convertMillionToBillion = (number) => {
        return (number / 1000).toFixed(2);
    };

    return (

        <Card>

            <ul className="w-full h-full flex flex-col justify-between divide-y-1">

                {Object.keys(detailsList).map((item) => {
                    return (
                        <li key={item} className="flex-1 flex justify-between items-center">
                        <span>{detailsList[item]}</span>
                        <span className="font-bold">
                            {item === "marketCapitalization"
                            ? `${convertMillionToBillion(details[item])}B`
                            : details[item]}
                        </span>
                        </li>
                    );
                })}
                
            </ul>

        </Card>
    );
};

export default Details;