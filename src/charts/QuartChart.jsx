import { BarChart } from "@mui/x-charts/BarChart";
import { motion } from "framer-motion";

export default function QuartChart() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="flex m-5"
    >
      <div className="justify-center max-sm:grid">
        <div className="text-center text-2xl font-bold text-red-500">
          QUARTELY
        </div>
        <BarChart
          className="bg-yellow-400 bg-opacity-75 text-white border-red-500 border-2 rounded-md max-sm:z-10"
          borderRadius={20}
          xAxis={[
            {
              scaleType: "band",
              data: ["Jan-Mar", "Apr-Jun", "Jul-Sep", "Oct-Dec"],
            },
          ]}
          series={[
            {
              data: [
                23.03 + 123.98,
                97.81 + 255.29,
                75 + 152.69,
                104.74 + 30.21,
              ],
            },
            {
              data: [
                30.15 + 68.67,
                128.39 + 140.58,
                30.34 + 71.02,
                53.09 + 95.11,
              ],
            },
            {
              data: [
                88.69 + 138.64,
                94.63 + 29.75,
                134.38 + 145.81,
                26.41 + 50.27,
              ],
            },
          ]}
          width={500}
          height={300}
        />
      </div>
    </motion.div>
  );
}
