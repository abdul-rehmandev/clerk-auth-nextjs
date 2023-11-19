import React from 'react'
import Link from "next/link"
import { UserButton, auth, useAuth } from "@clerk/nextjs"

const Navbar = async () => {


    //For Client Component We Will Use useAuth
    // const {isLoaded,userId,sessionId,getToken} =  useAuth()

    //For Server Component We Will Use auth
    const { userId } = await auth();
    const isAuth = !!userId;

    return (
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none gap-5">
            {!isAuth ? (
                <>
                    <Link href="/sign-in">
                        Login
                    </Link>
                    <Link href="/sign-up">
                        Signup
                    </Link>
                </>
            ) : (
                <div className='flex items-center gap-5'>
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="/profile">
                        Profile
                    </Link>
                    <UserButton afterSignOutUrl='/' />
                </div>
            )}
        </div>
    )
}

export default Navbar