import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProjectsSection() {
  const [selectedType, setSelectedType] = useState("all");

  const projects = [
    {
      id: 1,
      name: "FarmHomes",
      description:
        "A booking platform making it easy to plan the perfect farm getaway and experience the beauty and simplicity of rural life.",
      images: ["/image1.jpg", "/image2.jpg", "/image3.jpg"],
      type: "web",
    },
    {
      id: 2,
      name: "Project 2",
      description:
        "A brief description of Project 2 and the technologies used.",
      images: ["/image4.jpg", "/image5.jpg", "/image6.jpg"],
      type: "mobile",
    },
    {
      id: 3,
      name: "Project 3",
      description:
        "A brief description of Project 3 and the technologies used.",
      images: ["/image7.jpg", "/image8.jpg", "/image9.jpg"],
      type: "web",
    },
  ];

  const filteredProjects =
    selectedType === "all"
      ? projects
      : projects.filter((project) => project.type === selectedType);

  return (
    <section id="projects" className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Our Projects
        </h2>
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 mx-2 rounded ${
              selectedType === "all"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-800"
            }`}
            onClick={() => setSelectedType("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded ${
              selectedType === "web"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-800"
            }`}
            onClick={() => setSelectedType("web")}
          >
            Web
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded ${
              selectedType === "mobile"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-800"
            }`}
            onClick={() => setSelectedType("mobile")}
          >
            Mobile
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={`/placeholder.svg?height=200&width=400`}
                alt={`Project ${project.name}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">
                  <Link to={`/project/${project.id}`}>
                    View Project Details
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
