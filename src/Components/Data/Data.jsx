

 export const socialIcons = [
  {
    id: 1,
    link: "https://facebook.com",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
      </svg>
    ),
  },
  {
    id: 2,
    link: "https://twitter.com",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-twitter"
        viewBox="0 0 16 16"
      >
        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
      </svg>
    ),
  },
  {
    id: 3,
    link: "https://linkedin.com",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
      </svg>
    ),
  },
  {
    id: 4,
    link: "https://youtube.com",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-youtube"
        viewBox="0 0 16 16"
      >
        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
      </svg>
    ),
  },
];

export const NavLinks = [
  { id: 1, title: "Home", link: "/home" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Services", link: "/services" },
  {
    id: 4,
    title: "Pages",
    subLinks: [
      { id: 41, title: "Products", link: "/product" },
      { id: 42, title: "UseCallback", link: "/usecallback" },
      { id: 43, title: "Page 3", link: "/product/120/shoes" },
      { id: 6, title: "Formik Form", link: "/formikform" },
      { id: 7, title: "Formik Table", link: "/formiktable" },
    ],
  },
  { id: 5, title: "Contact", link: "/contact" },
  { id: 6, title: "Profile", link: "/profile" },
];

export const HeroSliderData = [
  {
    id: 1,
    title: "Expert Doctors & Lab Assistants",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Porro enim impedit et vel voluptatibus in ut, illum suscipit id tempore a quibusdam cumque.",
    backImage:"/Assests/assets/SliderImg1.avif", // Replace with your actual image URL
    align: "left", // First slide text aligns left
  },
  {
    id: 2,
    title: "Advanced Medical Technology",
    description:
      "State-of-the-art medical facilities to ensure top-quality healthcare services. Our expert team provides the best treatments with cutting-edge technology.",
      backImage:"/Assests/assets/SliderImg2.avif", // Replace with your actual image URL
    align: "right", // Second slide text aligns right
  },
];

export const CounterData = [
  {
    id: 1,
    title: "Award Winning",
    count: 9999,
    bgColor: "#2f63eb", // Blue
  },
  {
    id: 2,
    title: "Complete Cases",
    count: 9999,
    bgColor: "#787a8e", // Gray
  },
  {
    id: 3,
    title: "Happy Clients",
    count: 9999,
    bgColor: "#03103d", // Dark Blue
  },
];

export const PropertyCardsData = [
  {
    id: 1,
    title: "Award Winning",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        className="bi bi-award"
        viewBox="0 0 16 16"
      >
        <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Expert Doctors",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        className="bi bi-people"
        viewBox="0 0 16 16"
      >
        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Fair Prices",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        className="bi bi-cash-coin"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
        />
        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z" />
        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z" />
        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "24/7 Support",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        className="bi bi-headphones"
        viewBox="0 0 16 16"
      >
        <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
      </svg>
    ),
  },
];

export const ProgressBarsData = [
  {
    id: 1,
    title: "Sample Preparation",
    percentage: 90,
  },
  {
    id: 2,
    title: "Result Accuracy",
    percentage: 95,
  },
  {
    id: 3,
    title: "Lab Equipments",
    percentage: 90,
  },
];

export const ProgressCardsData = [
  {
    id: 1,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-person-plus"
        viewBox="0 0 16 16"
      >
        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
        <path
          fillRule="evenodd"
          d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
        />
      </svg>
    ),
    title: "Experienced Doctors",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    id: 2,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-check-all"
        viewBox="0 0 16 16"
      >
        <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
      </svg>
    ),
    title: "Advanced Microscopy",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

