import * as A from "astronomy-engine";

const D = Math.PI / 180;
const DAY_MS = 86400000;

// Spica (Citra / Alpha Virginis), J2000 coordinates matching tantricastro.com & Jagannatha Hora
A.DefineStar(A.Body.Star1, 13.419883194, -11.161319, 250);

export const SIGNS = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

export const SIGNS_SKT = [
  "Mesha", "Vrishabha", "Mithuna", "Karka", "Simha", "Kanya",
  "Tula", "Vrishchika", "Dhanu", "Makara", "Kumbha", "Meena"
];

export const SIGN_LORDS = [
  "Mars", "Venus", "Mercury", "Moon", "Sun", "Mercury",
  "Venus", "Mars", "Jupiter", "Saturn", "Saturn", "Jupiter"
];

export const GRAHAS = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"];

export const NAKSHATRAS = [
  ["Ashwini", "Ketu"], ["Bharani", "Venus"], ["Krittika", "Sun"],
  ["Rohini", "Moon"], ["Mrigashira", "Mars"], ["Ardra", "Rahu"],
  ["Punarvasu", "Jupiter"], ["Pushya", "Saturn"], ["Ashlesha", "Mercury"],
  ["Magha", "Ketu"], ["Purva Phalguni", "Venus"], ["Uttara Phalguni", "Sun"],
  ["Hasta", "Moon"], ["Chitra", "Mars"], ["Swati", "Rahu"],
  ["Vishakha", "Jupiter"], ["Anuradha", "Saturn"], ["Jyeshtha", "Mercury"],
  ["Mula", "Ketu"], ["Purva Ashadha", "Venus"], ["Uttara Ashadha", "Sun"],
  ["Shravana", "Moon"], ["Dhanishta", "Mars"], ["Shatabhisha", "Rahu"],
  ["Purva Bhadrapada", "Jupiter"], ["Uttara Bhadrapada", "Saturn"], ["Revati", "Mercury"]
];

export const TITHIS = [
  "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami",
  "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami",
  "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Purnima",
  "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami",
  "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami",
  "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Amavasya"
];

export const YOGAS = [
  "Vishkambha", "Priti", "Ayushman", "Saubhagya", "Shobhana", "Atiganda",
  "Sukarma", "Dhriti", "Shula", "Ganda", "Vriddhi", "Dhruva",
  "Vyaghata", "Harshana", "Vajra", "Siddhi", "Vyatipata", "Variyan",
  "Parigha", "Shiva", "Siddha", "Sadhya", "Shubha", "Shukla",
  "Brahma", "Indra", "Vaidhriti"
];

export const VARAS = [
  "Ravivara (Sunday)", "Somavara (Monday)", "Mangalavara (Tuesday)",
  "Budhavara (Wednesday)", "Guruvara (Thursday)", "Shukravara (Friday)",
  "Shanivara (Saturday)"
];

const DASHA_ORDER = [
  ["Ketu", 7], ["Venus", 20], ["Sun", 6], ["Moon", 10], ["Mars", 7],
  ["Rahu", 18], ["Jupiter", 16], ["Saturn", 19], ["Mercury", 17]
];

export const VARGA_NAMES = {
  1: "D1 Rashi (Birth Chart)",
  2: "D2 Hora (Wealth)",
  3: "D3 Drekkana (Siblings & Courage)",
  4: "D4 Chaturthamsha (Fortune & Property)",
  5: "D5 Panchamsha (Fame & Authority)",
  6: "D6 Shashthamsha (Health & Obstacles)",
  7: "D7 Saptamsha (Progeny)",
  8: "D8 Ashtamsha (Longevity & Sudden Events)",
  9: "D9 Navamsha (Dharma, Marriage & Inner Strength)",
  10: "D10 Dasamsha (Career & Public Standing)",
  11: "D11 Rudramsha (Gains & Destruction of Obstacles)",
  12: "D12 Dwadasamsha (Parents & Lineage)",
  16: "D16 Shodashamsha (Vehicles & Inner Happiness)",
  20: "D20 Vimshamsha (Upasana & Spiritual Practice)",
  24: "D24 Siddhamsha (Learning & Vidya)",
  27: "D27 Nakshatramsha (Strength & Endurance)",
  30: "D30 Trimsamsha (Misfortunes & Arishta)",
  40: "D40 Khavedamsha (Maternal Lineage & Auspiciousness)",
  45: "D45 Akshavedamsha (Paternal Lineage & Character)",
  60: "D60 Shashtiamsa (Past Karma & Root Destiny)",
  81: "D81 Navanavamsha (Subtle Dharma)",
  108: "D108 Ashtottaramsha (Navamsha-Dwadasamsha)",
  144: "D144 Dwadasa-Dwadasamsha"
};

