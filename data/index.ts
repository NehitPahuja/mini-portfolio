export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building my own website",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Basic Resume Builder",
        des: "A lightweight, browser-based resume builder to quickly draft a professional CV and export it as a PDF.",
        img: "/r2.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "https://github.com/NehitPahuja/Basic-Resume-Builder",
    },
    {
        id: 2,
        title: "Github Language Detector",
        des: "A single-page dashboard that showcases GitHub repository language statistics.",
        img: "/r3.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "https://github.com/NehitPahuja/Github-Language-Detector",
    },
    {
        id: 3,
        title: "ReXchange",
        des: "ReXchange is a campus marketplace prototype tailored for university students who want to swap or sell second-hand items around campus.",
        img: "/r1.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "https://github.com/NehitPahuja/ReXchange",
    },
    {
        id: 4,
        title: "Coming soon...",
        des: "",
        img: "/white.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "https://github.com/NehitPahuja",
    },
];

export const testimonials = [
    {
        quote:
            "Collaborating with Nehit was an absolute pleasure. His rofessionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Nehit's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Nehit is the ideal partner.",
        name: "Aryan Raj Gupta",
        title: "Student at SRM",
    },
    {
        quote:
            "Nehit is someone I truly respect both professionally and personally. He approaches every task with focus and a strong problem-solving mindset, always aiming to deliver quality work. What really stands out is his calm, dependable nature and his ability to collaborate smoothly with others. He’s not only skilled but also brings a positive attitude that makes working with him a great experience.",
        name: "Rayna Manchanda",
        title: "Student at BML Munjal University",
    },
    {
        quote:
            "Collaborating with Nehit was an absolute pleasure. His proessionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Nehit was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Nehit is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Nehit was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Nehit's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Nehit is the ideal partner.",
        name: "Aryan Raj Gupta",
        title: "Student at SRM",
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const WorkExperience = [
    {
        id: 1,
        title: "Contributor - Hacktober Fest",
        desc: "- Helped improve the UI for a collaborative Notepad website and Changed the logo for an assignment helper app",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Video Editor - 6Pistons Media",
        desc: "- Helping rebuild 6Pistons social media presence",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Creative Director - Deryl.in",
        desc: "- Shot, edited, and posted content for social media, Directed creative video concepts for brand engagement, Managed post-production workflow to ensure high-quality output",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Volunteer - AARUUSH",
        desc: "- Helped manage and organize SRM RUN 7.0 ",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
    },
    {
        id: 2,
        img: "/twit.svg",
    },
    {
        id: 3,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/nehit-pahuja-375a61232/"
    },
];