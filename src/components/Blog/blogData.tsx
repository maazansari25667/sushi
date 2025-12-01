import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "5 Ways to Style a Winter Parka for Every Occasion",
    paragraph:
      "Discover versatile styling tips for your winter parka. From casual weekends to smart-casual office looks, learn how to maximize your jacket investment.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Erik Andersson",
      image: "/images/blog/author-03.png",
      designation: "Style Consultant",
    },
    tags: ["styling"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Parka vs Puffer: Which Winter Jacket Is Right for You?",
    paragraph:
      "Compare the benefits of parkas and puffer jackets. Understand warmth ratings, weather resistance, and style versatility to make the perfect choice.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Johan Svensson",
      image: "/images/blog/author-02.png",
      designation: "Fashion Editor",
    },
    tags: ["guide"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "The Art of Layering: Scandinavian Winter Style Guide",
    paragraph:
      "Master the Nordic approach to winter dressing. Learn layering techniques that combine warmth, comfort, and timeless Scandinavian aesthetics.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lars Nilsson",
      image: "/images/blog/author-03.png",
      designation: "Style Consultant",
    },
    tags: ["trends"],
    publishDate: "2025",
  },
];
export default blogData;
