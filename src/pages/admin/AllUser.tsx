import { useUserDataQuery } from "@/redux/features/auth/auth.api";

const AllUser = () => {
   
    const {data} = useUserDataQuery(undefined);
    console.log(data)

    return (
        <div>
            <h2> all user page </h2>
        </div>
    );
};

export default AllUser;