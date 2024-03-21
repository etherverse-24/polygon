import { useEffect, useState } from "react";
import { dummydata } from "./dummy";

const Live = () => {
  const dataLength = dummydata.length;
  const [startIndex, setStartIndex] = useState(0);

  // Function to calculate the end index of the window
  const endIndex = (startIndex + 10) % dataLength;

  // Function to rotate the start index of the window
  const rotateStartIndex = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % dataLength);
  };

  // Effect to rotate the start index every second
  useEffect(() => {
    const interval = setInterval(() => {
      rotateStartIndex();
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);

  // Create a window of 10 data items
  const dataWindow = endIndex > startIndex
    ? dummydata.slice(startIndex, endIndex)
    : [...dummydata.slice(startIndex), ...dummydata.slice(0, endIndex)];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg lg:px-32 py-20">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-5">
              User
            </th>
            <th scope="col" className="px-6 py-5">
              Game
            </th>
            <th scope="col" className="px-6 py-5">
              Bet Amount
            </th>
            <th scope="col" className="px-6 py-5">
              Payout
            </th>
          </tr>
        </thead>
        <tbody>
          {dataWindow.map((item) => (
            <tr
              key={item.id}
              className={` rounded-lg  even:bg-gray-800  dark:border-gray-700`}
            >
              <th
                scope="row"
                className="  px-6 py-5 font-medium  whitespace-nowrap text-white"
              >
                {item.user}
              </th>
              <td className="px-6 py-5">{item.game}</td>
              <td className="px-6 py-5">
                <div className="flex gap-1">
                    <img
                    className="aspect-square h-5"
                    src={`https://shuffle.com/icons/crypto/${item.coin}.svg`}
                        alt=""
                    />
                    <span>{item.betAmount}</span>
                </div>
               
                </td>
              <td className={`px-6 py-5  ${item.add ? "text-green-600" : "text-red-600"}`}><div className="flex gap-1">
                    <img
                    className="aspect-square h-5"
                        src={`https://shuffle.com/icons/crypto/${item.coin}.svg`}
                        alt=""
                    />
                    <span>{item.payout}</span>
                </div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Live;
