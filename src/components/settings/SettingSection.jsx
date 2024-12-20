import React from 'react'
import { motion } from 'framer-motion'


const SettingSection = ({ icon: Icon, title, children }) => {
    return (
        <motion.div
  className="backdrop-filter backdrop-blur-lg shadow-lg rounded-xl border border-gray-700 p-6 mb-4"
  style={{
    background: "linear-gradient(135deg, rgba(142, 64, 255, 0.3), rgba(255, 255, 255, 0.1))"
  }}
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

            <div className='flex items-center mb-4'>
                <Icon className="text-indigo-500 mr-2" size="22" />
                <h2 className='text-xl tracking-wide font-semibold text-black'>
                    {title}
                </h2>
            </div>

            {children}

        </motion.div>
    )
}

export default SettingSection