/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loader from "../../components/LoaderComponent/Loader";
import CardComponent from "../../components/SharedComponents/Card";
import Headline from "../../components/SharedComponents/Headline";
import { useGetMenuQuery } from "../../redux/features/menu/menuApi";
import { useCreateSelectionMutation } from "../../redux/features/selection/selectionApi";
import { formatDate } from "../../utils/dateFormater";

const TodaysMenu = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetMenuQuery("");
  const today = new Date();
  const todayString = formatDate(today.toISOString());
  const menuData = data?.data;
  const filteredData = menuData?.filter(
    (item: { date: string }) => formatDate(item.date) === todayString
  );

  const userId: any = localStorage.getItem("userId");

  const [createSelection] = useCreateSelectionMutation();

  const handleSelectMenu = async (data: any) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to do today's lunch with this menu?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, I want it!",
      cancelButtonText: "No, cancel",
    });

    if (result.isConfirmed) {
      const payload = {
        menuId: data.id,
        date: data.date,
        userId: parseInt(userId),
      };
      try {
        const res: any = await createSelection({ data: payload });
        if (res?.data?.statusCode === 200) {
          navigate("/my-selection");
        }
        if (res.error.status === 409) {
          toast.error("You already select your lunch menu for today !");
        }
      } catch (error) {
        console.error("Error creating selection:", error);
      }
    }
  };

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
                <CardComponent handleSelectMenu={handleSelectMenu} data={m} />
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
