import { BarChart } from "@mui/x-charts/BarChart";

const orderedLunch = [210, 160, 180, 220, 190];
const xLabels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

export default function TotalRevenueChart() {
  const offlineColor = "blue";
  return (
    <BarChart
      width={550}
      height={400}
      series={[
        {
          data: orderedLunch,
          label: "Ordered lunch",
          id: "uvId",
          color: offlineColor,
        },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
    />
  );
}
