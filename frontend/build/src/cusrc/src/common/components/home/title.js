import React from "react";

const Title = (props) => {
  return (
    <>
      <div class="flex flex-col text-center w-full mb-20">
        <p class="text-4xl font-bold text-center text-red-600 mx-auto ">
          {props.title}
        </p>
        <br></br>
        <hr></hr>
      </div>
    </>
  );
};

export default Title;
