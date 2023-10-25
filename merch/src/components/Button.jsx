const Button = ({ label, iconURL }) => {
  return (
    <button
      className="flex justify-center items-center gap-2 
    px-5 py-4 border font-montserrat text-lg w-max mt-4
    leading-none bg-coral-blue rounded-full border-coral-blue"
    >
      {label}
      <img
        src={iconURL}
        alt="arrow-icon"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
