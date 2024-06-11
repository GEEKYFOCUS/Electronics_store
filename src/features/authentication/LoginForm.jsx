import React from 'react'

function LoginForm() {
  return (
        <div className='flex gap-24 items-center justify-between'>
        <img src="img//signup.png" alt="signup" className='w-[50%]' />
        <div className="m-6">
            <div>
            <h1 className="text-4xl py-3 font-semibold">Log in to Exclusive</h1>
            <p className="font-semibold">Enter your details below</p>
            </div>

            <div className="py-4">
                <input type="text" placeholder='Name' name="name" id="name" className="w-[80%] py-4 border-b-2 outline-none"/>
                <input type="text" placeholder='Email or Phone Number' name="email" id="email" className="w-[80%] py-4 border-b-2 outline-none" />
                <input type="password" placeholder='Password' name="" id="password" className="w-[80%] py-4 border-b-2 outline-none"/>
            </div>

            <div className=" flex items-center space-x-36">
                <button className='bg-[#db4444] py-3 px-10 text-white font-semibold'>Log In</button>
                <p className="font-semibold text-[#db4444]">Forget Password?</p>
            </div>

        </div>
    </div>
  )
}

export default LoginForm