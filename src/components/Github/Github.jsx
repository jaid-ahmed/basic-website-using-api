import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

  // const data=useLoaderData()
    const[data,setData]= useState([])
  useEffect(()=>{
fetch('https://github.com/jaid-ahmed')
.then(response => response.json())
.then(data => {console.log(data);
setData(data)

  })

  },[])

  return (
    <div className='text-center m-4
     bg-gray-600 text-red 
     text-3xl p-4'>Github Followers: {data.followers}
    
    <img src="https://avatars.githubusercontent.com/u/98268344?v=4" alt="" width={300} />
     </div>
  )
}

export default Github
export const githubinfoloader= async ()=>{
 const response= await fetch('https://github.com/jaid-ahmed')
return response.json()
}