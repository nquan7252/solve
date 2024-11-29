import React, { Component, useState } from "react";
import ImageUpload from "../Components/ImageUpload.tsx";
import Header from "../Components/Header.tsx";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./AlignmentPage.css";
import ResultImage from "../Components/ResultImage.tsx";
function AlignmentPage() {
  const [file1, setFile1] = useState<string | null>(null);
  const [file2, setFile2] = useState<string | null>(null);
  const [processing, setProcessing] = useState<boolean>(false);
  const [result, setResult] = useState<object|null>(null);
  // const serverUrl = "http://localhost:8080"
  const serverDomain = "ec2-3-145-138-126.us-east-2.compute.amazonaws.com:8080"
  const serverUrl = "http://ec2-3-145-138-126.us-east-2.compute.amazonaws.com:8080";
  const handleFileChange = (filenum, file) => {
    console.log(file);
    if (filenum === 1) setFile1(file);
    if (filenum === 2) setFile2(file);
  };
  const importData = () =>{
    const jsonString = JSON.stringify(result.data.alignment);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = 'data.json';
    link.click();
    URL.revokeObjectURL(url);
  }
  const process = async () => {
    if (file1 == null || file2 == null) return;
    let sessionId = uuidv4();
    const formData = new FormData();
    formData.append("images", file1);
    formData.append("images", file2);
    formData.append("sessionId", sessionId);
    const url = `ws://${serverDomain}/ws`;
    const stompClient = Stomp.client(url);

    stompClient.connect({}, function (frame) {
      stompClient.subscribe(
        "/user/" + sessionId + "/queue/messages",
        function (message) {
          if (message.body){
            setResult(JSON.parse(message.body))
          }          
        }
      );
    });

    axios
      .post(serverUrl + "/api/image/align", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    setProcessing(true);
  };

  return (
    <div className="sudoku page">
      <Header />

      {!result ? (
        <section>
          <div className="flex justify-center align-center w-full">
            <ImageUpload
              handleFileChange={(file) => handleFileChange(1, file)}
            />
            <ImageUpload
              handleFileChange={(file) => handleFileChange(2, file)}
            />
          </div>
          {file1 && file2 && (
            <div className="flex justify-center items -center w-full">
              {!processing?<button id="process" onClick={process}>
                Process
              </button>:<span className="spinner"></span>}
            </div>
          )}
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center">
          <ResultImage url={result.url}/>
          <button id="process" onClick={importData}>
                Import
              </button>
        </section>
      )}
    </div>
  );
}

export default AlignmentPage;
