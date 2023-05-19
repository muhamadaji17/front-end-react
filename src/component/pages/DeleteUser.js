import React, { useState } from "react";
import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import apiMethod from "../api/apiMethod";
import { useForm } from "react-hook-form";
import {BsTrashFill} from "react-icons/bs"
import {ImCross} from "react-icons/im"
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../redux/action/actionReducer";

const DeleteUser = (props) => {
  // console.log('data dari prop',props.data.id)
  let {user, message, refresh} = useSelector(state => state.userReducer)
    const [pesan, setPesan] = useState('')
    // console.log(props)
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const dispatch = useDispatch()
    const handleRegistration = async (id) => {
      // console.log('data',data)
      const data = props.data.id
    const result =  dispatch(deleteUser(data))
    props.closeModal()
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
                    className="text-lg font-medium text-center leading-6 text-gray-900"
                  >
                    Delete User
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(handleRegistration)}>
                        <input type="hidden" defaultValue={props.data.id} />
                      <div className="max-w-xl bg-white py-6 px-3 m-auto w-full mt-6">
                        <div className="flex-row space-x-4 mt-4 text-center">
                          <button className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                            <BsTrashFill />
                          </button>
                          <button
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={props.closeModal}
                          >
                            <ImCross />
                          </button>
                        </div>
                      </div>
                      {/* {console.log(props.data)} */}
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

export default DeleteUser;