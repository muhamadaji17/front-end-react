import React, { Fragment, useEffect, useReducer, useState } from 'react';
import apiMethod from '../api/apiMethod';
import Content from '../pages/content';
import { Menu, Transition } from '@headlessui/react';
import { BsPencilFill, BsTrashFill, BsThreeDotsVertical } from 'react-icons/bs';
import AddUser from './AddUser';
import EditUser from './EditUser';
import DeleteUser from './DeleteUser';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../redux/action/actionReducer';

const User = (props) => {
  let {user, message, refresh} = useSelector(state => state.userReducer)
  const dispatch = useDispatch()
  // const [user ,setUser] = useState('')
  const [isOpen , setIsOpen] = useState(false);
  const [isEdit , setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [data, setData] = useState('');
  const column =[
    {name : "#No"},
    {name : "Username"},
    {name : "FirstName"},
    {name : "LastName"},
  ]

  const getById =  async(data) => {
    const result = await user.find((u) => u.customer.users_id === data)
    const hasil = {
      user_id: result.id,
      password: result.password,
      username: result.username,
      first_name: result.customer.first_name,
      last_name: result.customer.last_name
    }
    // console.log(hasil)
    setData(hasil)
    setIsEdit(true)
    // setIsDelete(true)
  }
  
  // const deleteUser = async (data) => {
  //   const result = await user.find((u) => u.customer.users_id === data)
  //   console.log(result)
  //   setData(result.id)
  //   setIsDelete(true)
  // }
  
  useEffect(() => {
    console.log('object')
    dispatch(getAll())
  },[refresh])
  
  // useEffect (()=>{
    // console.log('dispatch')
    
  // },[refresh])
  // console.log(user)
  return (
    <>
      <Content title="User" fungsi={()=> setIsOpen(true)}>
        <table className="min-w-full table-fixed">
          <thead>
            <tr className="border-t border-gray-300">
              <th className="pr-6 py-2 border-b border-gray-300 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="lg:pl-2">No</span>
              </th>
              <th className="pr-6 py-2 border-b border-gray-300 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="lg:pl-2">Username</span>
              </th>
              <th className="pr-6 py-2 border-b border-gray-300 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="lg:pl-2">First Name</span>
              </th>
                <th className="pr-6 py-2 border-b border-gray-300 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="lg:pl-2">Last Name</span> 
              </th>
              <th className="pr-6 py-2 border-b border-gray-300 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="lg:pl-2">Aksi</span> 
              </th>
            </tr>
          </thead>
          <tbody>
            {(user || []).map((user, index) => (
              <tr key={user.id}>
                {/* {console.log(user.customer)} */}
                <td className="px-6 py-3 text-sm text-gray-500">{index + 1}</td>
                <td className="px-6 py-3 text-sm text-gray-500">{user.username}</td>
                <td className="px-6 py-3 text-sm text-gray-500">{user.customer.first_name}</td>
                <td className="px-6 py-3 text-sm text-gray-500">{user.customer.last_name}</td>
                <td className="px-6 py-3 text-sm text-gray-500">
                <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            
            <BsThreeDotsVertical
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100 bg-white "
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button 
                  onClick={() => getById(user.id)}
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <BsPencilFill
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <BsPencilFill
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Edit
                  </button>
                )}
              </Menu.Item>
              
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button 
                  onClick={() => {setData(user); setIsDelete(true)}}
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <BsTrashFill
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <BsTrashFill
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )}
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </Content>
      {
      isOpen ? <AddUser show={isOpen} />: ""
      }
      {
      isEdit ? <EditUser show={isEdit} closeModal={()=> setIsEdit(false)} data={data}/>: ""
      }
      {
        isDelete ? <DeleteUser show={isDelete} closeModal={() => setIsDelete(false)} data={data}/>:"" 
      }
    </>
  );
};

export default User;