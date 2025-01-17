"use client";

import React from "react";
import { useFilteredHotels } from "@/contex/FilteredHotelContext";
import Image, { StaticImageData } from "next/image";
import Button from "../ui/Button";
import { RiHotelLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

type Hotel = {
  id: number;
  name: string;
  category: string;
  location: string;
  rating: number;
  pricePerNight: number;
  roomsAvailable: number;
  amenities: string[];
  imageUrl: StaticImageData | string;
  checkInDate: string;
  checkOutDate: string;
};

const FilterSidebarContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="w-[80%] bg-white p-3 rounded-xl">{children}</div>;
};

const FilterSidebar = () => {
  return (
    <div className="w-full p-4 rounded-lg space-y-6 flex flex-col items-center">
      {/* Price Range */}
      <FilterSidebarContainer>
        <h3 className="font-bold text-lg">Price Range</h3>
        <div className="flex items-center gap-x-2 mt-2">
          <input type="range" className="w-full" min="0" max="1000" step="50" />
          <span className="text-sm text-gray-700">$0 - $1000</span>
        </div>
      </FilterSidebarContainer>

      {/* Promo Discount */}
      <FilterSidebarContainer>
        <h3 className="font-bold text-lg">Promo Discount</h3>
        <ul className="mt-2 space-y-1">
          <li>
            <input type="checkbox" id="promo-1" />
            <label htmlFor="promo-1" className="ml-2">
              10% or more
            </label>
          </li>
          <li>
            <input type="checkbox" id="promo-2" />
            <label htmlFor="promo-2" className="ml-2">
              20% or more
            </label>
          </li>
        </ul>
      </FilterSidebarContainer>

      {/* Star Rating */}
      <FilterSidebarContainer>
        <h3 className="font-bold text-lg">Star Rating</h3>
        <ul className="mt-2 space-y-1">
          <li>
            <input type="checkbox" id="star-1" />
            <label htmlFor="star-1" className="ml-2">
              ★★★★★
            </label>
          </li>
          <li>
            <input type="checkbox" id="star-2" />
            <label htmlFor="star-2" className="ml-2">
              ★★★★☆
            </label>
          </li>
        </ul>
      </FilterSidebarContainer>

      {/* Guest Rating */}
      <FilterSidebarContainer>
        <h3 className="font-bold text-lg">Guest Rating</h3>
        <ul className="mt-2 space-y-1">
          <li>
            <input type="checkbox" id="guest-1" />
            <label htmlFor="guest-1" className="ml-2">
              Excellent
            </label>
          </li>
          <li>
            <input type="checkbox" id="guest-2" />
            <label htmlFor="guest-2" className="ml-2">
              Very Good
            </label>
          </li>
        </ul>
      </FilterSidebarContainer>

      {/* Accommodation Type */}
      <FilterSidebarContainer>
        <h3 className="font-bold text-lg">Accommodation Type</h3>
        <ul className="mt-2 space-y-1">
          <li>
            <input type="checkbox" id="type-1" />
            <label htmlFor="type-1" className="ml-2">
              Hotels
            </label>
          </li>
          <li>
            <input type="checkbox" id="type-2" />
            <label htmlFor="type-2" className="ml-2">
              Apartments
            </label>
          </li>
        </ul>
      </FilterSidebarContainer>

      {/* Popular Facilities */}
      <FilterSidebarContainer>
        <h3 className="font-bold text-lg">Popular Facilities</h3>
        <ul className="mt-2 space-y-1">
          <li>
            <input type="checkbox" id="facility-1" />
            <label htmlFor="facility-1" className="ml-2">
              Free Wi-Fi
            </label>
          </li>
          <li>
            <input type="checkbox" id="facility-2" />
            <label htmlFor="facility-2" className="ml-2">
              Swimming Pool
            </label>
          </li>
        </ul>
      </FilterSidebarContainer>

      {/* More Flexibility */}
      <FilterSidebarContainer>
        <h3 className="font-bold text-lg">More Flexibility</h3>
        <ul className="mt-2 space-y-1">
          <li>
            <input type="checkbox" id="flex-1" />
            <label htmlFor="flex-1" className="ml-2">
              Free Cancellation
            </label>
          </li>
        </ul>
      </FilterSidebarContainer>

      {/* Unique Facilities */}
      <FilterSidebarContainer>
        <h3 className="font-bold text-lg">Unique Facilities</h3>
        <ul className="mt-2 space-y-1">
          <li>
            <input type="checkbox" id="unique-1" />
            <label htmlFor="unique-1" className="ml-2">
              Rooftop Bar
            </label>
          </li>
        </ul>
      </FilterSidebarContainer>

      {/* Room Facilities */}
      <FilterSidebarContainer>
        <h3 className="font-bold text-lg">Room Facilities</h3>
        <ul className="mt-2 space-y-1">
          <li>
            <input type="checkbox" id="room-1" />
            <label htmlFor="room-1" className="ml-2">
              Air Conditioning
            </label>
          </li>
        </ul>
      </FilterSidebarContainer>

      {/* Traveloka's Picks */}
      <FilterSidebarContainer>
        <h3 className="font-bold text-lg">Traveloka Picks</h3>
        <ul className="mt-2 space-y-1">
          <li>
            <input type="checkbox" id="pick-1" />
            <label htmlFor="pick-1" className="ml-2">
              Highly Recommended
            </label>
          </li>
        </ul>
      </FilterSidebarContainer>
    </div>
  );
};

