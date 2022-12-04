import Search from "../assets/svg/search.svg";
import Shopping from "../assets/svg/shopping.svg";
import User from "../assets/svg/user.svg";
import "../css/Menu.css";

export default function Menu() {
    return (
        <div className="div-menu">
            <div className="div-button">
                <p className="p-button">ERNEK</p>
                <p className="p-button">KADIN</p>
                <p className="p-button">COCUK</p>
            </div>
            <div className="div-logo">
                <p className="logo">SHOP & THEME</p>
            </div>
            <div className="div-svg">
                <img src={Search} alt="search" className="img-svg" />
                <img src={User} alt="user" className="img-svg" />
                <img src={Shopping} alt="shopping" className="img-svg" />
                <p className="p-svg">l</p>
            </div>
        </div>
    );
}
