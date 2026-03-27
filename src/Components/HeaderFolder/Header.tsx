import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      {/* Левая часть с логотипом/названием - теперь кликабельная */}
      <div className="header-left">
        <NavLink to="/" className="logo-link">
          <h1>🎲 TTRPG Purple Sky</h1>
        </NavLink>
      </div>

      {/* Правая часть с навигацией */}
      <nav className="header-nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Главная
        </NavLink>
        <NavLink
          to="/character"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Персонажи
        </NavLink>
      </nav>
    </header>
  );
}
