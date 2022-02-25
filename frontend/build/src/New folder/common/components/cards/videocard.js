import React from "./react";

const VideoCard = (props) => {
  return (
    <>
      <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
        <div>
          <video width="400" controls>
            <source src={props.videoLink} type="video/mp4" />
          </video>
        </div>
        <div class="text-center py-8 sm:py-6">
          <p class="text-xl  text-gray-700 font-bold mb-2">{props.photoText}</p>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
