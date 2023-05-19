import React from "react";
import { Link } from "react-router-dom";

const Content = (props) => {
  const { title, children, ...others } = props;
  return (
    <div>
      <div className="grid col-1 relative bg-white shadow-sm border-b border-gray-200 px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex-1 min-w-0">
          <h1 className="text-2lg font-bold leading-6 text-gray-900 sm:truncate uppercase">
            {title}
          </h1>
        </div>
        <div className="mt-4 mb-1 flex sm:mt-1 sm:ml-4">
          <Link
            type="button"
            to={'/addUser'}
            className="order-0 mb-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md bg-purple-500 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1"
          >
            Create
          </Link>
        </div>
      </div>
      <div className="mt-8 sm:block relative">
        <div className="align-middle inline-block min-w-full border-b border-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Content;