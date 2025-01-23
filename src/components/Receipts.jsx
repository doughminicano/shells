/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export default function Receipts({ receipts }) {
  return (
    <div className="m-5">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-center text-5xl font-extrabold -z-0"
      >
        Receipts
      </motion.div>
      {/* reciept */}
      <motion.div
        initial={{ opacity: 0, x: 250 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 max-sm:grid-col-1 gap-4"
      >
        {receipts.map((r, i) => (
          <div key={i} className="mt-5 bg-yellow-100 text-black p-4 border-red-200 border-2 rounded-md z-auto">
            <div className="font-semibold mb-2">Reciept {i + 1}</div>
            {Object.entries(r).map(([key, value]) => (
              <div key={key}>
                <span className="font-extrabold">{key}: </span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
