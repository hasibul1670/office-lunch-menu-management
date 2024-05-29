/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

import { useCreateUserMutation } from "../../redux/features/user/userApi";
import { Button } from "../SharedComponents/Button";

type iEditProductModalType = {
  closeModal?: any;
  product?: any;
  handleEditProduct?: any;
  id?: any;
};

const CreateUserModal: React.FC<iEditProductModalType> = ({ closeModal }) => {
  const { register, handleSubmit } = useForm();
  const [CreateUser] = useCreateUserMutation();

  const onSubmit = async (data: any) => {
    try {
      const { userName, password, cPassword, email } = data;

      if (password !== cPassword) {
        return toast.error("Password Not Matched !!");
      }
      const payload = {
        email: email,
        role: "EMPLOYEE",
        password: password,
        username: userName,
      };

      const res: any = await CreateUser({ data: payload });
      if (res?.data?.statusCode === 200) {
        toast.success("User Created Successfully !");
        closeModal();
      } else if (res?.error?.status === 409) {
        toast.error("This User is already Exist");
        closeModal();
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div>
      <div className="fixed inset-0 bg-gray-950 bg-opacity-75  z-20 flex items-center justify-center">
        <div className="bg-white p-2  rounded shadow-lg w-3/5 h-/5">
          {/* Modal Header */}
          <div className="mb-4 flex   justify-between ">
            <h2 className="text-lg font-bold">Add Employee</h2>

            <IoMdClose
              className="text-2xl  hover:scale-150 cursor-pointer bg-cyan-200  text-red-400 "
              onClick={closeModal}
            />
          </div>

          {/* Modal Body */}

          <div className="h-full overflow-y-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex justify-between mx-2">
                <div className="mb-4 w-1/2 mr-2">
                  <label
                    htmlFor="name"
                    className="block text-sm  font-medium text-gray-700"
                  >
                    Employee UserName
                  </label>
                  <input
                    {...register("userName")}
                    id="name"
                    type="text"
                    className="border border-blue-400 rounded px-3 py-2 w-full"
                    placeholder="Employee UserName"
                  />
                </div>
                <div className="mb-4 w-1/2 mr-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    className="border  border-blue-400  rounded px-3 py-2 w-full"
                    placeholder="Enter Email"
                  />
                </div>
              </div>

              <div className="flex justify-between mx-2">
                <div className="mb-4 w-1/2 mr-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    {...register("password")}
                    id="password"
                    type="password"
                    className="border  border-blue-400 rounded px-3 py-2 w-full"
                    placeholder="Password"
                  />
                </div>

                <div className="mb-4 w-1/2 mr-2">
                  <label
                    htmlFor="cPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    {...register("cPassword")}
                    id="cPassword"
                    type="password"
                    className="border  border-blue-400 rounded px-3 py-2 w-full"
                    placeholder="Re-Write Password"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-4 mr-2">
                <Button>Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUserModal;
