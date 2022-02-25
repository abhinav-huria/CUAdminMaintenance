import React from "react";
import logo from "./Campus.jpg";

export default function home() {
  return (
    <div>
      <div
        class="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${logo})` }}
      >
        <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
          <div class="text-center ">
            <p class="tw-font-bold text-white tw-font-sans xl:text-7xl ">
              ADMINISTRATION & <br />
              MAINTENANCE OF INFRASTRUCTURE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
