import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import Image from "next/image";

const images = [
  { img: "/assets/images/colombo-1.jpg" },
  { img: "/assets/images/colombo-2.jpg" },
  { img: "/assets/images/galle-1.jpg" },
  { img: "/assets/images/sigiriya-1.jpg" },
];

const PhotoCard = () => {
  return (
    <div className=" flex flex-col gap-3">
      {images.map((item) => (
        <Card key={item.img} className=" rounded-xl">
          <CardContent className="p-0">
            <Image
              src={item.img}
              alt="images"
              height={482}
              width={482}
              className=" rounded-xl"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PhotoCard;
