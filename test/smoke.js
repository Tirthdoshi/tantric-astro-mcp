import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const transport = new StdioClientTransport({
  command: "node",
  args: ["src/index.js"]
});

const client = new Client({ name: "smoke-test", version: "1.0.0" });
await client.connect(transport);

const { tools } = await client.listTools();
console.log("Tools exposed:", tools.map((t) => t.name).join(", "));
if (tools.length !== 7) throw new Error(`Expected 7 tools, got ${tools.length}`);

// Real test: Swami Vivekananda (1863-01-12, 06:33:00, Kolkata +05:53:20 -> +05:53)
const sample = {
  date: "1863-01-12",
  time: "06:33:00",
  timezone: "+05:53",
  latitude: 22.5726,
  longitude: 88.3639,
  node: "mean"
};

const r1 = JSON.parse((await client.callTool({ name: "calculate_natal_chart", arguments: sample })).content[0].text);
console.log("D1 Lagna:", r1.bodies.Lagna.sign, r1.bodies.Lagna.degree_in_sign, "| Sun:", r1.bodies.Sun.sign, "| Moon:", r1.bodies.Moon.sign, r1.bodies.Moon.nakshatra);
if (r1.bodies.Lagna.sign !== "Sagittarius") throw new Error("Expected Sagittarius Lagna for Vivekananda!");

const r2 = JSON.parse((await client.callTool({ name: "calculate_divisional_chart", arguments: { ...sample, division: 9 } })).content[0].text);
console.log("D9 Lagna:", r2.placements.Lagna.sign, "| D9 URL:", r2.tantric_astro_interpretation_and_guides.interactive_calculator_and_guide);

const r3 = JSON.parse((await client.callTool({ name: "calculate_jaimini_karakas", arguments: { ...sample, scheme: 7 } })).content[0].text);
console.log("AK:", r3.atmakaraka, "| DK:", r3.darakaraka, "| Karakamsha:", r3.karakamsha_d9_sign, "| Ishta:", r3.primary_ishta_significator.join(", "));

const r4 = JSON.parse((await client.callTool({ name: "calculate_arudha_lagna", arguments: sample })).content[0].text);
console.log("AL:", r4.arudha_lagna_AL.sign, "| UL:", r4.upapada_lagna_UL.sign);

const r5 = JSON.parse((await client.callTool({ name: "calculate_vimshottari_dasha", arguments: sample })).content[0].text);
console.log("Birth Dasha:", r5.mahadashas[0].mahadasha, "| Balance:", r5.balance_at_birth_years, "yrs");

const r6 = JSON.parse((await client.callTool({ name: "calculate_birth_panchang", arguments: sample })).content[0].text);
console.log("Panchang:", r6.vara, "|", r6.tithi, "|", r6.nakshatra, "|", r6.yoga, "|", r6.karana);

const r7 = JSON.parse((await client.callTool({ name: "get_tantric_astro_resources", arguments: {} })).content[0].text);
console.log("Resources verified:", r7.website, "| Podcast:", r7.podcast.apple_podcasts);

await client.close();
console.log("ALL 7 MCP TOOLS PASSED!");
