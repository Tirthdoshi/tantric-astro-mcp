"""
Tantric Astro - Pure Python True Citrapaksha Vedic Astrology Engine (Zero External Dependencies)
Designed for ChatGPT Code Interpreter Knowledge File & Standalone Verification.
Author: Tirth Doshi - Tantric Astro (https://www.tantricastro.com/)
Free visual charts & reading guides: https://www.tantricastro.com/calculators/
"""
import math
from datetime import datetime, timedelta, timezone

DEG = math.pi / 180.0
RAD = 180.0 / math.pi

SIGNS = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
]
SIGNS_SKT = [
    "Mesha", "Vrishabha", "Mithuna", "Karka", "Simha", "Kanya",
    "Tula", "Vrishchika", "Dhanu", "Makara", "Kumbha", "Meena"
]
SIGN_LORDS = [
    "Mars", "Venus", "Mercury", "Moon", "Sun", "Mercury",
    "Venus", "Mars", "Jupiter", "Saturn", "Saturn", "Jupiter"
]
GRAHAS = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"]
NAKSHATRAS = [
    ("Ashwini", "Ketu"), ("Bharani", "Venus"), ("Krittika", "Sun"),
    ("Rohini", "Moon"), ("Mrigashira", "Mars"), ("Ardra", "Rahu"),
    ("Punarvasu", "Jupiter"), ("Pushya", "Saturn"), ("Ashlesha", "Mercury"),
    ("Magha", "Ketu"), ("Purva Phalguni", "Venus"), ("Uttara Phalguni", "Sun"),
    ("Hasta", "Moon"), ("Chitra", "Mars"), ("Swati", "Rahu"),
    ("Vishakha", "Jupiter"), ("Anuradha", "Saturn"), ("Jyeshtha", "Mercury"),
    ("Mula", "Ketu"), ("Purva Ashadha", "Venus"), ("Uttara Ashadha", "Sun"),
    ("Shravana", "Moon"), ("Dhanishta", "Mars"), ("Shatabhisha", "Rahu"),
    ("Purva Bhadrapada", "Jupiter"), ("Uttara Bhadrapada", "Saturn"), ("Revati", "Mercury")
]
TITHIS = [
    "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami",
    "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami",
    "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Purnima",
    "Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami",
    "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami",
    "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Amavasya"
]
YOGAS = [
    "Vishkambha", "Priti", "Ayushman", "Saubhagya", "Shobhana", "Atiganda",
    "Sukarma", "Dhriti", "Shula", "Ganda", "Vriddhi", "Dhruva",
    "Vyaghata", "Harshana", "Vajra", "Siddhi", "Vyatipata", "Variyan",
    "Parigha", "Shiva", "Siddha", "Sadhya", "Shubha", "Shukla",
    "Brahma", "Indra", "Vaidhriti"
]
DASHA_ORDER = [
    ("Ketu", 7), ("Venus", 20), ("Sun", 6), ("Moon", 10), ("Mars", 7),
    ("Rahu", 18), ("Jupiter", 16), ("Saturn", 19), ("Mercury", 17)
]
ISHTA_DEITIES = {
    "Sun": "Shiva / Surya / Rama",
    "Moon": "Gauri / Parvati / Krishna",
    "Mars": "Subrahmanya (Kartikeya) / Hanuman / Narasimha / Bhairava",
    "Mercury": "Vishnu / Narayana / Tripurasundari",
    "Jupiter": "Dakshinamurti / Vamana / Sadashiva",
    "Venus": "Lakshmi / Lalita / Parashurama",
    "Saturn": "Kurma / Narayana / Kali",
    "Rahu": "Durga / Varaha / Chhinnamasta",
    "Ketu": "Ganesha / Matsya / Dhumavati"
}


def norm(x):
    return x % 360.0


def dms(x):
    x = norm(x)
    d = int(x)
    mf = (x - d) * 60.0
    m = int(mf)
    s = int((mf - m) * 60.0)
    return f"{d}d {m:02d}m {s:02d}s"


def julian_day(dt_utc):
    y, m = dt_utc.year, dt_utc.month
    d = dt_utc.day + (dt_utc.hour + dt_utc.minute / 60.0 + dt_utc.second / 3600.0) / 24.0
    if m <= 2:
        y -= 1
        m += 12
    A = y // 100
    B = 2 - A + A // 4
    return int(365.25 * (y + 4716)) + int(30.6001 * (m + 1)) + d + B - 1524.5


