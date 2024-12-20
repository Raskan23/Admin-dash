import React from 'react'

import Header from '../components/common_components/Header'
import Login from '../components/login/LoginPage'

const LoginPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10 bg-gray-900' style={{ backgroundColor: "#FFFFFF" }}>
            <Header title="Settings" />

            <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>

                <Login/>
                
            </main>
        </div>
    )
}

export default LoginPage