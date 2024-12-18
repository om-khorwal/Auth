import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const [product, setproduct] = useState('')
  // const [name, setname] = useState('')
  const navigate = useNavigate()

  // useEffect(() => {
  //   setname(localStorage.getItem(name))
  // }, [])

  const handlelogout = () => {
    localStorage.removeItem('jwttoken');
    localStorage.removeItem('name');
    alert("userlogged out")
    navigate('/login')
  }

  const fetchproducts = async () => {
    try {
      const url = 'https://auth-rigd-backend.vercel.app/home'
      const headers = {
        headers: {
          'Authorization': localStorage.getItem("jwttoken")
        }
      }
      const response = await fetch(url, headers);
      const result = await response.json()
      setproduct(result)

    }
    catch {
      console.log(Error)
    }

  }
  useEffect(()=>{
    fetchproducts()
  })


  return (

    <>
      <div>Home</div>
      <button onClick={handlelogout}>logout</button>

      <div>
        {
          product && product?.map((item,index) => (
            <ul key={index}>
              <span>
                {item.name}:{item.price}
              </span>
            </ul>
          ))
        }
      </div>
    </>

  )
}

export default Home