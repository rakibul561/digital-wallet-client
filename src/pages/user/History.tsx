import { useHistoryQuery } from "@/redux/features/wallets/wallet.api";

const History = () => {
    
    const  {data} = useHistoryQuery(undefined);
    console.log(data)
    

    return (
        <div>
            <h2> +r all transaction History</h2>
            q   
            he
        </div>
    );
};

export default History;