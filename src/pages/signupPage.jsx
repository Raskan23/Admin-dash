import React from 'react'

import Header from '../components/common_components/Header'
import Signup from '../components/signup/SignupPage'

const SignupPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10 bg-gray-900' style={{ backgroundColor: "#FFFFFF" }}>
            <Header title="Settings" />

            <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>

                <Signup/>

            </main>
        </div>
    )
}

export default SignupPage