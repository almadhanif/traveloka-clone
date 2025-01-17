'use client';

import React, { useEffect, useRef, useState } from 'react';
import HeroBg from '@/assets/img/header-bg.webp';

import PaddingContainer from '../containers/PaddingContainer';
import HotelFilter from '../ui/filter/filter-item/HotelFilter';
import FlightFilter from '../ui/filter/filter-item/flights/FlightFilter';
import OnlineCheckinFilter from '../ui/filter/filter-item/flights/OnlineCheckinFilter';
import ExtraBaggageFilter from '../ui/filter/filter-item/flights/ExtraBaggageFilter';
import TrainsFilter from '../ui/filter/filter-item/TrainsFilter';
import BusAndTravelFilter from '../ui/filter/filter-item/BusAndTravelFilter';
import AirportTransferFilter from '../ui/filter/filter-item/AirportTransferFilter';
import CarRental from '../ui/filter/filter-item/CarRental';
import ThingToDo from '../ui/filter/filter-item/ThingToDo';
import heroBg from '../../../public/heroBg.webp';

import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { LuHotel } from 'react-icons/lu';
import { PiAirplaneTiltFill } from 'react-icons/pi';
import { PiTrainBold } from 'react-icons/pi';
import { FaBus } from 'react-icons/fa6';
import { MdOutlineConnectingAirports } from 'react-icons/md';

type SubItem = {
  icon?: string;
  label: string;
  tabs: number;
  component?: React.ReactElement;
};

type ListFiltersType = {
  type: string;
  icon?: React.ReactElement;
  label: string;
  tabs: number;
  subItems?: SubItem[];
  component?: React.ReactElement;
};

const HeroSection = () => {
  const [activeFilter, setActiveFilter] = useState<number>(1);
  const [activeSubFilter, setActiveSubFilter] = useState<number | null>(2.1);
  const [activeDropdown, setActiveDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  const listFilters: ListFiltersType[] = [
    {
      type: 'tab',
      icon: <LuHotel />,
      label: 'Hotels',
      tabs: 1,
      component: <HotelFilter />,
    },
    {
      type: 'dropdown',
      icon: <PiAirplaneTiltFill />,
      label: 'Flights',
      tabs: 2,
      subItems: [
        {
          icon: '',
          label: 'Flights',
          tabs: 2.1,
          component: <FlightFilter />,
        },
        {
          icon: '',
          label: 'Online Check-in',
          tabs: 2.2,
          component: <OnlineCheckinFilter />,
        },
        {
          icon: '',
          label: 'Extra Baggage',
          tabs: 2.3,
          component: <ExtraBaggageFilter />,
        },
      ],
    },
    {
      type: 'tab',
      icon: <PiTrainBold />,
      label: 'Trains',
      tabs: 3,
      component: <TrainsFilter />,
    },
    {
      type: 'tab',
      icon: <FaBus />,
      label: 'Bus & Travel',
      tabs: 4,
      component: <BusAndTravelFilter />,
    },
    {
      type: 'tab',
      icon: <MdOutlineConnectingAirports />,
      label: 'Airport Transfer',
      tabs: 5,
      component: <AirportTransferFilter />,
    },
    {
      type: 'tab',
      // icon: "",
      label: 'Car Rental',
      tabs: 6,
      component: <CarRental />,
    },
    {
      type: 'tab',
      // icon: "",
      label: 'Things to Do',
      tabs: 7,
      component: <ThingToDo />,
    },
    {
      type: 'tab',
      // icon: "",
      label: 'More',
      tabs: 8,
    },
  ];

  const handleClickFilter = (item: ListFiltersType) => {
    if (item.type === 'tab') {
      setActiveFilter(item.tabs);
      setActiveSubFilter(null); // Reset sub-filter
      setActiveDropdown(false);
    }

    if (item.type === 'dropdown' && item.subItems) {
      setActiveDropdown(!activeDropdown);
      setActiveFilter(item.tabs); // Set active filter untuk dropdown
      setActiveSubFilter(2.1);
    }
  };

  const handleSubFilterClick = (subItem: SubItem) => {
    setActiveSubFilter(subItem.tabs);
  };

  const activeItem = activeSubFilter
    ? listFilters
        .find((filter) => filter.tabs === activeFilter)
        ?.subItems?.find((sub) => sub.tabs === activeSubFilter)?.component
    : listFilters.find((filter) => filter.tabs === activeFilter)?.component;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(false); // Tutup dropdown jika klik di luar
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className='w-full h-[600px] -mt-28 px-10 flex justify-center items-center'
      style={{
        backgroundImage: `url(${heroBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <PaddingContainer>
        <h1 className='text-center text-white font-bold text-3xl py-10 mt-16'>
          From Southeast Asia to the World, All Yours.
        </h1>
        <ul className='w-full flex justify-evenly items-center -mb-10 pb-1 border-b-[1px]'>
          {listFilters.map((item: ListFiltersType) => {
            // Logika untuk tipe "tab"
            if (item.type === 'tab') {
              return (
                <li
                  key={item.label}
                  onClick={() => handleClickFilter(item)}
                  className={`${
                    activeFilter === item.tabs
                      ? 'text-black bg-white rounded-full'
                      : 'text-gray-300 hover:border hover:border-white hover:rounded-full hover:text-gray-50'
                  } flex items-center justify-center cursor-pointer font-bold px-4 py-2 gap-x-2`}
                >
                  {item.icon}
                  {item.label}
                </li>
              );
            }

            // Logika untuk tipe "dropdown"
            if (item.type === 'dropdown' && item.subItems) {
              return (
                <li key={item.label} className='relative'>
                  <div
                    onClick={() => handleClickFilter(item)}
                    className={`${
                      activeFilter === item.tabs
                        ? 'text-black bg-white rounded-full'
                        : 'text-gray-300 hover:border hover:border-white hover:rounded-full hover:text-gray-50'
                    } z-0 cursor-pointer font-bold p-4 w-max flex justify-between items-center gap-x-2`}
                  >
                    {item.icon}
                    {item.label}
                    <ChevronDownIcon className='w-5 h-5' />
                  </div>
                  {/* Dropdown menu */}
                  {activeDropdown && (
                    <ul
                      ref={dropdownRef}
                      className='absolute flex bg-white shadow-md rounded-lg mt-2 w-max'
                    >
                      {item.subItems.map((subItem) => (
                        <li
                          key={subItem.label}
                          onClick={() => handleSubFilterClick(subItem)}
                          className={`${
                            activeSubFilter === subItem.tabs
                              ? 'bg-gray-200'
                              : 'hover:bg-gray-100'
                          } cursor-pointer p-2 flex items-center gap-2`}
                        >
                          {item.icon}
                          {subItem.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return null;
          })}
        </ul>

        {/* Active Component */}
        <div>{activeItem || <HotelFilter />}</div>
        <div>{activeItem || <FlightFilter />}</div>
      </PaddingContainer>
    </div>
  );
};

export default HeroSection;