def nutation_obliquity(T):
    # IAU 1980 compact nutation in longitude (arcsec) & true obliquity (deg)
    omega = norm(125.04452 - 1934.136261 * T)
    L = norm(280.4665 + 36000.7698 * T)
    Lp = norm(218.3165 + 481267.8813 * T)
    dpsi = (
        -17.20 * math.sin(omega * DEG)
        - 1.32 * math.sin(2 * L * DEG)
        - 0.23 * math.sin(2 * Lp * DEG)
        + 0.21 * math.sin(2 * omega * DEG)
    )
    deps = (
        9.20 * math.cos(omega * DEG)
        + 0.57 * math.cos(2 * L * DEG)
        + 0.10 * math.cos(2 * Lp * DEG)
        - 0.09 * math.cos(2 * omega * DEG)
    )
    eps0 = 23.43929111 - (46.8150 * T + 0.00059 * T * T - 0.001813 * T * T * T) / 3600.0
    return dpsi, eps0 + deps / 3600.0


def true_citrapaksha_ayanamsha(T):
    # Spica (HIP 65474) J2000 tropical ecliptic longitude = 203.8414 deg -> Spica - 180 = 23.8414 deg at J2000
    # General precession in longitude (Lieske / IAU) + Spica proper motion (-0.055"/yr) + nutation
    dpsi, _ = nutation_obliquity(T)
    p = (5028.796195 * T + 1.1054348 * T * T + 0.00007964 * T * T * T) / 3600.0
    spica_pm = (-0.055 * 100.0 * T) / 3600.0
    # Calibrated against NASA JPL DE421 / tantricastro.com J2000 True Citrapaksha = 23.85709 deg (incl. Spica exact coord)
    return norm(23.85305 + p + spica_pm + dpsi / 3600.0)


def kepler_solve(M_deg, e):
    M = norm(M_deg) * DEG
    E = M + e * math.sin(M) * (1.0 + e * math.cos(M))
    for _ in range(12):
        dE = (E - e * math.sin(E) - M) / (1.0 - e * math.cos(E))
        E -= dE
        if abs(dE) < 1e-12:
            break
    return E


# Standish (JPL) J2000 Keplerian elements [a, e, I, L, wbar, Omega] & rates per Julian century
PLANET_ELEM = {
    "Mercury": (0.38709927, 0.20563593, 7.00497902, 252.25032350, 77.45779628, 48.33076593,
                0.00000037, 0.00001906, -0.00594749, 149472.67411175, 0.16047689, -0.12534081),
    "Venus":   (0.72333566, 0.00677672, 3.39467605, 181.97909950, 131.60246718, 76.67984255,
                0.00000390, -0.00004107, -0.00078890, 58517.81538729, 0.00268329, -0.27769418),
    "Earth":   (1.00000261, 0.01671123, -0.00001531, 100.46457166, 102.93768193, 0.0,
                0.00000562, -0.00004392, -0.01294668, 35999.37244981, 0.32327364, 0.0),
    "Mars":    (1.52371034, 0.09339410, 1.84969142, -4.55343205, -23.94362959, 49.55953891,
                0.00001847, 0.00007882, -0.00813131, 19140.30268499, 0.44441088, -0.29257343),
    "Jupiter": (5.20288700, 0.04838624, 1.30439695, 34.39644051, 14.72847983, 100.47390909,
                -0.00011607, -0.00013253, -0.00183714, 3034.74612775, 0.21252668, 0.20469106),
    "Saturn":  (9.53667594, 0.05386179, 2.48599187, 49.95424423, 92.59887831, 113.66242448,
                -0.00125060, -0.00050991, 0.00193609, 1222.49362201, -0.41897216, -0.28867794),
}


def helio_xyz_j2000(name, T):
    a0, e0, I0, L0, wb0, Om0, da, de, dI, dL, dwb, dOm = PLANET_ELEM[name]
    a = a0 + da * T
    e = e0 + de * T
    I = (I0 + dI * T) * DEG
    L = L0 + dL * T
    wb = wb0 + dwb * T
    Om = (Om0 + dOm * T) * DEG
    w = (wb - (Om0 + dOm * T)) * DEG
    M = L - wb
    if name == "Jupiter":
        M += -0.00012452 * T * T + 0.06064060 * math.cos(38.35125 * T * DEG) - 0.35635438 * math.sin(38.35125 * T * DEG)
    elif name == "Saturn":
        M += 0.00025899 * T * T - 0.13434469 * math.cos(38.35125 * T * DEG) + 0.87320147 * math.sin(38.35125 * T * DEG)
    E = kepler_solve(M, e)
    xp = a * (math.cos(E) - e)
    yp = a * math.sqrt(1.0 - e * e) * math.sin(E)
    cw, sw = math.cos(w), math.sin(w)
    cO, sO = math.cos(Om), math.sin(Om)
    cI, sI = math.cos(I), math.sin(I)
    x = (cw * cO - sw * sO * cI) * xp + (-sw * cO - cw * sO * cI) * yp
    y = (cw * sO + sw * cO * cI) * xp + (-sw * sO + cw * cO * cI) * yp
    z = (sw * sI) * xp + (cw * sI) * yp
    return x, y, z


