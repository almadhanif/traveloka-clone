import { StaticImageData } from "next/image"
import Hotel1 from "./src/assets/img/hotels/hotel1.jpeg"
import Hotel2 from "./src/assets/img/hotels/hotel2.jpeg"
import Hotel3 from "./src/assets/img/hotels/hotel3.jpeg"
import Hotel4 from "./src/assets/img/hotels/hotel4.jpg"
import Hotel5 from "./src/assets/img/hotels/hotel5.jpeg"
import Hotel6 from "./src/assets/img/hotels/hotel6.jpeg"
import Hotel7 from "./src/assets/img/hotels/hotel7.jpeg"

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
  
  const hotels: Hotel[] = [
    {
      id: 1,
      name: "Grand Ocean Hotel",
      category: "Hotel",
      location: "Bali, Indonesia",
      rating: 4.5,
      pricePerNight: 120,
      roomsAvailable: 20,
      amenities: ["Free Wi-Fi", "Swimming Pool", "Beach Access", "Restaurant", "Spa"],
      imageUrl: Hotel1,
      checkInDate: "2025-01-15",
      checkOutDate: "2025-01-20",
    },
    {
      id: 2,
      name: "Sunset Villa",
      category: "Villa",
      location: "Maldives",
      rating: 5,
      pricePerNight: 250,
      roomsAvailable: 5,
      amenities: ["Private Pool", "Ocean View", "Beach Access", "24/7 Concierge"],
      imageUrl: Hotel2,
      checkInDate: "2025-02-10",
      checkOutDate: "2025-02-15",
    },
    {
      id: 3,
      name: "City View Apartment",
      category: "Apartment",
      location: "New York City, USA",
      rating: 4,
      pricePerNight: 180,
      roomsAvailable: 10,
      amenities: ["Free Wi-Fi", "Fully Equipped Kitchen", "Gym", "24/7 Security"],
      imageUrl: Hotel3,
      checkInDate: "2025-03-05",
      checkOutDate: "2025-03-10",
    },
    {
      id: 4,
      name: "Mountain Retreat",
      category: "Hotel",
      location: "Swiss Alps, Switzerland",
      rating: 4.7,
      pricePerNight: 220,
      roomsAvailable: 15,
      amenities: ["Mountain View", "Hot Tub", "Restaurant", "Skiing Access", "Free Breakfast"],
      imageUrl: Hotel4,
      checkInDate: "2025-02-20",
      checkOutDate: "2025-02-25",
    },
    {
      id: 5,
      name: "Luxury Beach Resort",
      category: "Villa",
      location: "Phuket, Thailand",
      rating: 4.8,
      pricePerNight: 300,
      roomsAvailable: 3,
      amenities: ["Private Beach", "Spa", "Infinity Pool", "Bar", "Private Chef"],
      imageUrl: Hotel5,
      checkInDate: "2025-03-01",
      checkOutDate: "2025-03-07",
    },
    {
      id: 6,
      name: "Luxury Beach Resort",
      category: "Villa",
      location: "Phuket, Thailand",
      rating: 4.8,
      pricePerNight: 300,
      roomsAvailable: 3,
      amenities: ["Private Beach", "Spa", "Infinity Pool", "Bar", "Private Chef"],
      imageUrl: Hotel6,
      checkInDate: "2025-03-01",
      checkOutDate: "2025-03-07",
    },
    {
      id: 7,
      name: "Luxury Beach Resort",
      category: "Villa",
      location: "Phuket, Thailand",
      rating: 4.8,
      pricePerNight: 300,
      roomsAvailable: 3,
      amenities: ["Private Beach", "Spa", "Infinity Pool", "Bar", "Private Chef"],
      imageUrl: Hotel7,
      checkInDate: "2025-03-01",
      checkOutDate: "2025-03-07",
    },
  ];
  
  export default hotels;
  