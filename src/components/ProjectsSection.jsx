import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Multi-tenant SaaS",
    description: "A comprehensive multi-tenant SaaS platform with tenant isolation, role-based access control, and scalable architecture for enterprise applications.",
    image: "https://picsum.photos/500/300?random=1",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/Yash913212/Multi-tenant-saas",
  },
  {
    id: 2,
    title: "Oryx",
    description:
      "A powerful data processing and analytics platform with real-time insights, interactive dashboards, and advanced data visualization capabilities.",
    image: "https://picsum.photos/500/300?random=2",
    tags: ["React", "TypeScript", "D3.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/sanjaysahoo21/Oryx",
  },
  {
    id: 3,
    title: "Async Payment Gateway",
    description:
      "A robust asynchronous payment processing gateway with webhook support, transaction management, and secure PCI-compliant payment handling.",
    image: "https://picsum.photos/500/300?random=3",
    tags: ["Node.js", "Express", "Stripe API"],
    demoUrl: "#",
    githubUrl: "https://github.com/Yash913212/Async-payment-gateway",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover opacity-0 animate-scale-pop"
              style={{ animationDelay: `${key * 0.15}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