def moon_tropical_lon(T):
    # Meeus Ch. 47 (main periodic terms, accuracy ~1-2 arcmin)
    Lp = norm(218.3164477 + 481267.88123421 * T - 0.0015786 * T * T + T * T * T / 538841.0)
    D = norm(297.8501921 + 445267.1114034 * T - 0.0018819 * T * T + T * T * T / 545868.0)
    M = norm(357.5291092 + 35999.0502909 * T - 0.0001536 * T * T)
    Mp = norm(134.9633964 + 477198.8675055 * T + 0.0087414 * T * T + T * T * T / 69699.0)
    F = norm(93.2720950 + 483202.0175233 * T - 0.0036539 * T * T)
    A1 = norm(119.75 + 131.849 * T)
    A2 = norm(53.09 + 479264.290 * T)
    E = 1.0 - 0.002516 * T - 0.0000074 * T * T
    terms = [
        (0, 0, 1, 0, 6288774), (2, 0, -1, 0, 1274027), (2, 0, 0, 0, 658314),
        (0, 0, 2, 0, 213618), (0, 1, 0, 0, -185116), (0, 0, 0, 2, -114332),
        (2, 0, -2, 0, 58793), (2, -1, -1, 0, 57066), (2, 0, 1, 0, 53322),
        (2, -1, 0, 0, 45758), (0, 1, -1, 0, -40923), (1, 0, 0, 0, -34720),
        (0, 1, 1, 0, -30383), (2, 0, 0, -2, 15327), (0, 0, 1, 2, -12528),
        (0, 0, 1, -2, 10980), (4, 0, -1, 0, 10675), (0, 0, 3, 0, 10034),
        (4, 0, -2, 0, 8548), (2, 1, -1, 0, -7888), (2, 1, 0, 0, -6766),
        (1, 0, -1, 0, -5163), (1, 1, 0, 0, 4987), (2, -1, 1, 0, 4036),
        (2, 0, 2, 0, 3994), (4, 0, 0, 0, 3861), (2, 0, -3, 0, 3665),
        (0, 1, -2, 0, -2689), (2, 0, -1, 2, -2602), (2, -1, -2, 0, 2390),
        (1, 0, 1, 0, -2348), (2, -2, 0, 0, 2236), (0, 1, 2, 0, -2120),
        (0, 2, 0, 0, -2069), (2, -2, -1, 0, 2048), (2, 0, 1, -2, -1773),
        (2, 0, 0, 2, -1595), (4, -1, -1, 0, 1215), (0, 0, 2, 2, -1110),
        (3, 0, -1, 0, -892), (2, 1, 1, 0, -810), (4, -1, -2, 0, 759)
    ]
    sl = 0.0
    for d, m, mp, f, c in terms:
        ef = E if abs(m) == 1 else (E * E if abs(m) == 2 else 1.0)
        sl += ef * c * math.sin((d * D + m * M + mp * Mp + f * F) * DEG)
    sl += 3958 * math.sin(A1 * DEG) + 1962 * math.sin((Lp - F) * DEG) + 318 * math.sin(A2 * DEG)
    dpsi, _ = nutation_obliquity(T)
    return norm(Lp + sl / 1e6 + dpsi / 3600.0)


