import React from "react";

export interface IHeading {
  heading: string;
}

export const Heading = ({ heading }: IHeading) => {
  return <h1>{heading}</h1>;
};
