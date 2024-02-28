"use client"
import data from "../data/collections.json"
import React, { useState, useEffect, useRef } from 'react';

function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = e => {
                if (e.deltaY == 0) return;
                e.preventDefault();
                el.scrollBy(e.deltaY, 0);
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);
    return elRef;
}

const PopoverHeader = ({ item }) => (
    <div className="flex p-2 text-center items-center gap-4">
      <img
        className="rounded-full w-8"
        src={item.image}
        width={240}
        height={240}
        alt={item.name}
      />
      <div className="text-sm">{item.name}</div>
    </div>
  );
  
  const PopoverFooter = ({ item }) => (
    <div className="flex px-2 pt-2 text-center">
      <h1>Description:</h1>
    </div>
  );

  const Popover = ({ item }) => (
    <div className="popover absolute backdrop-blur-xl h-80 w-64 rounded-xl -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 border border-zinc-100">
      <PopoverHeader item={item} />
      <div className="border-b-[1px]" />
      <div className="flex p-2 flex-col text-sm text-start justify-evenly relative">
        <div>Mint date: {item.date}</div>
        <div>Supply: {item.totalSupply}</div>
        <div className="w-4 h-4 absolute right-2 top-2">
          <a href={`https://www.tensor.trade/trade/${item.collectionSymbol}`} target="_blank">
          <svg viewBox="0 0 1263 1280" xmlns="http://www.w3.org/2000/svg" className=" hover:text-teal-300 text-white transition-all duration-200" >
                        <path d="M552.5 144 55 643h217.5L409 506.5V992l143.5 143.5V144ZM712 144l497.5 499H992L855.5 506.5V992L712 1135.5V144Z" fill="currentColor">
                        </path>
                    </svg>
          </a>
        </div>
        <div className="w-3 h-3  absolute right-[10px] bottom-2">
          {item.twitter && (
            <a href={`https://twitter.com/${item.twitter}`} target="_blank">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                className=" hover:text-red-300 text-white transition-all duration-200" fill="currentColor">
                                <title>X</title>
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                            </svg>
            </a>
          )}
        </div>
      </div>
      <div className="border-b-[1px]" />
      <PopoverFooter item={item} />
    </div>
  );

const Image = (props) => {
    const { item } = props;
    const [isPopoverVisible, setPopoverVisible] = useState(false);

    // Close the modal unless link is pressed
    const togglePopover = (e) => {
        if (e.target.tagName.toLowerCase() === "a" || e.target.closest(".popover a")) {
            return;
        }

        setPopoverVisible(!isPopoverVisible);
    };

    return (
        <div
            className="text-white text-center h-full w-full cursor-pointer relative"
            onClick={(e) => togglePopover(e)}>

            {isPopoverVisible && <Popover item={item} />}
            <p>{item.name}</p>
            <img
                className="rounded-full w-32"
                src={item.image}
                width={240}
                height={240}
                alt={item.name}
            />
        </div>
    )
}

const Card = ({ item }) => (
    <div className="rounded-full text-black h-32 w-32 flex items-center justify-center m-3">
      <div className="flex flex-col h-auto w-32">
        {item.data.map((imageItem, idx) => (
          <Image item={imageItem} key={idx} />
        ))}
      </div>
    </div>
  );


export default function Horizontal() {
    const scrollRef = useHorizontalScroll();
    return (
        <div className="relative font-sans">
            <div ref={scrollRef} className="bg-[#020202] h-screen flex overflow-auto items-center px-24">
              <div className="fixed top-20 left-1/2 -translate-x-1/2">
                <h1 className="text-5xl text-white">Historical <span className="solana">Solana</span> NFT Projects</h1>
              </div>
                {data.map((cardItem, idx) => (
                    <Card item={cardItem} key={idx} />
                ))}
            </div>
        </div>
    )
}