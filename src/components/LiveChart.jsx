import { useContext, useEffect, useMemo, useState } from 'react'
import { getStockData } from '../utils/api/services';
import { formatStockData } from '../utils/helpers/formatStockData';
import { candleStickOptions } from '../constants/config';
import Chart from "react-apexcharts";
import Card from './Card';
import StockContext from '../context/StockContext';

const LiveChart = () => {

    const { stockSymbol } = useContext(StockContext);

    const [stockData, setStockData] = useState({});

    useEffect(() => {
        getStockData(stockSymbol).then(data => setStockData(data));
    }, [stockSymbol]);

    const seriesData = useMemo(() => formatStockData(stockData), [stockData]);

    return (
        <Card>
            <Chart
                series={
                    [
                        {
                            data: seriesData
                        }
                    ]
                }
                options={candleStickOptions}
                type="candlestick"
            />
        </Card>
    )
}

export default LiveChart;