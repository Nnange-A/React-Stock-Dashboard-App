import Header from './Header'
import Details from './Details'
import Overview from './Overview'
import LiveChart from './LiveChart'
import { useEffect, useState, useContext } from 'react'
import { getCompanyOverview, getGlobalQuote } from '../utils/api/services'
import StockContext from '../context/StockContext'

const Dashboard = () => {

    const { stockSymbol } = useContext(StockContext);

    const [stockDetails, setStockDetails] = useState({});

    const [quote, setQuote] = useState({});

    useEffect(() => {
        const updateStockDetails = async () => {
            try {
                const result = await getCompanyOverview(stockSymbol);
                setStockDetails(result);
            } catch (error) {
                setStockDetails({});
                console.log(error);
            }
        };

        const updateStockOverview = async () => {
            try {
                const result = await getGlobalQuote(stockSymbol);
                setQuote(result);
            } catch (error) {
                setQuote({});
                console.log(error);
            }
        };

        updateStockDetails();
        updateStockOverview();

    }, [stockSymbol]);

    return (
        
        <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-dmSans">
            
            <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-center items-center">
                <Header name={stockDetails.Name} />
            </div>

            <div className="md:col-span-2 row-span-4">
                <LiveChart symbol={stockSymbol}/>
            </div>

            <div>
                <Overview
                    symbol={stockSymbol}
                    price={quote["05. price"]}
                    change={quote["09. change"]}
                    changePercent={quote["10. change percent"]}
                    currency={stockDetails.Currency}/>
            </div>

            <div className="row-span-2 xl:row-span-3">
                <Details details={stockDetails}/>
            </div>

        </div>
    )
}

export default Dashboard;