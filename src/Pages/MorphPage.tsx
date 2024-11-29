import React, { Component, useState } from 'react';
import ImageUpload from '../Components/ImageUpload.tsx';
function MorphPage() {
    const [file1,setFile1] = useState<string|null>(null)
    const [file2,setFile2] = useState<string|null>(null)
    const handleFileChange = (filenum,file)=>{
        if (filenum === 1)
            setFile1(file)
        if (filenum===2)
            setFile2(file)
    }
    return <div className='sudoku page flex'>
        <ImageUpload handleFileChange={file => handleFileChange(1,file)}/>
    </div>;
}

export default MorphPage;