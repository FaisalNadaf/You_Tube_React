import React, { useEffect, useState } from "react";
import ButtonCointainer from "./ButtonCointainer";
import VedioCard from "./VedioCard";
import { YOU_TUBE_API } from "../constant";
import { Link } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import { useSelector } from "react-redux";

const VedioCointainer = () => {
  const query = useSelector((store) => store.search);
  console.log(query);
  const [vedio, setVedio] = useState([]);
  const vedios = async () => {
    const data = await fetch(
      `      https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&type=video&key=AIzaSyDXrp_pAlDoaxI49ZP8kSoaw6Y5dYo1C3s`
    );
    const jsonData = await data.json();
    setVedio(jsonData.items);
  };

  useEffect(() => {
    vedios();
  }, [query]);
  return vedio.length <= 0 ? (
    <ShimmerUi />
  ) : (
    <div className=" w-full ">
      <div className="flex items-center justify-center overflow-hidden">
        <ButtonCointainer />
      </div>
      <div className="container flex flex-wrap items-center justify-center">
        {vedio.map((singleVedio) => {
          return (
            <Link to={`/watch/${singleVedio.id.videoId}`} key={singleVedio.id}>
              <VedioCard {...singleVedio} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default VedioCointainer;
