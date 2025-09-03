import { useDispatch } from "react-redux";
import { setService } from "../../Redux_toolkit/Features/CartSlice";
import StepProgressBar from "./StepProgress";
import { useState } from "react";

const Step1Service = ({ onNext, step, totalSteps }) => {
  const dispatch = useDispatch();
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 1, name: "Iron Only", desc: "Ironing without washing" },
    { id: 2, name: "Washing & Iron", desc: "Complete washing with ironing" },
    { id: 3, name: "Dry Clean", desc: "Professional dry cleaning" },
  ];

const handleSelect = (s) => {
  setSelectedService(s);
  dispatch(setService(s));
};

  return (
    <div className="flex flex-col" style={{ height: "600px" }}>
      <StepProgressBar step={step} totalSteps={totalSteps} />

      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scrollbar-hide">
        <h3 className="text-lg sm:text-xl font-light text-gray-700 mb-6">
          Choose Service Type:
        </h3>

        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.id}
              className={`p-4 sm:p-6 border rounded-xl cursor-pointer min-h-[120px] flex items-center transition-all hover:scale-105 hover:shadow-md duration-150  ${
                selectedService?.id === s.id
                  ? "border-[#D4AF37] bg-[#FFF9E6] shadow-md"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
              }`}
              onClick={() => handleSelect(s)}
            >
              <div className="flex flex-col items-center text-center w-full">
                <h4 className="font-medium text-base sm:text-lg">{s.name}</h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t flex justify-end border-gray-100 p-4 sm:p-6 bg-gray-50">
        <button
          onClick={onNext}
          disabled={!selectedService}
          className={`w-full sm:w-auto sm:ml-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all shadow-md 
            ${
              selectedService
                ? "bg-[#D4AF37] text-white hover:bg-[#c9a227]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1Service;
