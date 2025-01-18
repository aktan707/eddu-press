import HomePage from "../pages/home-page/HomePage.jsx";
import ContactPage from "../pages/Contact-page/ContactPage.jsx";
import { FaAngleDown } from "react-icons/fa";
import CoursePage from "../pages/course-page/CoursePage.jsx";
import BlogPage from "../pages/blog-page/BlogPage.jsx";
import LearnPress from "../pages/learnPress-add-on/LearnPress.jsx";
import PremiumTheme from "../pages/premium-theme/PremiumTheme.jsx";
import LoginPage from "../pages/login-page/LoginPage.jsx";
import RegisterPage from "../pages/login-page/RegisterPage.jsx";

export const headerMenu = [
    {
        name: "Home",
        path: "/home",
        element: <HomePage/>
    },
    {
        name: "Course",
        path: "/course",
        element: <CoursePage/>
    },
    {
        name: "Blog",
        path: "/blog-page",
        element: <BlogPage/>
    },
    {
        name: "Page",
        path: "/contact",
        icon: <FaAngleDown />,
        element: <ContactPage/>
    },
    {
        name: "LearnPress Add-On",
        path: "/LearnPress-add-on",
        element: <LearnPress/>
    },
    {
        name: "Premium Theme",
        path: "/Premium-theme",
        element: <PremiumTheme/>
    },
]