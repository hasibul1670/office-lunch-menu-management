/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loader from "../../components/LoaderComponent/Loader";
import Headline from "../../components/SharedComponents/Headline";
import CreateUserModal from "../../components/UserComponents/CreateUserModal";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../../redux/features/user/userApi";

const User: React.FC<any> = () => {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const { data, isLoading } = useGetUsersQuery("");
  const [deleteUser] = useDeleteUserMutation();

  const closeModal = async () => {
    setIsAddUserModalOpen(false);
  };

  const openAddUserModal = async () => {
    setIsAddUserModalOpen(true);
  };

  const handleDeleteUser = async (id: any) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "Do you really want to delete this user?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
      });

      if (result.isConfirmed) {
        const res = await deleteUser({ id }).unwrap();
        if (res.statusCode === 200) {
          toast.success("User Deleted Successfully!");
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        toast.info("Deletion cancelled");
      }
    } catch (error) {
      console.error("Failed to delete user:", error);
      toast.error("Failed to delete user");
    }
  };

  const rows = data?.data?.map((emp: any) => ({
    id: emp.id,
    name: emp?.username,
    email: emp?.email,
  }));

  const CenteredCellRenderer = (params: any) => (
    <div style={{ textAlign: "center" }}>{params.value}</div>
  );

  const columns: GridColDef<(typeof data)[number]>[] = [
    {
      field: "id",
      headerName: "Employee ID",
      headerAlign: "center",
      renderCell: CenteredCellRenderer,
      width: 150,
    },
    {
      field: "name",
      headerAlign: "center",
      headerName: "Employee Name",
      width: 200,
      renderCell: CenteredCellRenderer,
    },
    {
      field: "email",
      headerAlign: "center",
      headerName: " Employee Email",
      width: 250,
      renderCell: CenteredCellRenderer,
    },

    {
      field: "Action",
      headerAlign: "center",
      headerName: "Action",
      width: 200,
      sortable: false,
      renderCell: (params) => (
        <p
          style={{
            textAlign: "center",
          }}
        >
          <Button
            variant="contained"
            size="small"
            style={{
              marginLeft: 16,
              backgroundColor: "#C70000",
            }}
            tabIndex={params.hasFocus ? 0 : -1}
            onClick={() => handleDeleteUser(params.row.id)}
          >
            Delete
          </Button>
        </p>
      ),
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <Headline>All Employee List</Headline>
        <div className="flex justify-end h-12 lg:mt-5 lg:mr-36">
          <Button variant="contained" onClick={() => openAddUserModal()}>
            Add New Employee
          </Button>
        </div>
      </div>

      {isAddUserModalOpen && (
        <>
          <CreateUserModal closeModal={closeModal} />
        </>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <Box sx={{ height: 500, width: "100%" }}>
          <DataGrid
            className="mx-5 mt-5 bg-slate-200 rounded-lg"
            rowHeight={50}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 8,
                },
              },
            }}
            pageSizeOptions={[1]}
            disableRowSelectionOnClick
          />
        </Box>
      )}
    </div>
  );
};

export default User;
