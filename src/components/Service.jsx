import React from "react";

const Service = (props) => {
  return (
    <div className="service-card flex flex-col py-6 px-8 items-center 
      dark:bg-slate-800 bg-white rounded-2xl">
      <img className="h-24 rounded-full" src={props.imgUrl} />
      <h2 className="text-xl my-2 text-center font-medium text-amber-400">
        {props.name}
      </h2>
      <p className="text-center dark:text-white text-gray-800 ">
        {props.description}
      </p>
    </div>
  );
};

export default Service;
