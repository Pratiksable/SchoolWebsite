"use client";

import React from "react";
import Heading2 from "@/components/Heading2";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function App() {
  const list = [
    {
      title: "Shri. M Manjunath ",
      img: "images/members/manju.jpg",
      Education: "Edu - BA",
    },
    {
      title: "Shri Shivanna N C",
      img: "images/members/shivanna.png",
      Education: "Edu – MA, M.Phil Rtd.Principal",
    },
    {
      title: "Shri.M MohanKumar",
      img: "images/members/Mohan.png",
      Education: "Edu - Dip civil",
    },
    {
      title: "Shri M Thimma Reddy",
      img: "images/members/thimma.png",
      Education: "Edu - BSC, B.Ed",
    },
  ];

  return (
    <>
      <br />
      <Heading2 headingText={"Board Members"} />

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center">
        {list.map((item, index) => (
          <div key={index} className="w-full mb-4">
            <Card
              shadow="sm"
              isPressable
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[350px]"
                  style={{ objectFit: "cover" }} // Added style for object-fit
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.Education}</p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}