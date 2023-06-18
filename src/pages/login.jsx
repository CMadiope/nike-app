import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import logo from "../../public/logo.png";
import Image from "next/image";

const Login = () => {
  const { data: session } = useSession();
  //console.log(session)

  if (session) {
    return (
      <div className='text-2xl py-y text-center pb-20 px-6 lg:px-16 pt-10'>
        <div className='flex justify-center py-5'>
          <Image src={logo} alt='/' className='' />
        </div>
        <h1>Welcome, {session.user.name}</h1>
        <button
          className='my-5 cursor-pointer bg-[#111] text-white hover:bg-[#111]/70 py-2 px-4 rounded-xl'
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  } else {
    return (
      <div className='pb-20 px-6 lg:px-16 '>
        <div className='flex flex-col justify-center gap-4 text-center pt-10'>
          <div className='flex justify-center'>
            <Image src={logo} alt='/' className='' />
          </div>

          <h1 className='uppercase text-2xl font-bold py-4'>
            Your account for everything Nike
          </h1>
          <button
            className='my-5 cursor-pointer bg-[#111] py-2 px-4 rounded-xl text-white hover:bg-[#111]/70'
            onClick={() => signIn()}
          >
            Sign in
          </button>
        </div>
      </div>
    );
  }
};

export default Login;
