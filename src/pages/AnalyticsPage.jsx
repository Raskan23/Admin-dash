import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/common_components/Header'
import AnalyticsStatCards from '../components/analytics/AnalyticsStatCards'
import RevenueChart from '../components/analytics/RevenueChart'
import ChannelPerformance from '../components/analytics/ChannelPerformance'
import ProductPerformance from '../components/analytics/ProductPerformance'
import UserRetention from '../components/analytics/UserRetention'
import CustomerSegmentation from '../components/analytics/CustomerSegmentation'
import AIPoweredInsights from '../components/analytics/AIPoweredInsights'

const AnalyticsPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10 bg-gray-900' style={{ backgroundColor: "#FFFFFF" }}>
            <Header title="Analytic Dashboard" />

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <AnalyticsStatCards />

                <RevenueChart />

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-7'>
                    <ChannelPerformance/>
                    <ProductPerformance />
                    <UserRetention />
                    <CustomerSegmentation/>
                </div>


                <AIPoweredInsights />
            </main>


        </div>
    )
}

export default AnalyticsPage