import Swal from "sweetalert2";

const Logout = () => {
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log out!",
      cancelButtonText: "No, stay logged in",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("role");
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    });
  };

  return (
    <div className="text-xl text-center py-20 ">
      <button
        className="bg-cyan-500 px-4 text-white font-semibold rounded-md py-4"
        onClick={handleLogout}
      >
        LogOut
      </button>
    </div>
  );
};

export default Logout;
