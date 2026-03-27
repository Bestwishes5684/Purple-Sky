import "./Character.css";
import { useState } from "react";
import type { CharacterType } from "./CharacterType";
import { NavLink } from "react-router-dom";

const mockCharacters: CharacterType[] = [
  {
    id: "1",
    name: "Рэн, Непрощённый",
    class: "Альт Воин",
    race: "Человек",
    level: 8,
    hp: 70,
    maxHp: 70,
    system: "D&D 5e",
    icon: "⚔",
  },
  {
    id: "2",
    name: "Винсент Мориц",
    class: "Изобретатель/Бард",
    race: "Человек",
    level: 14,
    hp: 35,
    maxHp: 64,
    system: "D&D 5e",
    icon: "✦",
  },
  {
    id: "3",
    name: "Зара Костяная",
    class: "Жрец",
    race: "Дроу",
    level: 5,
    hp: 28,
    maxHp: 34,
    system: "D&D 5e",
    icon: "🗡",
  },
];

export default function Character() {
  const [characters] = useState(mockCharacters);

  return (
    <div id="scr-ch" className="screen">
      <div className="chars-top">
        <div>
          <div className="chars-h">Мои персонажи</div>
        </div>
        <NavLink to="/ListCharacter" className="sbtn sbtn-p">
          + Новый
        </NavLink>
      </div>

      <div className="chars-fil">
        <button className="fpill on">Все</button>
        <button className="fpill">Активные</button>
        <button className="fpill">Архив</button>
      </div>

      <div className="chars-grid">
        {characters.map((character) => (
          <div
            key={character.id}
            className="ccard"
            onClick={() => alert(`Клик по персонажу: ${character.name}`)}
          >
            <div className="cport">
              <div className="cport-ph">{character.icon}</div>
              <div className="csys">{character.system}</div>
            </div>
            <div className="cinfo">
              <div className="cname">{character.name}</div>
              <div className="cclass">
                {character.class} · {character.race}
              </div>
              <div className="clvl">УРОВЕНЬ {character.level}</div>
              <div className="chp-bar-wrap">
                <div
                  className="chp-bar"
                  style={{
                    width: `${(character.hp / character.maxHp) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="chp-txt">
                {character.hp} / {character.maxHp} HP
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
