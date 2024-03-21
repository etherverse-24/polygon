import { FC, useState } from "react";

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  selectedTab: (tab: string) => void;
  className?: string;
}

const Tabs: FC<TabsProps> = ({ selectedTab, className, ...props }) => {
  const [activeTab, setActiveTab] = useState<string>("All"); // [1, 2, 3, 4
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    selectedTab(tab);
  };
  const tabs = [
    {
      name: "All",
      id: 1,
    },
    // {
    //   name: "New",
    //   id: 2,
    // },
    {
      name: "Popular",
      id: 3,
    },
    {
      name: "Upcoming",
      id: 4,
    },
  ];

  return (
    <div
      {...props}
      className={` ${className} w-full h-12  bg-[#202329] max-w-xl mx-auto rounded-lg  grid p-1  grid-cols-3 gap-2`}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={` w-full h-full ${
            activeTab === tab.name && "bg-[#343843]"
          } text-white flexCenter rounded-lg hover:bg-purple-500 active:bg-purple-700 transition-all duration-300`}
          onClick={() => handleTabChange(tab.name)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
