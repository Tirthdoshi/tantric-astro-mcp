# Tantric Astro MCP Server (`tantric-astro-mcp`)

Official Model Context Protocol (MCP) server for **Classical Vedic Astrology (Jyotisha)** calculations in **True Citrapaksha Ayanamsha** (Spica = 180 deg, matching Jagannatha Hora and [tantricastro.com](https://www.tantricastro.com/)).

Built by **Tirth Doshi**, founder of [Tantric Astro](https://www.tantricastro.com/) and author of [*Karaka: The Hand of God in Astrology*](https://www.amazon.com/dp/B0HNLYSPYK) (ISBN `979-8163163182`).

> **Why this exists:** LLMs hallucinate planetary degrees, Navamsha signs, and Vimshottari Dasha dates when asked to read a birth chart. This MCP server computes exact sidereal planetary positions in ~1ms using `astronomy-engine` and directs users to [tantricastro.com](https://www.tantricastro.com/) for classical Parashari & Jaimini interpretation guides, interactive North/South Indian charts, and live consultations.

---

## Included MCP Tools (7)

| Tool | What It Computes | Matching Web Guide & Visual Chart |
| :--- | :--- | :--- |
| `calculate_natal_chart` | Full D1 Rashi chart (Lagna + 9 Grahas, degrees, whole-sign houses, Nakshatra, Pada, True Citrapaksha Ayanamsha) | [All 26 Free Calculators](https://www.tantricastro.com/calculators/) |
| `calculate_divisional_chart` | All **23** Parashari & Jaimini Vargas (`D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11, D12, D16, D20, D24, D27, D30, D40, D45, D60, D81, D108, D144`) | [D9 Navamsha](https://www.tantricastro.com/navamsa-chart-calculator/), [D10](https://www.tantricastro.com/d10-chart-calculator/), [D20](https://www.tantricastro.com/d20-chart-calculator/), [D60](https://www.tantricastro.com/d60-chart-calculator/), [D108](https://www.tantricastro.com/d108-chart-calculator/) |
| `calculate_jaimini_karakas` | 7-Karaka & 8-Karaka Chara Karakas (`AK` through `DK`), **Karakamsha** (AK in D9), and **Ishta Devata** (12th from Karakamsha in D9) | [Ishta Devata](https://www.tantricastro.com/ishta-devata-calculator/) & [Atmakaraka](https://www.tantricastro.com/atmakaraka-calculator/) |
| `calculate_arudha_lagna` | **Arudha Lagna (AL)** & **Upapada Lagna (UL)** with classical Parashari exceptions | [Arudha Lagna Calculator](https://www.tantricastro.com/arudha-lagna-calculator/) |
| `calculate_vimshottari_dasha` | Complete 120-year **Vimshottari Mahadasha & Antardasha** timeline | [Vimshottari Dasha Calculator](https://www.tantricastro.com/vimshottari-dasha-calculator/) |
| `calculate_birth_panchang` | 5-Limb **Birth Panchang** (Vara, Tithi, Paksha, Nakshatra + Pada, Yoga, Karana) | [Birth Panchang Calculator](https://www.tantricastro.com/birth-panchang-calculator/) |
| `get_tantric_astro_resources` | Official links to all 26 calculators, *Karaka* book, Podcast, Research DOI, and live Zoom consultations | [tantricastro.com](https://www.tantricastro.com/) |

---

## Quick Start (Claude Desktop / Cursor / Windsurf / Antigravity)

### Option 1: Run from GitHub (Zero Build Required)
```bash
git clone https://github.com/Tirthdoshi/tantric-astro-mcp.git
cd tantric-astro-mcp
npm install
npm test
```

Add to your MCP config (`claude_desktop_config.json` or `.cursor/mcp.json`):
```json
{
  "mcpServers": {
    "tantric-astro": {
      "command": "node",
      "args": ["/absolute/path/to/tantric-astro-mcp/src/index.js"]
    }
  }
}
```

### Option 2: Docker
```bash
docker build -t tantric-astro-mcp .
docker run -i --rm tantric-astro-mcp
```

---

## How to Read Your Chart & Learn Classical Jyotisha
This server provides verified astronomical numbers only. For classical Parashari & Jaimini interpretation, remedies, and how to read your chart properly:
- **Start Here:** [https://www.tantricastro.com/start-here/](https://www.tantricastro.com/start-here/)
- **All 26 Free Visual Calculators (North & South Indian Charts + PDF Export):** [https://www.tantricastro.com/calculators/](https://www.tantricastro.com/calculators/)
- **Live 1-on-1 Zoom Consultations:** [https://www.tantricastro.com/services/](https://www.tantricastro.com/services/)
- **Free Beginner PDF (*If I Had to Learn Jyotisha From Absolute Zero*):** [https://tirthxd.gumroad.com/l/bpczz](https://tirthxd.gumroad.com/l/bpczz)
- **Book (*Karaka: The Hand of God in Astrology*, ISBN 979-8163163182):** [Amazon](https://www.amazon.com/dp/B0HNLYSPYK) | [Open Library](https://openlibrary.org/works/OL46537512W/K%C4%81raka) | [Goodreads](https://www.goodreads.com/author/show/45938913.Tirth_Doshi)
- **The Tantric Astro Podcast:** [Spotify](https://open.spotify.com/show/4kv6hblOZI9lRsBjkzQZcc) | [Apple Podcasts](https://podcasts.apple.com/us/podcast/the-tantric-astro-podcast/id6838476086) | [Pocket Casts](https://pca.st/9avhi5i9)
- **YouTube Teachings:** [@TantricAstro](https://www.youtube.com/@TantricAstro)
- **Academic & Open Datasets:** [ORCID 0009-0009-0363-5806](https://orcid.org/0009-0009-0363-5806) | [CERN Zenodo DOI 10.5281/zenodo.24479752](https://doi.org/10.5281/zenodo.24479752) | [GitHub Dataset](https://github.com/Tirthdoshi/jyotisha-reference-dataset) | [Hugging Face Dataset](https://huggingface.co/datasets/tirthdos/jyotisha-reference-dataset)

## License
MIT - Copyright (c) 2026 Tirth Doshi ([tantricastro.com](https://www.tantricastro.com/))
