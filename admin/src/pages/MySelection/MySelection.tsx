/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from "../../components/LoaderComponent/Loader";
import CardComponent2 from "../../components/SharedComponents/CardComponent2";
import Headline from "../../components/SharedComponents/Headline";
import { useGetSelectionQuery } from "../../redux/features/selection/selectionApi";
import { formatDate } from "../../utils/dateFormater";

const MySelection = () => {
  const { data, isLoading } = useGetSelectionQuery("");
  const today = new Date();
  const todayString = formatDate(today.toISOString());
  const menuData = data?.data;

  const userId: any = localStorage.getItem("userId");

  const filteredData = menuData?.filter(
    (item: { date: any; userId: any }) =>
      formatDate(item.date) === todayString && item.userId === parseInt(userId)
  );

  return (
    <div>
      <Headline>Your Selected Lunch Menu</Headline>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap justify-start">
          {filteredData?.length > 0 &&
            filteredData?.map((m: any, index: number) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-2"
              >
                <CardComponent2 data={m} />
              </div>
            ))}
        </div>
      )}

      {filteredData?.length === 0 && (
        <>
          <p className="text-red-500 text-center py-10 text-4xl font-bold">
            No Lunch Menu set yet Today ! Please Wait !!
          </p>
        </>
      )}
    </div>
  );
};

export default MySelection;
