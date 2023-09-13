import ifood from "../../assets/ifood.svg";
import instagram from "../../assets/instagram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import style from "./Navbar.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <Logo />
        <div>
          <ul>
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">Promoção</Link>
            </li>
            <li>
              <Link to="#">Cardápio</Link>
            </li>
            <li>
              <Link to="#">Comentários</Link>
            </li>
            <li>
              <Link to="#">Contato</Link>
            </li>
          </ul>
        </div>
        <div className={style.social}>
          <Link to="#">
            <img src={ifood} alt="Ifood" />
          </Link>
          <Link to="#">
            <img src={instagram} alt="Instagram" />
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="48"
            viewBox="0 0 2 48"
            fill="none"
          >
            <path d="M1 0.107422V47.7662" stroke="#B50B04" />
          </svg>
          <button>
            <img src={whatsapp} alt="whatsapp" /> Contato
          </button>
        </div>
      </div>
    </nav>
  );
}
