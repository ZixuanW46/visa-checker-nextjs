const regionEligibilityVisaFree = {
  Shanghai: {
    eligibility: "eligible",
    allowedScope: [
      "Shanghai-Pudong International Airport, Shanghai-Pudong International Airport,Shanghai-Pudong International Airport,Shanghai-Pudong International Airport,Shanghai-Pudong International Airport,Shanghai-Pudong International Airport,Shanghai-Pudong International Airport",
    ],
    allowedPorts: ["all"],
  },
  Jiangsu: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Zhejiang: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Beijing: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Tianjin: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Hebei: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Liaoning: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Heilongjiang: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Fujian: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Shandong: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Henan: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Hubei: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Hunan: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Guangdong: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Guangxi: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Chongqing: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Sichuan: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Yunnan: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Shaanxi: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Shanxi: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Anhui: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Jiangxi: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Hainan: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Guizhou: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  "Inner Mongol": {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Jilin: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Xinjiang: {
    eligibility: "partially-eligible",
    allowedScope: [],
    allowedPorts: [],
  },
  Xizang: {
    eligibility: "partially-eligible",
    allowedScope: [],
    allowedPorts: [],
  },
  Qinghai: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Gansu: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Ningxia: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Taiwan: {
    eligibility: "ineligible",
    allowedScope: [],
    allowedPorts: [],
  },
} as const;

export { regionEligibilityVisaFree };

const regionEligibility240Hour: {
  [key: string]: {
    eligibility: "eligible" | "partially-eligible" | "ineligible";
    allowedScope: string[];
    allowedPorts: string[];
  };
} = {
  Shanghai: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: [
      "Shanghai-Pudong International Airport, Shanghai-Pudong International Airport,Shanghai-Pudong International Airport,Shanghai-Pudong International Airport,Shanghai-Pudong International Airport,Shanghai-Pudong International Airport,Shanghai-Pudong International Airport",
    ],
  },
  Jiangsu: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Zhejiang: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Beijing: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Tianjin: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Hebei: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Liaoning: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Heilongjiang: {
    eligibility: "partially-eligible",
    allowedScope: ["harbin", "mudanjiang"],
    allowedPorts: ["harbin-airport", "mudanjiang-airport"],
  },
  Fujian: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Shandong: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Henan: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Hubei: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Hunan: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Guangdong: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Guangxi: {
    eligibility: "partially-eligible",
    allowedScope: ["guilin"],
    allowedPorts: ["guilin-airport"],
  },
  Chongqing: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Sichuan: {
    eligibility: "partially-eligible",
    allowedScope: ["chengdu"],
    allowedPorts: ["chengdu-airport"],
  },
  Yunnan: {
    eligibility: "partially-eligible",
    allowedScope: ["dali"],
    allowedPorts: ["dali-airport"],
  },
  Shaanxi: {
    eligibility: "partially-eligible",
    allowedScope: ["xian"],
    allowedPorts: ["xian-airport"],
  },
  Shanxi: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Anhui: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Jiangxi: {
    eligibility: "partially-eligible",
    allowedScope: ["nanchang"],
    allowedPorts: ["nanchang-airport"],
  },
  Hainan: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Guizhou: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  "Inner Mongol": {
    eligibility: "ineligible",
    allowedScope: [],
    allowedPorts: [],
  },
  Jilin: {
    eligibility: "ineligible",
    allowedScope: [],
    allowedPorts: [],
  },
  Xinjiang: {
    eligibility: "ineligible",
    allowedScope: [],
    allowedPorts: [],
  },
  Xizang: {
    eligibility: "ineligible",
    allowedScope: [],
    allowedPorts: [],
  },
  Qinghai: {
    eligibility: "ineligible",
    allowedScope: [],
    allowedPorts: [],
  },
  Gansu: {
    eligibility: "ineligible",
    allowedScope: [],
    allowedPorts: [],
  },
  Ningxia: {
    eligibility: "ineligible",
    allowedScope: [],
    allowedPorts: [],
  },
  Taiwan: {
    eligibility: "ineligible",
    allowedScope: [],
    allowedPorts: [],
  },
} as const;

export { regionEligibility240Hour };
