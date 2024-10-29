import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    name: "FarmHomes",
    description:
      "A booking platform making it easy to plan the perfect farm getaway and experience the beauty and simplicity of rural life.",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg"],
  },
  {
    id: 2,
    name: "Project 2",
    description: "A brief description of Project 2 and the technologies used.",
    images: ["/image4.jpg", "/image5.jpg", "/image6.jpg"],
  },
  {
    id: 3,
    name: "Project 3",
    description: "A brief description of Project 3 and the technologies used.",
    images: ["/image7.jpg", "/image8.jpg", "/image9.jpg"],
  },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % project.images.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [project.images.length]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        {project.name}
      </h2>
      <p className="text-center text-gray-700 mb-8">{project.description}</p>
      <div className="flex justify-center">
        <img
          src={project.images[currentImageIndex]}
          alt={`Project ${project.name}`}
          className="w-full max-w-2xl h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
