"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";
import hotels from "../../dummyHotels";
import { StaticImageData } from "next/image";

type Hotel = {
  id: number;
  name: string;
  category: string;
  location: string;
  rating: number;
  pricePerNight: number;
  roomsAvailable: number;
  amenities: string[];
  imageUrl: StaticImageData;
  checkInDate: string;
  checkOutDate: string;
};

type FilteredHotelsContextType = {
  filteredHotels: Hotel[];
  setFilteredHotels: React.Dispatch<React.SetStateAction<Hotel[]>>;
};

const FilteredHotelsContext = createContext<FilteredHotelsContextType | undefined>(undefined);

interface FilteredHotelsProviderProps {
  children: ReactNode;
}

export const FilteredHotelsProvider = ({ children }: FilteredHotelsProviderProps) => {
  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(hotels);

  return <FilteredHotelsContext.Provider value={{ filteredHotels, setFilteredHotels }}>{children}</FilteredHotelsContext.Provider>;
};

export const useFilteredHotels = (): FilteredHotelsContextType => {
  const context = useContext(FilteredHotelsContext);
  if (!context) {
    throw new Error("useFilteredHotels must be used within a FilteredHotelsProvider");
  }
  return context;
};
