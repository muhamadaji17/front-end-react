import React, { useState } from "react";
import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import apiMethod from "../api/apiMethod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/action/actionReducer";

const EditUser = (props) => {
  let {user, message, refresh} = useSelector(state => state.userReducer)
  // console.log(props)
  const {username, user_id, password,first_name, last_name} = props.data
    const [pesan, setPesan] = useState('')
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration =  (data) => {
    // console.log(data) 
    // const result = await apiMethod.updateUserandCust(data);
     dispatch(updateUser(data))
    // console.log(result)
    props.closeModal();
    // console.log(result);
  };

  const registerOptions = {
    username: { required: "Name is required" },
    user_id: {required: "user id is required"},
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
    first_name: { required: "First Name is required" },
    last_name: { required: "Last Name is required" },
  };

  return (
    <div>
      <Transition appear show={props.show} as={Fragment}>
        <Dialog as="div" className="relative z-10" static onClose={() => null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Edit Data Users
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(handleRegistration)}>
                    <input
                              name="user_id"
                              type="hidden"
                              {...register(
                                "user_id",
                                registerOptions.user_id
                                
                              )}
                              defaultValue={user_id}
                            />
                      
                      <div className="max-w-xl bg-white py-6 px-3 m-auto w-full mt-6">
                        <div className="grid grid-cols-1 gap-4 max-w-xl m-auto">
                          <div className="col-span-1">
                            <input
                              name="username"
                              type="text"
                              {...register(
                                "username",
                                registerOptions.username
                                
                              )}
                              className="rounded-md border-solid-gray-400 border-2 p-3 md:text-md w-full"
                              
                              defaultValue={username}
                            />
                            <small className="text-danger">
                              {errors?.username && errors.username.message}
                            </small>
                          </div>
                          <div className="col-span-1">
                            {/* <label>Email</label> */}
                            <input
                              type="password"
                              name="password"
                              {...register(
                                "password",
                                registerOptions.password
                              )}
                              className="rounded-md border-solid-gray-400 border-2 p-3 md:text-md w-full"
                              placeholder="password"

                            />
                            <small className="text-danger">
                              {errors?.password && errors.password.message}
                            </small>
                          </div>
                          <div className="col-span-1">
                            {/* <label>Password</label> */}
                            <input defaultValue={first_name}
                              //   type="password"
                              name="first_name"
                              {...register(
                                "first_name",
                                registerOptions.first_name
                                
                              )}
                              className="rounded-md border-solid-gray-400 border-2 p-3 md:text-md w-full"
                              placeholder="first_name"
                            />
                            <small className="text-danger">
                              {errors?.first_name && errors.first_name.message}
                            </small>
                          </div>
                          <div className="col-span-1">
                            {/* <label>Password</label> */}
                            <input defaultValue={last_name}
                              //   type="password"
                              name="last_name"
                              {...register(
                                "last_name",
                                registerOptions.last_name
                              )}
                              className="rounded-md border-solid-gray-400 border-2 p-3 md:text-md w-full"
                              placeholder="last_name"
                            />
                            <small className="text-danger">
                              {errors?.last_name && errors.last_name.message}
                            </small>
                          </div>
                          
                        </div>
                        <div className="flex-row space-x-4 mt-4 text-right">
                          <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                            Submit
                          </button>
                          <button
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={props.closeModal}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default EditUser;