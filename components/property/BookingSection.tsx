import { useState } from "react";

const BookingSection: React.FC<{ price: number; discount?: string }> = ({ price, discount }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [nights, setNights] = useState(0);

  const calculateNights = (checkInDate: string, checkOutDate: string) => {
    if (checkInDate && checkOutDate) {
      const start = new Date(checkInDate);
      const end = new Date(checkOutDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays);
    } else {
      setNights(0);
    }
  };

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCheckIn(value);
    calculateNights(value, checkOut);
  };

  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCheckOut(value);
    calculateNights(checkIn, value);
  };

  const totalPrice = price * nights;

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200">
      <div className="flex items-baseline space-x-2 mb-6">
        <h3 className="text-3xl font-bold">${price}</h3>
        <span className="text-gray-600">/ night</span>
      </div>

      {discount && (
        <div className="bg-green-50 border border-green-200 rounded-md p-3 mb-4">
          <p className="text-green-700 text-sm font-semibold">🎉 {discount}</p>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Check-in
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={handleCheckInChange}
            className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Check-out
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={handleCheckOutChange}
            className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {nights > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">
              ${price} × {nights} nights
            </span>
            <span className="font-semibold">${totalPrice}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Service fee</span>
            <span className="font-semibold">${(totalPrice * 0.1).toFixed(2)}</span>
          </div>
          <div className="flex justify-between pt-4 border-t border-gray-200 mt-4">
            <span className="font-bold text-lg">Total</span>
            <span className="font-bold text-lg">${(totalPrice * 1.1).toFixed(2)}</span>
          </div>
        </div>
      )}

      <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-200">
        Reserve Now
      </button>

      <p className="text-center text-sm text-gray-500 mt-4">
        You won't be charged yet
      </p>
    </div>
  );
};

export default BookingSection;