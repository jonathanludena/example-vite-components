import { useCallback } from "react";

const ButtonExample = ({
  btnText = "Hola soy boton desde lib",
  handleClick,
}: {
  btnText?: string;
  handleClick: () => void;
}) => {
  const handleClickButton = useCallback(() => handleClick(), []);

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
      onClick={handleClickButton}
    >
      {btnText}
    </button>
  );
};

export default ButtonExample;