export const VARGA_URLS = {
  1: "https://www.tantricastro.com/calculators/",
  3: "https://www.tantricastro.com/d3-chart-calculator/",
  4: "https://www.tantricastro.com/d4-chart-calculator/",
  7: "https://www.tantricastro.com/d7-chart-calculator/",
  9: "https://www.tantricastro.com/navamsa-chart-calculator/",
  10: "https://www.tantricastro.com/d10-chart-calculator/",
  11: "https://www.tantricastro.com/d11-chart-calculator/",
  12: "https://www.tantricastro.com/d12-chart-calculator/",
  16: "https://www.tantricastro.com/d16-chart-calculator/",
  20: "https://www.tantricastro.com/d20-chart-calculator/",
  24: "https://www.tantricastro.com/d24-chart-calculator/",
  30: "https://www.tantricastro.com/d30-chart-calculator/",
  40: "https://www.tantricastro.com/d40-chart-calculator/",
  45: "https://www.tantricastro.com/d45-chart-calculator/",
  60: "https://www.tantricastro.com/d60-chart-calculator/",
  108: "https://www.tantricastro.com/d108-chart-calculator/"
};

export const ISHTA_DEITY_BY_PLANET = {
  Sun: "Shiva / Surya / Rama (Agni-Sattva principle)",
  Moon: "Gauri / Parvati / Krishna (Soma-Devi principle)",
  Mars: "Subrahmanya (Kartikeya) / Hanuman / Narasimha / Bhairava",
  Mercury: "Vishnu / Narayana / Tripurasundari",
  Jupiter: "Dakshinamurti / Vamana / Sadashiva / Guru Tattva",
  Venus: "Lakshmi / Lalita / Parashurama",
  Saturn: "Kurma / Narayana / Kali / Shani-Rudra",
  Rahu: "Durga / Varaha / Chhinnamasta",
  Ketu: "Ganesha / Matsya / Dhumavati"
};

export function norm(x) {
  return ((x % 360) + 360) % 360;
}

export function dms(x) {
  const d = Math.floor(x);
  const mf = (x - d) * 60;
  const m = Math.floor(mf);
  const s = Math.floor((mf - m) * 60);
  return `${d}d ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`;
}

function trop(name, t) {
  if (name === "Moon") return A.Ecliptic(A.GeoMoon(t)).elon;
  const e = A.HelioVector(A.Body.Earth, t);
  const h = name === "Sun" ? { x: 0, y: 0, z: 0 } : A.HelioVector(A.Body[name], t);
  return A.Ecliptic(new A.Vector(h.x - e.x, h.y - e.y, h.z - e.z, t)).elon;
}

export function ayanamsa(t) {
  return norm(A.Ecliptic(A.GeoVector(A.Body.Star1, t, false)).elon - 180);
}

function trueNode(t) {
  const s = A.GeoMoonState(t);
  const h = [
    s.y * s.vz - s.z * s.vy,
    s.z * s.vx - s.x * s.vz,
    s.x * s.vy - s.y * s.vx
  ];
  const v = A.RotateVector(A.Rotation_EQJ_ECT(t), new A.Vector(h[0], h[1], h[2], t));
  return norm(Math.atan2(v.x, -v.y) / D);
}

function meanNode(t) {
  const T = t.tt / 36525;
  return norm(
    125.0445479 -
      1934.1362891 * T +
      0.0020754 * T * T +
      (T * T * T) / 467441 -
      (T * T * T * T) / 60616000 +
      A.e_tilt(t).dpsi / 3600
  );
}

