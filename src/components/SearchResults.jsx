import { useContext } from "react";
import StockContext from "../context/StockContext";

const SearchResults = ({ results }) => {

    const { setStockSymbol } = useContext(StockContext);

    return (
        <ul className="absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll bg-white border-neutral-200 custom-scrollbar">

            {results.map((item) => {
                return (
                    <li
                        key={item["1. symbol"]}
                        className="cursor-pointer p-4 m-2 flex items-center justify-between rounded-md hover:bg-indigo-200 transition duration-300"
                        onClick={() => setStockSymbol(item["1. symbol"])}
                    >
                        <span>{item["1. symbol"]}</span>
                        <span>{item["2. name"]}</span>
                    </li>
                );
            })}

        </ul>
    );
};

export default SearchResults;