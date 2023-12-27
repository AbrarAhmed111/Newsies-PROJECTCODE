import {Link} from "react-router-dom";
import React from 'react'

 const Navbar = () =>{
  return (
    <>
    <nav className={`flex justify-center items-center py-4 px-5 bg-sky-500 text-white border-b border-red-500 sticky top-0 `} >
    <ul className= {`flex items-center gap-10 border-2 border-red-500 text-lg py-3 px-12`}>
      <li className='font-mono text-2xl font-bold cursor-pointer hover:font-extrabold'><Link to='/'>Newsies</Link></li> 
      <li className='font-semibold cursor-pointer hover:font-bold'><Link to='/business'>Business          </Link></li>
      <li className='font-semibold cursor-pointer hover:font-bold'><Link to='/health'>Health              </Link></li>
      <li className='font-semibold cursor-pointer hover:font-bold'><Link to='/entertainment'>Entertainment</Link></li>
      <li className='font-semibold cursor-pointer hover:font-bold'><Link to='/sports'>Sports              </Link></li>
      <li className='font-semibold cursor-pointer hover:font-bold'><Link to='/technology'>Technology      </Link></li>
    </ul> 
    </nav>
    </>
)
}

export default Navbar