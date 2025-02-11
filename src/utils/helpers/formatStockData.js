export const formatStockData = (stockData) => {

    const formattedData = [];

    const firstFifteenData = [];

    if (stockData["Weekly Adjusted Time Series"]) {

        Object.entries(
            stockData["Weekly Adjusted Time Series"]
        ).forEach(
            ([key, value]) => {
                formattedData.push({
                    x: key,
                    y: [
                        value["1. open"],
                        value["2. high"],
                        value["3. low"],
                        value["4. close"]
                    ]
                });
            }
        );

    }

    for (let i = 0; i < 15; i++) {
        firstFifteenData.push(formattedData[i]);
    }

    return firstFifteenData;

};