export const SrvicesCardsData = [
  {
    id: 1,
    title: "Pathology Testing",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisquam, quos.",
    url:"/service/1",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
      className="bi bi-heart-pulse" viewBox="0 0 16 16">
      <path
          d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857q.09.083.176.171a3 3 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01zM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5" />
      <path
          d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162z" />
  </svg>),
  },
  {
    id: 2,
    title: "Microbiology Tests",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisquam, quos.",
    url:"/service/2",
    svg: ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
      className="bi bi-lungs" viewBox="0 0 16 16">
      <path
          d="M8.5 1.5a.5.5 0 1 0-1 0v5.243L7 7.1V4.72C7 3.77 6.23 3 5.28 3c-.524 0-1.023.27-1.443.592-.431.332-.847.773-1.216 1.229-.736.908-1.347 1.946-1.58 2.48-.176.405-.393 1.16-.556 2.011-.165.857-.283 1.857-.241 2.759.04.867.233 1.79.838 2.33.67.6 1.622.556 2.741-.004l1.795-.897A2.5 2.5 0 0 0 7 11.264V10.5a.5.5 0 0 0-1 0v.764a1.5 1.5 0 0 1-.83 1.342l-1.794.897c-.978.489-1.415.343-1.628.152-.28-.25-.467-.801-.505-1.63-.037-.795.068-1.71.224-2.525.157-.82.357-1.491.491-1.8.19-.438.75-1.4 1.44-2.25.342-.422.703-.799 1.049-1.065.358-.276.639-.385.833-.385a.72.72 0 0 1 .72.72v3.094l-1.79 1.28a.5.5 0 0 0 .58.813L8 7.614l3.21 2.293a.5.5 0 1 0 .58-.814L10 7.814V4.72a.72.72 0 0 1 .72-.72c.194 0 .475.11.833.385.346.266.706.643 1.05 1.066.688.85 1.248 1.811 1.439 2.249.134.309.334.98.491 1.8.156.814.26 1.73.224 2.525-.038.829-.224 1.38-.505 1.63-.213.19-.65.337-1.628-.152l-1.795-.897A1.5 1.5 0 0 1 10 11.264V10.5a.5.5 0 0 0-1 0v.764a2.5 2.5 0 0 0 1.382 2.236l1.795.897c1.12.56 2.07.603 2.741.004.605-.54.798-1.463.838-2.33.042-.902-.076-1.902-.24-2.759-.164-.852-.38-1.606-.558-2.012-.232-.533-.843-1.571-1.579-2.479-.37-.456-.785-.897-1.216-1.229C11.743 3.27 11.244 3 10.72 3 9.77 3 9 3.77 9 4.72V7.1l-.5-.357z" />
  </svg>),
  },
  {
    id: 3,
    title: "Biochemistry Tests",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisquam, quos.",
    url:"/service/3",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
      className="bi bi-bug-fill" viewBox="0 0 16 16">
      <path
          d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A5 5 0 0 0 3 6h10a5 5 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A5 5 0 0 0 8 1a5 5 0 0 0-2.731.811l-.29-.956z" />
      <path
          d="M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975" />
  </svg>),
  },
  {
    id: 4,
    title: "Histopathology Tests",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisquam, quos.",
    url:"/service/4",
    svg: ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
      className="bi bi-capsule-pill" viewBox="0 0 16 16">
      <path
          d="M11.02 5.364a3 3 0 0 0-4.242-4.243L1.121 6.778a3 3 0 1 0 4.243 4.243l5.657-5.657Zm-6.413-.657 2.878-2.879a2 2 0 1 1 2.829 2.829L7.435 7.536zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m-.5 1.042a3 3 0 0 0 0 5.917zm1 5.917a3 3 0 0 0 0-5.917z" />
  </svg>),
  },
  {
    id: 5,
    title: "Urine Tests",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisquam, quos.",
    url:"/service/5",
    svg: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
      className="bi bi-capsule" viewBox="0 0 16 16">
      <path
          d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429z" />
  </svg>),
  },
  {
    id: 6,
    title: "Blood Tests",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisquam, quos.",
    url:"/service/6",
    svg: ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
      className="bi bi-prescription2" viewBox="0 0 16 16">
      <path d="M7 6h2v2h2v2H9v2H7v-2H5V8h2z" />
      <path
          d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 14.5V4a1 1 0 0 1-1-1zm2 3v10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V4zM3 3h10V1H3z" />
  </svg>),
  },
  {
    id: 7,
    title: "Fever Tests",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisquam, quos.",
    url:"/service/7",
    svg:(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
      className="bi bi-clipboard2-pulse" viewBox="0 0 16 16">
      <path
          d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
      <path
          d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
      <path
          d="M9.979 5.356a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.926-.08L4.69 10H4.5a.5.5 0 0 0 0 1H5a.5.5 0 0 0 .447-.276l.936-1.873 1.138 3.793a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h.5a.5.5 0 0 0 0-1h-.128z" />
  </svg>),
  },
  {
    id: 8,
    title: "Allergy Tests",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisquam, quos.",
    url:"/service/8",
    svg: ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
      className="bi bi-file-diff" viewBox="0 0 16 16">
      <path
          d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4m-2.5 6.5A.5.5 0 0 1 6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5" />
      <path
          d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
  </svg>),
  }
];

export const ContactOfficeDetails = [
  {
    id: 1,
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
      className="bi bi-geo-alt" viewBox="0 0 16 16">
      <path
          d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
  </svg>), 
    title: "Office Address",
    description: "123 Street, New York, USA",
  },
  {
    id: 2,
    icon: ( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
      className="bi bi-clock" viewBox="0 0 16 16">
      <path
          d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
  </svg>),
    title: "Office Time",
    description: "Mon-Sat 09am-5pm, Sun Closed",
  }
];

 export const TeamSecData = [
  {
    id: 1,
    name: "Alex Robin",
    role: "Lab Assistant",
    image: "/Assests/assets/teamMember1.jpg", 
  },
  {
    id: 2,
    name: "Andrew Bon",
    role: "Lab Assistant",
    image: "/Assests/assets/teamMember2.jpg", 
  },
  {
    id: 3,
    name: "Martin Tompson",
    role: "Lab Assistant",
    image: "/Assests/assets/teamMember3.jpg", 
  },
  {
    id: 4,
    name: "Clarabelle Samber",
    role: "Lab Assistant",
    image: "/Assests/assets/teamMember4.jpg", 
  },
];

