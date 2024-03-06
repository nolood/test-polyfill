"use client"

import {useState} from "react";



const Client = () => {
  const [kek, setKek] = useState<number[]>([]);

  return (
    <div>
      <button onClick={() => setKek((prev) => [Math.random() * 100, ...prev])}>Add kek</button>
      <div>
        {kek.at(0)}
      </div>
    </div>
  );
};

export default Client;