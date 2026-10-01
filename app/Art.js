import styles from "./page.module.css";

export function Arrow() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
      <path
        d="M4 12 12 4M5.5 4H12v6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Two stacked arrows: on hover the first flies out and the second flies in.
export function ArrowSwap() {
  return (
    <span className={styles.swap}>
      <Arrow />
      <Arrow />
    </span>
  );
}

export function Star({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c.9 6.6 4.5 10.2 12 12-7.5 1.8-11.1 5.4-12 12-.9-6.6-4.5-10.2-12-12 7.5-1.8 11.1-5.4 12-12Z" />
    </svg>
  );
}

export function PulseDot({ color = "#dd360e" }) {
  return (
    <svg
      className={styles.pulseDot}
      viewBox="0 0 10 10"
      width="10"
      height="10"
      fill={color}
      aria-hidden="true"
    >
      <circle className={styles.pulseRing} cx="5" cy="5" r="5" />
      <circle cx="5" cy="5" r="5" />
    </svg>
  );
}

export function Scribble() {
  return (
    <svg className={styles.scribble} viewBox="0 0 300 24" fill="none" aria-hidden="true">
      <path
        className={styles.draw}
        pathLength="1"
        d="M4 11C62 5 190 2 296 7 214 9 120 13 46 20"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SpinBadge() {
  return (
    <svg className={styles.heroBadge} viewBox="0 0 140 140" aria-hidden="true">
      <circle cx="70" cy="70" r="70" fill="#080808" />
      <g className={styles.badgeSpin}>
        <path
          id="badge-circle"
          d="M70 70m-51 0a51 51 0 1 1 102 0a51 51 0 1 1-102 0"
          fill="none"
        />
        <text className={styles.badgeText}>
          <textPath href="#badge-circle" textLength="318">
            WEB DEVELOPER • UI DESIGNER • OPEN TO WORK •
          </textPath>
        </text>
      </g>
      <circle cx="70" cy="70" r="27" fill="#dd360e" />
      <path
        d="M61 79 79 61M65 61h14v14"
        fill="none"
        stroke="#fff"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const stepIcons = {
  discover: (
    <>
      <circle className={styles.draw} pathLength="1" cx="10.5" cy="10.5" r="6.5" />
      <path className={styles.draw} pathLength="1" d="M15.5 15.5 21 21" />
    </>
  ),
  strategy: (
    <>
      <path className={styles.draw} pathLength="1" d="M5 21V4" />
      <path className={styles.draw} pathLength="1" d="M5 5h12l-3 4 3 4H5" />
    </>
  ),
  design: (
    <>
      <path
        className={styles.draw}
        pathLength="1"
        d="M4 20l1.5-6L15 4.5a2.1 2.1 0 0 1 3 0l1.5 1.5a2.1 2.1 0 0 1 0 3L10 18.5 4 20Z"
      />
      <path className={styles.draw} pathLength="1" d="M13 6.5 17.5 11" />
    </>
  ),
  delivery: (
    <>
      <path className={styles.draw} pathLength="1" d="M21 3l-7 18-4-7-7-4 18-7Z" />
      <path className={styles.draw} pathLength="1" d="M21 3 10 14" />
    </>
  ),
};

export function StepIcon({ kind }) {
  return (
    <span className={styles.stepIcon}>
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {stepIcons[kind]}
      </svg>
    </span>
  );
}

const rays = [0, 45, 90, 135, 180, 225, 270, 315];

function WeatherArt() {
  return (
    <g className={styles.artPanel}>
      <rect
        x="38"
        y="84"
        width="224"
        height="212"
        rx="22"
        fill="#fff"
        fillOpacity=".16"
        stroke="#fff"
        strokeOpacity=".55"
        strokeWidth="1.5"
      />
      <g className={styles.artSpin} stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
        {rays.map((angle) => (
          <path key={angle} d="M88 114v-7" transform={`rotate(${angle} 88 136)`} />
        ))}
      </g>
      <circle cx="88" cy="136" r="13" fill="none" stroke="#fff" strokeWidth="2.5" />
      <g className={styles.artDrift} fill="#fff">
        <circle cx="100" cy="153" r="10" />
        <circle cx="114" cy="146" r="14" />
        <circle cx="128" cy="154" r="9" />
        <rect x="100" y="150" width="28" height="13" />
      </g>
      <text className={styles.artBig} x="244" y="154" textAnchor="end" fill="#fff">
        24°
      </text>
      <rect x="200" y="164" width="44" height="6" rx="3" fill="#fff" fillOpacity=".6" />
      <path
        d="M56 250C74 250 82 222 100 222S126 242 146 238 172 200 192 202 226 226 244 210V276H56Z"
        fill="#fff"
        fillOpacity=".14"
      />
      <path
        className={styles.draw}
        pathLength="1"
        d="M56 250C74 250 82 222 100 222S126 242 146 238 172 200 192 202 226 226 244 210"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle className={styles.artPing} cx="192" cy="202" r="5" fill="#fff" />
      <circle cx="192" cy="202" r="5" fill="#fff" />
      <g fill="#fff" fillOpacity=".5">
        <rect x="58" y="282" width="16" height="4" rx="2" />
        <rect x="100" y="282" width="16" height="4" rx="2" />
        <rect x="142" y="282" width="16" height="4" rx="2" />
        <rect x="184" y="282" width="16" height="4" rx="2" />
        <rect x="226" y="282" width="16" height="4" rx="2" />
      </g>
    </g>
  );
}

const todos = [
  { y: 160, width: 104, done: true },
  { y: 194, width: 78, done: true },
  { y: 228, width: 116, done: true },
  { y: 262, width: 90, done: false },
];

function TasksArt() {
  return (
    <g className={styles.artPanel}>
      <rect
        x="38"
        y="84"
        width="224"
        height="212"
        rx="22"
        fill="#fff"
        fillOpacity=".06"
        stroke="#fff"
        strokeOpacity=".22"
        strokeWidth="1.5"
      />
      <rect x="58" y="108" width="84" height="10" rx="5" fill="#fff" fillOpacity=".9" />
      <rect x="58" y="126" width="52" height="6" rx="3" fill="#fff" fillOpacity=".35" />
      <circle cx="224" cy="120" r="15" fill="none" stroke="#fff" strokeOpacity=".16" strokeWidth="5" />
      <circle
        className={styles.artRing}
        pathLength="1"
        cx="224"
        cy="120"
        r="15"
        fill="none"
        stroke="#dd360e"
        strokeWidth="5"
        strokeLinecap="round"
        transform="rotate(-90 224 120)"
      />
      {todos.map((todo, n) => (
        <g key={todo.y} style={{ "--n": n }}>
          <rect
            className={todo.done ? undefined : styles.artTodoBox}
            x="58"
            y={todo.y}
            width="20"
            height="20"
            rx="6"
            fill={todo.done ? "#dd360e" : "transparent"}
            stroke={todo.done ? "#dd360e" : "rgba(255,255,255,.4)"}
            strokeWidth="1.5"
          />
          <path
            className={todo.done ? styles.draw : styles.artTodoCheck}
            pathLength="1"
            d={`M63 ${todo.y + 10.5}l4 4 7.5-8.5`}
            fill="none"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="90"
            y={todo.y + 7}
            width={todo.width}
            height="6"
            rx="3"
            fill="#fff"
            fillOpacity={todo.done ? 0.3 : 0.85}
          />
          <rect x="216" y={todo.y + 5} width="26" height="10" rx="5" fill="#fff" fillOpacity=".1" />
        </g>
      ))}
    </g>
  );
}

const products = [56, 121, 186];

function ShopArt() {
  return (
    <g className={styles.artPanel}>
      <rect x="38" y="84" width="224" height="212" rx="18" fill="#fff" fillOpacity=".94" />
      <g fill="#080808">
        <circle cx="56" cy="101" r="3.5" fillOpacity=".18" />
        <circle cx="68" cy="101" r="3.5" fillOpacity=".18" />
        <circle cx="80" cy="101" r="3.5" fillOpacity=".18" />
        <rect x="96" y="95" width="110" height="12" rx="6" fillOpacity=".07" />
        <rect x="38" y="116" width="224" height="1" fillOpacity=".08" />
        <rect x="56" y="134" width="92" height="10" rx="5" />
        <rect x="56" y="150" width="64" height="10" rx="5" />
        <rect x="56" y="168" width="80" height="5" rx="2.5" fillOpacity=".25" />
      </g>
      <rect className={styles.artCta} x="56" y="182" width="58" height="18" rx="9" fill="#dd360e" />
      <circle cx="210" cy="160" r="32" fill="#f2c94c" fillOpacity=".4" />
      <g className={styles.artBag} fill="#fff" stroke="#080808" strokeWidth="2.2" strokeLinejoin="round">
        <path d="M202 152v-4a8 8 0 0 1 16 0v4" fill="none" strokeLinecap="round" />
        <rect x="194" y="152" width="32" height="28" rx="5" />
      </g>
      {products.map((x, n) => (
        <g key={x} className={styles.artProduct} style={{ "--n": n }}>
          <rect x={x} y="214" width="58" height="66" rx="10" fill="#f6f5f3" />
          <rect x={x + 8} y="222" width="42" height="30" rx="6" fill="#f2994a" fillOpacity=".35" />
          <rect x={x + 8} y="259" width="30" height="5" rx="2.5" fill="#080808" fillOpacity=".7" />
          <rect x={x + 8} y="269" width="18" height="4" rx="2" fill="#dd360e" />
        </g>
      ))}
      <path
        className={styles.artCursor}
        d="M150 236v17l4.6-4.2 3.2 7.4 3.2-1.4-3.2-7.2h6.2Z"
        fill="#080808"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </g>
  );
}

const swatches = ["#080808", "#dd360e", "#f2c94c", "#ffffff"];

function KitArt() {
  return (
    <g className={styles.artPanel}>
      <rect
        x="38"
        y="84"
        width="224"
        height="212"
        fill="#fff"
        fillOpacity=".1"
        stroke="#fff"
        strokeOpacity=".7"
        strokeWidth="1.5"
        strokeDasharray="4 5"
      />
      <g fill="#fff" stroke="#4a90a4" strokeWidth="1.5">
        <rect x="34" y="80" width="8" height="8" />
        <rect x="258" y="80" width="8" height="8" />
        <rect x="34" y="292" width="8" height="8" />
        <rect x="258" y="292" width="8" height="8" />
      </g>
      <text className={styles.artBig} x="58" y="140" fill="#fff">
        Aa
      </text>
      <g className={styles.artComponent} fill="#fff">
        <path d="m226 104 8 8-8 8-8-8Z" />
        <path d="m226 124 8 8-8 8-8-8Z" />
        <path d="m216 114 8 8-8 8-8-8Z" />
        <path d="m236 114 8 8-8 8-8-8Z" />
      </g>
      <path
        className={styles.draw}
        pathLength="1"
        d="M62 236C96 236 104 156 150 188S204 164 238 164"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <g>
        <path d="M104 156 196 220" stroke="#fff" strokeWidth="1.5" />
        <circle cx="104" cy="156" r="4.5" fill="#fff" />
        <circle cx="196" cy="220" r="4.5" fill="#fff" />
      </g>
      <g fill="#fff" stroke="#4a90a4" strokeWidth="1.5">
        <rect x="57.5" y="231.5" width="9" height="9" />
        <rect x="145.5" y="183.5" width="9" height="9" />
        <rect x="233.5" y="159.5" width="9" height="9" />
      </g>
      {swatches.map((color, n) => (
        <circle
          key={color}
          className={styles.artSwatch}
          style={{ "--n": n }}
          cx={70 + n * 15}
          cy="268"
          r="11"
          fill={color}
          stroke="#fff"
          strokeWidth="2"
        />
      ))}
      <g className={styles.artPointer}>
        <path
          d="M156 196v15l4.2-3.6 2.8 6.4 2.8-1.2-2.8-6.2h5.4Z"
          fill="#dd360e"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <rect x="170" y="212" width="50" height="17" rx="8.5" fill="#dd360e" />
        <text className={styles.artLabel} x="195" y="224" textAnchor="middle" fill="#fff">
          Hasanul
        </text>
      </g>
    </g>
  );
}

const workArts = {
  weather: WeatherArt,
  tasks: TasksArt,
  shop: ShopArt,
  kit: KitArt,
};

export function WorkArt({ kind }) {
  const Scene = workArts[kind];
  return (
    <svg className={styles.workArt} viewBox="0 0 300 380" aria-hidden="true">
      <Scene />
    </svg>
  );
}
