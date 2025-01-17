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
  Tibet: {
    eligibility: "partially-eligible",
    allowedScope: [
      "Tibet only under a special permit, you can apply for it through a local travel agency",
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
      "Yiwu Airport",
      "Wenzhou Seaport (Passenger)",
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
      "Jinan Yaoqiang International Airport",
      "Qingdao Jiaodong International Airport",
      "Yantai Penglai International Airport",
      "Weihai Dashuipo International Airport",
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
    allowedPorts: [
      "Changsha Huanghua International Airport",
      "Zhangjiajie Hehua International Airport",
    ],
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
    allowedPorts: [
      "Kunming Changshui International Airport",
      "Lijiang Sanyi International Airport",
      "Mohan Railway Port",
    ],
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
    allowedPorts: [
      "Hefei Xinqiao International Airport",
      "Huangshan Tunxi International Airport",
    ],
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
  Tibet: {
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

const allowedPorts240Hour: string[] = Object.values(
  regionEligibility240Hour
).flatMap((region) => [...region.allowedPorts]);
export { allowedPorts240Hour };

const allChinaPorts = {
  Anhui: {
    AQG: "Anqing Tianzhushan Airport",
    JUH: "Chizhou Jiuhuashan Airport",
    FUG: "Fuyang Airport",
    HFE: "Hefei Xinqiao International Airport",
    TXN: "Huangshan Tunxi International Airport",
    WHA: "Wuhu Xuanzhou Airport",
  },
  Beijing: {
    PEK: "Beijing Capital International Airport",
    PKX: "Beijing Daxing International Airport",
  },
  Chongqing: {
    CKG: "Chongqing Jiangbei International Airport",
    JIQ: "Qianjiang Wulingshan Airport",
    WXN: "Wanzhou Wuqiao Airport",
    CQW: "Chongqing Xiannvshan Airport",
    WSK: "Chongqing Wushan Airport",
  },
  Fujian: {
    FOC: "Fuzhou Changle International Airport",
    LCX: "Liancheng Guanzhishan Airport",
    JJN: "Quanzhou Jinjiang International Airport",
    SQJ: "Sanming Shaxian Airport",
    WUS: "Wuyishan Airport",
    XMN: "Xiamen Gaoqi International Airport",
    XiamenSeaport: "Xiamen Seaport (Passenger)",
  },
  Gansu: {
    DNH: "Dunhuang Mogao International Airport",
    GXH: "Gannan Xiahe Airport",
    JGN: "Jiayuguan Jiuquan Airport",
    JIC: "Jinchang Jinchuan Airport",
    LHW: "Lanzhou Zhongchuan International Airport",
    LNL: "Longnan Chengxian Airport",
    IQN: "Qingyang Airport",
    THQ: "Tianshui Maijishan Airport",
    YZY: "Zhangye Ganzhou Airport",
  },
  Guangdong: {
    FUO: "Foshan Shadi Airport",
    CAN: "Guangzhou Baiyun International Airport",
    GuangzhouSeaport: "Guangzhou Seaport (Passenger)",
    HUZ: "Huizhou Pingtan Airport",
    SWA: "Jieyang Chaoshan International Airport",
    MXZ: "Meizhou Meixian Airport",
    HSC: "Shaoguan Danxia Airport",
    SZX: "Shenzhen Baoan International Airport",
    ShenzhenSeaport: "Shenzhen Seaport (Passenger)",
    ZHA: "Zhanjiang Wuchuan International Airport",
    ZUH: "Zhuhai Jinwan Airport",
  },
  Guangxi: {
    AEB: "Baise Bama Airport",
    BHY: "Beihai Fucheng Airport",
    KWL: "Guilin Liangjiang International Airport",
    GuilinSeaport: "Guilin Seaport (Passenger)",
    HCJ: "Hechi Jinchengjiang Airport",
    LZH: "Liuzhou Bailian Airport",
    NNG: "Nanning Wuxu International Airport",
    WUZ: "Wuzhou Xijiang Airport",
    YLX: "Yulin Fumian Airport",
  },
  Guizhou: {
    AVA: "Anshun Huangguoshu Airport",
    BFJ: "Bijie Feixiong Airport",
    KWE: "Guiyang Longdongbao International Airport",
    KJH: "Kaili Huangping Airport",
    LLB: "Qiannan Libo Airport",
    HZH: "Qiandongnan Liping Airport",
    LPF: "Liupanshui Yuezhao Airport",
    WMT: "Zunyi Maotai Airport",
    TEN: "Tongren Fenghuang Airport",
    ACX: "Xingyi Wanfenglin Airport",
    ZYI: "Zunyi Xinzhou Airport",
  },
  Hainan: {
    HAK: "Haikou Meilan International Airport",
    BAR: "Qionghai Boao International Airport",
    XYI: "Sansha Yongxing Airport",
    SYX: "Sanya Phoenix International Airport",
  },
  Hebei: {
    CDE: "Chengde Puning Airport",
    HDG: "Handan Airport",
    BPE: "Qinhuangdao Beidaihe Airport",
    QinhuangdaoSeaport: "Qinhuangdao Seaport (Passenger)",
    SJW: "Shijiazhuang Zhengding International Airport",
    TVS: "Tangshan Sannvhe Airport",
    XNT: "Xingtai Dalian Airport",
    ZQZ: "Zhangjiakou Ningyuan Airport",
  },
  Heilongjiang: {
    DQA: "Daqing Saertu Airport",
    FYJ: "Fuyuan Dongji Airport",
    HRB: "Harbin Taiping International Airport",
    HEK: "Heihe Aihui Airport",
    JGD: "Daxing'anling Elunchun Airport",
    JMU: "Jiamusi Dongjiao Airport",
    JSJ: "Jiansanjiang Shidi Airport",
    JXA: "Jixi Xingkaihu Airport",
    OHE: "Mohe Gulian Airport",
    MDG: "Mudanjiang Hailang International Airport",
    NDG: "Qiqihar Sanjiazi Airport",
    DTU: "Wudalianchi Dedu Airport",
    LDS: "Yichun Lindu Airport",
  },
  Henan: {
    HQQ: "Anyang Hongqiqu Airport",
    LYA: "Luoyang Beijiao Airport",
    NNY: "Nanyang Jiangying Airport",
    XAI: "Xinyang Minggang Airport",
    CGO: "Zhengzhou Xinzheng International Airport",
  },
  Hubei: {
    ENH: "Enshi Xujiaping Airport",
    EHU: "Ezhou Huahu Airport",
    SHS: "Jingzhou Shashi Airport",
    HPG: "Shennongjia Hongping Airport",
    WDS: "Shiyan Wudangshan Airport",
    WUH: "Wuhan Tianhe International Airport",
    XFN: "Xiangyang Liuji Airport",
    YIH: "Yichang Sanxia Airport",
  },
  Hunan: {
    CGD: "Changde Taohuayuan Airport",
    CSX: "Changsha Huanghua International Airport",
    HCZ: "Chenzhou Beihu Airport",
    HNY: "Hengyang Nanyue Airport",
    HJJ: "Huaihua Zhijiang Airport",
    DXJ: "Xiangxi Biancheng Airport",
    WGN: "Shaoyang Wugang Airport",
    LLF: "Yongzhou Lingling Airport",
    YYA: "Yueyang Sanhe Airport",
    DYG: "Zhangjiajie Hehua International Airport",
  },
  "Inner Mongolia": {
    YIE: "Aershan Yiershi Airport",
    AXF: "Alxa Left Banner Bayanhot Airport",
    RHT: "Alxa Right Banner Badanjilin Airport",
    BAV: "Baotou Donghe Airport",
    RLK: "Bayannaoer Tianjitai Airport",
    CIF: "Chifeng Yulong Airport",
    EJN: "Ejina Banner Taolai Airport",
    ERL: "Erenhot Saiwusu Airport",
    HLD: "Hulunbeier Hailar Airport",
    HET: "Hohhot Baita International Airport",
    HUO: "Huolinguole Huolinhe Airport",
    NZH: "Manzhouli Xijiao Airport",
    DSN: "Ordos Ejin Horo International Airport",
    TGO: "Tongliao Airport",
    HLH: "Ulanhot Yilelite Airport",
    UCB: "Ulanqab Jining Airport",
    WUA: "Wuhai Airport",
    XIL: "Xilinhot Airport",
    NZL: "Zhalantun Chengjisihan Airport",
  },
  Jiangsu: {
    CZX: "Changzhou Benniu International Airport",
    HIA: "Huaian Lianshui International Airport",
    LYG: "Lianyungang Huaguoshan Airport",
    LianyungangSeaport: "Lianyungang Seaport (Passenger)",
    NKG: "Nanjing Lukou International Airport",
    NTG: "Nantong Xingdong International Airport",
    WUX: "Wuxi Shuofang Airport",
    XUZ: "Xuzhou Guanyin International Airport",
    YNZ: "Yancheng Nanyang International Airport",
    YTY: "Yangzhou Taizhou International Airport",
  },
  Jiangxi: {
    KOW: "Ganzhou Huangjin Airport",
    JGS: "Ji'an Jinggangshan Airport",
    JDZ: "Jingdezhen Luojia Airport",
    JIU: "Jiujiang Lushan Airport",
    KHN: "Nanchang Changbei International Airport",
    SQD: "Shangrao Sanqingshan Airport",
    YIC: "Yichun Mingyueshan Airport",
  },
  Jilin: {
    DBC: "Baicheng Chang'an Airport",
    CGQ: "Changchun Longjia International Airport",
    NBS: "Baishan Changbaishan Airport",
    YSQ: "Songyuan Chaganhu Airport",
    TNH: "Tonghua Sanyuanpu Airport",
    YNJ: "Yanji Chaoyangchuan International Airport",
    JIL: "Jilin Ertaizi Airport",
  },
  Liaoning: {
    AOG: "Anshan Teng'ao Airport",
    CNI: "Changhai Dachangshandao Airport",
    CHG: "Chaoyang Airport",
    DLC: "Dalian Zhoushuizi International Airport",
    DalianSeaport: "Dalian Seaport (Passenger)",
    DDG: "Dandong Langtou Airport",
    JNZ: "Jinzhou Jinzhouwan Airport",
    SHE: "Shenyang Taoxian International Airport",
    YKH: "Yingkou Lanqi Airport",
  },
  Ningxia: {
    GYU: "Guyuan Liupanshan Airport",
    INC: "Yinchuan Hedong International Airport",
    ZHY: "Zhongwei Shapotou Airport",
  },
  Qinghai: {
    HXD: "Haixi Delingha Airport",
    GOQ: "Golmud Airport",
    HTT: "Haixi Huatugou Airport",
    GMQ: "Golog Maqin Airport",
    HBQ: "Haibei Qilian Airport",
    XNN: "Xining Caojiapu International Airport",
    YUS: "Yushu Batang Airport",
  },
  Shaanxi: {
    AKA: "Ankang Fuqiang Airport",
    HZG: "Hanzhong Chenggu Airport",
    XIY: "Xi'an Xianyang International Airport",
    ENY: "Yan'an Nanniwan Airport",
    UYN: "Yulin Yuyang Airport",
  },
  Shandong: {
    DOY: "Dongying Shengli Airport",
    HZA: "Heze Mudan Airport",
    TNA: "Jinan Yaoqiang International Airport",
    JNG: "Jining Da'an Airport",
    LYI: "Linyi Qiyang International Airport",
    TAO: "Qingdao Jiaodong International Airport",
    QingdaoSeaport: "Qingdao Seaport (Passenger)",
    RIZ: "Rizhao Shanzihe Airport",
    WEF: "Weifang Airport",
    WEH: "Weihai Dashuipo Airport",
    YNT: "Yantai Penglai International Airport",
  },
  Shanghai: {
    SHA: "Shanghai Hongqiao International Airport",
    PVG: "Shanghai Pudong International Airport",
    ShanghaiSeaport: "Shanghai Seaport (Passenger)",
  },
  Shanxi: {
    CIH: "Changzhi Wangcun Airport",
    DAT: "Datong Yungang International Airport",
    LFQ: "Linfen Yaodu Airport",
    LLV: "Lvliang Dawu Airport",
    SZH: "Shuozhou Zirun Airport",
    TYN: "Taiyuan Wusu International Airport",
    WUT: "Xinzhou Wutaishan Airport",
    YCU: "Yuncheng Yanhu International Airport",
  },
  Sichuan: {
    AHJ: "Aba Hongyuan Airport",
    BZX: "Bazhong Enyang Airport",
    CTU: "Chengdu Shuangliu International Airport",
    TFU: "Chengdu Tianfu International Airport",
    DCY: "Daocheng Yading Airport",
    DZH: "Dazhou Jinya Airport",
    GZG: "Ganzi Gesaer Airport",
    GYS: "Guangyuan Panlong Airport",
    JZH: "Jiuzhai Huanglong Airport",
    KGT: "Ganzi Kangding Airport",
    LZG: "Langzhong Gucheng Airport",
    LZO: "Luzhou Yunlong Airport",
    MIG: "Mianyang Nanjiao Airport",
    NAO: "Nanchong Gaoping Airport",
    PZI: "Panzhihua Baoanying Airport",
    XIC: "Xichang Qingshan Airport",
    YBP: "Yibin Wuliangye Airport",
  },
  Tianjin: {
    TSN: "Tianjin Binhai International Airport",
    TianjinSeaport: "Tianjin Seaport (Passenger)",
  },
  Xinjiang: {
    AKU: "Akesu Hongqipo Airport",
    ACF: "Alaer Talimu Airport",
    AAT: "Aletai Xuedu Airport",
    BPL: "Bole Alashankou Airport",
    KJI: "Bu'erjin Kanasi Airport",
    FYN: "Fuyun Keketuohai Airport",
    HMI: "Hami Yizhou Airport",
    HTN: "Hetian Kungang Airport",
    KHG: "Kashi Laining International Airport",
    KRY: "Kelamayi Guhai Airport",
    KRL: "Ku'erle Licheng Airport",
    KCA: "Kuqa Qiuci Airport",
    IQM: "Qiemo Yudu Airport",
    JBK: "Qitai Jiangbulake Airport",
    RQA: "Ruoqiang Loulan Airport",
    QSZ: "Shache Ye'erqiang Airport",
    SHF: "Shihezi Huayuan Airport",
    TCG: "Tacheng Qianquan Airport",
    HQL: "Tashiku'ergan Hongqilafu Airport",
    TWC: "Tumushuke Tangwangcheng Airport",
    TLQ: "Turpan Jiaohe Airport",
    URC: "Urumqi Diwopu International Airport",
    NLT: "Xinyuan Nalati Airport",
    YIN: "Yining Airport",
    YTW: "Yutian Wanfang Airport",
    ZFL: "Zhaosu Tianma Airport",
  },
  Tibet: {
    BPX: "Changdu Bangda Airport",
    DDR: "Rikaze Dingri Airport",
    NGQ: "Ali Kunsha Airport",
    LXA: "Lhasa Gonggar Airport",
    LZY: "Linzhi Milin Airport",
    LGZ: "Shannan Longzi Airport",
    APJ: "Ali Pulan Airport",
    RKZ: "Rikaze Peace Airport",
  },
  Yunnan: {
    BSD: "Baoshan Yunrui Airport",
    CWJ: "Cangyuan Washan Airport",
    DLU: "Dali Fengyi Airport",
    JHG: "Xishuangbanna Gasa International Airport",
    KMG: "Kunming Changshui International Airport",
    JMJ: "Lancang Jingmai Airport",
    LJG: "Lijiang Sanyi International Airport",
    LNJ: "Lincang Boshang Airport",
    LUM: "Dehong Mangshi International Airport",
    NLH: "Ninglang Luguhu Airport",
    SYM: "Pu'er Simao Airport",
    DIG: "Diqing Shangri-La Airport",
    TCZ: "Tengchong Tuofeng Airport",
    WNH: "Wenshan Yanshan Airport",
    ZAT: "Zhaotong Airport",
  },
  Zhejiang: {
    HGH: "Hangzhou Xiaoshan International Airport",
    NGB: "Ningbo Lishe International Airport",
    JUZ: "Quzhou Airport",
    HYN: "Taizhou Luqiao Airport",
    WNZ: "Wenzhou Longwan International Airport",
    WenzhouSeaport: "Wenzhou Seaport (Passenger)",
    YIW: "Yiwu Airport",
    HSN: "Zhoushan Putuoshan Airport",
    ZhoushanSeaport: "Zhoushan Seaport (Passenger)",
  },
} as const;

export { allChinaPorts };
