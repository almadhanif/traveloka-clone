"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useFilteredHotels } from "@/contex/FilteredHotelContext";
import { useRouter } from "next/navigation";

import hotels from "../../../../../dummyHotels";

import { LuHotel } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { FaBuildingUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

import ImgHotel1 from "@/assets/icon/hotels/1.webp";
import ImgHotel2 from "@/assets/icon/hotels/2.webp";
import ImgHotel3 from "@/assets/icon/hotels/3.webp";
import ImgHotel4 from "@/assets/icon/hotels/4.webp";
import ImgHotel5 from "@/assets/icon/hotels/5.webp";
import ImgHotel6 from "@/assets/icon/hotels/6.webp";
import ImgHotel7 from "@/assets/icon/hotels/7.webp";
import ImgHotel8 from "@/assets/icon/hotels/8.webp";
import ImgHotel9 from "@/assets/icon/hotels/9.webp";

type ListCategoriesType = {
  icon: React.ReactElement;
  label: string;
};

type SearchProps = {
  selectedLocation: string;
  setSelectedLocation: React.Dispatch<React.SetStateAction<string>>;
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
  selectedGuest: string;
  setSelectedGuest: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
};

const listTrustBy1 = [
  {
    name: "hotel1",
    img: ImgHotel1,
  },
  {
    name: "hotel2",
    img: ImgHotel2,
  },
  {
    name: "hotel3",
    img: ImgHotel3,
  },
  {
    name: "hotel4",
    img: ImgHotel4,
  },
];

const listTrustBy2 = [
  {
    name: "hotel5",
    img: ImgHotel5,
  },
  {
    name: "hotel6",
    img: ImgHotel6,
  },
  {
    name: "hotel7",
    img: ImgHotel7,
  },
  {
    name: "hotel8",
    img: ImgHotel8,
  },
  {
    name: "hotel9",
    img: ImgHotel9,
  },
];

const TrustedBy = () => {
  const [currentList, setCurrentList] = useState(listTrustBy1);

  // Bergantian setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentList((prevList) => (prevList === listTrustBy1 ? listTrustBy2 : listTrustBy1));
    }, 5000); // 5000 ms = 5 detik

    return () => clearInterval(interval); // Bersihkan interval ketika komponen di-unmount
  }, []);

  return (
    <div className="flex justify-center items-center gap-x-7 p-2">
      <span className="text-sm font-bold text-white italic">Trusted by</span>
      <div
        className="transition-opacity duration-1000 ease-in-out opacity-0 flex justify-center items-center gap-x-4"
        style={{
          opacity: 1,
          transition: "opacity 1s ease-in-out",
        }}
      >
        {currentList.map((item) => (
          <div key={item.name} className="hover:bg-white p-2 rounded-lg transition-transform transform hover:scale-105">
            <Image src={item.img} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const FilterInput = ({ selectedLocation, setSelectedLocation, selectedDate, setSelectedDate, selectedGuest, setSelectedGuest, handleSearch }: SearchProps) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col w-[30%]">
        <label htmlFor="Location" className="text-white">
          City, destination, or hotel name
        </label>
        <div className="relative w-full">
          <CiLocationOn color="blue" className="absolute left-2 top-4 w-5 h-5" />
          <input
            id="Location"
            name="Location"
            type="text"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="h-14 rounded-l-xl border-r-2 border-[3px] border-gray-400 p-2 pl-8 w-full"
            placeholder="City, Hotel, Place to go"
          />
        </div>
      </div>
      <div className="flex flex-col w-[30%]">
        <label htmlFor="Date" className="text-white">
          Check-in & Check-out Dates
        </label>
        <input id="Date" name="Date" type="datetime-local" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="h-14 border-y-[3px] border-gray-400 p-2" />
      </div>
      <div className="flex flex-col w-[30%]">
        <label htmlFor="Guests" className="text-white">
          Guests and Rooms
        </label>
        <div className="relative w-full">
          <FaBuildingUser color="blue" className="absolute left-3 top-4 w-5 h-5" />
          <input type="text" value={selectedGuest} onChange={(e) => setSelectedGuest(e.target.value)} className="h-14 border-l-2 border-[3px] border-gray-400 p-2 pl-9 w-full" placeholder="1 Adult(s), 0 Child, 1 Room" />
        </div>
      </div>
      <div className="w-[8%] h-full flex flex-col items-center justify-center">
        <label htmlFor="" className="invisible">
          Search
        </label>
        <button onClick={handleSearch} className="h-14 w-full flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-r-xl focus:ring-2 focus:ring-orange-400 focus:outline-none">
          <IoIosSearch className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

const HotelFilter = () => {
  const [activeCategories, setActiveCategories] = useState<string>("Hotels");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedGuest, setSelectedGuest] = useState<string>("");
  const { setFilteredHotels } = useFilteredHotels();

  const router = useRouter();

  const listCategories: ListCategoriesType[] = [
    {
      icon: <LuHotel />,
      label: "Hotels",
    },
    {
      icon: <LuHotel />,
      label: "Villa",
    },
    {
      icon: <LuHotel />,
      label: "Apartment",
    },
  ];

  const handleClickCategories = (item: ListCategoriesType) => {
    setActiveCategories(item.label);
  };

  const handleSearch = () => {
    const filtered = hotels.filter((hotel) => {
      const matchesLocation = hotel.name.toLowerCase().includes(selectedLocation.toLowerCase());
      return matchesLocation;
    });

    setFilteredHotels(filtered);

    const spec = `${selectedLocation}`;

    router.push(`/hotel/search?spec=${spec}`);
  };

  return (
    <div className="w-full px-5 flex flex-col gap-y-5 -mb-10 mt-14">
      {/* categories */}
      <div className="flex items-center justify-start gap-x-2">
        {listCategories.map((item: ListCategoriesType) => (
          <div
            key={item.label}
            className={`${activeCategories === item.label ? "bg-blue-500" : "bg-black/30"} px-3 py-1 rounded-full text-white font-semibold flex items-center justify-center gap-x-2 cursor-pointer`}
            onClick={() => handleClickCategories(item)}
          >
            {item.icon}
            {item.label}
          </div>
        ))}
      </div>

      <FilterInput
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedGuest={selectedGuest}
        setSelectedGuest={setSelectedGuest}
        handleSearch={handleSearch}
      />

      <TrustedBy />
    </div>
  );
};

export default HotelFilter;
