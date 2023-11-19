import Navbar from '@/components/Navbar'
import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const page = () => {
    return (
        <div className='flex justify-center items-center my-10 flex-col'>
            <div className='mb-5'>
                <Navbar />
            </div>
            <UserProfile />
        </div>
    )
}

export default page