import HomePage from "../pages/home-page/HomePage.jsx";
import ContactPage from "../pages/Contact-page/ContactPage.jsx";

export const headerMenu = [
    {
        name: "Home",
        path: "/home",
        element: <HomePage/>
    },
    {
        name: "Course",
        path: "/course",
        element: <h1>Course Page </h1>
    },
    {
        name: "Blog",
        path: "/blog",
        element: <h1>Blog Page </h1>
    },
    {
        name: "Page",
        path: "/contact",
        element: <ContactPage/>
    },
    {
        name: "LearnPress Add-On",
        path: "/LearnPress-add-on",
        element: <h1>LearnPress Add-On Page </h1>
    },
    {
        name: "Premium Theme",
        path: "/Premium-theme",
        element: <h1>Premium Theme Page </h1>
    },
]