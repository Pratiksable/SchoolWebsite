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
    dropDownItems: [
      { name: "Admission", path: "#" },
      { name: "Exam", path: "#" },
      { name: "Class", path: "#" },
      { name: "Event", path: "#" },
      { name: "Programs", path: "#" },
    ],
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
    isDropDown: false,
    name: "Gallery",
    path: "/gallery-page",
  },
  {
    isDropDown: true,
    name: "Feedback",
    dropDownItems: [
      { name: "Student", path: "/feedback/student" },
      { name: "College", path: "/feedback/college" },
      { name: "Class", path: "/feedback/class" },
      { name: "Event", path: "/feedback/Event" },
    ],
  },
];

export default NAV__ITEMS;
