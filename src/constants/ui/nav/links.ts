type NavLink = {
  text: string;
  href: string;
};

export const navLinks: NavLink[] = [
  {
    text: "خانه",
    href: "/",
  },

  {
    text: "سوییت ها و اقامت ها",
    href: "/",
  },

  {
    text: "درباره گیلمار",
    href: "#",
  },

  {
    text: "راهنمای مهمان ها",
    href: "#",
  },

  {
    text: "مجله گیلمار",
    href: "#",
  },

  {
    text: "تماس با ما",
    href: "#",
  },
] as const;
