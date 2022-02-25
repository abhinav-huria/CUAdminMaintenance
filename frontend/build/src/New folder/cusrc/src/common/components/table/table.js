import React from "react";

const Table = () => {
  return (
    <>
      <table class="rounded-t-lg  w-full text-gray-800">
        {this.props.children}
      </table>
    </>
  );
};

export default Table;