function ascendant(t, lat, lon) {
  const ramc = norm(A.SiderealTime(t) * 15 + lon) * D;
  const e = A.e_tilt(t).tobl * D;
  const p = lat * D;
  return norm(
    Math.atan2(Math.cos(ramc), -(Math.sin(ramc) * Math.cos(e) + Math.tan(p) * Math.sin(e))) / D
  );
}

function zoneOffsetMs(utcMs, tz) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).formatToParts(new Date(utcMs));
  const get = (k) => Number(parts.find((x) => x.type === k).value);
  return Date.UTC(get("year"), get("month") - 1, get("day"), get("hour") % 24, get("minute"), get("second")) - utcMs;
}

export function parseBirthUtcMs(dateStr, timeStr, timezone) {
  const dm = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr.trim());
  if (!dm) throw new Error("Invalid date format. Use YYYY-MM-DD (e.g., 1998-05-14).");
  const tm = /^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(timeStr.trim());
  if (!tm) throw new Error("Invalid time format. Use HH:MM or HH:MM:SS in 24-hour clock (e.g., 14:30:00).");

  const y = Number(dm[1]), mo = Number(dm[2]), day = Number(dm[3]);
  const h = Number(tm[1]), mi = Number(tm[2]), sec = Number(tm[3] || 0);
  const wall = Date.UTC(y, mo - 1, day, h, mi, sec);

  const tz = (timezone || "UTC").trim();
  const om = /^([+-])(\d{1,2}):?(\d{2})$/.exec(tz);
  if (om) {
    const offMin = (om[1] === "-" ? -1 : 1) * (Number(om[2]) * 60 + Number(om[3]));
    return { utcMs: wall - offMin * 60000, offsetMin: offMin, tz };
  }
  // IANA timezone
  new Intl.DateTimeFormat("en-US", { timeZone: tz });
  let u = wall;
  for (let i = 0; i < 3; i++) u = wall - zoneOffsetMs(u, tz);
  return { utcMs: u, offsetMin: Math.round(zoneOffsetMs(u, tz) / 60000), tz };
}

export function nakshatraOf(lon) {
  const n = norm(lon);
  const idx = Math.floor((n * 27) / 360);
  const pada = Math.floor(((n % (360 / 27)) / (360 / 108))) + 1;
  return {
    index: idx + 1,
    name: NAKSHATRAS[idx][0],
    lord: NAKSHATRAS[idx][1],
    pada
  };
}

export function vpos(lon, N) {
  const nLon = norm(lon);
  const s = Math.floor(nLon / 30) % 12;
  const d = nLon - 30 * Math.floor(nLon / 30);
  const odd = s % 2 === 0;
  const k = Math.floor((d * N) / 30);
  let r;
  if (N === 108) {
    const a = vpos(nLon, 9);
    return vpos(a[0] * 30 + a[1], 12);
  }
  if (N === 144) {
    const b = vpos(nLon, 12);
    return vpos(b[0] * 30 + b[1], 12);
  }
  switch (N) {
    case 1: r = s; break;
    case 2: r = (odd ? d < 15 : d >= 15) ? 4 : 3; break;
    case 3: r = s + 4 * k; break;
    case 4: r = s + 3 * k; break;
    case 5: r = (odd ? [0, 10, 8, 2, 6] : [1, 5, 11, 9, 7])[k]; break;
    case 6:
    case 40: r = (odd ? 0 : 6) + k; break;
    case 7: r = s + (odd ? 0 : 6) + k; break;
    case 8:
    case 20: r = [0, 8, 4][s % 3] + k; break;
    case 9:
    case 81: r = Math.floor((nLon * N) / 30); break;
    case 10: r = s + (odd ? 0 : 8) + k; break;
    case 11: r = 12 - s + k; break;
    case 12:
    case 60: r = s + k; break;
    case 16:
    case 45: r = [0, 4, 8][s % 3] + k; break;
    case 24: r = (odd ? 4 : 3) + k; break;
    case 27: r = [0, 3, 6, 9][s % 4] + k; break;
    case 30:
      r = odd
        ? d < 5 ? 0 : d < 10 ? 10 : d < 18 ? 8 : d < 25 ? 2 : 6
        : d < 5 ? 1 : d < 12 ? 5 : d < 20 ? 11 : d < 25 ? 9 : 7;
      break;
    default:
      throw new Error(`Unsupported divisional chart D${N}. Supported: ${Object.keys(VARGA_NAMES).join(", ")}`);
  }
  return [((r % 12) + 12) % 12, (d * N) % 30];
}

