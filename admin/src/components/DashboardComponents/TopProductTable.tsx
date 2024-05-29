import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TopProductBar from "./TopProductBar";

function createData(
  id: number,
  name: string,
  popularity: number,
  ordered: number
) {
  return { id, name, popularity, ordered };
}

const rows = [
  createData(1, "Grilled Fish with Rice and Vegetables", 45, 45),
  createData(2, "Mutton Curry with Plain Rice", 35, 35),
  createData(3, " Tandoori Chicken with Naan", 32, 32),
  createData(4, "Fish Curry with Rice", 25, 25),
  createData(5, "Egg Curry with Rice", 10, 10),
];

export default function TopProductTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 65 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id </TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Popularity</TableCell>
            <TableCell align="center">Sales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">
                <TopProductBar value={row.popularity} />
              </TableCell>
              <TableCell align="center">
                {" "}
                <p className="border border-green-400 rounded-lg py-2 ">
                  {row.ordered}%
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
