const ShirtCard = ({ imgURL, changeShirtImg, shirtImg }) => {
  const handleClick = () => {
    if (shirtImg !== imgURL.bigShirt) {
      changeShirtImg(imgURL.bigShirt);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl 
        ${
          shirtImg === imgURL.bigShirt
            ? "border-coral-blue"
            : "border-transparent"
        }
        cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div
        className="flex justify-center items-center 
        bg-card bg-center bg-cover sm:w-36 sm:h-4ß 
        rounded-xl max-sm:p-4"
      >
        <img
          src={imgURL.thumbnail}
          alt="shirtCollection"
          width={100}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShirtCard;
