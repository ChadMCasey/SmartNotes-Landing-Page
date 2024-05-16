const logos = [
  new URL("../assets/LogoBanner/logo1.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo2.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo1.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo3.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo4.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo2.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo4.svg", import.meta.url).href,
  new URL("../assets/LogoBanner/logo3.svg", import.meta.url).href,
];

const features = [
  {
    gridArea: "tl",
    image: new URL("../assets/features/thumbs-up.svg", import.meta.url).href,
    heading: "Cross-Platform Accessibility",
    description: `Whether you're on your desktop, tablet, or smartphone, 
                  SmartNotes is accessible across all devices. Work seamlessly 
                  on the go and never miss a beat.`,
  },
  {
    gridArea: "tr",
    image: new URL("../assets/features/globe.svg", import.meta.url).href,
    heading: "Customizable Templates",
    description: `Create custom templates for your recurring tasks or projects to save time and ensure consistency. Tailor SmartNotes to fit your unique workflow and preferences.`,
  },
  {
    gridArea: "bl",
    image: new URL("../assets/features/flag.svg", import.meta.url).href,
    heading: "Secure Cloud Storage",
    description: `Rest easy knowing that your notes are securely stored in the cloud. Access your information from any device, anytime, without worrying about losing important data.`,
  },
  {
    gridArea: "blm",
    image: new URL("../assets/features/graphic-circle.svg", import.meta.url)
      .href,
    heading: "Real-Time Collaboration",
    description: `Collaborate seamlessly with your team members or classmates in real-time on shared notes and projects.`,
  },
  {
    gridArea: "brm",
    image: new URL("../assets/features/hash.svg", import.meta.url).href,
    heading: "AI-Powered Organization",
    description:
      "Our AI-powered organization feature categorizes and prioritizes your notes, making it easy to find what you need when you need it.",
  },
  {
    gridArea: "br",
    image: new URL("../assets/features/branch.svg", import.meta.url).href,
    heading: "Integrations",
    description:
      "Connect SmartNotes with your favorite productivity tools like Google Drive, Trello, and Slack. Streamline your workflow by syncing data across platforms and enhancing collaboration.",
  },
];

export { logos, features };
