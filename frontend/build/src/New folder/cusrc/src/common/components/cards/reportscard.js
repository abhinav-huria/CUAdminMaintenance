import React from "react";

const Reportscard = (props) => {
  return (
    <>
      <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
        <a href={props.reportLink} target="_blank">
          <div class="h-full flex items-center tw-bg-red-600 border-gray-200 border p-4 rounded-lg">
            <div class="flex-grow">
              <h2 class="text-white title-font font-medium">{props.edition}</h2>
              <p class="text-white">{props.date}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
