/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="px-36 max-w-md sm:max-w-xl lg:max-w-2xl mx-auto sm:ml-auto mb-[-85px]">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-200 mb-2">{title}</h1>
            <p className="text-neutral-100 mb-4">{overview}</p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Play
                </button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
