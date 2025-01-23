/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { motion } from "framer-motion";

const colors = ["black", "blue", "limeGreen", "red"];

const data1 = [
  {
    name: "2025",
    total: 23.25,
    gallons: 4.2,
    priceGal: 3.2,
    discount: 0.12,
    fuelTotal: 13.14,
  },
  {
    name: "2024",
    total: 1083.26,
    gallons: 4.2,
    priceGal: 3.2,
    discount: 0.12,
    fuelTotal: 13.14,
  },
  {
    name: "2023",
    total: 1155.95,
    gallons: 4.2,
    priceGal: 3.2,
    discount: 0.12,
    fuelTotal: 13.14,
  },
  {
    name: "Total",
    total: 2262.46,
    gallons: 4.2,
    priceGal: 3.2,
    discount: 0.12,
    fuelTotal: 13.14,
  },
];

// const dataTest = ({data})

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function CCharts({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="flex m-5 text-center"
    >
      <div className="justify-center max-sm:grid">
        <div className="text-2xl font-bold text-red-500">TOTAL SPENT YEARLY</div>
        <BarChart
          className="bg-yellow-400 bg-opacity-75 text-white border-red-500 border-2 rounded-md max-sm:size-auto"
          width={500}
          height={300}
          data={data1}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ stroke: "black", strokeWidth: 2 }} />
          <YAxis tick={{ stroke: "red", strokeWidth: 2 }} />
          <Bar
            dataKey="total"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data1.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </motion.div>
  );
}
