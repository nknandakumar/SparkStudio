const CustomDot = ({ isActive }) => (
  <div
    className={`w-8 h-1 rounded-full transition-all duration-300 ease-in-out ${
      isActive ? "bg-black w-12" : "bg-gray-300"
    }`}
  >
    <div className={`h-full ${isActive ? "animate-dot-fill" : ""}`}></div>
  </div>
);
