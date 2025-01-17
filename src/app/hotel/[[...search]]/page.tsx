"use client";

import React, { useEffect, useState } from "react";
import BodySection from "@/components/sections/BodySection";
import { FilterInput } from "@/components/ui/filter/filter-item/HotelFilter";
import hotels from "../../../../dummyHotels";
import { useFilteredHotels } from "@/contex/FilteredHotelContext";
import { useRouter } from "next/navigation";
import { useTheme } from "@/contex/ThemeContext";

const SearchPage = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedGuest, setSelectedGuest] = useState<string>("");
  const { setFilteredHotels } = useFilteredHotels();
  const { setTheme } = useTheme();

  const router = useRouter();

  const handleSearch = () => {
    const filtered = hotels.filter((hotel) => {
      const matchesLocation = hotel.name.toLowerCase().includes(selectedLocation.toLowerCase());
      return matchesLocation;
    });

    setFilteredHotels(filtered);
    const spec = `${selectedLocation}`;
    router.push(`/hotel/search?spec=${spec}`);
  };

  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <div>
      <FilterInput
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedGuest={selectedGuest}
        setSelectedGuest={setSelectedGuest}
        handleSearch={handleSearch}
      />
      <BodySection />
    </div>
  );
};

export default SearchPage;
