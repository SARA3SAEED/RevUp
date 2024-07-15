import React, { useState } from "react";
import nessan from "../assets/Nissan-GTR.png";
import pursh from "../assets/pursh.png";
import genesis from "../assets/genesis.png";

export default function Cars() {
  const arrayOfImages = [nessan, pursh, genesis];
  const [content, setContent] = useState({
    first: arrayOfImages[0],
    second: arrayOfImages[1],
    third: arrayOfImages[2],
  });
  const [isLoading, setIsLoading] = useState(false);

  const goPrev = () => {
    const copyOfArr = content;
    setContent({
      first: copyOfArr.third,
      second: copyOfArr.first,
      third: copyOfArr.second,
    });
  };

  const goForward = () => {
    const copyOfArr = content;
    setContent({
      first: copyOfArr.second,
      second: copyOfArr.third,
      third: copyOfArr.first,
    });
  };
  return (
    !isLoading && (
      <div className="min-w-screen min-h-screen flex flex-col items-center">
        <h1 className="font-bold text-3xl text-start w-full p-4">
          Model overview
        </h1>
        <div className="carousel carousel-center bg-base-100 rounded-box w-full space-x-8 p-4 m-auto transition ease-in-out duration-500">
          <div
            id="item1"
            className="carousel-item rounded-xl flex items-center justify-between w-[30rem] bg-accent transition ease-in-out duration-500 scale-50"
          >
            <img className="w-[27rem]" src={content.first} />
          </div>
          <div
            id="item2"
            className="carousel-item rounded-xl flex items-center justify-between w-[30rem] shadow-lg bg-accent transition ease-in-out duration-500 z-10"
          >
            <a
              href="#item1"
              className="btn btn-circle text-secondary"
              onClick={() => goPrev()}
            >
              ❮
            </a>
            <div className="flex flex-col justify-center items-center">
              <img className="w-[20rem]" src={content.second} />
              <p className="b border-t border-base-300 text-center w-full pt-2">
                Purch 911
              </p>
              <p className="text-primary">New</p>
            </div>
            <a
              href="#item3"
              className="btn btn-circle text-secondary"
              onClick={() => goForward()}
            >
              ❯
            </a>
          </div>
          <div
            id="item3"
            className="carousel-item rounded-xl flex items-center justify-between w-[30rem] scale-50 bg-accent transition ease-in-out duration-500"
          >
            <img className="w-[27rem]" src={content.third} />
          </div>
        </div>
      </div>
    )
  );
}
