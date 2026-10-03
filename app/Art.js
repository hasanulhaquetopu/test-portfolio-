import styles from "./page.module.css";

function Icon({ size = 24, children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function Dribbble(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M6.2 4.6c2.8 3.4 5 8.2 6.2 15.8" />
      <path d="M2.6 11c5.4.2 10.8-1 15-5.4" />
      <path d="M21.4 13.2c-4.6-1-9.6.4-13.4 5.6" />
    </Icon>
  );
}

export function LinkedIn(props) {
  return (
    <Icon {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="4.5" />
      <path d="M7.5 10.5v6M7.5 7.3v.1M11.5 16.5v-6M11.5 13.2c0-1.6 1.1-2.7 2.6-2.7s2.4 1.1 2.4 2.7v3.3" />
    </Icon>
  );
}

export function ArrowRight(props) {
  return (
    <Icon {...props}>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </Icon>
  );
}

export function ArrowUpRight(props) {
  return (
    <Icon {...props}>
      <path d="M6 18 18 6M8 6h10v10" />
    </Icon>
  );
}

export function Chevron(props) {
  return (
    <Icon {...props}>
      <path d="m6 9 6 6 6-6" />
    </Icon>
  );
}

export function Close(props) {
  return (
    <Icon {...props}>
      <path d="M5 5l14 14M19 5 5 19" />
    </Icon>
  );
}

// The "//" mark that doubles as the menu button.
export function Slashes(props) {
  return (
    <Icon {...props}>
      <path d="M3 15 15 3M7 21 21 7M17 21l4-4" />
    </Icon>
  );
}

export function Pentagon() {
  return (
    <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor" aria-hidden="true">
      <path d="M16 1.5 31 12.4 25.3 30H6.7L1 12.4Z" />
    </svg>
  );
}

// Dot-matrix chevrons, drawn from a bitmap so the pattern stays editable.
function Dots({ rows, cell = 6, dot = 4, ...props }) {
  const width = rows[0].length * cell;
  const height = rows.length * cell;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} fill="currentColor" aria-hidden="true" {...props}>
      {rows.flatMap((row, y) =>
        [...row].map((on, x) =>
          on === "x" ? (
            <rect key={`${x}-${y}`} x={x * cell} y={y * cell} width={dot} height={dot} />
          ) : null,
        ),
      )}
    </svg>
  );
}

export function StatGlyph() {
  return (
    <Dots
      className={styles.statGlyph}
      rows={[
        "x..x.....",
        "..x..x...",
        "....x..x.",
        "......x..x",
        "....x..x.",
        "..x..x...",
        "x..x.....",
      ]}
    />
  );
}

export function TickerGlyph() {
  return (
    <Dots
      className={styles.tickerGlyph}
      cell={4}
      dot={2}
      rows={["x.x...", ".x.x..", "..x.x.", "...x.x", "..x.x.", ".x.x..", "x.x..."]}
    />
  );
}

// A square with three round corners and one sharp one.
function leaf(x, y, size, sharp) {
  const r = size / 2;
  const x2 = x + size;
  const y2 = y + size;
  const corner = (name, round, square) => (sharp === name ? square : round);
  return [
    `M${x + r} ${y}`,
    corner("tr", `H${x2 - r}A${r} ${r} 0 0 1 ${x2} ${y + r}`, `H${x2}V${y + r}`),
    corner("br", `V${y2 - r}A${r} ${r} 0 0 1 ${x2 - r} ${y2}`, `V${y2}H${x2 - r}`),
    corner("bl", `H${x + r}A${r} ${r} 0 0 1 ${x} ${y2 - r}`, `H${x}V${y2 - r}`),
    corner("tl", `V${y + r}A${r} ${r} 0 0 1 ${x + r} ${y}`, `V${y}H${x + r}`),
    "Z",
  ].join("");
}

