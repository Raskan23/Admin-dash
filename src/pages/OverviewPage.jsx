import React from "react";

import Header from "../components/common_components/Header";
import StatCards from "../components/common_components/StatCards";
import SaleOverviewChart from "../components/overview/SaleOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";

import { motion } from "framer-motion";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";


const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-500" style={{ backgroundColor: "#FFFFFF" }} >
      <Header title="Overview" />

      
      {/* STAT DATA  */}
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8" >
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-7"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCards name="Total Sales" icon={Zap} value="$13,459" color="#7210FF" />
          <StatCards name="New Users" icon={Users} value="1,987" color="#7210FF" />
          <StatCards name="Total Products" icon={ShoppingBag} value="5,678" color="#7210FF" />
          <StatCards name="Conversion Rate" icon={BarChart2} value="14.9%" color="#7210FF" />

        </motion.div>


        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <SaleOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
