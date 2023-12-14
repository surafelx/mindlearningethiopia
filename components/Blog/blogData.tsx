import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "The Language of Success: Unleashing the Power of English Proficiency",
    paragraph:
      "Explore how mastering English proficiency with Mind opens doors to success. Dive into insights, tips, and success stories surrounding language skills and professional achievement. Elevate your career with the language of opportunity.",
    image: "/images/hero/language-of-success.svg",
    author: {
      name: "Surafel Yimam",
      image: "/images/hero/profile.svg",
      designation: "Tech Lead",
    },
    tags: ["english"],
    publishDate: "2023",
  },
  {
    id: 2,
    title: "Tech Trends in Education: Navigating the Future with Mind",
    paragraph:
      "Stay ahead of the curve as we delve into the latest tech trends transforming education. Discover how Mind integrates cutting-edge technology to create a dynamic and future-ready learning experience.",
    image: "/images/hero/tech-trends.svg",
    author: {
      name: "Surafel Yimam",
      image: "/images/hero/profile.svg",
      designation: "Tech Lead",
    },
    tags: ["Software"],
    publishDate: "2023",
  },
  {
    id: 3,
    title: "Personalized Learning: A Closer Look at Tailoring Education with Mind.",
    paragraph:
      "Uncover the art of personalized learning with Mind. Dive into articles on the benefits of tailored education, strategies for success, and how individualized learning fosters academic growth.",
      image: "/images/hero/personalized-learning.svg",
    author: {
      name: "Surafel Yimam",
      image: "/images/hero/profile.svg",
      designation: "Tech Lead",
    },
    tags: ["learning"],
    publishDate: "2023",
  },
];
export default blogData;
