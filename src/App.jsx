import 'animate.css';
import { useState } from 'react';
const App = ()=>{
  const formfield = {
    firstname:'',
    lastname:'',
    email:'',
    username:'',
    password:'',
    mobile:''
  }
  const [form ,setForm] = useState(formfield)

  const getFormvalue =(e)=>{
     const input = e.target
     const value = input.value
     const key = input.name
      setForm(
        {
        ...form,
          [key]:value
        }
      )
  }

  const signup =(e)=>{
   e.preventDefault()
   alert(JSON.stringify(form))
  }

  return (
    <div  className="bg-gray-100 h-fit flex justify-center items-center">
      <h1>{JSON.stringify(form)}</h1>
     <div className="bg-white px-8 py-4 w-[450px] shadow-lg rounded-lg animate__animated animate__zoomIn">

      <h1 className='text-2xl font-bold mb-3 text-center'>Signup form</h1>

      <form className='flex flex-col gap-4' onSubmit={signup}>
         <div className='flex flex-col gap-p'>
        <label className="text-lg font-semibold">First name</label>
        <input type="text"
        name="firstname"
        placeholder='Enter first name' 
        className = "border border-gray-300 p-2 rounded"
        onChange={getFormvalue}
        />
        {/* <small className='text-rose-600 font-semibold text-sm'>This field is required</small> */}
        </div>

        <div className='flex flex-col gap-1'>
        <label className="text-lg font-semibold">Last name</label>
        <input type="text"
        name="lastname"
        placeholder='Enter Last name' 
        className = "border border-gray-300 p-2 rounded"
        onChange={getFormvalue}
        />
        {/* <small className='text-rose-600 font-semibold text-sm'>This field is required</small> */}
        </div>

        <div className='flex flex-col gap-1'>
        <label className="text-lg font-semibold">E-mail</label>
        <input type="email"
        name="email"
        placeholder='email@gmail.com' 
        className = "border border-gray-300 p-2 rounded"
        onChange={getFormvalue}
        />
        {/* <small className='text-rose-600 font-semibold text-sm'>This field is required</small> */}
        </div>

        <div className='flex flex-col gap-1'>
        <label className="text-lg font-semibold">Username</label>
        <input type="text"
        name="username"
        placeholder='Enter Username' 
        className = "border border-gray-300 p-2 rounded"
        onChange={getFormvalue}
        />
        {/* <small className='text-rose-600 font-semibold text-sm'>This field is required</small> */}
        </div>

        <div className='flex flex-col gap-1'>
        <label className="text-lg font-semibold">Password</label>
        <input type="password"
        name="password"
        placeholder='******' 
        className = "border border-gray-300 p-2 rounded"
        onChange={getFormvalue}
        />
        {/* <small className='text-rose-600 font-semibold text-sm'>This field is required</small> */}
        </div>

        <div className='flex flex-col gap-1'>
        <label className="text-lg font-semibold">Mobile</label>
        <input type="number"
        name="mobile"
        placeholder='9876543333' 
        className = "border border-gray-300 p-2 rounded"
        onChange={getFormvalue}
        />
        {/* <small className='text-rose-600 font-semibold text-sm'>This field is required</small> */}
        </div>

        <button className='border-0 bg-indigo-600 text-white rounded py-2 font-semibold'>Submit</button>
      </form>
     </div>
    </div>
  )
}

export default App