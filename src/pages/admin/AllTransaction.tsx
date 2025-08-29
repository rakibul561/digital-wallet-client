import { useAllTransactionQuery } from "@/redux/features/wallets/wallet.api";

const AllTransaction = () => {

    const {data} = useAllTransactionQuery(undefined);
    console.log(data)



    return (
        <div>
            <h2>all transaction </h2>
        </div>
    );
};

export default AllTransaction;