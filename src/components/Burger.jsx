import { GiHamburgerMenu } from "react-icons/gi";

const Burger = ({ handleState }) => {
  return (
    <div className="burger-btn">
      <GiHamburgerMenu
        size={24}
        onClick={handleState}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Burger;
