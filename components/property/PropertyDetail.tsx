import { PropertyProps } from "@/interfaces/index";
import { useState } from "react";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState<"description" | "offers" | "reviews" | "host">("description");

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">{property.name}</h1>
        <div className="flex items-center space-x-4 text-gray-600">
          <span className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="font-semibold">{property.rating}</span>
          </span>
          <span>•</span>
          <span>{property.address.city}, {property.address.country}</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Property Details */}
        <div className="lg:col-span-2">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <img 
              src={property.image} 
              alt={property.name} 
              className="col-span-2 w-full h-96 object-cover rounded-lg shadow-md" 
            />
            {property.images && property.images.slice(1, 5).map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`${property.name} - ${index + 2}`} 
                className="w-full h-48 object-cover rounded-lg shadow-md" 
              />
            ))}
          </div>

          {/* Property Info */}
          {property.offers && (
            <div className="flex items-center space-x-6 mb-6 pb-6 border-b">
              <div className="text-center">
                <p className="font-semibold text-lg">{property.offers.bed}</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg">{property.offers.shower}</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg">{property.offers.occupants}</p>
              </div>
            </div>
          )}

          {/* Tabs Navigation */}
          <div className="flex space-x-6 border-b mb-6">
            <button
              onClick={() => setActiveTab("description")}
              className={`pb-4 px-2 font-semibold transition-colors ${
                activeTab === "description" 
                  ? "border-b-2 border-blue-500 text-blue-500" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("offers")}
              className={`pb-4 px-2 font-semibold transition-colors ${
                activeTab === "offers" 
                  ? "border-b-2 border-blue-500 text-blue-500" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              What We Offer
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-4 px-2 font-semibold transition-colors ${
                activeTab === "reviews" 
                  ? "border-b-2 border-blue-500 text-blue-500" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Reviews
            </button>
            <button
              onClick={() => setActiveTab("host")}
              className={`pb-4 px-2 font-semibold transition-colors ${
                activeTab === "host" 
                  ? "border-b-2 border-blue-500 text-blue-500" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              About Host
            </button>
          </div>

          {/* Tab Content */}
          <div className="mb-8">
            {activeTab === "description" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">About this place</h2>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>
            )}

            {activeTab === "offers" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">What this place offers</h2>
                <ul className="grid grid-cols-2 gap-4">
                  {property.category.map((amenity, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="text-2xl">✓</span>
                      <span className="text-gray-700">{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "reviews" && property.reviews && (
              <ReviewSection reviews={property.reviews} />
            )}

            {activeTab === "host" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">About the Host</h2>
                <div className="flex items-start space-x-4">
                  <img 
                    src="https://i.pravatar.cc/150?img=5" 
                    alt="Host" 
                    className="w-16 h-16 rounded-full" 
                  />
                  <div>
                    <h3 className="font-semibold text-lg">Hosted by John Doe</h3>
                    <p className="text-gray-600">Joined in 2020</p>
                    <p className="mt-2 text-gray-700">
                      Experienced host committed to providing exceptional stays for all guests.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Booking Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <BookingSection price={property.price} discount={property.discount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;