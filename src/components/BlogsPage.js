import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import pic1 from "../assets/pic1.png";
import pic3 from "../assets/pic3.png";
import pic7 from "../assets/pic7.jpg";
const Blogs = () => {
    const posts = [
        {
            title: "Top 5 Smart Wearables of 2025",
            excerpt: "Discover the latest advancements in smart wearables.",
            link: "#",
            image: pic3,
        },
        {
            title: "Choosing the Right Headphones",
            excerpt: "A guide to selecting the perfect headphones.",
            link: "#",
            image: pic1,
        },
        {
            title: "Understanding Bluetooth Speakers",
            excerpt: "Learn how to pick the best Bluetooth speaker.",
            link: "#",
            image: pic7,
        },
    ];
    return (_jsxs("div", { className: "p-8", children: [_jsx("h2", { className: "text-3xl font-bold mb-6", children: "Latest Blog Posts" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: posts.map((post, i) => (_jsxs("div", { className: "border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition", children: [_jsx("img", { src: post.image, alt: post.title, className: "w-full h-56 object-cover" }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "text-xl font-semibold mb-2", children: post.title }), _jsx("p", { className: "text-gray-700 mb-2", children: post.excerpt }), _jsx("a", { href: post.link, className: "text-yellow-600 hover:underline", children: "Read More" })] })] }, i))) })] }));
};
export default Blogs;
