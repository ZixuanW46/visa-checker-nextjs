const regionEligibilityVisaFree = {
  Shanghai: {
    eligibility: "eligible",
    allowedScope: [],
    allowedPorts: ["all"],
  },
  Jiangsu: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Jiangsu"],
    allowedPorts: ["all"],
  },
  Zhejiang: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Zhejiang"],
    allowedPorts: ["all"],
  },
  Beijing: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Beijing"],
    allowedPorts: ["all"],
  },
  Tianjin: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Tianjin"],
    allowedPorts: ["all"],
  },
  Hebei: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Hebei"],
    allowedPorts: ["all"],
  },
  Liaoning: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Liaoning"],
    allowedPorts: ["all"],
  },
  Heilongjiang: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Fujian: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Fujian"],
    allowedPorts: ["all"],
  },
  Shandong: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Shandong"],
    allowedPorts: ["all"],
  },
  Henan: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Henan"],
    allowedPorts: ["all"],
  },
  Hubei: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Hubei"],
    allowedPorts: ["all"],
  },
  Hunan: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Hunan"],
    allowedPorts: ["all"],
  },
  Guangdong: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Guangdong"],
    allowedPorts: ["all"],
  },
  Guangxi: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Chongqing: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Chongqing"],
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
    allowedScope: ["the whole region of Shanxi"],
    allowedPorts: ["all"],
  },
  Anhui: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Anhui"],
    allowedPorts: ["all"],
  },
  Jiangxi: {
    eligibility: "eligible",
    allowedScope: ["whole-region"],
    allowedPorts: ["all"],
  },
  Hainan: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Hainan"],
    allowedPorts: ["all"],
  },
  Guizhou: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Guizhou"],
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
    allowedScope: [
      "most of Xinjiang under this policy. For some areas, you need to apply for additional special permit, you can apply for it through a local travel agency",
    ],
    allowedPorts: [],
  },
  Xizang: {
    eligibility: "partially-eligible",
    allowedScope: [
      "Xizang only under a special permit, you can apply for it through a local travel agency",
    ],
    allowedPorts: [],
  },
  Qinghai: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Qinghai"],
    allowedPorts: ["all"],
  },
  Gansu: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Gansu"],
    allowedPorts: ["all"],
  },
  Ningxia: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Ningxia"],
    allowedPorts: ["all"],
  },
  Taiwan: {
    eligibility: "ineligible",
    allowedScope: [],
    allowedPorts: [],
  },
} as const;

export { regionEligibilityVisaFree };

const regionEligibility240Hour = {
  Shanghai: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Shanghai"],
    allowedPorts: [
      "Shanghai Hongqiao International Airport",
      "Shanghai Pudong International Airport",
      "Shanghai Seaport (Passenger)",
    ],
  },
  Jiangsu: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Jiangsu"],
    allowedPorts: [
      "Nanjing Lukou International Airport",
      "Sunan Shuofang International Airport",
      "Yangzhou Taizhou International Airport",
      "Lianyungang Seaport (Passenger)",
    ],
  },
  Zhejiang: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Zhejiang"],
    allowedPorts: [
      "Hangzhou Xiaoshan International Airport",
      "Ningbo Lishe International Airport",
      "Wenzhou Longwan International Airport",
      "Zhoushan Seaport (Passenger)",
    ],
  },
  Beijing: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Beijing"],
    allowedPorts: [
      "Beijing Capital International Airport",
      "Beijing Daxing International Airport",
    ],
  },
  Tianjin: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Tianjin"],
    allowedPorts: [
      "Tianjin Binhai International Airport",
      "Tianjin Seaport (Passenger)",
    ],
  },
  Hebei: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Hebei"],
    allowedPorts: [
      "Shijiazhuang Zhengding International Airport",
      "Qinhuangdao Seaport (Passenger)",
    ],
  },
  Liaoning: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Liaoning"],
    allowedPorts: [
      "Shenyang Taoxian International Airport",
      "Dalian Zhoushuizi International Airport",
      "Dalian Seaport (Passenger)",
    ],
  },
  Fujian: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Fujian"],
    allowedPorts: [
      "Xiamen Gaoqi International Airport",
      "Fuzhou Changle International Airport",
      "Quanzhou Jinjiang International Airport",
      "Wuyishan Airport",
      "Xiamen Seaport (Passenger)",
    ],
  },
  Shandong: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Shandong"],
    allowedPorts: [
      "Qingdao Jiaodong International Airport",
      "Jinan Yaoqiang International Airport",
      "Qingdao Seaport (Passenger)",
    ],
  },
  Henan: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Henan"],
    allowedPorts: ["Zhengzhou Xinzheng International Airport"],
  },
  Hubei: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Hubei"],
    allowedPorts: ["Wuhan Tianhe International Airport"],
  },
  Hunan: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Hunan"],
    allowedPorts: ["Changsha Huanghua International Airport"],
  },
  Guangdong: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Guangdong"],
    allowedPorts: [
      "Guangzhou Baiyun International Airport",
      "Shenzhen Bao'an International Airport",
      "Jieyang Chaoshan International Airport",
      "Guangzhou Seaport (Passenger)",
      "Shenzhen Seaport (Passenger)",
    ],
  },
  Guangxi: {
    eligibility: "partially-eligible",
    allowedScope: ["Guilin", "Nanning", "Beihai"],
    allowedPorts: [
      "Guilin Liangjiang International Airport",
      "Nanning Wuxu International Airport",
      "Beihai Fucheng Airport",
      "Guilin Seaport (Passenger)",
    ],
  },
  Chongqing: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Chongqing"],
    allowedPorts: ["Chongqing Jiangbei International Airport"],
  },
  Sichuan: {
    eligibility: "partially-eligible",
    allowedScope: ["Chengdu"],
    allowedPorts: [
      "Chengdu Shuangliu International Airport",
      "Chengdu Tianfu International Airport",
    ],
  },
  Yunnan: {
    eligibility: "partially-eligible",
    allowedScope: ["Kunming"],
    allowedPorts: ["Kunming Changshui International Airport"],
  },
  Shaanxi: {
    eligibility: "partially-eligible",
    allowedScope: ["Xi'an"],
    allowedPorts: ["Xi'an Xianyang International Airport"],
  },
  Shanxi: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Shanxi"],
    allowedPorts: ["Taiyuan Wusu International Airport"],
  },
  Anhui: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Anhui"],
    allowedPorts: ["Hefei Xinqiao International Airport"],
  },
  Jiangxi: {
    eligibility: "partially-eligible",
    allowedScope: ["Nanchang"],
    allowedPorts: ["Nanchang Changbei International Airport"],
  },
  Hainan: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Hainan"],
    allowedPorts: [
      "Haikou Meilan International Airport",
      "Sanya Phoenix International Airport",
    ],
  },
  Guizhou: {
    eligibility: "eligible",
    allowedScope: ["the whole region of Guizhou"],
    allowedPorts: ["Guiyang Longdongbao International Airport"],
  },
  Heilongjiang: {
    eligibility: "partially-eligible",
    allowedScope: ["Harbin"],
    allowedPorts: ["Harbin Taiping International Airport"],
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
