import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

const heroImages = [
  { id: 1, imgUrl: "/assets/images/colombo-1.jpg", alt: "colombo-1" },
  { id: 2, imgUrl: "/assets/images/colombo-2.jpg", alt: "colombo-2" },
  { id: 3, imgUrl: "/assets/images/galle-1.jpg", alt: "galle-1" },
  { id: 4, imgUrl: "/assets/images/galle-face-1.jpg", alt: "galle-face-1" },
  { id: 5, imgUrl: "/assets/images/galle-face-3.jpg", alt: "galle-face-3" },
  { id: 6, imgUrl: "/assets/images/sigiriya-1.jpg", alt: "sigiriya-1" },
];

const CardProvider = [
  {
    id: 1,
    title: "Colombo",
    description:
      "Join us in Colombo to help reduce plastic waste and protect our vibrant cityscape. Every action counts!",
    imgUrl: "/assets/images/colombo-1.jpg",
    vote: "",
  },
  {
    id: 2,
    title: "Colombo",
    description:
      "Colombo's beaches and parks need your help. Participate in clean-up events and make a difference today!",
    imgUrl: "/assets/images/colombo-2.jpg",
    vote: "",
  },
  {
    id: 3,
    title: "Galle",
    description:
      "Discover Galle's beauty while contributing to a plastic-free environment. Volunteer and see the impact!",
    imgUrl: "/assets/images/galle-1.jpg",
    vote: "",
  },
  {
    id: 4,
    title: "Galle face",
    description:
      "Galle Face Green is a popular spot that needs our care. Join our efforts to keep it plastic-free and pristine.",
    imgUrl: "/assets/images/galle-face-3.jpg",
    vote: "",
  },
];

const CardContext = () => {
  return (
    <div className="flex max-xl:flex-col gap-5">
      {CardProvider.map((item) => (
        <Card key={item.id} className="my-4">
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src={item.imgUrl}
              alt={item.title}
              width={428}
              height={428}
              className="rounded-xl"
            />
          </CardContent>
          <CardFooter>
            <CardDescription>{item.description}</CardDescription>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CardContext;
