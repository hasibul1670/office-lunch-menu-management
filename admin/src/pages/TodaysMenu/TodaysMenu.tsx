/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from "../../components/LoaderComponent/Loader";
import CardComponent from "../../components/SharedComponents/Card";
import Headline from "../../components/SharedComponents/Headline";
import { useGetMenuQuery } from "../../redux/features/menu/menuApi";
import { formatDate } from "../../utils/dateFormater";

const TodaysMenu = () => {
  const { data, isLoading } = useGetMenuQuery("");
  const today = new Date();
  const todayString = formatDate(today.toISOString());
  const menuData = data?.data;
  const filteredData = menuData?.filter(
    (item: { date: string }) => formatDate(item.date) === todayString
  );

  return (
    <div>
      <Headline>Today's Lunch Menu</Headline>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap justify-start">
          {filteredData?.length > 0 &&
            filteredData.map((m: any, index: number) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
              >
                <CardComponent data={m} />
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

export default TodaysMenu;
