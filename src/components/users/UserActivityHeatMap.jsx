import React from 'react'
import { motion } from 'framer-motion'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const User_Activity_Data = [
  { name: "Mon", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 100, "20-24": 30 },
  { name: "Tue", "0-4": 30, "4-8": 50, "8-12": 70, "12-16": 90, "16-20": 110, "20-24": 40 },
  { name: "Wed", "0-4": 40, "4-8": 60, "8-12": 80, "12-16": 100, "16-20": 120, "20-24": 50 },
  { name: "Thu", "0-4": 50, "4-8": 70, "8-12": 90, "12-16": 110, "16-20": 130, "20-24": 60 },
  { name: "Fri", "0-4": 60, "4-8": 80, "8-12": 100, "12-16": 120, "16-20": 140, "20-24": 70 },
  { name: "Sat", "0-4": 70, "4-8": 90, "8-12": 110, "12-16": 130, "16-20": 150, "20-24": 80 },
  { name: "Sun", "0-4": 80, "4-8": 100, "8-12": 120, "12-16": 140, "16-20": 160, "20-24": 90 },
];

const UserActivityHeatMap = () => {
  return (
    <motion.div
      className='bg-black shadow-lg backdrop-blur-md rounded-xl p-5 border border-gray-700'
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3, delay: 0.7 }}
    >
      <h2 className='text-xl font-semibold mb-4 text-gray-100'>
        User Activity HeatMap
      </h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={User_Activity_Data}>
            <CartesianGrid strokeDasharray='3, 3' stroke='#374151' />
            <XAxis dataKey="name" stroke='#9ca3af' />
            <YAxis stroke='#9ca3af' />

            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 45, 55, 0.8)",
                borderColor: "#4b5563"
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />

            <Legend />

            <Bar dataKey="0-4" stackId='a' fill='#5B82F7' />
            <Bar dataKey="4-8" stackId='a' fill='#8B5CF6' />
            <Bar dataKey="8-12" stackId='a' fill='#EC4899' />
            <Bar dataKey="12-16" stackId='a' fill='#10B981' />
            <Bar dataKey="16-20" stackId='a' fill='#F59E0B' />
            <Bar dataKey="20-24" stackId='a' fill='#6EE7B7' />

          </BarChart>
        </ResponsiveContainer>

      </div>
    </motion.div>
  )
}

export default UserActivityHeatMap