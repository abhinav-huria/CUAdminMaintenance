import React from "./react";

const PhotoCard = (props) => {
  return (
    <>
      <a href={props.pdflink} target="_blank" rel="noreferrer">
        <div
          onClick={props.onClick}
          class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center"
        >
          <div>
            <img
              class="object-center object-cover h-auto w-full"
              src={props.coverImg}
              alt="photo"
            />
          </div>
          <div class="text-center py-8 sm:py-6">
            <p class="text-xl  text-gray-700 font-bold mb-2">
              {props.photoText}
            </p>
          </div>
        </div>
      </a>
    </>
  );
};

export default PhotoCard;
