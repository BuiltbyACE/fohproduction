export type PortfolioCategory =
  | "Health"
  | "Education"
  | "Women Empowerment"
  | "Child Protection"
  | "Gender";

export interface PortfolioEntry {
  id: number;
  title: string;
  partners: string;
  areaOfInterest: string;
  place: string;
  date: string;
  impact: string;
  category: PortfolioCategory[];
}

export const PORTFOLIO_DATA: PortfolioEntry[] = [
  {
    id: 1,
    title: "Advocacy for child spacing among postpartum married Muslim women",
    partners: "United Nations Foundation through FP2020",
    areaOfInterest: "RMNCAH-N",
    place: "Garissa County",
    date: "Sept. 2019 – June 2020",
    impact:
      "423 women accessed PPPF services. The record also documents PPPF circular direction to medical superintendents and facility in-charges to provide PPPF services and records, with a 25% increase in male involvement in PPPF.",
    category: ["Health"],
  },
  {
    id: 2,
    title: "Dignity for incarcerated women",
    partners: "Garissa County Government Dept. of Gender and Social Services",
    areaOfInterest: "Women empowerment",
    place: "Garissa Main Prison",
    date: "March 2019",
    impact:
      "15 women were accorded decent living and sleeping quarters. 5 women with infants received decent clothing, toys and diapers for the young ones.",
    category: ["Women Empowerment"],
  },
  {
    id: 3,
    title: "Launch of 16 Days of Activism Against GBV",
    partners:
      "Garissa County Government Dept. of Gender and Social Services, NEGEC",
    areaOfInterest: "Gender lensed RMNCAH",
    place: "Garissa County",
    date: "Nov. 2018",
    impact:
      "The OCS, Gender Department and various stakeholders pledged to advocate against GBV in Garissa County.",
    category: ["Gender"],
  },
  {
    id: 4,
    title: "Establishment of a child protection unit",
    partners:
      "UNICEF, Duty bearers, Dept. of Gender and Social Services",
    areaOfInterest: "Child Protection",
    place: "Garissa Remand Prison",
    date: "Nov. 2018",
    impact:
      "20 women with children under 4 years have a dignified stay at the Child Protection Unit.",
    category: ["Child Protection"],
  },
  {
    id: 5,
    title: "Participation in Beyond Zero Marathon",
    partners: "",
    areaOfInterest: "RMNCAH",
    place: "Nairobi",
    date: "March 2019",
    impact: "Ran 5km in support of Maternal Health.",
    category: ["Health"],
  },
  {
    id: 6,
    title: "Celebrations marking International Women's Day",
    partners:
      "County Government of Garissa, Dept. of Gender, Social Services and Sports",
    areaOfInterest: "Women empowerment, RMNCAH, PLWDS",
    place: "Mama Hani Children's Home, Garissa County",
    date: "March 2019",
    impact: "Celebration of women and girls in Garissa County (Balance For Better).",
    category: ["Women Empowerment", "Health"],
  },
  {
    id: 7,
    title: "Distribution of macintosh",
    partners: "Kenya Medical Supplies Authority",
    areaOfInterest: "RMNCAH",
    place: "Maternal shelter, Garissa referral hospital",
    date: "March 2018",
    impact: "1,400 macintosh distributed for women's comfort during delivery.",
    category: ["Health"],
  },
  {
    id: 8,
    title: "Keep girls in school through provision of sanitary towels",
    partners: "Mission For Drugs and Supplies",
    areaOfInterest: "RMNCAH, Education for girls, Gender parity",
    place: "Hyuga girls",
    date: "April 2018",
    impact: "1,850 bales of sanitary towels distributed.",
    category: ["Education", "Health"],
  },
  {
    id: 9,
    title:
      "Safeguarding reproductive health rights of women with obstetric fistula",
    partners: "AMREF, Global One, Department of Reproductive Health",
    areaOfInterest: "RMNCAH",
    place: "Garissa referral hospital",
    date: "May 2019",
    impact:
      "23 women had their dignity restored through free reconstructive surgery.",
    category: ["Health"],
  },
  {
    id: 10,
    title:
      "Keeping girls in school through Menstrual Hygiene Management (MHeM) initiative",
    partners:
      "Africa Cotton Industries, Kenya Red Cross, County First Ladies Association",
    areaOfInterest: "RMNCAH, Education for girls, Gender parity",
    place: "Garissa school for the deaf",
    date: "June 2019",
    impact:
      "Provision of dignity packs for differently-abled: 37 boys and 116 girls.",
    category: ["Education", "Health"],
  },
  {
    id: 11,
    title: "Malnutrition advocacy pilot project in two ECD centers",
    partners: "Non-Communicable Diseases Alliance",
    areaOfInterest: "RMNCAH-N, Education",
    place: "Garissa Township Primary, Nanigi Primary School",
    date: "Mar. 2019 – Sept. 2019",
    impact: "Provision of 7,000 packets of milk as a supplementary...",
    category: ["Health", "Education"],
  },
  {
    id: 12,
    title:
      "Use of incentives to encourage enrollment into ECD centres",
    partners: "Save The Children, Department of Education",
    areaOfInterest: "RMNCAH-N",
    place: "Garissa Township Primary, Nanigi Primary School",
    date: "Mar. 2019 – Sept. 2019",
    impact:
      "Provision of teddy bears to ECD pupils as an incentive to enroll into school.",
    category: ["Education"],
  },
  {
    id: 13,
    title:
      "Advocacy for Healthy living through Nutrition and Physical Fitness during Covid-19",
    partners:
      "Nutrition International, Scaling Up Nutrition Civil..., Society Association, County First Ladies Association",
    areaOfInterest: "RMNCAH-N",
    place: "Garissa County",
    date: "Mar. 2020 – Nov. 2020",
    impact:
      "Thousands reached through community health talks, sensitization of the public on nutrition through radio talk shows and social media platforms.",
    category: ["Health"],
  },
  {
    id: 14,
    title: "Institutional systems strengthening",
    partners: "Jhpiego",
    areaOfInterest: "",
    place: "",
    date: "Aug. 2021 – Mar. 2022",
    impact: "Enhanced sound institutional systems and processes.",
    category: ["Health"],
  },
  {
    id: 15,
    title: "Launch of Haemophilia clinic",
    partners: "Kenya Haemophilia Association, Garissa County Government",
    areaOfInterest: "Primary Health care",
    place: "Garissa referral hospital",
    date: "Mar. 2022",
    impact:
      "Ease of access to hundreds of Haemophilia patients in Garissa, Tana River, Mandera and Wajir counties.",
    category: ["Health"],
  },
  {
    id: 16,
    title: "Gender-lensed Advocacy in RMNCAH-N",
    partners: "Jhpiego",
    areaOfInterest: "RMNCAH-N, Gender",
    place: "Garissa Township and Balambala Sub counties — Garissa County",
    date: "April–July 2022",
    impact:
      "30 opinion and faith leaders trained on male involvement in FP. 30 key opinion and faith leaders, duty bearers sensitized on SGBV cases prevention, reporting and care. 130 community members in Hadley Village sensitized on SGBV cases prevention, reporting and care.",
    category: ["Health", "Gender"],
  },
];

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  "Health",
  "Education",
  "Women Empowerment",
  "Child Protection",
  "Gender",
];

export const IMPACT_HIGHLIGHTS = [
  {
    value: 423,
    label: "Women accessed PPPF services",
    source: "UNFPA through FP2020 · 2019–2020",
  },
  {
    value: 1850,
    label: "Bales of sanitary towels distributed",
    source: "Mission For Drugs and Supplies · 2018",
  },
  {
    value: 1400,
    label: "Macintosh distributed for women's comfort during delivery",
    source: "Kenya Medical Supplies Authority · 2018",
  },
  {
    value: 23,
    label: "Women had their dignity restored through free reconstructive surgery",
    source: "AMREF, Global One · 2019",
  },
  {
    value: 7000,
    label: "Packets of milk provided as a supplementary…",
    source: "NCD Alliance · 2019",
  },
];