export function computeChart({ date, time, timezone, latitude, longitude, node = "mean" }) {
  const { utcMs, offsetMin, tz } = parseBirthUtcMs(date, time, timezone);
  const t = A.MakeTime(new Date(utcMs));
  const ay = ayanamsa(t);
  const pos = {};
  for (const g of GRAHAS) {
    pos[g] = norm(trop(g, t) - ay);
  }
  pos.Rahu = norm((node === "true" ? trueNode(t) : meanNode(t)) - ay);
  pos.Ketu = norm(pos.Rahu + 180);
  pos.Lagna = norm(ascendant(t, latitude, longitude) - ay);

  const lagnaSign = Math.floor(pos.Lagna / 30);
  const order = ["Lagna", "Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu"];
  const bodies = {};
  for (const b of order) {
    const lon = pos[b];
    const signIdx = Math.floor(lon / 30);
    const degInSign = lon % 30;
    const house = ((signIdx - lagnaSign + 12) % 12) + 1;
    const nak = nakshatraOf(lon);
    bodies[b] = {
      longitude: Number(lon.toFixed(4)),
      sign: SIGNS[signIdx],
      sign_sanskrit: SIGNS_SKT[signIdx],
      sign_number: signIdx + 1,
      degree_in_sign: dms(degInSign),
      house_whole_sign: house,
      nakshatra: nak.name,
      pada: nak.pada,
      nakshatra_lord: nak.lord
    };
  }

  return {
    meta: {
      date, time, timezone: tz, utc_offset_minutes: offsetMin,
      utc_iso: new Date(utcMs).toISOString(),
      latitude, longitude,
      ayanamsha_system: "True Citrapaksha (Spica = 180 deg, matching Jagannatha Hora & tantricastro.com)",
      ayanamsha_value: dms(ay),
      ayanamsha_degrees: Number(ay.toFixed(5)),
      node_mode: node === "true" ? "True Node" : "Mean Node"
    },
    utcMs,
    raw_longitudes: pos,
    bodies
  };
}

export function computeVarga(params, N) {
  const base = computeChart(params);
  const order = ["Lagna", "Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu"];
  const [vLagnaSign] = vpos(base.raw_longitudes.Lagna, N);
  const placements = {};
  for (const b of order) {
    const [sIdx, vDeg] = vpos(base.raw_longitudes[b], N);
    placements[b] = {
      sign: SIGNS[sIdx],
      sign_sanskrit: SIGNS_SKT[sIdx],
      sign_number: sIdx + 1,
      house_from_varga_lagna: ((sIdx - vLagnaSign + 12) % 12) + 1,
      varga_degree: dms(vDeg),
      d1_sign: base.bodies[b].sign
    };
  }
  return {
    varga: `D${N}`,
    varga_name: VARGA_NAMES[N] || `D${N}`,
    meta: base.meta,
    placements
  };
}