export const TestimonialsSliderData = [
  {
    id: 1,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis fugiat excepturi deleniti dolor vero! Minus temporibus facilis, numquam placeat voluptates dolore, tempore, ducimus impedit voluptate mollitia repellat voluptatibus quam quia.",
    name: "Client Name",
    profession: "Profession",
    image: "/Assests/assets/teamMember2.jpg", 
    svg:( <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
      fill="currentColor" className="bi bi-chat-left-quote" viewBox="0 0 16 16">
      <path
          d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
      <path
          d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
  </svg>)
  },
  {
    id: 2,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis fugiat excepturi deleniti dolor vero! Minus temporibus facilis, numquam placeat voluptates dolore, tempore, ducimus impedit voluptate mollitia repellat voluptatibus quam quia.",
    name: "Client Name",
    profession: "Profession",
    image: "/Assests/assets/teamMember3.jpg", 
    svg:(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
      fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
      <path
          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z">
      </path>
  </svg>)
  },
 
];

  export const footerLinks = [
  {
    id:25,
    heading: "Quick Links",
    links: [
      {id:1, name: "About Us", url: "/about" },
      {id:2, name: "Contact Us", url: "/contact" },
      {id:3, name: "Our Services", url: "/services" },
      {id:4, name: "Term & Condition", url: "/terms" },
      {id:5, name: "Support", url: "/support" },
    ],
  },
  {
    id:26,
    heading: "Popular Links",
    links: [
      {id:6, name: "About Us", url: "/about" },
      {id:7, name: "Contact Us", url: "/contact" },
      {id:8, name: "Our Services", url: "/services" },
      {id:9, name: "Term & Condition", url: "/terms" },
      {id:10, name: "Support", url: "/support" },
    ],
  },
];

    
 export const Products= [
  {
      id: 1,
      name: "Shirt1",
      price: 300,
      category: "shirts"
  },
  {
      id: 2,
      name: "Shoes1",
      price: 230,
      category: "shoes"
  },
  {
      id: 3,
      name: "Watch1",
      price: 120,
      category: "watches"
  },
  {
      id: 4,
      name: "Toy1",
      price: 560,
      category: "toys"
  },
  {
      id: 5,
      name: "Shirt2",
      price: 340,
      category: "shirts"
  },
  {
      id: 6,
      name: "Shoes2",
      price: 210,
      category: "shoes"
  },
  {
      id: 7,
      name: "Watch2",
      price: 360,
      category: "watches"
  },
  {
      id: 8,
      name: "Toy2",
      price: 800,
      category: "toys"
  },
  {
      id: 9,
      name: "Shirt3",
      price: 670,
      category: "shirts"
  },
  {
      id: 10,
      name: "Shoes3",
      price: 430,
      category: "shoes"
  },
  {
      id: 11,
      name: "Watch3",
      price: 140,
      category: "watches"
  },
  {
      id: 12,
      name: "Toy3",
      price: 280,
      category: "toys"
  }
]    

export const Products1= [
  {
      id: 1,
      name: "Shirt1",
      category: "shirts"
  },
  {
      id: 2,
      name: "Shoes1",
      category: "shoes"
  },
  {
      id: 3,
      name: "Watch1",
      category: "watches"
  },
  {
      id: 4,
      name: "Toy1",
      category: "toys"
  },
  {
      id: 5,
      name: "Shirt2",
      category: "shirts"
  },
  {
      id: 6,
      name: "Shoes2",
      category: "shoes"
  },
  {
      id: 7,
      name: "Watch2",
      category: "watches"
  },
  {
      id: 8,
      name: "Toy2",
      category: "toys"
  },
  {
      id: 9,
      name: "Shirt3",
      category: "shirts"
  },
  {
      id: 10,
      name: "Shoes3",
      category: "shoes"
  },
  {
      id: 11,
      name: "Watch3",
      category: "watches"
  },
  {
      id: 12,
      name: "Toy3",
      category: "toys"
  }
]    

 export const categoryBtns=[
  {
    id: 1,
    name: "All",
    category: "all"
  },
  {
    id: 2,
    name: "Shirts",
    category: "shirts"
  },
  {
    id: 3,
    name: "Shoes",
    category: "shoes"
  },
  {
    id: 4,
    name: "Watches",
    category: "watches"
  },
  {
    id: 5,
    name: "Toys",
    category: "toys"
  }
]