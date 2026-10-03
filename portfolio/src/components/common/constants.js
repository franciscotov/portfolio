export const sectionKeys = {
  home: "Home",
  work: "Work",
  experience: "Experience",
  about: "About",
  contact: "Contact",
};

// Order of the sections on the page and in the menu
export const navigationSections = [
  { id: sectionKeys.home, labelKey: "home" },
  { id: sectionKeys.work, labelKey: "work" },
  { id: sectionKeys.experience, labelKey: "experience" },
  { id: sectionKeys.about, labelKey: "about" },
  { id: sectionKeys.contact, labelKey: "contact" },
];

export const contactEmail = "francisco.ronaldo.tovar@gmail.com";

// The email is long; on narrow screens let it wrap before the @ only
export const contactEmailParts = contactEmail.split(/(?=@)/);

export const languagesKeys = {
  en: "en",
  es: "es",
};

export const socialMediaUrls = {
  github: "https://github.com/franciscotov",
  linkedin: "https://www.linkedin.com/in/franciscotov/",
  leetcode: "https://leetcode.com/u/franciscotov/",
};