export function computeJaiminiKarakas(params, scheme = 7) {
  const base = computeChart(params);
  const roles7 = ["Atmakaraka (AK)", "Amatyakaraka (AmK)", "Bhratrukaraka (BK)", "Matrukaraka (MK)", "Putrakaraka (PK)", "Gnatikaraka (GK)", "Darakaraka (DK)"];
  const roles8 = ["Atmakaraka (AK)", "Amatyakaraka (AmK)", "Bhratrukaraka (BK)", "Matrukaraka (MK)", "Pitrukaraka (PiK)", "Putrakaraka (PK)", "Gnatikaraka (GK)", "Darakaraka (DK)"];
  const candidates = GRAHAS.map((g) => ({
    planet: g,
    score_deg: base.raw_longitudes[g] % 30,
    sign: base.bodies[g].sign,
    degree_in_sign: base.bodies[g].degree_in_sign
  }));
  if (scheme === 8) {
    const rahuDeg = base.raw_longitudes.Rahu % 30;
    candidates.push({
      planet: "Rahu",
      score_deg: 30 - rahuDeg,
      sign: base.bodies.Rahu.sign,
      degree_in_sign: `${base.bodies.Rahu.degree_in_sign} (inverted 30d-deg = ${dms(30 - rahuDeg)})`
    });
  }
  candidates.sort((a, b) => b.score_deg - a.score_deg);
  const roles = scheme === 8 ? roles8 : roles7;
  const karakas = candidates.map((c, i) => ({
    rank: i + 1,
    karaka: roles[i],
    planet: c.planet,
    sign: c.sign,
    degree_in_sign: c.degree_in_sign
  }));

  // Karakamsha (Atmakaraka's D9 sign) & Ishta Devata (12th from Karakamsha in D9)
  const akPlanet = karakas[0].planet;
  const [akD9Sign] = vpos(base.raw_longitudes[akPlanet], 9);
  const twelfthFromAK = (akD9Sign + 11) % 12;
  const all9 = [...GRAHAS, "Rahu", "Ketu"];
  const occupantsIn12th = all9.filter((g) => vpos(base.raw_longitudes[g], 9)[0] === twelfthFromAK);
  const twelfthLord = SIGN_LORDS[twelfthFromAK];

  return {
    meta: base.meta,
    scheme: `${scheme}-Karaka Jaimini Scheme`,
    karakas,
    atmakaraka: akPlanet,
    darakaraka: karakas[karakas.length - 1].planet,
    karakamsha_d9_sign: `${SIGNS[akD9Sign]} (${SIGNS_SKT[akD9Sign]})`,
    ishta_devata_sign_12th_from_karakamsha: `${SIGNS[twelfthFromAK]} (${SIGNS_SKT[twelfthFromAK]})`,
    planets_in_12th_from_karakamsha_d9: occupantsIn12th,
    lord_of_12th_from_karakamsha: twelfthLord,
    primary_ishta_significator: occupantsIn12th.length > 0 ? occupantsIn12th : [twelfthLord],
    classical_deity_indications: (occupantsIn12th.length > 0 ? occupantsIn12th : [twelfthLord]).map((p) => ({
      planet: p,
      classical_deity_forms: ISHTA_DEITY_BY_PLANET[p]
    }))
  };
}

function arudhaOfHouse(lagnaSign, houseNum, planetSigns) {
  const houseSign = (lagnaSign + houseNum - 1) % 12;
  const lord = SIGN_LORDS[houseSign];
  const lordSign = planetSigns[lord];
  const diff = (lordSign - houseSign + 12) % 12;
  let arudha = (lordSign + diff) % 12;
  // Classical Parashari exception: Arudha cannot fall in the house itself or 7th from it -> advance 10 signs
  if (arudha === houseSign || arudha === (houseSign + 6) % 12) {
    arudha = (arudha + 9) % 12;
  }
  return { houseSign, lord, lordSign, arudha };
}

export function computeArudhaLagna(params) {
  const base = computeChart(params);
  const lagnaSign = Math.floor(base.raw_longitudes.Lagna / 30);
  const pSigns = {};
  for (const g of GRAHAS) pSigns[g] = Math.floor(base.raw_longitudes[g] / 30);

  const al = arudhaOfHouse(lagnaSign, 1, pSigns);
  const ul = arudhaOfHouse(lagnaSign, 12, pSigns);

  return {
    meta: base.meta,
    lagna_sign: `${SIGNS[lagnaSign]} (${SIGNS_SKT[lagnaSign]})`,
    arudha_lagna_AL: {
      sign: SIGNS[al.arudha],
      sign_sanskrit: SIGNS_SKT[al.arudha],
      house_from_lagna: ((al.arudha - lagnaSign + 12) % 12) + 1,
      lagna_lord: al.lord,
      lagna_lord_sign: SIGNS[al.lordSign]
    },
    upapada_lagna_UL: {
      sign: SIGNS[ul.arudha],
      sign_sanskrit: SIGNS_SKT[ul.arudha],
      house_from_lagna: ((ul.arudha - lagnaSign + 12) % 12) + 1,
      twelfth_lord: ul.lord,
      twelfth_lord_sign: SIGNS[ul.lordSign]
    }
  };
}