const leaves = [
  { col: 1, row: 0, sharp: "bl" },
  { col: 2, row: 0, sharp: "bl", fill: "#ff691e" },
  { col: 0, row: 1, sharp: "tr" },
  { col: 1, row: 1 },
  { col: 2, row: 1, sharp: "bl" },
  { col: 0, row: 2, sharp: "tr", fill: "#ee1515" },
  { col: 1, row: 2, sharp: "tr" },
];

export function AboutPattern() {
  return (
    <svg className={styles.pattern} viewBox="-40 -40 430 430" aria-hidden="true">
      <g transform="rotate(45 175 175)">
        {leaves.map((item) => (
          <path
            key={`${item.col}-${item.row}`}
            className={styles.patternLeaf}
            style={{ "--i": item.col + item.row }}
            d={leaf(27 + item.col * 100, 27 + item.row * 100, 96, item.sharp)}
            fill={item.fill ?? "#f3f3f3"}
          />
        ))}
      </g>
    </svg>
  );
}

function TasksArt() {
  const todos = [
    { y: 160, width: 104, done: true },
    { y: 194, width: 78, done: true },
    { y: 228, width: 116, done: true },
    { y: 262, width: 90, done: false },
  ];
  return (
    <>
      <rect x="38" y="84" width="224" height="212" rx="22" fill="#15122e" />
      <rect x="58" y="108" width="84" height="10" rx="5" fill="#fff" fillOpacity=".9" />
      <rect x="58" y="126" width="52" height="6" rx="3" fill="#fff" fillOpacity=".35" />
      <circle cx="224" cy="120" r="15" fill="none" stroke="#fff" strokeOpacity=".16" strokeWidth="5" />
      <circle
        cx="224"
        cy="120"
        r="15"
        fill="none"
        stroke="#a998ff"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="70 95"
        transform="rotate(-90 224 120)"
      />
      {todos.map((todo) => (
        <g key={todo.y}>
          <rect
            x="58"
            y={todo.y}
            width="20"
            height="20"
            rx="6"
            fill={todo.done ? "#a998ff" : "transparent"}
            stroke={todo.done ? "#a998ff" : "rgba(255,255,255,.4)"}
            strokeWidth="1.5"
          />
          {todo.done && (
            <path
              d={`M63 ${todo.y + 10.5}l4 4 7.5-8.5`}
              fill="none"
              stroke="#15122e"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
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
    </>
  );
}

function ShopArt() {
  return (
    <>
      <rect x="38" y="84" width="224" height="212" rx="18" fill="#fff" />
      <g fill="#121212">
        <circle cx="56" cy="101" r="3.5" fillOpacity=".18" />
        <circle cx="68" cy="101" r="3.5" fillOpacity=".18" />
        <circle cx="80" cy="101" r="3.5" fillOpacity=".18" />
        <rect x="96" y="95" width="110" height="12" rx="6" fillOpacity=".07" />
        <rect x="38" y="116" width="224" height="1" fillOpacity=".08" />
        <rect x="56" y="134" width="70" height="10" rx="5" />
        <rect x="56" y="150" width="46" height="6" rx="3" fillOpacity=".25" />
      </g>
      <rect x="196" y="132" width="48" height="16" rx="8" fill="#ff691e" />
      <path
        d="M56 232C74 232 82 196 102 196s24 26 44 22 26-40 46-38 30 26 52 8v72H56Z"
        fill="#ff691e"
        fillOpacity=".14"
      />
      <path
        d="M56 232C74 232 82 196 102 196s24 26 44 22 26-40 46-38 30 26 52 8"
        fill="none"
        stroke="#ff691e"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="192" cy="180" r="6" fill="#fff" stroke="#ff691e" strokeWidth="3" />
      <g fill="#121212" fillOpacity=".25">
        <rect x="58" y="272" width="16" height="4" rx="2" />
        <rect x="100" y="272" width="16" height="4" rx="2" />
        <rect x="142" y="272" width="16" height="4" rx="2" />
        <rect x="184" y="272" width="16" height="4" rx="2" />
        <rect x="226" y="272" width="16" height="4" rx="2" />
      </g>
    </>
  );
}

function ErpArt() {
  return (
    <>
      <rect x="84" y="70" width="132" height="240" rx="26" fill="#121212" />
      <rect x="92" y="78" width="116" height="224" rx="19" fill="#fff" />
      <rect x="130" y="85" width="40" height="8" rx="4" fill="#121212" />
      <rect x="104" y="108" width="62" height="8" rx="4" fill="#121212" />
      <rect x="104" y="122" width="40" height="5" rx="2.5" fill="#121212" fillOpacity=".3" />
      {[142, 196].map((y, n) => (
        <g key={y}>
          <rect x="102" y={y} width="96" height="46" rx="10" fill="#121212" fillOpacity=".06" />
          <rect x="110" y={y + 10} width="44" height="6" rx="3" fill="#121212" fillOpacity=".8" />
          <rect x="110" y={y + 21} width="30" height="5" rx="2.5" fill="#121212" fillOpacity=".3" />
          <rect
            x="110"
            y={y + 32}
            width="34"
            height="8"
            rx="4"
            fill={n ? "#121212" : "#ff595e"}
            fillOpacity={n ? 0.15 : 1}
          />
          <circle cx="182" cy={y + 23} r="9" fill={n ? "#fff" : "#ff595e"} />
          <path
            d={`M178 ${y + 23.5}l3 3 5-6`}
            fill="none"
            stroke={n ? "#bdbdbd" : "#fff"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}
      <rect x="102" y="256" width="96" height="30" rx="15" fill="#121212" />
      <rect x="130" y="268" width="40" height="6" rx="3" fill="#fff" />
    </>
  );
}

function KitArt() {
  const swatches = ["#121212", "#9fad4c", "#fdbc53", "#fff"];
  return (
    <>
      <rect
        x="38"
        y="84"
        width="224"
        height="212"
        fill="#fff"
        fillOpacity=".12"
        stroke="#fff"
        strokeWidth="1.5"
        strokeDasharray="4 5"
      />
      <g fill="#fff" stroke="#121212" strokeWidth="1.5">
        <rect x="34" y="80" width="8" height="8" />
        <rect x="258" y="80" width="8" height="8" />
        <rect x="34" y="292" width="8" height="8" />
        <rect x="258" y="292" width="8" height="8" />
      </g>
      <text className={styles.artType} x="58" y="146" fill="#fff">
        Aa
      </text>
      <g fill="#fff">
        <path d="m226 104 8 8-8 8-8-8Z" />
        <path d="m226 124 8 8-8 8-8-8Z" />
        <path d="m216 114 8 8-8 8-8-8Z" />
        <path d="m236 114 8 8-8 8-8-8Z" />
      </g>
      <path
        d="M62 236C96 236 104 156 150 188s54-24 88-24"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M104 156 196 220" stroke="#fff" strokeWidth="1.5" />
      <circle cx="104" cy="156" r="4.5" fill="#fff" />
      <circle cx="196" cy="220" r="4.5" fill="#fff" />
      <g fill="#fff" stroke="#121212" strokeWidth="1.5">
        <rect x="57.5" y="231.5" width="9" height="9" />
        <rect x="145.5" y="183.5" width="9" height="9" />
        <rect x="233.5" y="159.5" width="9" height="9" />
      </g>
      {swatches.map((color, n) => (
        <circle
          key={color}
          cx={70 + n * 15}
          cy="268"
          r="11"
          fill={color}
          stroke="#fff"
          strokeWidth="2"
        />
      ))}
    </>
  );
}

const workArts = { tasks: TasksArt, shop: ShopArt, erp: ErpArt, kit: KitArt };

export function WorkArt({ kind }) {
  const Scene = workArts[kind];
  return (
    <svg className={styles.workArt} viewBox="18 60 264 260" aria-hidden="true">
      <Scene />
    </svg>
  );
}

function FlowerArt() {
  return (
    <svg className={styles.spin} viewBox="-60 -60 120 120" aria-hidden="true">
      <g fill="#ffdd0a">
        {[0, 60, 120].map((angle) => (
          <ellipse key={angle} rx="15" ry="50" transform={`rotate(${angle})`} />
        ))}
      </g>
    </svg>
  );
}

function ScreenArt() {
  return (
    <svg className={styles.float} viewBox="0 0 400 300" aria-hidden="true">
      <g transform="rotate(-12 200 150)">
        <rect x="70" y="60" width="260" height="180" rx="18" fill="#090918" stroke="#3b3966" strokeWidth="2" />
        <rect x="90" y="78" width="40" height="5" rx="2.5" fill="#fff" fillOpacity=".5" />
        <rect x="270" y="76" width="42" height="10" rx="5" fill="#fff" fillOpacity=".85" />
        <path
          className={styles.glow}
          d="M92 110c24 96 172 96 216 0"
          fill="none"
          stroke="#8f7bff"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path d="M92 110c24 96 172 96 216 0" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

const serviceArts = {
  flower: FlowerArt,
  screen: ScreenArt,
  ring: () => <span className={`${styles.donut} ${styles.spin}`} />,
};

export function ServiceArt({ kind }) {
  const Scene = serviceArts[kind];
  return (
    <div className={`${styles.serviceArt} ${styles[`serviceArt_${kind}`]}`} aria-hidden="true">
      <Scene />
    </div>
  );
}

// Flowing ribbons that stand in for a showreel.
export function Silk() {
  return (
    <svg
      className={styles.silk}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="silk-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffd9c2" />
          <stop offset=".45" stopColor="#ff8a3d" />
          <stop offset="1" stopColor="#f0481c" />
        </linearGradient>
        <linearGradient id="silk-b" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#ff6a2a" />
          <stop offset=".6" stopColor="#ffb07a" />
          <stop offset="1" stopColor="#ffe3d1" />
        </linearGradient>
        <linearGradient id="silk-c" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffc9a8" stopOpacity="0" />
          <stop offset=".5" stopColor="#ff7b3a" />
          <stop offset="1" stopColor="#e8431f" />
        </linearGradient>
      </defs>
      <rect width="1440" height="900" fill="#ffeee6" />
      <path
        className={styles.silkBand}
        d="M-80 880C260 760 420 900 760 560S1240 60 1540 150v170C1280 300 1120 520 860 760S220 1010-80 1020Z"
        fill="url(#silk-a)"
      />
      <path
        className={styles.silkBand}
        style={{ "--i": 1 }}
        d="M-80 720C220 640 480 760 780 470S1260 10 1540 40v90C1250 150 1060 330 830 580S260 800-80 820Z"
        fill="url(#silk-b)"
        fillOpacity=".9"
      />
      <path
        className={styles.silkBand}
        style={{ "--i": 2 }}
        d="M300 960C560 900 760 820 980 600s360-380 560-360v120c-180 10-330 160-520 350S620 980 300 1040Z"
        fill="url(#silk-c)"
        fillOpacity=".85"
      />
    </svg>
  );
}

const toolGlyphs = {
  frame: <path d="M8 3v18M16 3v18M3 8h18M3 16h18" />,
  note: <path d="M4 4h16v10l-6 6H4ZM20 14h-6v6" />,
  components: <path d="m12 2.5 3.5 3.5-3.5 3.5L8.5 6ZM12 14.5l3.5 3.5-3.5 3.5L8.5 18ZM6 8.5 9.5 12 6 15.5 2.5 12ZM18 8.5l3.5 3.5-3.5 3.5-3.5-3.5Z" />,
  cursor: <path d="m5 3 14 7-6 2.2L10.8 18Z" />,
  search: <path d="M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13ZM15.2 15.2 21 21" />,
  check: <path d="M12 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM8 12.3l2.8 2.8L16 9.5" />,
};

export function ToolGlyph({ kind }) {
  return <Icon size={34}>{toolGlyphs[kind]}</Icon>;
}
