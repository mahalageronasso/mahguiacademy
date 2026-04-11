export interface Course {
  id: string;
  nameKey: string;
  descKey: string;
  category: string;
  categoryKey: string;
  instructor: "dr. mahala" | "guilherme";
  lessons: number;
  hours: number;
  priceUsd: number;
  originalPriceUsd: number;
  priceBrl: number;
  originalPriceBrl: number;
  icon: string;
  image: string;
}

export const courses: Course[] = [
  {
    id: "hotel-accounting",
    nameKey: "course.hotelAccounting",
    descKey: "course.hotelAccounting.desc",
    category: "finance",
    categoryKey: "courses.filter.finance",
    instructor: "dr. mahala",
    lessons: 8,
    hours: 4,
    priceUsd: 37,
    priceBrl: 197,
    icon: "R$",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/course-hotel-accounting-n6V7wCa9mi6S3JvcS2SMuD.webp",
  },
  {
    id: "revenue-management",
    nameKey: "course.revenueMgmt",
    descKey: "course.revenueMgmt.desc",
    category: "revenue",
    categoryKey: "courses.filter.revenue",
    instructor: "dr. mahala",
    lessons: 10,
    hours: 5,
    priceUsd: 37,
    priceBrl: 197,
    icon: "Rev",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/course-revenue-management-WxjaUmjBMfgc9WwUwsfKoa.webp",
  },
  {
    id: "financial-statements",
    nameKey: "course.financialStatements",
    descKey: "course.financialStatements.desc",
    category: "finance",
    categoryKey: "courses.filter.finance",
    instructor: "dr. mahala",
    lessons: 9,
    hours: 4.5,
    priceUsd: 37,
    priceBrl: 197,
    icon: "DRE",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/course-financial-statements-95aYWmeKMs8z2gdzSug4tm.webp",
  },
  {
    id: "excel-hospitality",
    nameKey: "course.excelHospitality",
    descKey: "course.excelHospitality.desc",
    category: "data",
    categoryKey: "courses.filter.data",
    instructor: "dr. mahala",
    lessons: 12,
    hours: 6,
    priceUsd: 37,
    priceBrl: 197,
    icon: "XLS",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/course-excel-hospitality-Gz9JyTqwQbhQBjQRu6cgfU.webp",
  },
  {
    id: "strategic-pricing",
    nameKey: "course.strategicPricing",
    descKey: "course.strategicPricing.desc",
    category: "revenue",
    categoryKey: "courses.filter.revenue",
    instructor: "dr. mahala",
    lessons: 8,
    hours: 4,
    priceUsd: 37,
    priceBrl: 197,
    icon: "Price",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/course-strategic-pricing-U3MnxuLgJDqaMk7DYgzMij.webp",
  },
  {
    id: "leadership",
    nameKey: "course.leadership",
    descKey: "course.leadership.desc",
    category: "leadership",
    categoryKey: "courses.filter.leadership",
    instructor: "dr. mahala",
    lessons: 7,
    hours: 3.5,
    priceUsd: 37,
    priceBrl: 197,
    icon: "Lead",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/course-leadership-Ux43u7Pndj7YL4tQkE9T68.webp",
  },
  {
    id: "intro-hospitality",
    nameKey: "course.introHospitality",
    descKey: "course.introHospitality.desc",
    category: "hospitality",
    categoryKey: "courses.filter.hospitality",
    instructor: "dr. mahala",
    lessons: 10,
    hours: 5,
    priceUsd: 37,
    priceBrl: 197,
    icon: "HM",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/course-intro-hospitality-kPdi27hzgCxRUQZ8c5ghSG.webp",
  },
  {
    id: "international-career",
    nameKey: "course.internationalCareer",
    descKey: "course.internationalCareer.desc",
    category: "career",
    categoryKey: "courses.filter.career",
    instructor: "dr. mahala",
    lessons: 6,
    hours: 3,
    priceUsd: 37,
    priceBrl: 197,
    icon: "Globe",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/course-international-career-NGsnsyCGWKryZkmWEkw4BL.webp",
  },
  {
    id: "fleet-management",
    nameKey: "course.fleetMgmt",
    descKey: "course.fleetMgmt.desc",
    category: "fleet",
    categoryKey: "courses.filter.fleet",
    instructor: "guilherme",
    lessons: 8,
    hours: 4,
    priceUsd: 37,
    priceBrl: 197,
    icon: "Fleet",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/course-fleet-management-WQcXKKKS9SryQgDL4A2ByJ.webp",
  },
  {
    id: "uae-real-estate",
    nameKey: "course.uaeRealEstate",
    descKey: "course.uaeRealEstate.desc",
    category: "realestate",
    categoryKey: "courses.filter.realestate",
    instructor: "guilherme",
    lessons: 10,
    hours: 5,
    priceUsd: 37,
    priceBrl: 197,
    icon: "UAE",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029168482/M83iGP6sVHFT6vazqWgrVe/course-uae-real-estate-McJzzKTmxCPRcbF4FsNgxu.webp",
  },
];

export const categories = [
  "all",
  "finance",
  "revenue",
  "leadership",
  "hospitality",
  "data",
  "career",
  "fleet",
  "realestate",
] as const;

export type Category = (typeof categories)[number];
