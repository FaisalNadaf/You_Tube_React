import React, { useEffect, useState } from "react";
import ButtonCointainer from "./ButtonCointainer";
import VedioCard from "./VedioCard";
import { YOU_TUBE_API } from "../constant";
import { Link } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import { useSelector } from "react-redux";

const SearchVideosCointaien = () => {
  const query = useSelector((store) => store.cache);
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
  }, []);
  return vedio.length <= 0 ? (
    <ShimmerUi />
  ) : (
    <div className=" w-full ">
      <ButtonCointainer />

      <div className="flex flex-wrap items-center justify-center">
        {vedio.map((singleVedio) => {
          return (
            <Link to={`/watch/${singleVedio.id}`} key={singleVedio.id}>
              <VedioCard {...singleVedio} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchVideosCointaien;
