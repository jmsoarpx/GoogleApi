import React from "react";
import PropTypes from "prop-types";

const Cards = (props) => {
  const { result } = props;

  return (
    <div className="flex flex-row flex-wrap">
      {result.map((e) => {
        console.log(e);
        return (
          <div
            className="max-w-xs mx-auto max-h-96 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-2"
            key={e.id}
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src={e.volumeInfo.imageLinks ? e.volumeInfo.imageLinks.thumbnail : ""}
                  alt="Man looking at item at a store"
                />
              </div>
              <div className="p-2 text-justify">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Book Info</div>
                <a
                  href={e.volumeInfo.previewLink}
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                  target="_blank"
                >
                  {e.volumeInfo.title}
                </a>
                <p className="mt-2 text-gray-500 overflow-ellipsis align-middle">{e.volumeInfo.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Cards.propTypes = {};

export default Cards;
