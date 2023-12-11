import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Enhancing Specialist Care Coordination in Direct Primary Care",
    paragraph:
      "The development of a platform to facilitate the relationship between physicians in direct primary care",
    image: "./images/blog/blog-01.jpg",
    author: {
      name: "Docktorly",
      // image: "/images/blog/author-01.png",
      designation: "Content writer",
    },
    tags: ["Future of Healthcare"],
    publishDate: "2023",
  },
  {
    id: 2,
    title:
      "Innovation in Patient Triage: Optimizing Specialist Referrals for Quicker Diagnosis and Treatment",
    paragraph:
      "Streamlining Referrals, Speeding Healing: Redefining Patient Care Pathways",
    image: "./images/blog/blog-02.jpg",
    author: {
      name: "Docktorly",
      // image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["innovation"],
    publishDate: "2023",
  },
  {
    id: 3,
    title:
      "Revamping Healthcare Networks: Innovative Approaches to Strengthening Physician-Specialist Partnerships",
    paragraph:
      "Breaking Barriers, Connecting Care: Transforming Healthcare Collaboration",
    image: "./images/blog/blog-03.jpg",
    author: {
      name: "Docktorly",
      // image: "/images/blog/author-03.png",
      designation: "Content writer",
    },
    tags: ["Network"],
    publishDate: "2023",
  },
];
export default blogData;
