import React, { useState } from "react";
import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import apiMethod from "../api/apiMethod";
import { useForm } from "react-hook-form";

const AddUser = (props) => {
    const [pesan, setPesan] = useState('')
    const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = async (data) => {
    const result = await apiMethod.createUserandCust(data);
    
    navigate('/user')
    // dispatchEvent(createA(data));
    // props.closeModal();
    // console.log(result);
  };

  const registerOptions = {
    username: { required: "Name is required" },
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
  
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              
                
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(handleRegistration)}>
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
                              placeholder="username"
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
                            <input
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
                            <input
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
                          <button onClick={() => navigate('/user')} className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                            Cancel
                          </button>

                        </div>
                      </div>
                    </form>
                  </div>
            </div>
          </div>
    </div>
  );
};

export default AddUser;