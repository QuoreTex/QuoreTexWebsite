export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Tech Stack", path: "/tech-stack" },
  { name: "Voices of Trust", path: "/voices-of-trust" },
  { name: "Contact", path: "/contact" },
];

export const SERVICES = [
  {
    id: 1,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your unique business needs and objectives.",
    icon: "Code2",
  },
  {
    id: 2,
    title: "Web Application Development",
    description: "Modern, responsive web applications built with cutting-edge technologies and frameworks.",
    icon: "Globe",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    icon: "Smartphone",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description: "Scalable, secure cloud infrastructure and migration services for your business.",
    icon: "Cloud",
  },
  {
    id: 5,
    title: "RAD Development",
    description: "Rapid Application Development with iterative prototyping and quick delivery of functional software.",
    icon: "Zap",
  },
  {
    id: 6,
    title: "AI Solutions",
    description: "Custom AI and machine learning solutions to automate processes and gain valuable insights from your data.",
    icon: "Brain",
  },
  {
    id: 7,
    title: "Maintenance & Support",
    description: "Ongoing maintenance, updates, and technical support for your software applications.",
    icon: "Wrench",
  },
];

export const COMPANY_VALUES = [
  {
    title: "Quality",
    description: "We prioritize delivering high-quality solutions that drive innovation and efficiency.",
    icon: "Star",
  },
  {
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our business relationships and practices.",
    icon: "Shield",
  },
  {
    title: "Sustainability",
    description: "We develop solutions that promote environmental responsibility and long-term business sustainability.",
    icon: "Leaf",
  },
  {
    title: "Customer Centric",
    description: "We put our clients at the center of everything we do, ensuring their needs and goals are met.",
    icon: "Users",
  }
];

export const PORTFOLIO_ITEMS = [
  {
  id: 1,
  title: "Mr.Kaamwala",
  description: "A low-code appointment booking and management system built using OutSystems, designed for service-based businesses to handle bookings, invoices, and customer data from a centralized dashboard.",
  image:"/img/mrkamwala.jpg",
  techStack: ["OutSystems", "OutSystems Service Studio", "Integrated Database", "Responsive Web UI"],
  category: "Web Application"
},
 {
  id: 2,
  title: "MedZyHQ: Healthcare Career Support",
  description: "MedZyHQ guides international doctors through every challenge—from interview preparation to relocation—ensuring a smooth transition and success in the UK healthcare system.",
  image: "https://images.pexels.com/photos/8376192/pexels-photo-8376192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with actual screenshot if available
  techStack: ["React", "Tailwind CSS", "JavaScript", "Vite", "Responsive Design"],
  category: "Healthcare"
}
,
 {
  id: 3,
  title: "Payvaat – Trekking & Tourism Management App",
  description: "A low-code application built using OutSystems to streamline trekking and tourism operations, including trip scheduling, participant tracking, and guide coordination for tourism companies.",
  image: "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with actual app screenshot if available
  techStack: ["OutSystems", "Integrated Database", "Responsive Web UI"],
  category: "Tourism Management"
},

  {
    id: 4,
    title: "Odd-Jobs",
    description: "A user-friendly platform connecting blue-collar workers with short-term, daily wage, and odd job opportunities nearby,Also An easy-to-use job marketplace for blue-collar workers to find and manage short-term and daily wage jobs efficiently.",
  image: "/img/Bluecollar.jpeg",
    techStack: ["Java(SpringBoot)", "SQL Server", "React Native"],
    category: "Job Platform",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Mr. Sarthak",
    position: "Director, Mr. Kamwala",
    content: "QuoreTex delivered a solution that transformed our patient management processes. Their expertise and commitment helped us save staff time and streamline workflows, resulting in a system that exceeded our expectations."
     // image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    name: "Mr. Gaurav V.",
    position: "Founder, Vaidya Tiles",
    content: "QuoreTex transformed the way we handle our invoices with a smart and reliable management system. Their team understood our challenges, delivered on time, and built a solution that is simple, efficient, and aligned with our business needs. We value their professionalism and commitment, and we see QuoreTex as a long-term partner in our digital growth."
    // image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    name: "Dr. Ashish",
    position: "Director, MedzyHQ",
    content:  "QuoreTex delivered exactly what we envisioned for MedzyHQ — a clean, reliable, and user-friendly platform. Their expertise and timely execution made the entire process seamless."
     // image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  // {
  //   id: 4,
  //   name: "David Chen",
  //   position: "Operations Manager, LogiTrack",
  //   content: "QuoreTex's cloud solution has revolutionized our supply chain operations. The system's reliability and scalability have supported our rapid growth without any performance issues.",
  //   image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  // },
];

export const COMPANY_FEATURES = [
  {
    title: "Experienced Team",
    description: "Our team of seasoned developers and engineers brings decades of combined experience across various industries and technologies.",
    icon: "Users",
  },
  {
    title: "Agile Development",
    description: "We follow agile methodologies to ensure flexibility, transparency, and continuous delivery throughout the development process.",
    icon: "Workflow",
  },
  {
    title: "Cost-effective Solutions",
    description: "We deliver high-quality solutions that provide excellent value and return on investment for your business.",
    icon: "BarChart4",
  },
  {
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to address any issues and ensure your systems run smoothly.",
    icon: "HeadsetHelp",
  },
];

export const COMPANY_INFO = {
  name: "QuoreTex Technologies Pvt. Ltd.",
  addresses: {
    india: {
      label: "Headquarters – India ",
      address: "Tulasi Pearl,\nNear Navnath Mandir, VMV Road,\nAmravati, Maharashtra – 444604"
    },
    uk: {
      label: "Office – United Kingdom ",
      address: "92 Meadowbank Gardens,\nHounslow, London,\nEngland – TW5 9TU"
    }
  },
  email: "info@quore-tex.com",
  phone: "+91 90220 77079",
  socialMedia: {
    // twitter: "https://twitter.com/quoretex",
    linkedin: "https://www.linkedin.com/company/quore-tex-techonologies/",
    // facebook: "https://facebook.com/quoretex",
    instagram: "https://www.instagram.com/quoretextech/?utm_source=ig_web_button_share_sheet",
  },
};