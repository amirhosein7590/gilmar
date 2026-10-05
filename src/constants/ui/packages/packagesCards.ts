export type PackageCard = {
  id?: number;
  imageSrc: string;
  title: string;
  imageAlt: string;
};

export const packageCards: PackageCard[] = [
  {
    id: 1,
    imageSrc: "/images/package-3.svg",
    imageAlt: "package number 1",
    title: "1 شب اقامت",
  },
  {
    id: 2,
    imageSrc: "/images/package-2.svg",
    imageAlt: "package number 2",
    title: "صبحانه",
  },
  {
    id: 3,
    imageSrc: "/images/package-1.svg",
    imageAlt: "package number 3",
    title: "قایق سواری",
  },
  {
    id: 4,
    imageSrc: "/images/package-4.svg",
    imageAlt: "package number 4",
    title: "تور جنگل نوردی",
  },
];
