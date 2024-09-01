import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Computer Science Basics",
  description:
    "A basic explanation of the CS basics for those who haven't gone to college.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Feedback", link: "https://t.me/javad_yakuzaa" },
    ],
    sidebar: [
      { text: "Introduction", link: "/src/intro" },
      {
        text: "General Concepts",
        collapsed: false,
        items: [
          { text: "Operating Systems", link: "/src/General/os" },
          {
            text: "Compilers and Interpreters",
            link: "/src/General/compilers_and_interpreters",
          },
          { text: "Memory", link: "/src/General/memories" },
          { text: "Memory Management", link: "/src/General/memory_management" },
          { text: "Database Systems", link: "/src/General/database_systems" },
          {
            text: "high performance compting",
            link: "/src/General/high_performance_computing",
          },
          {
            text: "System Programming",
            link: "/src/General/system_programming",
          },
        ],
      },
      {
        text: "Distributed Systems",
        collapsed: false,
        items: [
          {
            text: "Distributed Systems",
            link: "/src/DistributedSystems/distributed_systems",
          },
          {
            text: "Distributed Computing",
            link: "/src/DistributedSystems/distributed_computing",
          },
          {
            text: "Distributed Networks",
            link: "/src/DistributedSystems/distributed_networking",
          },
        ],
      },
      {
        text: "Data Structure and ALgorithms ",
        collapsed: false,
        items: [
          {
            text: "Data Structures",
            link: "/src/DataStructuresAndAlgorithms/data_structures",
          },
          {
            text: "Algorithms",
            link: "/src/DataStructuresAndAlgorithms/algorithms",
          },
        ],
      },
      {
        text: "Design Patterns",
        collapsed: false,
        link: "/src/DesignPatterns/intro",

        items: [
          {
            text: "Creational",
            collapsed: false,
            items: [
              {
                text: "Singleton",
                link: "/src/DesignPatterns/Creational/Singleton",
              },
              {
                text: "Prototype",
                link: "/src/DesignPatterns/Creational/Prototype",
              },
              {
                text: "Builder",
                link: "/src/DesignPatterns/Creational/Builder",
              },
              {
                text: "Factory",
                link: "/src/DesignPatterns/Creational/Factory",
              },
            ],
            
          },
          {
            text: "Structural",
            collapsed: false,
            items: [
              {
                text: "Facade",
                link: "/src/DesignPatterns/Structural/Facade",
              },
              {
                text: "Proxy",
                link: "/src/DesignPatterns/Structural/Proxy",
              },
            ],
            
          },
          {
            text: "Behavioral",
            collapsed: false,
            items: [
              {
                text: "iterator",
                link: "/src/DesignPatterns/Behavioral/Iterator",
              },
            ],
            
          },

        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Javadyakuza/ComputerScienceBasics",
      },
    ],
  },
});
