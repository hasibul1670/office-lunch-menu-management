/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import {
  useSingleMenuQuery,
  useUpdateMenuMutation,
} from "../../redux/features/menu/menuApi";
import { formatDateDbToInput } from "../../utils/dateFormater";
import Loader from "../LoaderComponent/Loader";

type iEditMenuModalType = {
  setIsEditMenuModalOpen?: any;
  id?: any;
};

const EditMenuModal: React.FC<iEditMenuModalType> = ({
  setIsEditMenuModalOpen,
  id,
}) => {
  const [UpdateMenu] = useUpdateMenuMutation();
  const { data, isLoading } = useSingleMenuQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  const [options, setOptions] = useState([
    { option_name: "", description: "" },
  ]);

  const { register, handleSubmit, setValue } = useForm();

  const addOption = () => {
    setOptions([...options, { option_name: "", description: "" }]);

    setValue("option_details", [
      ...options,
      { option_name: "", description: "" },
    ]);
  };
  const removeOption = async (index: number) => {
    const newOptions = options?.filter((_, i) => i !== index);
    setOptions(newOptions);
    setValue("option_details", newOptions);
  };

  const onSubmit = async (data: any) => {
    try {
      const { menuName, date, option_details } = data;
      console.log("Hello ------------->", data);
      const date2 = new Date(date);
      const formattedDate = date2.toISOString();
      const payload = {
        id: id,
        data: {
          menuName: menuName,
          date: formattedDate,
          option_details: option_details,
        },
      };
      console.log("Hello ------------->", payload);
      const res: any = await UpdateMenu(payload).unwrap();
      if (res?.statusCode === 200) {
        toast.success("Menu Created Successfully !");
        setIsEditMenuModalOpen(false);
      } else if (res?.error?.status === 409) {
        toast.error("This Menu is already Exist");
        setIsEditMenuModalOpen(false);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  useEffect(() => {
    if (data) {
      const fetchedDate = formatDateDbToInput(data.data.date);
      const newData = data?.data?.option_details?.map((item: any) => ({
        option_name: item.option_name,
        description: item.description,
      }));
      if (newData) {
        setOptions(newData);
      }
      setValue?.("date", fetchedDate);
      setValue?.("menuName", data?.data.menuName);
      setValue?.("option_details", data?.data.option_details);
    }
  }, [data, setValue]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="fixed inset-0 bg-gray-950 bg-opacity-75  z-20 flex items-center justify-center">
          <div className="bg-white p-2  rounded shadow-lg w-3/5 h-/5">
            {/* Modal Header */}
            <div className="mb-4 flex   justify-between ">
              <h2 className="text-lg font-bold">Add Menu</h2>

              <IoMdClose
                className="text-2xl  hover:scale-150 cursor-pointer bg-cyan-200  text-red-400 "
                onClick={() => setIsEditMenuModalOpen(false)}
              />
            </div>

            {/* Modal Body */}

            <div className="h-full overflow-y-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between mx-2">
                  <div className="mb-4 w-1/2 mr-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Menu Name
                    </label>
                    <input
                      {...register("menuName")}
                      id="name"
                      // defaultValue={menuName}
                      type="text"
                      required
                      className="border border-blue-400 rounded px-3 py-2 w-full"
                      placeholder="Menu Name"
                    />
                  </div>
                  <div className="mb-4 w-1/2 mr-2">
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date
                    </label>

                    <input
                      {...register("date")}
                      id="date"
                      type="date"
                      required
                      className="border border-blue-400 rounded px-3 py-2 w-full"
                      placeholder="Enter Date"
                    />
                  </div>
                </div>

                <div className="mx-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Menu Options
                  </label>
                  {options?.map((option, index) => (
                    <div key={index} className="flex justify-between mb-4">
                      <div className="w-1/2 mr-2">
                        <input
                          {...register(`option_details[${index}].option_name`)}
                          type="text"
                          required
                          defaultValue={option.option_name}
                          className="border h-12  border-blue-400 rounded px-3 py-2 w-full"
                          placeholder={`Option Name ${index + 1}`}
                        />
                      </div>
                      <div className="w-1/2 mr-2">
                        <textarea
                          {...register(`option_details[${index}].description`)}
                          required
                          defaultValue={option.description}
                          className="border border-blue-400 rounded px-3 h-12 py-2 w-full"
                          placeholder={`Description ${index + 1}`}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeOption(index)}
                        className="text-red-500 text-xl font-bold"
                      >
                        <FaMinusCircle />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addOption()}
                    className="flex items-center text-blue-500"
                  >
                    <span className="mr-1 flex items-center text-center">
                      Add Option{" "}
                      <span className="text-xl ml-1">
                        <FaPlusCircle />
                      </span>
                    </span>
                  </button>
                </div>

                <div className="flex justify-end mt-4 mr-2">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditMenuModal;
