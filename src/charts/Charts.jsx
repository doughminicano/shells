import CCharts from "./CChart";
import QuartChart from "../charts/QuartChart";
import { motion } from "framer-motion";

export default function Charts() {
  return (
    <div className="p-5 max-w-screen-lg  lg:flex-1 mx-auto">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-10"
      >
        Charts Overview
      </motion.h1>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 space-x-10">
        {/* Chart 1 */}
        <div className="flex items-center justify-center">
          <CCharts className="z-0 backdrop-blur-sm" />
        </div>

        {/* Chart 2 */}
        <div className="flex items-center justify-center">
          <QuartChart />
        </div>
      </div>
    </div>
  );
}
