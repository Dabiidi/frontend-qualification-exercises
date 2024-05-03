'use client'

import { useState } from "react";

const DatePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const handleSetDate = () => {
    // Implement your logic here to handle setting the date
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
      <div className="flex bg-white shadow-lg rounded-xl">
        {/* Left panel */}
        <div className="py-6 border-r border-gray-100">
          <ul className="flex flex-col text-xs">
            {/* Buttons for different date ranges */}
            <li>
              <button className="px-6 py-1.5 w-full leading-5 hover:bg-gray-50 hover:text-blue-600 text-left">
                Last 7 days
              </button>
            </li>
            {/* Add other date range buttons here */}
          </ul>
        </div>
        {/* Calendar view and custom date range */}
        <div className="flex flex-col">
          <div className="flex divide-x">
            {/* Calendar view for February */}
            <div className="flex flex-col px-6 pt-5 pb-6 border-b border-gray-100">
              <div className="text-sm font-semibold">February</div>
              {/* Simple calendar layout for demonstration */}
              <div className="grid grid-cols-7 text-xs text-center text-gray-900">
                {/* Calendar headers */}
                {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                  <span
                    key={day}
                    className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg"
                  >
                    {day}
                  </span>
                ))}
                {/* Calendar dates */}
                {Array.from({ length: 28 }, (_, index) => index + 1).map(date => (
                  <span
                    key={date}
                    className={`flex items-center justify-center w-10 h-10 ${
                      date === 18 ? 'text-white bg-blue-600' : 'text-gray-700'
                    } rounded-lg`}
                  >
                    {date}
                  </span>
                ))}
              </div>
            </div>
            {/* Calendar view for March */}
            <div className="flex flex-col px-6 pt-5 pb-6 border-b border-gray-100">
              <div className="text-sm font-semibold">March</div>
              {/* Simple calendar layout for demonstration */}
              <div className="grid grid-cols-7 text-xs text-center text-gray-900">
                {/* Calendar headers */}
                {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                  <span
                    key={day}
                    className="flex items-center justify-center w-10 h-10 font-semibold rounded-lg"
                  >
                    {day}
                  </span>
                ))}
                {/* Calendar dates */}
                {Array.from({ length: 31 }, (_, index) => index + 1).map(date => (
                  <span
                    key={date}
                    className={`flex items-center justify-center w-10 h-10 ${
                      date === 11 ? 'text-white bg-blue-600' : 'text-gray-700'
                    } rounded-lg`}
                  >
                    {date}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Custom date range input */}
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <input
                type="text"
                value={startDate}
                onChange={handleStartDateChange}
                className="flex items-center w-32 px-4 py-2 text-sm text-gray-900 rounded-lg bg-gray-50 focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-none"
                placeholder="Start Date"
              />
              <div className="p-1">
                <svg className="w-6 h-6 text-gray-900 stroke-current" fill="none">
                  {/* SVG icon */}
                </svg>
              </div>
              <input
                type="text"
                value={endDate}
                onChange={handleEndDateChange}
                className="flex items-center w-32 px-4 py-2 text-sm text-gray-900 rounded-lg bg-gray-50 focus:bg-white focus:ring-1 focus:ring-blue-600 focus:outline-none"
                placeholder="End Date"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="px-4 py-2 text-sm rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSetDate}
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-blue-700"
              >
                Set Date
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default DatePicker;