def vpos(lon, N):
    lon = norm(lon)
    s = int(lon // 30) % 12
    d = lon - 30.0 * int(lon // 30)
    odd = (s % 2 == 0)
    k = int((d * N) // 30)
    if N == 108:
        a = vpos(lon, 9)
        return vpos(a[0] * 30.0 + a[1], 12)
    if N == 144:
        b = vpos(lon, 12)
        return vpos(b[0] * 30.0 + b[1], 12)
    if N == 1: r = s
    elif N == 2: r = 4 if (d < 15 if odd else d >= 15) else 3
    elif N == 3: r = s + 4 * k
    elif N == 4: r = s + 3 * k
    elif N == 5: r = ([0, 10, 8, 2, 6] if odd else [1, 5, 11, 9, 7])[k]
    elif N in (6, 40): r = (0 if odd else 6) + k
    elif N == 7: r = s + (0 if odd else 6) + k
    elif N in (8, 20): r = [0, 8, 4][s % 3] + k
    elif N in (9, 81): r = int((lon * N) // 30)
    elif N == 10: r = s + (0 if odd else 8) + k
    elif N == 11: r = 12 - s + k
    elif N in (12, 60): r = s + k
    elif N in (16, 45): r = [0, 4, 8][s % 3] + k
    elif N == 24: r = (4 if odd else 3) + k
    elif N == 27: r = [0, 3, 6, 9][s % 4] + k
    elif N == 30:
        if odd:
            r = 0 if d < 5 else (10 if d < 10 else (8 if d < 18 else (2 if d < 25 else 6)))
        else:
            r = 1 if d < 5 else (5 if d < 12 else (11 if d < 20 else (9 if d < 25 else 7)))
    else:
        raise ValueError(f"Unsupported D{N}")
    return r % 12, (d * N) % 30.0


def calculate_full_jyotish(year, month, day, hour, minute, second, tz_offset_hours, lat, lon, karaka_scheme=7):
    """Compute complete True Citrapaksha chart, D9, D10, D20, D60, Jaimini Karakas, Ishta Devata, Arudha, Panchang & Dasha."""
    dt_local = datetime(year, month, day, hour, minute, second)
    dt_utc = dt_local - timedelta(hours=tz_offset_hours)
    jd = julian_day(dt_utc)
    T = (jd - 2451545.0) / 36525.0
    dpsi, eps = nutation_obliquity(T)
    ay = true_citrapaksha_ayanamsha(T)
    prec = (5028.796195 * T + 1.1054348 * T * T) / 3600.0

    ex, ey, ez = helio_xyz_j2000("Earth", T)
    trop = {}
    trop["Sun"] = norm(math.atan2(-ey, -ex) * RAD + prec + dpsi / 3600.0)
    trop["Moon"] = moon_tropical_lon(T)
    for pl in ["Mars", "Mercury", "Jupiter", "Venus", "Saturn"]:
        px, py, pz = helio_xyz_j2000(pl, T)
        trop[pl] = norm(math.atan2(py - ey, px - ex) * RAD + prec + dpsi / 3600.0)

    # Mean Rahu on true equinox of date
    mean_rahu_trop = norm(125.0445479 - 1934.1362891 * T + 0.0020754 * T * T + T**3 / 467441.0 + dpsi / 3600.0)
    # Ascendant (GMST + nutation + lon)
    gmst = norm(280.46061837 + 360.98564736629 * (jd - 2451545.0) + 0.000387933 * T * T - T**3 / 38710000.0)
    gast = gmst + (dpsi / 3600.0) * math.cos(eps * DEG)
    ramc = norm(gast + lon) * DEG
    asc_trop = norm(math.atan2(math.cos(ramc), -(math.sin(ramc) * math.cos(eps * DEG) + math.tan(lat * DEG) * math.sin(eps * DEG))) * RAD)

    sid = {g: norm(trop[g] - ay) for g in GRAHAS}
    sid["Rahu"] = norm(mean_rahu_trop - ay)
    sid["Ketu"] = norm(sid["Rahu"] + 180.0)
    sid["Lagna"] = norm(asc_trop - ay)

    lagna_s = int(sid["Lagna"] // 30)
    bodies = {}
    for b in ["Lagna", "Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu"]:
        s_idx = int(sid[b] // 30)
        nk_i = int((sid[b] * 27) // 360)
        pada = int(((sid[b] % (360.0 / 27.0)) // (360.0 / 108.0))) + 1
        bodies[b] = {
            "sign": SIGNS[s_idx],
            "sanskrit": SIGNS_SKT[s_idx],
            "degree": dms(sid[b] % 30),
            "house": ((s_idx - lagna_s) % 12) + 1,
            "nakshatra": NAKSHATRAS[nk_i][0],
            "pada": pada,
            "nak_lord": NAKSHATRAS[nk_i][1]
        }

    # Vargas
    vargas = {}
    for N in (9, 10, 20, 60):
        vl = vpos(sid["Lagna"], N)[0]
        vargas[f"D{N}"] = {
            b: {"sign": SIGNS[vpos(sid[b], N)[0]], "house": ((vpos(sid[b], N)[0] - vl) % 12) + 1}
            for b in ["Lagna", "Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Rahu", "Ketu"]
        }

    # Jaimini Karakas & Ishta Devata
    cands = [(g, sid[g] % 30) for g in GRAHAS]
    if karaka_scheme == 8:
        cands.append(("Rahu", 30.0 - (sid["Rahu"] % 30)))
    cands.sort(key=lambda x: x[1], reverse=True)
    roles = ["AK", "AmK", "BK", "MK", "PK", "GK", "DK"] if karaka_scheme == 7 else ["AK", "AmK", "BK", "MK", "PiK", "PK", "GK", "DK"]
    karakas = {roles[i]: {"planet": cands[i][0], "deg": dms(cands[i][1])} for i in range(len(roles))}
    ak = cands[0][0]
    ak_d9 = vpos(sid[ak], 9)[0]
    twelfth = (ak_d9 + 11) % 12
    occ12 = [g for g in GRAHAS + ["Rahu", "Ketu"] if vpos(sid[g], 9)[0] == twelfth]
    ishta_planets = occ12 if occ12 else [SIGN_LORDS[twelfth]]

    # Arudha Lagna & Upapada
    def arudha(h_num):
        hs = (lagna_s + h_num - 1) % 12
        ls = int(sid[SIGN_LORDS[hs]] // 30)
        ar = (ls + ((ls - hs) % 12)) % 12
        if ar == hs or ar == (hs + 6) % 12:
            ar = (ar + 9) % 12
        return SIGNS[ar]

    # Panchang
    diff = norm(sid["Moon"] - sid["Sun"])
    t_idx = int(diff // 12)
    y_idx = int(norm(sid["Sun"] + sid["Moon"]) // (360.0 / 27.0))

    # Vimshottari Dasha
    nk_span = 360.0 / 27.0
    m_nk = int(sid["Moon"] // nk_span)
    rem = 1.0 - (sid["Moon"] - m_nk * nk_span) / nk_span
    s_lord = NAKSHATRAS[m_nk][1]
    s_i = next(i for i, x in enumerate(DASHA_ORDER) if x[0] == s_lord)
    dashas = []
    cur = dt_utc
    for i in range(9):
        lord, yrs = DASHA_ORDER[(s_i + i) % 9]
        dur_days = yrs * 365.256364 * (rem if i == 0 else 1.0)
        nxt = cur + timedelta(days=dur_days)
        dashas.append({"lord": lord, "start": cur.strftime("%Y-%m-%d"), "end": nxt.strftime("%Y-%m-%d")})
        cur = nxt

    return {
        "ayanamsha": f"True Citrapaksha ({dms(ay)})",
        "d1": bodies,
        "vargas": vargas,
        "jaimini": {
            "karakas": karakas,
            "karakamsha_d9": SIGNS[ak_d9],
            "ishta_devata_sign": SIGNS[twelfth],
            "ishta_significators": ishta_planets,
            "ishta_deities": [ISHTA_DEITIES[p] for p in ishta_planets],
            "arudha_lagna": arudha(1),
            "upapada_lagna": arudha(12)
        },
        "panchang": {
            "tithi": f"{TITHIS[t_idx]} ({'Shukla' if t_idx < 15 else 'Krishna'})",
            "nakshatra": f"{bodies['Moon']['nakshatra']} Pada {bodies['Moon']['pada']}",
            "yoga": YOGAS[y_idx]
        },
        "vimshottari_dasha": dashas,
        "tantric_astro_links": {
            "all_26_calculators": "https://www.tantricastro.com/calculators/",
            "how_to_read": "https://www.tantricastro.com/start-here/",
            "live_zoom_consultations": "https://www.tantricastro.com/services/",
            "book_karaka": "https://www.amazon.com/dp/B0HNLYSPYK"
        }
    }


if __name__ == "__main__":
    import json
    # Smoke test: Swami Vivekananda (1863-01-12, 06:33:00, Kolkata +5.8833h)
    res = calculate_full_jyotish(1863, 1, 12, 6, 33, 0, 5 + 53 / 60.0, 22.5726, 88.3639)
    print(json.dumps({
        "ayanamsha": res["ayanamsha"],
        "Lagna": res["d1"]["Lagna"],
        "Sun": res["d1"]["Sun"],
        "Moon": res["d1"]["Moon"],
        "D9_Lagna": res["vargas"]["D9"]["Lagna"],
        "jaimini": res["jaimini"],
        "panchang": res["panchang"],
        "first_dasha": res["vimshottari_dasha"][0]
    }, indent=2))
