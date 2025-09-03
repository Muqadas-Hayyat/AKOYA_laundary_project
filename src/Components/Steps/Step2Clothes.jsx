import { Plus } from "lucide-react";
import StepProgress from "./StepProgress";
import { addGarment } from "../../Redux_toolkit/Features/CartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Step2Clothes = ({ step, totalSteps, onNext, onBack }) => {
  const dispatch = useDispatch();

  const [selectedGarment, setGarmentSelected] = useState(null)

// Men Items



const menItems = [
  { id: 1, name: "Pajamas", qty: 1, quantity: 3, price: 60, finishingSteamPrice: 10, incensePrice: 8 },
  { id: 2, name: "Shirt", qty: 1, quantity: 8, price: 75, finishingSteamPrice: 12, incensePrice: 10 },
  { id: 3, name: "T-shirt", qty: 1, quantity: 6, price: 50, finishingSteamPrice: 10, incensePrice: 7 },
  { id: 4, name: "Tie", qty: 1, quantity: 2, price: 30, finishingSteamPrice: 8, incensePrice: 5 },
  { id: 5, name: "Thobe", qty: 1, quantity: 6, price: 100, finishingSteamPrice: 18, incensePrice: 15 },
  { id: 6, name: "Vest", qty: 1, quantity: 5, price: 55, finishingSteamPrice: 10, incensePrice: 8 },
  { id: 7, name: "Bisht", qty: 1, quantity: 3, price: 250, finishingSteamPrice: 35, incensePrice: 25 },
  { id: 8, name: "Men's Suit", qty: 1, quantity: 4, price: 200, finishingSteamPrice: 30, incensePrice: 22 },
  { id: 9, name: "Ghutra", qty: 1, quantity: 7, price: 45, finishingSteamPrice: 9, incensePrice: 7 },
  { id: 10, name: "Military Uniform", qty: 1, quantity: 3, price: 220, finishingSteamPrice: 35, incensePrice: 25 },
  { id: 11, name: "School Uniform", qty: 1, quantity: 5, price: 95, finishingSteamPrice: 15, incensePrice: 12 }
];


// Women Items
const womenItems = [
  { id: 1, name: "Scarf", qty: 1, quantity: 7, price: 40, finishingSteamPrice: 8, incensePrice: 6 },
  { id: 2, name: "Children's Abaya", qty: 1, quantity: 4, price: 100, finishingSteamPrice: 18, incensePrice: 14 },
  { id: 3, name: "Children's Dress", qty: 1, quantity: 5, price: 70, finishingSteamPrice: 12, incensePrice: 9 },
  { id: 4, name: "Abaya", qty: 1, quantity: 6, price: 180, finishingSteamPrice: 30, incensePrice: 25 },
  { id: 5, name: "Long Dress", qty: 1, quantity: 4, price: 120, finishingSteamPrice: 22, incensePrice: 18 },
  { id: 6, name: "Short Dress", qty: 1, quantity: 7, price: 95, finishingSteamPrice: 18, incensePrice: 14 },
  { id: 7, name: "Jalabiya", qty: 1, quantity: 5, price: 140, finishingSteamPrice: 25, incensePrice: 20 },
];



const handleSelect=(g)=>{
  setGarmentSelected(g)
  dispatch(addGarment(g))



}






  return (
    <div className="flex flex-col " style={{ height: "600px" }}>
      <StepProgress step={step} totalSteps={totalSteps} />

      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <h3 className="text-lg sm:text-xl font-light text-gray-700 mb-6">
          What clothes are you sending us?
        </h3>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          {/* Men's */}
          <div className="space-y-4">
            <h4 className="font-medium text-base sm:text-lg">Men's</h4>
            {menItems.map((item) => (
              <button
                key={item.id}
                onClick={() =>handleSelect(item)}
                className="flex items-center w-full p-3 sm:p-4 border rounded-lg transition-all text-left border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:translate-x-1 duration-75"
              >
                <span className="text-sm sm:text-base flex-1">{item.name}</span>
                <Plus className="w-5 h-5 ml-auto" stroke="#D4AF37" />
              </button>
            ))}
          </div>

          {/* Women's */}
          <div className="space-y-4">
            <h4 className="font-medium text-base sm:text-lg">Women's</h4>
            {womenItems.map((item) => (
              <button
                key={item.id}
                onClick={() =>handleSelect(item)}
                className="flex items-center w-full p-3 sm:p-4 border rounded-lg transition-all text-left border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:translate-x-1 duration-75"
              >
                <span className="text-sm sm:text-base flex-1">{item.name}</span>
                <Plus className="w-5 h-5 ml-auto" stroke="#D4AF37" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 p-4 sm:p-6 bg-gray-50 flex justify-between">
        <button
          onClick={onBack}
          className="px-4 sm:px-6 py-2.5 rounded-lg text-sm sm:text-base font-medium bg-gray-200 hover:bg-gray-300"
        >
          Back
        </button>


        <button
          onClick={onNext}
          disabled={!selectedGarment}
          className={`px-4 sm:px-6 py-2.5 rounded-lg text-sm sm:text-base font-medium bg-[#D4AF37] text-white hover:bg-[#c9a227] shadow-md
             ${
              selectedGarment
                ? "bg-[#D4AF37] text-white hover:bg-[#c9a227]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }
          `}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2Clothes;
