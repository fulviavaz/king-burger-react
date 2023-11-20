import ifood from "../../assets/ifood.svg";
import instagram from "../../assets/instagram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import style from "./Navbar.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import { HashLink, HashLink as Link } from "react-router-hash-link";


export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <Logo />
        <div>
          <ul>
            <li>
              <HashLink smooth to="/#home">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#promocao">
                Promoção
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#cardapio">
                Cardápio
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#comentarios">
                Comentários
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#promocao">
                Promoção
              </HashLink>
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
