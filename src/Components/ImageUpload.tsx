import React, { Component, useRef, useState } from 'react';
import './ImageUpload.css'
interface ImageUploadProp{
    handleFileChange: (file:File|null)=>void;
}
function ImageUpload({handleFileChange}:ImageUploadProp) {
    const hiddenInputRef = useRef<HTMLInputElement>(null)
    const [file,setFile] = useState<string|null>(null)
    const handleFileUpload = ()=>{
        if (hiddenInputRef['current']){
            hiddenInputRef['current'].click()
        }
    }
    const handleDelete=()=>{
        handleFileChange(null)
        setFile(null)
    }
    const handleChange = (e) =>{
        handleFileChange(e.target.files[0])
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return <div className='flex flex-col items-center justify-center text-sm m-10 text-center '>
        <h3 className='font-bold'>Upload File</h3>
        <span className='my-5'>Please upload the image you want to process</span>
        <div className='file-drop-container'>
        {!file?<div onClick={handleFileUpload} className='file-drop'>
            <img src={require("../Assets/file.png")}></img>
            <span className='my-4'>Drop your file here or browse</span>
            <span className='text-xs text-gray-500'>Maximum file size 2MB</span>
            <span className='text-xs text-gray-500'>Extension type: PNG, JPG.</span>
            <input onChange={handleChange} ref={hiddenInputRef} type='file' style={{visibility:'hidden'}}></input>
        </div>
        :<div>
            <img onClick={handleDelete} id='bin' src={require('../Assets/bin.png')}></img>
            <img src={file}></img>
        </div>}
        </div>
    </div>;
}

export default ImageUpload;