const HotelCard = ({ hotel }: { hotel: Hotel }) => {
  return (
    <div key={`${hotel.id} + ${Math.ceil}`} className="bg-white h-[200px] mb-4 rounded-lg shadow-md flex">
      <div className="w-[30%] flex flex-col justify-between">
        <Image src={hotel.imageUrl} alt={hotel.name} className="w-full h-[70%] object-cover rounded-tl-lg" />
        <div className="w-full h-[28%] flex gap-x-1 overflow-hidden">
          <Image src={hotel.imageUrl} alt={hotel.name} className="w-[33%] h-[100%] object-cover rounded-bl-lg" />
          <Image src={hotel.imageUrl} alt={hotel.name} className="w-[33%] h-[100%] object-cover" />
          <Image src={hotel.imageUrl} alt={hotel.name} className="w-[33%] h-[100%] object-cover" />
        </div>
      </div>
      <div className="w-[50%] p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{hotel.name}</h3>
          <div className="text-right">
            <div>{"9.0(5.1k reviews)"}</div>
            <div>{"impressive"}</div>
          </div>
        </div>

        <div className="flex items-center justify-start">
          <div className="text-xs bg-blue-100 rounded-lg w-max p-1 font-semibold text-blue-500 flex justify-center items-center gap-x-1">
            <RiHotelLine />
            {hotel.category}
          </div>
          <div className="text-yellow-400">★★★★★★</div>
        </div>
        <p className="text-gray-600 flex gap-x-1 py-1">
          <FaLocationDot />
          {hotel.location}
        </p>
        <div className="flex items-center gap-x-2 text-xs">
          {hotel.amenities.map((item: string) => (
            <div key={item} className="bg-gray-100 rounded-lg">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[20%] flex flex-col justify-end items-end p-4 border-l-2 border-l-black/20 gap-y-2">
        {/* strikethrough price */}
        <div className="line-through text-sm">Rp 2.567.980</div>

        {/* price */}
        <div className="font-extrabold text-orange-500 text-lg">{`Rp.${hotel.pricePerNight}`}</div>

        <div className="text-red-500 text-xs text-right">
          <div>{`Only 3 Room(s) left at this price`}</div>
          <div>{`Exclude taxes & fees`}</div>
        </div>

        {/* button */}
        <Button text="Select Room" variant="danger" className="font-bold text-sm w-max" />
      </div>
    </div>
  );
};

const BodySection = () => {
  const { filteredHotels } = useFilteredHotels();
  return (
    <div className="h-max w-full flex px-10 space-x-2 bg-gray-200">
      <div className="w-[30%]">
        <FilterSidebar />
      </div>
      <div className="w-[70%] p-4">{filteredHotels.length === 0 ? <p className="text-white">No hotels found.</p> : filteredHotels.map((hotel: Hotel) => <HotelCard key={hotel.id} hotel={hotel} />)}</div>
    </div>
  );
};

export default BodySection;
