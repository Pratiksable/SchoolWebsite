// navbarData.js
const NAV__ITEMS = [
  {
    isDropDown: false,
    name: "Home",
    path: "/",
  },
  {
    isDropDown: true,
    name: "About",
    dropDownItems: [
      { name: "About Us", path: "/about-us" },
      { name: "Vision & Mission", path: "/vision-mission" },
      { name: "Principal's Message", path: "/principal-message" },
      { name: "Board Of Members", path: "/Board-Of-Members" },
      { name: "About Chairperson", path: "/Chairperson" },
      { name: "Why Choose Us", path: "/why-choose-us" },
      { name: "College Development Committee", path:"/committee"}
    ],
  },
  {
    isDropDown: true,
    name: "Admission",
    dropDownItems: [
      { name: "Overview", path: "/Overview" },
      { name: "Fee Structure", path: "/Fee-Structure" },
    ],
  },
  {
    isDropDown: true,
    name: "Departments",
    dropDownItems: [
      { name: "PU College", path: "/pu-college" },
      { name: "High School", path: "/high-school" },
      { name: "Primary School", path: "/primary-school" },
    ],
  },
  {
    isDropDown: false,
    name: "Facilities",
    path: "/Facilities",
  },
  {
    isDropDown: true,
    name: "Academics",
    dropDownItems: [
      { name: "Overview", path: "/Overview-Academics" },
      { name: "Time-Table", path: "/Time-Table" },
      { name: "Scholarships", path: "/Scholarships"},
    ],
  },
  {
    isDropDown: false,
    name: "Notice",
    path: "/Notice",
  },
  {
    isDropDown: true,
    name: "Campus",
    dropDownItems: [
      { name: "NCC", path: "/campus/ncc" },
      { name: "United Bank", path: "/campus/united-bank" },
      { name: "Csp", path: "/campus/csp" },
      { name: "Canting", path: "/campus/canting" },
    ],
  },
  {
    isDropDown: true,
    name: "Gallery",
    dropDownItems: [
      { name: "School Photos", path: "/photos" },
      { name: "School Videos", path: "/video" },
      { name: "Events Photos", path: "/event-photos" },
    ],
  },
  {
    isDropDown: false,
    name: "Contact us",
    path:"/Contact",
  },
];

export default NAV__ITEMS;
