import React from 'react';
import { Link } from "react-router-dom";
function MyLink(props){
  return(
      <div>
    <Link to={props.to} className='text-gray-300 hover:bg-gray-700 hover:text-white flex items-center px-2 py-2 text-sm font-medium rounded-md  text-white '>
  <div>{props.icon}</div>
      <span className='ml-3'>{props.children}</span>
    </Link>
      </div>
    );
}
export default MyLink;