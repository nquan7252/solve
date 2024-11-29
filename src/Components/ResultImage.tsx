import React, { Component, useRef, useState } from 'react';

const ResultImage:React.FC<{url:string}> = ({url}) => {
    return <div className='flex flex-col items-center justify-center text-sm m-10 text-center '>
        <div>
            <img src={url}></img>
        </div>
    </div>;
}

export default ResultImage;