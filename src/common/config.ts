import locationIconGray from "../assets/images/location-svgrepo-com-gray.svg";
import locationIconGolg from "../assets/images/location-svgrepo-com-gold.svg";
import bucketIconGray from "../assets/images/bucket-svgrepo-com-gray.svg";
import bucketIconGold from "../assets/images/bucket-svgrepo-com-gold.svg";
import truckIconGray from "../assets/images/truck-svgrepo-com-gray.svg";
import truckIconGold from "../assets/images/truck-svgrepo-com-gold.svg";
import shieldIconGray from "../assets/images/shield-svgrepo-com-gray.svg";
import shieldIconGold from "../assets/images/shield-svgrepo-com-gold.svg";
import calendarIconGray from "../assets/images/calendar-svgrepo-com-gray.svg";
import calendarIconGold from "../assets/images/calendar-svgrepo-com-gold.svg";
import walletIconGray from "../assets/images/wallet-svgrepo-com-gray.svg";
import walletIconGold from "../assets/images/wallet-svgrepo-com-gold.svg";


export const baseUrl = "https://app.wewantwaste.co.uk/api/skips/by-location";
export const postcode = "NR32";
export const area = "Lowestoft";

export const processListItems = [
  {
    title: "Postcode",
    link: "/",
    id: 1,
    imgGray: locationIconGray,
    imgGold: locationIconGolg,
  },
  {
    title: "Waste Type",
    link: "/waste_type",
    id: 2,
    imgGray: bucketIconGray,
    imgGold: bucketIconGold,
  },
  {
    title: "Select Skip",
    link: "/select_skip",
    id: 3,
    imgGray: truckIconGray,
    imgGold: truckIconGold,
  },
  {
    title: "Permit Check",
    link: "/permit_check",
    id: 4,
    imgGray: shieldIconGray,
    imgGold: shieldIconGold,
  },
  {
    title: "Choose Date",
    link: "/choose_date",
    id: 5,
    imgGray: calendarIconGray,
    imgGold: calendarIconGold,
  },
  {
    title: "Payment",
    link: "/payment",
    id: 6,
    imgGray: walletIconGray,
    imgGold: walletIconGold,
  },
];
