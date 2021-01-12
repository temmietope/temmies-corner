import React from "react"
import { StackTag } from "../elements/StackTagElements"

const tags = {
  javascript: {
    color: "#f0db4f",
    text: "Javascript",
  },
  css: {
    color: "#264de4aa",
    text: "CSS",
  },
  html: {
    color: "#e34c26",
    text: "HTML",
  },
  react: {
    color: "#61dbfb",
    text: "React",
  },
  styledComponents: {
    color: "#D278BE",
    text: "Styled Components",
  },
  gatsby: {
    color: "#552D84",
    text: "Gatsby",
  },
  graphql: {
    color: "#E00298",
    text: "GraphQL",
  },
  blog: {
    color: "#657ab2",
    text: "Blog",
  },
  library: {
    color: "#18ac23",
    text: "Library",
  },
  seo: {
    color: "#ad2bc4",
    text: "SEO",
  },
  contextApi: {
    color: "#e3a3A6",
    text: "Context API",
  },
  redux: {
    color: "#C2B3A6",
    text: "Redux",
  },
  beginners: {
    color: "#92014577",
    text: "Beginner",
  },
  accessibility: {
    color: "#3e2a8166",
    text: "Accessibility",
  },
}
const StackLang = ({ lang, active }) => {
  // console.log(lang)
  let data = tags[lang]
  if (!data) {
    data = {
      color: "#333",
      text: lang,
    }
  }
  return (
    <StackTag color={data.color} active={active}>
      {data.text}
    </StackTag>
  )
}

export default StackLang
