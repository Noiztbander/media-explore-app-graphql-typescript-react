import React from "react";

// React components
export interface OnlyChildren {
  children: React.ReactChild | React.ReactChild[];
}

export type characterType = {
  id: string | number;
  name: string;
  image: string;
};

type characterLocationtype = {
  name: string;
  dimension: string;
  type: string;
};

export interface Icharacter extends characterType {
  status: string;
  species: string;
  gender: string;
  location: characterLocationtype;
}

export type loadingButtonProps = {
  handleClick?: () => void;
  disabled?: boolean;
  isSubmmiting?: boolean;
  sendingText?: string;
  idleText?: string;
  type?: "submit" | "button";
  className?: string;
};

export type characterCardProps = {
  data: Icharacter
};
