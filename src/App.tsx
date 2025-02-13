import { useState } from 'react';
import './App.css';
import { activities, places, restaurants } from './Data'

const updateIndex = (
  setIndex: React.Dispatch<React.SetStateAction<number>>,
  array: string[],
  direction: "next" | "previous" | "random"
) => {
  setIndex((prev) => {
    if (direction === "next") {
      return (prev + 1) % array.length;
    } else if (direction === "previous") {
      return (prev - 1 + array.length) % array.length;
    } else {
      return Math.floor(Math.random() * array.length);
    }
  });
}

const App = () => {
  const [step, setStep] = useState(1);
  const [placeIndex, setPlaceIndex] = useState(0);
  const [restaurantIndex, setRestaurantIndex] = useState(0);
  const [activityIndex, setActivityIndex] = useState(0);

  const valentineQuestion = "Will you be my Valentine? 💖";
  const placeQuestion = "Where would you like to go? 🗺️";
  const restaurantQuestion = "Where would you like to dine? 🍽️";
  const activityQuestion = "What do you want to do later? 🏡";


  const generateEmailLink = () => {
    const selectedPlace = places[placeIndex];
    const selectedRestaurant = restaurants[restaurantIndex];
    const selectedActivity = activities[activityIndex];

    const email = "rdbiswas97@gmail.com";
    const emailSubject = "💌";
    const emailBody = encodeURIComponent(
      `${placeQuestion}: ${selectedPlace}\n${restaurantQuestion}: ${selectedRestaurant}\n${activityQuestion}: ${selectedActivity}`
    );

    return `mailto:${email}?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-8 bg-gradient-to-r from-rose-200 via-pink-200 to-purple-200 text-rose-800 font-sans">
      {step === 1 && (
        <div className="flex flex-col gap-8 text-center max-w-2xl mx-auto p-6">
          <h1 className="text-4xl font-extrabold text-pink-600 lowercase">{valentineQuestion}</h1>
          <div className="flex justify-center gap-4">
            <button
              className="bg-pink-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-pink-400 transition duration-300 lowercase"
              onClick={() => setStep(2)}
            >
              Yes
            </button>
            <button
              className="bg-gray-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-gray-400 transition duration-300 lowercase"
              onClick={() => alert("Are you sure? 🥹".toLowerCase())}
            >
              No
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-8 text-center mx-auto p-6">
          <h1 className="text-4xl font-extrabold text-pink-600 lowercase">{placeQuestion}</h1>
          <div className="relative w-full flex justify-center items-center p-2">
            <button
              className="absolute left-0 bg-pink-500 text-white w-10 h-10 rounded-full shadow-lg hover:bg-pink-400 transition duration-300"
              onClick={() => { updateIndex(setPlaceIndex, places, "previous"); }}
            >
              ◀
            </button>
            <p className="px-10 text-2xl font-semibold text-center lowercase">{places[placeIndex]}</p>
            <button
              className="absolute right-0 bg-pink-500 text-white w-10 h-10 rounded-full shadow-lg hover:bg-pink-400 transition duration-300"
              onClick={() => { updateIndex(setPlaceIndex, places, "next"); }}
            >
              ▶
            </button>
          </div>
          <div className="flex justify-center gap-4">
            <button
              className="bg-pink-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-pink-400 transition duration-300 w-32 lowercase"
              onClick={() => { updateIndex(setPlaceIndex, places, "random"); }}
            >
              Random
            </button>
            <button
              className="bg-pink-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-pink-400 transition duration-300 w-32 lowercase"
              onClick={() => setStep(3)}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col gap-8 text-center mx-auto p-6">
          <h1 className="text-4xl font-extrabold text-pink-600 lowercase">{restaurantQuestion}</h1>
          <div className="relative w-full flex justify-center items-center p-2">
            <button
              className="absolute left-0 bg-pink-500 text-white w-10 h-10 rounded-full shadow-lg hover:bg-pink-400 transition duration-300"
              onClick={() => { updateIndex(setRestaurantIndex, restaurants, "previous"); }}
            >
              ◀
            </button>
            <p className="px-10 text-2xl font-semibold text-center lowercase">{restaurants[restaurantIndex]}</p>
            <button
              className="absolute right-0 bg-pink-500 text-white w-10 h-10 rounded-full shadow-lg hover:bg-pink-400 transition duration-300"
              onClick={() => { updateIndex(setRestaurantIndex, restaurants, "next"); }}
            >
              ▶
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.google.com/maps/@/data=!3m1!4b1!4m3!11m2!2ssK6gz_uez9wHnRVb9XpXkQ67F5fv5w!3e2?entry=tts&g_ep=EgoyMDI1MDIwNC4wKgBIAVAD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="bg-pink-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-pink-400 transition duration-300 w-32 lowercase"
              >
                See More
              </button>
            </a>
            <button
              className="bg-pink-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-pink-400 transition duration-300 w-32 lowercase"
              onClick={() => { updateIndex(setRestaurantIndex, restaurants, "random"); }}
            >
              Random
            </button>
            <button
              className="bg-pink-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-pink-400 transition duration-300 w-32 lowercase"
              onClick={() => setStep(4)}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="flex flex-col gap-8 text-center mx-auto p-6">
          <h1 className="text-4xl font-extrabold text-pink-600 lowercase">{activityQuestion}</h1>
          <div className="relative w-full flex justify-center items-center p-2">
            <button
              className="absolute left-0 bg-pink-500 text-white w-10 h-10 rounded-full shadow-lg hover:bg-pink-400 transition duration-300"
              onClick={() => { updateIndex(setActivityIndex, activities, "previous"); }}
            >
              ◀
            </button>
            <p className="px-10 text-2xl font-semibold text-center lowercase">{activities[activityIndex]}</p>
            <button
              className="absolute right-0 bg-pink-500 text-white w-10 h-10 rounded-full shadow-lg hover:bg-pink-400 transition duration-300"
              onClick={() => { updateIndex(setActivityIndex, activities, "next"); }}
            >
              ▶
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="bg-pink-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-pink-400 transition duration-300 w-32 lowercase"
              onClick={() => { updateIndex(setActivityIndex, activities, "random"); }}
            >
              Random
            </button>
            <a
              href={generateEmailLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="bg-pink-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-pink-400 transition duration-300 w-32 lowercase"
              >
                Send 💌
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
