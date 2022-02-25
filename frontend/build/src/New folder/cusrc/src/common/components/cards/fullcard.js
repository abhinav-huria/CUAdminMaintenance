import React from "react";

const FullCard = (props) => {
  return (
    <div>
      <div class="place-items-center place-content-center">
        <a href={props.pdfLink} target="_blank" rel="noreferrer">
          <div class=" text-center">
            <div class="group bg-white shadow-lg p-6 rounded-lg hover:shadow-inner hover:bg-red-600 ">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                alt="content"
              />
              <h3 class=" text-red-600 text-xs font-medium title-font group-hover:text-white">
                Team
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Learn More
              </h2>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FullCard;
