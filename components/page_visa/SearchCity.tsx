import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { useMapStore } from "@/lib/store/mapStore";
import ChinaCityList from "./ChinaCity";

const HotCity = ({ city, province }: { city: string; province: string }) => {
  const setSelectedPath = useMapStore((state) => state.setSelectedPath);
  const setZoomAndPan = useMapStore((state) => state.setZoomAndPan);

  const handleCitySelect = ({ province }: { province: string }) => {
    setSelectedPath(province);
    switch (province) {
      case "Beijing":
        setZoomAndPan(2.6, { x: -100 * 2.6, y: 50 * 2.6 }); // Adjust these values as needed
        break;
      case "Shanghai":
        setZoomAndPan(4, { x: -150 * 4, y: -50 * 4 }); // Adjust these values as needed
        break;
      case "Tianjin":
        setZoomAndPan(2.6, { x: -115 * 2.6, y: 40 * 2.6 }); // Adjust these values as needed
        break;
      default:
        setZoomAndPan(1, { x: 0, y: 0 }); // Adjust these values as needed
        break;
    }
  };

  return (
    <Button
      className="bg-themeSecondary hover:bg-themeSecondary/80 text-white rounded-full text-xs px-3 h-[1.7rem]"
      onClick={() => handleCitySelect({ province })}
    >
      <span>{city}</span>
    </Button>
  );
};

const SearchCity = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const setSelectedPath = useMapStore((state) => state.setSelectedPath);
  const setZoomAndPan = useMapStore((state) => state.setZoomAndPan);

  const handleCitySelect = ({ province }: { province: string }) => {
    setSelectedPath(province);
    switch (province) {
      case "Beijing":
        setZoomAndPan(2.6, { x: -100 * 2.6, y: 50 * 2.6 }); // Adjust these values as needed
        break;
      case "Shanghai":
        setZoomAndPan(4, { x: -150 * 4, y: -50 * 4 }); // Adjust these values as needed
        break;
      case "Tianjin":
        setZoomAndPan(2.6, { x: -115 * 2.6, y: 40 * 2.6 }); // Adjust these values as needed
        break;
      default:
        setZoomAndPan(1, { x: 0, y: 0 }); // Adjust these values as needed
        break;
    }
  };
  return (
    <div
      className="z-[1000] relative h-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
        
          h-[3.2rem]
          transition-all duration-200 ease-in-out
          ${
            isHovered
              ? "bg-white w-[14rem] rounded-[10px]"
              : "bg-black w-[3.2rem] rounded-full"
          }
          flex items-center justify-center
        `}
      >
        {!isHovered && <Search className="h-5 w-5 text-white" />}
      </div>
      {(isHovered || searchShow) && (
        <div className="absolute flex flex-col top-0 left-0 w-[14rem] h-fit animate-in fade-in duration-1000 ease-in-out">
          <Command
            className="rounded-[10px] border shadow-md w-[14rem]  h-fit 
          "
          >
            <CommandInput
              placeholder="Search for a city..."
              className="rounded-xl h-[3.2rem]"
              onFocus={() => {
                setIsOpen(true);
                setSearchShow(true);
              }}
              onBlur={() => {
                setTimeout(() => {
                  setIsOpen(false);
                  setSearchShow(false);
                }, 200);
              }}
            />
            {isHovered && !searchShow && (
              <div className="p-3 flex flex-wrap gap-2">
                <HotCity city="Beijing" province="Beijing" />
                <HotCity city="Shanghai" province="Shanghai" />
                <HotCity city="Chongqing" province="Chongqing" />
                <HotCity city="Hangzhou" province="Zhejiang" />
                <HotCity city="Chengdu" province="Sichuan" />
                <HotCity city="Shenzhen" province="Guangdong" />
              </div>
            )}

            {isOpen && (
              <CommandList className="">
                <CommandEmpty>No results found.</CommandEmpty>
                {Object.entries(ChinaCityList).map(([province, cities]) => (
                  <CommandGroup key={province} heading={province}>
                    {cities.map((city) => (
                      <CommandItem
                        key={city}
                        onSelect={() => {
                          handleCitySelect({ province });
                        }}
                      >
                        <span>{city}</span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                ))}
              </CommandList>
            )}
          </Command>
        </div>
      )}
    </div>
  );
};

const SearchCityMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const setSelectedPath = useMapStore((state) => state.setSelectedPath);
  const setZoomAndPan = useMapStore((state) => state.setZoomAndPan);
  const [ssm, setSsm] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setSsm(window.innerWidth < 380); // ssm breakpoint is typically 640px
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCitySelect = ({ province }: { province: string }) => {
    setSelectedPath(province);
    switch (province) {
      case "Beijing":
        setZoomAndPan(2.6, { x: -100 * 2.6, y: 50 * 2.6 }); // Adjust these values as needed
        break;
      case "Shanghai":
        setZoomAndPan(4, { x: -150 * 4, y: -50 * 4 }); // Adjust these values as needed
        break;
      case "Tianjin":
        setZoomAndPan(2.6, { x: -115 * 2.6, y: 40 * 2.6 }); // Adjust these values as needed
        break;
      default:
        setZoomAndPan(1, { x: 0, y: 0 }); // Adjust these values as needed
        break;
    }
  };
  return (
    <div className="z-[1000] relative h-fit flex-[2]">
      <div className=" flex flex-col w-full h-fit animate-in fade-in duration-1000 ease-in-out">
        <Command
          className={`${
            isOpen
              ? "rounded-lg"
              : "rounded-full [&_[cmdk-input-wrapper]]:border-b-0"
          } bg-[#F2F2F2] w-full shadow-none h-fit border-none `}
        >
          <CommandInput
            placeholder={ssm ? "City Name" : "Search for a city..."}
            className="rounded-xl h-[3.2rem] text-base"
            value={searchValue}
            onValueChange={setSearchValue}
            onFocus={() => {
              setIsOpen(true);
            }}
            onBlur={() => {
              setTimeout(() => {
                setIsOpen(false);
              }, 200);
            }}
          />
          {isOpen && searchValue === "" && (
            <div className="p-3 flex flex-wrap gap-2">
              <HotCity city="Beijing" province="Beijing" />
              <HotCity city="Shanghai" province="Shanghai" />
              <HotCity city="Chongqing" province="Chongqing" />
              <HotCity city="Hangzhou" province="Zhejiang" />
              <HotCity city="Chengdu" province="Sichuan" />
              <HotCity city="Shenzhen" province="Guangdong" />
            </div>
          )}

          {isOpen && searchValue !== "" && (
            <CommandList className="">
              <CommandEmpty>No City Found.</CommandEmpty>
              {Object.entries(ChinaCityList).map(([province, cities]) => (
                <CommandGroup key={province} heading={province}>
                  {cities.map((city) => (
                    <CommandItem
                      key={city}
                      onSelect={() => {
                        handleCitySelect({ province });
                      }}
                    >
                      <span>{city}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          )}
        </Command>
      </div>
    </div>
  );
};

export { SearchCity, SearchCityMobile };
