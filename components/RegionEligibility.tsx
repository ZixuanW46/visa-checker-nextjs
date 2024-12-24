const regionEligibilityVisaFree = {
  Shanghai: "eligible",
  Jiangsu: "eligible",
  Zhejiang: "eligible",
  Beijing: "partially-eligible",
  Tianjin: "partially-eligible",
  Hebei: "partially-eligible",
  Xinjiang: "ineligible",
  Xizang: "ineligible", // Tibet
  Qinghai: "ineligible",
  Gansu: "ineligible",
  Ningxia: "ineligible",
  "Inner Mongol": "ineligible",
  Liaoning: "ineligible",
  Jilin: "ineligible",
  Heilongjiang: "ineligible",
  Shandong: "ineligible",
  Henan: "ineligible",
  Shanxi: "ineligible",
  Shaanxi: "ineligible",
  Sichuan: "ineligible",
  Yunnan: "ineligible",
  Guizhou: "ineligible",
  Guangxi: "ineligible",
  Guangdong: "ineligible",
  Fujian: "ineligible",
  Hunan: "ineligible",
  Hubei: "ineligible",
  Anhui: "ineligible",
  Jiangxi: "ineligible",
  Hainan: "ineligible",
  Chongqing: "ineligible",
  Taiwan: "ineligible",
} as const;

type EligibilityStatus = "eligible" | "partially-eligible" | "ineligible";

export type { EligibilityStatus };
export { regionEligibilityVisaFree };
