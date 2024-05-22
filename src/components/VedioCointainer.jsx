import React, { useEffect, useState } from "react";
import ButtonCointainer from "./ButtonCointainer";
import VedioCard from "./VedioCard";
import { YOU_TUBE_API } from "../constant";

const VedioCointainer = () => {
  const [vedio, setVedio] = useState([]);
  const vedios = async () => {
    const data = await fetch(YOU_TUBE_API);
    const jsonData = await data.json();
    console.log(jsonData);
    setVedio(jsonData.items);
  };

  useEffect(() => {
    vedios();
  }, []);

  console.log(vedio);
  return (
    <div>
      <ButtonCointainer />
      <VedioCard {...vedio[0]} />
    </div>
  );
};

export default VedioCointainer;
