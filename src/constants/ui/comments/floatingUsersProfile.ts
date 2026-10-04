export type FloatingUsersProfile = {
  id: number;
  src: string;
  className: string; // set position by tailwindcss classes,
  width: number;
  height: number;
  alt: string;
};

export const floatingUsersProfile: FloatingUsersProfile[] = [
  {
    id: 1,
    src: "/images/Customer-4.png",
    className: "absolute z-10 top-10 left-1/2 -translate-x-1/2 rounded-full",
    width: 100,
    height: 100,
    alt: "customer 4",
  },
  {
    id: 2,
    src: "/images/Customer-1.svg",
    className: "absolute z-10 right-1/4 top-1/4 rounded-full",
    width: 60,
    height: 60,
    alt: "customer 1",
  },
  {
    id: 3,
    src: "/images/Customer-3.svg",
    className: "absolute z-10 right-1/6 top-2/5 w-12.5 h-12.5 rounded-full",
    width: 50,
    height: 50,
    alt: "customer 3",
  },
  {
    id: 4,
    src: "/images/Customer-2.svg",
    className: "absolute z-10 top-3/5 right-3/12 rounded-full",
    width: 60,
    height: 60,
    alt: "customer 2",
  },
  {
    id: 5,
    src: "/images/Customer-3.svg",
    className: "absolute z-10 top-10 left-1/5 rounded-full",
    width: 60,
    height: 60,
    alt: "customer 3",
  },
  {
    id: 6,
    src: "/images/Customer-4.png",
    className: "absolute z-10 top-1/3 left-3/12 rounded-full",
    width: 50,
    height: 50,
    alt: "customer 4",
  },
  {
    id: 7,
    src: "/images/Customer-1.svg",
    className: "absolute z-10 top-1/2 left-2/12 rounded-full",
    width: 50,
    height: 50,
    alt: "customer 1",
  },
  {
    id: 8,
    src: "/images/Customer-5.png",
    className: "absolute z-10 top-9/12 left-3/12 rounded-full",
    width: 60,
    height: 60,
    alt: "customer 5",
  },
];
