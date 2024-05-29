import { Tooltip } from "@mui/material";
import { CiExport } from "react-icons/ci";
import { FaCartPlus, FaChartLine, FaUserCheck } from "react-icons/fa";
import { MdSell } from "react-icons/md";
import SalesCard from "../../components/DashboardComponents/SalesCard";
import TopProductTable from "../../components/DashboardComponents/TopProductTable";
import TotalRevenueChart from "../../components/DashboardComponents/TotalRevenueChart";

const DashboardHome = () => {
  return (
    <div className=" px-2 py-4 ">
      <div className="px-2  shadow-lg bg-white rounded-xl p-4">
        <div className="flex justify-between mb-4">
          <p className="font-semibold text-lg ">
            Today's Lunch Summary <br />
          </p>
          <Tooltip
            title="Export Today's Data"
            slotProps={{
              popper: {
                modifiers: [
                  {
                    name: "offset",
                    options: {
                      offset: [0, 5],
                    },
                  },
                ],
              },
            }}
          >
            <p className="text-3xl">
              <CiExport />{" "}
            </p>
          </Tooltip>
        </div>

        <div className="flex justify-center  gap-x-1.5  ">
          <SalesCard
            icon={FaChartLine}
            ammount="178"
            salesTitle="Total Menu Served"
            saleRate="5"
            position="+"
            className="text-orange-600"
          />

          <SalesCard
            icon={FaCartPlus}
            ammount="5"
            salesTitle="Today's Menus"
            saleRate="5"
            position="+"
            className="text-blue-600"
            link="/todays-menu"
          />
          <SalesCard
            icon={MdSell}
            ammount="180"
            className="text-green-500"
            salesTitle="Today Present Employee "
            saleRate="2.45"
            position="+"
            link="/users"
          />
          <SalesCard
            icon={FaUserCheck}
            className="text-pink-700"
            ammount="4"
            salesTitle="Newly Added Foods "
            saleRate="0.45"
            position="+"
            link="/menu-management"
          />
        </div>
      </div>

      <div className=" flex justify-between mt-4">
        <div className="w-3/6 bg-white shadow-lg rounded-lg p-4">
          <p className="font-semibold text-lg ">
            Weekly Lunch Overview <br />
          </p>
          <TotalRevenueChart />
        </div>
        <div className="w-3/6 bg-white p-4">
          <p className="font-semibold text-lg ">
            Popular Lunch <br />
          </p>
          <TopProductTable />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