export function computeVimshottariDasha(params) {
  const base = computeChart(params);
  const moonLon = base.raw_longitudes.Moon;
  const nakSpan = 360 / 27;
  const nakIdx = Math.floor(moonLon / nakSpan);
  const fracElapsed = (moonLon - nakIdx * nakSpan) / nakSpan;
  const fracRemaining = 1 - fracElapsed;

  const startLord = NAKSHATRAS[nakIdx][1];
  const startIdx = DASHA_ORDER.findIndex((x) => x[0] === startLord);
  const YEAR_MS = 365.256364 * DAY_MS;

  const fmtDate = (ms) => new Date(ms).toISOString().slice(0, 10);
  const mahadashas = [];
  let cursor = base.utcMs;

  for (let i = 0; i < 9; i++) {
    const [lord, years] = DASHA_ORDER[(startIdx + i) % 9];
    const fullDur = years * YEAR_MS;
    const dur = i === 0 ? fullDur * fracRemaining : fullDur;
    const mdStart = i === 0 ? base.utcMs - fullDur * fracElapsed : cursor;
    const mdEnd = cursor + dur;

    const antardashas = [];
    let adCursor = mdStart;
    const adStartIdx = DASHA_ORDER.findIndex((x) => x[0] === lord);
    for (let j = 0; j < 9; j++) {
      const [adLord, adYears] = DASHA_ORDER[(adStartIdx + j) % 9];
      const adDur = fullDur * (adYears / 120);
      const adEnd = adCursor + adDur;
      if (adEnd > base.utcMs) {
        antardashas.push({
          antardasha: adLord,
          start: fmtDate(Math.max(adCursor, base.utcMs)),
          end: fmtDate(adEnd)
        });
      }
      adCursor = adEnd;
    }

    mahadashas.push({
      mahadasha: lord,
      duration_years: Number((dur / YEAR_MS).toFixed(2)),
      start: fmtDate(cursor),
      end: fmtDate(mdEnd),
      antardashas
    });
    cursor = mdEnd;
  }

  return {
    meta: base.meta,
    moon_nakshatra: `${NAKSHATRAS[nakIdx][0]} (Pada ${nakshatraOf(moonLon).pada}, Lord: ${startLord})`,
    balance_at_birth_years: Number((DASHA_ORDER[startIdx][1] * fracRemaining).toFixed(3)),
    mahadashas
  };
}

export function computeBirthPanchang(params) {
  const base = computeChart(params);
  const sunLon = base.raw_longitudes.Sun;
  const moonLon = base.raw_longitudes.Moon;

  const diff = norm(moonLon - sunLon);
  const tithiIdx = Math.floor(diff / 12);
  const paksha = tithiIdx < 15 ? "Shukla Paksha (Waxing)" : "Krishna Paksha (Waning)";
  const nak = nakshatraOf(moonLon);
  const yogaIdx = Math.floor(norm(sunLon + moonLon) / (360 / 27));

  // Karana (60 half-tithis per lunar month)
  const kHalf = Math.floor(diff / 6);
  const movableKaranas = ["Bava", "Balava", "Kaulava", "Taitila", "Garaja", "Vanija", "Vishti (Bhadra)"];
  let karana;
  if (kHalf === 0) karana = "Kimstughna";
  else if (kHalf === 57) karana = "Shakuni";
  else if (kHalf === 58) karana = "Chatushpada";
  else if (kHalf === 59) karana = "Naga";
  else karana = movableKaranas[(kHalf - 1) % 7];

  // Civil weekday from local date
  const [y, mo, d] = params.date.split("-").map(Number);
  const dow = new Date(Date.UTC(y, mo - 1, d)).getUTCDay();

  return {
    meta: base.meta,
    vara: VARAS[dow],
    tithi: `${TITHIS[tithiIdx]} (#${(tithiIdx % 15) + 1})`,
    paksha,
    nakshatra: `${nak.name} (Pada ${nak.pada}, Lord: ${nak.lord})`,
    yoga: `${YOGAS[yogaIdx]} (#${yogaIdx + 1})`,
    karana,
    sun_longitude: `${base.bodies.Sun.degree_in_sign} ${base.bodies.Sun.sign}`,
    moon_longitude: `${base.bodies.Moon.degree_in_sign} ${base.bodies.Moon.sign}`
  };
}
