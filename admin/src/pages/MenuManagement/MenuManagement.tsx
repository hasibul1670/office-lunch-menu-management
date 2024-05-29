/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loader from "../../components/LoaderComponent/Loader";
import Headline from "../../components/SharedComponents/Headline";

import CreateMenuModal from "../../components/MenuComponents/CreateMenuModal";
import EditMenuModal from "../../components/MenuComponents/EditMenuModal";
import {
  useDeleteMenuMutation,
  useGetMenuQuery,
} from "../../redux/features/menu/menuApi";
import { dateFormater } from "../../utils/dateFormater";

const MenuManagement: React.FC<any> = () => {
  const [isAddMenuModalOpen, setIsAddMenuModalOpen] = useState(false);
  const [isEditMenuModalOpen, setIsEditMenuModalOpen] = useState(false);
  const [menuId, setMenuId] = useState(null);
  const { data, isLoading } = useGetMenuQuery("");
  const menuData = data?.data;
  const [deleteMenu] = useDeleteMenuMutation();

  const closeModal = async () => {
    setIsAddMenuModalOpen(false);
  };
  const openAddUserModal = async () => {
    setIsAddMenuModalOpen(true);
  };

  const handleDeleteMenu = async (id: any) => {
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
        const res = await deleteMenu({ id }).unwrap();
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
  const handleEditMenu = async (id: any) => {
    setMenuId(id);
    setIsEditMenuModalOpen(true);
  };

  const rows = menuData?.map((menu: any) => ({
    id: menu.id,
    date: dateFormater(menu.date),
    name: menu?.menuName,
  }));

  const CenteredCellRenderer = (params: any) => (
    <div style={{ textAlign: "center" }}>{params.value}</div>
  );

  const columns: GridColDef<(typeof data)[number]>[] = [
    {
      field: "id",
      headerName: "Menu ID",
      headerAlign: "center",
      renderCell: CenteredCellRenderer,
      width: 150,
    },
    {
      field: "date",
      headerName: "Date",
      headerAlign: "center",
      renderCell: CenteredCellRenderer,
      width: 150,
    },
    {
      field: "name",
      headerAlign: "center",
      headerName: "Menu Name",
      width: 200,
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
              backgroundColor: "#1F428F",
            }}
            tabIndex={params.hasFocus ? 0 : -1}
            onClick={() => handleEditMenu(params.row.id)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            size="small"
            style={{
              marginLeft: 16,
              backgroundColor: "#C70000",
            }}
            tabIndex={params.hasFocus ? 0 : -1}
            onClick={() => handleDeleteMenu(params.row.id)}
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
        <Headline>All Menu List</Headline>
        <div className="flex justify-end h-12 lg:mt-5 lg:mr-36">
          <Button variant="contained" onClick={() => openAddUserModal()}>
            Add New Menu
          </Button>
        </div>
      </div>

      {isAddMenuModalOpen && (
        <>
          <CreateMenuModal closeModal={closeModal} />
        </>
      )}
      {isEditMenuModalOpen && (
        <>
          <EditMenuModal
            id={menuId}
            setIsEditMenuModalOpen={setIsEditMenuModalOpen}
          />
        </>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <Box sx={{ height: 500, width: "100%" }}>
          <DataGrid
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            className="mx-5 mt-5 bg-gray-50 rounded-lg"
            rows={rows}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 20,
                },
              },
            }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            pageSizeOptions={[1]}
            disableRowSelectionOnClick
            rowHeight={50}
          />
        </Box>
      )}
    </div>
  );
};

export default MenuManagement;
