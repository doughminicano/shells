/* eslint-disable react/prop-types */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";

export default function DenseTable({ data }) {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-5xl font-extrabold text-center mt-5"
      >
        Overview
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <TableContainer
          className="mt-5 p-2 border-t-red-500 border-b-red-500 border-b-8 border-2 bg-yellow-400 rounded-md"
          component={Paper}
          sx={{ maxHeight: 400 }}
        >
          <Table
            className="bg-yellow-400 rounded-md"
            sx={{ minWidth: 550 }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead
              className="opacity-95 blur-0 text-white rounded-md"
              sx={{
                position: "sticky",
                top: 0,
                backgroundColor: "Red",
                color: "red",
                zIndex: 1, // Ensures header appears on top
              }}
            >
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Gallons</TableCell>
                <TableCell align="right">Price/Gal</TableCell>
                <TableCell align="right">Fuel Discount</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length > 0 ? (
                data.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.Date || "N/A"}
                    </TableCell>
                    <TableCell align="right">{row.Gallons || "N/A"}</TableCell>
                    <TableCell align="right">
                      {row["Price/Gal"] || "N/A"}
                    </TableCell>
                    <TableCell align="right">
                      {row["Fuel Discount"] || "N/A"}
                    </TableCell>
                    <TableCell align="right">{row.Total || "N/A"}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    <p className="animate-pulse text-3xl text-red-500">
                      ... Loading ...
                    </p>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </motion.div>
    </>
  );
}
