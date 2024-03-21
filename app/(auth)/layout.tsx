import React from 'react'
import { Logo } from './_components/Logo';
import { SparklesCore } from '@/components/ui/sparkles';

type Props = {
    children:React.ReactNode;
}

const AuthLayout = ({children}: Props) => {
  return(
    <div className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        <Logo/>
      </h1>
      {children}
    </div>
  )
  // return (
  //   <div className='h-full flex flex-col items-center justify-center'>
      
  //       
      
     
  //       </div>
  // )
}

export default AuthLayout