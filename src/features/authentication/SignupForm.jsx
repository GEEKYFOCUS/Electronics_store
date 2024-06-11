function SignupForm() {
  return (
    <div className='flex gap-24 items-center justify-between'>
        <img src="img//signup.png" alt="signup" className='w-[50%]' />
        <div className="m-6">
            <div>
            <h1 className="text-4xl py-3 font-semibold">Create an account</h1>
            <p className="font-semibold">Enter your details below</p>
            </div>

            <div className="py-4">
                <input type="text" placeholder='Name' name="name" id="name" className="w-[80%] py-4 border-b-2 outline-none"/>
                <input type="text" placeholder='Email or Phone Number' name="email" id="email" className="w-[80%] py-4 border-b-2 outline-none" />
                <input type="password" placeholder='Password' name="" id="password" className="w-[80%] py-4 border-b-2 outline-none"/>
            </div>

            <div className="flex flex-col space-y-4 mr-24">
                <button className='bg-[#db4444] py-3 px-4 text-white font-semibold'>Create Account</button>
                <button className=' border text-black py-3 px-4 font-semibold'>Sign up with Google</button>
            </div>

            <span className="flex space-x-3 py-2">
            <p>Already have account?</p>
            <p className="underline">Log in</p> 
            </span>

        </div>
    </div>
  )
}

export default SignupForm