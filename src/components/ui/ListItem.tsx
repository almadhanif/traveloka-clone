import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/16/solid";

type SubItem = {
  icon?: React.ReactElement | string;
  label: string;
  link: string;
};

type MultiSubItem = {
  label: string;
  subItem: SubItem[];
};

type MenuItem = {
  type: "link" | "dropdown";
  icon?: string;
  label: string;
  link?: string;
  subItems?: SubItem[];
  multiSubItems?: MultiSubItem[];
};

type ListItemProps = {
  item: MenuItem;
  color: "white" | "black";
  isOpen: boolean;
  onToggle: () => void;
  activeLang?: string;
  setActiveLang?: (lang: string) => void;
  activeCurrency?: string;
  setActiveCurrency?: (curr: string) => void;
};

const ListItem = ({ item, color, isOpen, onToggle, activeLang = "id", activeCurrency = "IDR", setActiveLang, setActiveCurrency }: ListItemProps) => {
  const textColor = {
    black: "text-black hover:bg-black/30 rounded-lg p-2",
    white: "text-white hover:bg-gray-500 rounded-lg p-2",
  }[color];

  if (item.type === "link") {
    return (
      <li>
        <a href={item.link} className={`${textColor} flex justify-center items-center`}>
          {item.icon && <Image src={item.icon} alt={item.label} className="mr-2 w-5 h-5" />}
          {item.label}
        </a>
      </li>
    );
  }

  if (item.type === "dropdown" && item.subItems) {
    return (
      <li className="relative">
        <button onClick={onToggle} className={`${textColor} flex justify-center items-center`}>
          {item.label}
          <ChevronDownIcon className={`w-4 h-4 ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-max p-4">
            {item.subItems.map((subItem, index) => (
              <li key={index} className="hover:bg-gray-100">
                <a href={subItem.link} className="flex items-center justify-start gap-x-2 py-1">
                  {subItem.icon && subItem.icon}
                  {subItem.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  if (item.type === "dropdown" && item.multiSubItems) {
    return (
      <li className="relative">
        <button onClick={onToggle} className={`${textColor} flex justify-center items-center gap-x-2`}>
          <div className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center overflow-hidden">
            <ReactCountryFlag
              countryCode={activeLang}
              svg
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {`${activeLang} | ${activeCurrency}`}
          <ChevronDownIcon className={`w-4 h-4 ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <ul className="absolute left-0 mt-2 w-[500px] bg-white shadow-lg rounded-md p-4 grid grid-cols-2 gap-4 overflow-y-auto text-sm">
            {item.multiSubItems.map((multiSubItem, index) => (
              <div key={index} className={`flex flex-col w-max`}>
                <h4 className="font-bold mb-2">{multiSubItem.label}</h4>

                {multiSubItem.subItem.map((subItem, subIndex) => (
                  <li key={subIndex} className="hover:bg-gray-100">
                    <a
                      href={subItem.link}
                      className="flex items-center justify-between gap-x-2 py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        if (setActiveLang && multiSubItem.label !== "Currency") {
                          setActiveLang(subItem.icon as string);
                        }
                        if (setActiveCurrency && multiSubItem.label === "Currency") {
                          setActiveCurrency(subItem.icon as string);
                        }
                      }}
                    >
                      <div className="flex items-center justify-start gap-x-2">
                        {multiSubItem.label !== "Currency" && typeof subItem.icon === "string" ? (
                          <div className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center overflow-hidden">
                            <ReactCountryFlag
                              countryCode={subItem.icon as string}
                              svg
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        ) : (
                          <div className={`${multiSubItem.label !== "Currency" ? "w-5 h-5 border-2 border-blue-500 rounded-full" : "w-7 h-7 font-semibold"} flex items-center justify-center overflow-hidden`}>{subItem.icon}</div>
                        )}
                        <div className={`${multiSubItem.label !== "Currency" ? "" : "text-gray-500"}`}>{subItem.label}</div>
                      </div>

                      {subItem.icon === activeLang && <CheckIcon className="w-4 h-4 text-blue-500" />}
                      {subItem.icon === activeCurrency && <CheckIcon className="w-4 h-4 text-blue-500" />}
                    </a>
                  </li>
                ))}
              </div>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return null;
};

export default ListItem;
