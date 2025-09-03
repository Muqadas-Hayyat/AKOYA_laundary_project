const StepProgressBar = ({ step, totalSteps }) => {
  const progress = (step / totalSteps) * 100;

  return (
    <div>
      {/* Progress bar */}
      <div className="bg-gray-100 h-1.5 sm:h-2">
        <div
          className="bg-[#D4AF37] h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Title & Step Count */}
      <div
        className="p-4 sm:p-6 text-center"
        style={{
          background:
            "linear-gradient(135deg, rgb(44, 36, 22) 0%, rgb(74, 59, 42) 50%, rgb(107, 91, 71) 100%)",
        }}
      >
        <h2 className="text-lg sm:text-2xl font-light text-[#D4AF37]">
          AKOYA PREMIUM LAUNDRY
        </h2>
        <p className="text-gray-300 mt-1 text-sm sm:text-base">
          Step {step} of {totalSteps}
        </p>
      </div>
    </div>
  );
};

export default StepProgressBar;
