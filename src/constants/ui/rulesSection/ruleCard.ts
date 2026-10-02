export type FloatingCube = {
  id: number;
  className: string;
};

export type RuleCard = {
  id: number;
  title: string;
  description: string;
  iconSrc: string;
  rotation: number;
  iconAlt: string;
  floatingCubes: FloatingCube[];
};

export const ruleCards: RuleCard[] = [
  {
    id: 1,
    title: "مراقبت از وسایل اقامتگاه",
    description:
      "مهمانان عزیز مسئول نگهداری از تجهیزات و وسایل داخل اقامتگاه در طول مدت اقامت هستند.",
    iconSrc: "/images/camping-tent.png",
    iconAlt: "camping-tent icon",
    rotation: -15,
    floatingCubes: [
      {
        id: 1,
        className:
          "absolute top-[15%] right-0 w-3 h-3 bg-[#DCB9F0] rounded-xs shadow-sm transform rotate-12",
      },
      {
        id: 2,
        className:
          "absolute bottom-[50%] -left-[1%] w-2 h-2 bg-[#9AC8FF] rounded-xs shadow-sm transform -rotate-12",
      },
    ],
  },
  {
    id: 2,
    title: "حفظ آرامش اقامتگاه",
    description:
      "برای حفظ فضای آرام و دلنشین گیلمار، لطفاً از ایجاد سر‌وصدای زیاد به‌ویژه در ساعات شب خودداری کنید.",
    iconSrc: "/images/camera.png",
    iconAlt: "camera icon",
    rotation: 15,
    floatingCubes: [
      {
        id: 1,
        className:
          "absolute top-[15%] left-0 w-2.5 h-2.5 bg-[#92A5EF] rounded-xs shadow-sm transform -rotate-12",
      },
      {
        id: 2,
        className:
          "absolute top-[45%] right-0 w-2.5 h-2.5 bg-[#FABDC1] rounded-xs shadow-sm transform rotate-12",
      },
    ],
  },
  {
    id: 3,
    title: "حفظ طبیعت و محیط زیست",
    description:
      "گیلمار در دل طبیعت قرار دارد؛ لطفاً در حفظ محیط‌زیست، فضای سبز و منابع طبیعی همراه ما باشید.",
    iconSrc: "/images/car.png",
    iconAlt: "car icon",
    rotation: -15,
    floatingCubes: [
      {
        id: 1,
        className:
          "absolute top-[20%] right-0 w-2.5 h-2.5 bg-[#FFD166] rounded-xs shadow-sm transform rotate-12",
      },
      {
        id: 2,
        className:
          "absolute bottom-0 left-[-5%] w-3 h-3 bg-[#CDB4DB] rounded-xs shadow-sm transform -rotate-12",
      },
    ],
  },
];
