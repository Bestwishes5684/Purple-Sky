import "./ListCharacter.css";
import { NavLink } from "react-router-dom";

export default function ListCharacter() {
  return (
    // <!-- TOPBAR -->
    <div>
      <div className="sh-top">
        <div className="sh-top-r1">
          <button className="sh-back">← Персонажи</button>
          <span className="sh-sys-tag">D&amp;D 5e</span>
          <button className="sh-stbtn">⚡ Статус</button>
        </div>
        <div className="sh-cname">
          <input type="text" value="Рэн, Непрощённый" />
        </div>
        <div className="sh-meta">
          <div className="sh-mf">
            <div className="sh-ml">Класс</div>
            <div className="mc-tags" id="cls-display">
              <span className="mc-tag" data-className="Воин">
                Воин 8<button>×</button>
              </span>
              <button className="mc-add">+</button>
            </div>
          </div>
          <div className="sh-mf">
            <div className="sh-ml">Раса</div>
            <div className="sh-mv">
              <input type="text" value="Человек" />
            </div>
          </div>
          <div className="sh-mf">
            <div className="sh-ml">Ур.</div>
            <div className="sh-mv" id="total-lvl">
              8
            </div>
          </div>
          <div className="sh-mf">
            <div className="sh-ml">Мировоззрение</div>
            <div className="sh-mv">
              <input type="text" value="Истинно-нейтр." />
            </div>
          </div>
        </div>
        {/* <!-- Desktop sidebar (shown via CSS) --> */}
        <aside className="sh-sidebar">
          <div className="sdb-top">
            <div className="sdb-cn" id="sdb-cn">
              Рэн, Непрощённый
            </div>
            <div className="sdb-cc" id="sdb-cc">
              ВОИН 8 · ЧЕЛ.
            </div>
          </div>
          <nav className="sdb-nav">
            <button className="snb on">
              <span className="snb-ic">📋</span>Основное
            </button>
            <button className="snb">
              <span className="snb-ic">⚔️</span>Бой
            </button>
            <button className="snb">
              <span className="snb-ic">✨</span>Заклинания
            </button>
            <button className="snb">
              <span className="snb-ic">🎒</span>Инвентарь
            </button>
            <button className="snb">
              <span className="snb-ic">📖</span>Лор
            </button>
            <button className="snb">
              <span className="snb-ic">🗒️</span>Заметки
            </button>
          </nav>
          <div className="sdb-status">
            <div className="sds-tit">Состояние</div>
            <button className="sds-conc" id="sds-conc">
              <span className="sds-conc-ic">🔮</span>
              <span className="sds-conc-lb">Концентрация</span>
              <span className="sds-conc-st" id="sds-conc-st">
                ВЫКЛ
              </span>
            </button>
            <div className="sds-chips" id="sds-chips">
              <div className="sb-chip">—</div>
            </div>
            <button className="sds-change">⚡ Статус и состояние</button>
            <div className="sds-exh">
              <div className="sds-exh-lb">Истощ.</div>
              <div className="sds-exh-pips" id="sds-exh-pips">
                <div className="sds-ep"></div>
                <div className="sds-ep"></div>
                <div className="sds-ep"></div>
                <div className="sds-ep"></div>
                <div className="sds-ep"></div>
                <div className="sds-ep"></div>
              </div>
              <div className="sds-exh-v" id="sds-exh-v">
                0
              </div>
            </div>
          </div>
        </aside>
        {/* <!-- PAGE: MAIN --> */}
      </div>
      <div id="pg-main" className="sh-page on">
        <div className="main-top">
          <div className="cstrip">
            <div className="cs-c">
              <div className="csv">
                <input type="number" value="15" />
              </div>
              <div className="cslb">КБ</div>
            </div>
            <div className="cs-c">
              <div className="csv">
                <input type="text" value="+5" />
              </div>
              <div className="cslb">Инициатива</div>
            </div>
            <div className="cs-c">
              <div className="csv">
                <input type="number" value="40" />
              </div>
              <div className="cslb">Скорость (фт.)</div>
            </div>
          </div>
          <div className="ipr">
            <div className="ipr-c">
              <div className="diamond"></div>
              <div className="ipr-lb">Вдохновение</div>
            </div>
            <div className="ipr-c">
              <div className="ipr-val">+3</div>
              <div className="ipr-lb">Бонус умения</div>
            </div>
            <div className="ipr-c">
              <div className="ipr-val">15</div>
              <div className="ipr-lb">Пасс. мудрость</div>
            </div>
          </div>
        </div>
        <div className="main-cols">
          {/* <!-- LEFT: stats + saves + skills --> */}
          <div>
            <div className="ab-saves">
              <div className="ab-col">
                <div className="ab-row">
                  <div className="ab-box">
                    <div className="ab-tag">Сила</div>
                    <div className="ab-sc">
                      <input type="number" value="16" id="str" />
                      <span className="ab-mod" id="str-m">
                        +3
                      </span>
                    </div>
                  </div>
                </div>
                <div className="ab-row">
                  <div className="ab-box">
                    <div className="ab-tag">Ловкость</div>
                    <div className="ab-sc">
                      <input type="number" value="21" id="dex" />/
                      <span className="ab-mod" id="dex-m">
                        +5
                      </span>
                    </div>
                  </div>
                </div>
                <div className="ab-row">
                  <div className="ab-box">
                    <div className="ab-tag">Телосложение</div>
                    <div className="ab-sc">
                      <input type="number" value="15" id="con" />
                      <span className="ab-mod" id="con-m">
                        +2
                      </span>
                    </div>
                  </div>
                </div>
                <div className="ab-row">
                  <div className="ab-box">
                    <div className="ab-tag">Интеллект</div>
                    <div className="ab-sc">
                      <input type="number" value="8" id="int" />
                      <span className="ab-mod" id="int-m">
                        −1
                      </span>
                    </div>
                  </div>
                </div>
                <div className="ab-row">
                  <div className="ab-box">
                    <div className="ab-tag">Мудрость</div>
                    <div className="ab-sc">
                      <input type="number" value="14" id="wis" />
                      <span className="ab-mod" id="wis-m">
                        +2
                      </span>
                    </div>
                  </div>
                </div>
                <div className="ab-row">
                  <div className="ab-box">
                    <div className="ab-tag">Харизма</div>
                    <div className="ab-sc">
                      <input type="number" value="12" id="cha" />
                      <span className="ab-mod" id="cha-m">
                        +1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sv-col">
                <div className="sv-hdr">Испытания</div>
                <div className="sv-row">
                  <div className="pdot prof"></div>
                  <div className="sv-val">+6</div>
                  <div className="sv-nm">Сила</div>
                </div>
                <div className="sv-row">
                  <div className="pdot"></div>
                  <div className="sv-val">+5</div>
                  <div className="sv-nm">Ловкость</div>
                </div>
                <div className="sv-row">
                  <div className="pdot prof"></div>
                  <div className="sv-val">+5</div>
                  <div className="sv-nm">Телосложение</div>
                </div>
                <div className="sv-row">
                  <div className="pdot"></div>
                  <div className="sv-val">−1</div>
                  <div className="sv-nm">Интеллект</div>
                </div>
                <div className="sv-row">
                  <div className="pdot"></div>
                  <div className="sv-val">+2</div>
                  <div className="sv-nm">Мудрость</div>
                </div>
                <div className="sv-row">
                  <div className="pdot"></div>
                  <div className="sv-val">+1</div>
                  <div className="sv-nm">Харизма</div>
                </div>
              </div>
            </div>
            <div className="stitle">Навыки</div>
            <div className="sk-row">
              <div className="pdot prof"></div>
              <div className="sv-val">+8</div>
              <div className="sk-nm">Акробатика</div>
              <div className="sk-at">Лов</div>
            </div>
            <div className="sk-row">
              <div className="pdot prof"></div>
              <div className="sv-val">+6</div>
              <div className="sk-nm">Атлетика</div>
              <div className="sk-at">Сил</div>
            </div>
            <div className="sk-row">
              <div className="pdot prof"></div>
              <div className="sv-val">+5</div>
              <div className="sk-nm">Внимание</div>
              <div className="sk-at">Муд</div>
            </div>
            <div className="sk-row">
              <div className="pdot"></div>
              <div className="sv-val">+2</div>
              <div className="sk-nm">Выживание</div>
              <div className="sk-at">Муд</div>
            </div>
            <div className="sk-row">
              <div className="pdot"></div>
              <div className="sv-val">+2</div>
              <div className="sk-nm">Дрессировка</div>
              <div className="sk-at">Муд</div>
            </div>
            <div className="sk-row">
              <div className="pdot"></div>
              <div className="sv-val">+4</div>
              <div className="sk-nm">Запугивание</div>
              <div className="sk-at">Хар</div>
            </div>
            <div className="sk-row">
              <div className="pdot"></div>
              <div className="sv-val">+1</div>
              <div className="sk-nm">Исполнение</div>
              <div className="sk-at">Хар</div>
            </div>
            <div className="sk-row">
              <div className="pdot"></div>
              <div className="sv-val">+1</div>
              <div className="sk-nm">История</div>
              <div className="sk-at">Инт</div>
            </div>
            <div className="sk-row">
              <div className="pdot prof"></div>
              <div className="sv-val">+5</div>
              <div className="sk-nm">Ловкость рук</div>
              <div className="sk-at">Лов</div>
            </div>
            <div className="sk-row">
              <div className="pdot"></div>
              <div className="sv-val">−1</div>
              <div className="sk-nm">Магия</div>
              <div className="sk-at">Инт</div>
            </div>
            <div className="sk-row">
              <div className="pdot"></div>
              <div className="sv-val">+2</div>
              <div className="sk-nm">Медицина</div>
              <div className="sk-at">Муд</div>
            </div>
            <div className="sk-row">
              <div className="pdot"></div>
              <div className="sv-val">+1</div>
              <div className="sk-nm">Обман</div>
              <div className="sk-at">Хар</div>
            </div>
            <div className="sk-row">
              <div className="pdot"></div>
              <div className="sv-val">−1</div>
              <div className="sk-nm">Природа</div>
              <div className="sk-at">Инт</div>
            </div>
            <div className="sk-row">
              <div className="pdot"></div>
              <div className="sv-val">+2</div>
              <div className="sk-nm">Проницательность</div>
              <div className="sk-at">Муд</div>
            </div>
            <div className="sk-row">
              <div className="pdot"></div>
              <div className="sv-val">−1</div>
              <div className="sk-nm">Расследование</div>
              <div className="sk-at">Инт</div>
            </div>
            <div className="sk-row">
              <div className="pdot"></div>
              <div className="sv-val">−1</div>
              <div className="sk-nm">Религия</div>
              <div className="sk-at">Инт</div>
            </div>
            <div className="sk-row">
              <div className="pdot prof"></div>
              <div className="sv-val">+5</div>
              <div className="sk-nm">Скрытность</div>
              <div className="sk-at">Лов</div>
            </div>
            <div className="sk-row">
              <div className="pdot"></div>
              <div className="sv-val">+1</div>
              <div className="sk-nm">Убеждение</div>
              <div className="sk-at">Хар</div>
            </div>
            <div className="stitle">Умения и языки</div>
            <textarea>
              Доспехи: простые, воинские, щиты Оружие: простое, воинское,
              экзотическое Языки: Общий, Гоблинский
            </textarea>
          </div>
          {/* <!-- RIGHT: HP + HD + DS --> */}
          <div>
            <div className="hp-block">
              <div className="hp-mr">
                <div className="hp-ml">Максимум ПЗ</div>
                <input type="number" value="70" id="hp-max"></input>
              </div>
              <div className="hp-cr">
                <div className="hp-cl">Текущие ПЗ</div>
                <input type="number" value="70" id="hp-cur" />
              </div>
              <div className="hp-bw">
                <div className="hp-b" id="hp-b"></div>
              </div>
              <div className="hp-tr">
                <div className="hp-tl">Временные ПЗ</div>
                <input type="number" placeholder="—" />/
              </div>
            </div>
            <div className="hd-block">
              <div className="hd-hdr">
                <div className="hd-tit">Кость здоровья</div>
                <div>
                  всего <span id="hd-total">8</span>
                </div>
              </div>
              <div className="hd-body">
                <div id="hd-chips">
                  <div className="hd-chip">к10 ×8</div>
                </div>
                <div className="hd-dots">
                  <div>потрач.:</div>
                  <div className="hdd"></div>
                  <div className="hdd"></div>
                  <div className="hdd"></div>
                </div>
              </div>
            </div>
            <div className="ds-block">
              <div className="ds-hdr">Испытания против смерти</div>
              <div className="ds-body">
                <div className="ds-row">
                  <div className="ds-lb s">Успех</div>
                  <div className="ds-dots">
                    <div className="dsd"></div>
                    <div className="dsd"></div>
                    <div className="dsd"></div>
                  </div>
                </div>
                <div className="ds-row">
                  <div className="ds-lb f">Провал</div>
                  <div className="ds-dots">
                    <div className="dsd"></div>
                    <div className="dsd"></div>
                    <div className="dsd"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavLink to="/character">Назад</NavLink>
    </div>
  );
}
