export const generalTheme = {
  fonts: {
    // main: "Muli, sans-serif",
    main: "Nunito, sans-serif",
    code: "Roboto Mono, monospace",
  },
  colors: {
    main1: "hsl(207,70%,59%)",
    main2: "hsl(207,70%, 94%)",
    dark1: "hsl(277,2%,12%)",
    dark2: "hsl(277,2%,26%)",
    dark3: "hsl(277,2%,64%)",
    light1: "hsl(0,0%,97%)",
    light2: "hsl(0,0%,99%)",
  },
  breakpoints: {
    small: "only screen and (max-width:35rem)",
    mobile: "only screen and (max-width:50rem)",
    tablet: "only screen and (max-width:65rem)",
  },
  spacings: {
    xxSmall: ".25rem",
    xSmall: ".5rem",
    small: "1rem",
    medium: "2rem",
    large: "3rem",
  },
  animations: {
    button: "box-shadow 0.3s ease",
    link: "color 0.2s ease",
  },
  shadows: {
    shadow1: "0px 5px 20px rgba(30, 30, 31, 0.05)",
  },
}

// export const lightTheme = {
//   ...generalTheme,
//   body: "#fffff",
//   navbar: "rgba(255, 255, 255, 0.8)",
//   paragraph: "#333",
//   header: "#53316c",
//   footerText: "#f2f2f2",
//   footerBody: "#a786df",
//   footerEmail: "#0e172c",
//   card: "#ffffff",
//   tag: "#888",
//   tagText: "#fff",
// }

// export const darkTheme = {
//   ...generalTheme,
//   body: "#232946",
//   navbar: "rgba(35, 41, 70, 0.8)",
//   paragraph: "#fafafa",
//   header: "#dad0ea",
//   footerText: "#f2f2f2",
//   footerBody: "#a786df",
//   footerEmail: "#0e172c",
//   card: "#232946",
//   tag: "#ffffff",
//   tagText: "#000",
// }

export const lightTheme = {
  ...generalTheme,
  body: "#fffffe",
  navbar: "rgba(255, 255, 254, 0.8)",
  paragraph: "#2d334a",
  header: "#53316c",
  footerText: "#f2f2f2",
  footerBody: "#d4d8f0",
  footerEmail: "#232946",
  // card: "#eff0f3",
  card: "#fffffe",

  tag: "#fec7d7",
  tagText: "#0e172c",
  allPosts: "#d4d8f0",
  // allPosts: "rgba(39, 35, 67, 0.28)",
  // allPosts: "#d9d4e7",
  allPostsButton: "#fec7d7",
}

export const darkTheme = {
  ...generalTheme,
  body: "#232946",
  navbar: "rgba(35, 41, 70, 0.95)",
  paragraph: "#fffffe",
  header: "#b8c1ec",
  footerText: "#f2f2f2",
  footerEmail: "#121629",
  footerBody: "#001858",
  card: "#232946",
  tag: "#eebbc3",
  tagText: "#000",
  allPosts: "#001858",
  allPostsButton: "#eebbc3e7",
}
