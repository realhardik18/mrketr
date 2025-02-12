'use client'
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const projects = [
    {
      name: "Faithly",
      description: "An app that helps users improve their posture and track height-related goals.",
      url: "https://apps.apple.com/us/app/faithly-bible-chat/id6737165110",
    },
    {
      name: "LockedIn",
      description: "AI-powered analysis tool for optimizing fitness and diet plans.",
      url: "https://apps.apple.com/us/app/lockedin-screen-time-focus/id6466096636",
    },
    {
      name: "TestMax AI",
      description: "",
      url: "#",
    },
    {
      name: "Clip Pay",
      description: "",
      url: "#",
    },  
    {
      name: "Viral Gen",
      description: "",
      url: "#",
    }
  ];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-10">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="text-gray-400 mt-2">Our projects</p>
      <div className="w-full max-w-2xl mt-6">
        {projects.map((project, index) => (
          <div key={index} className="border-b border-gray-700 py-4 flex justify-between items-center">
            <span className="text-lg font-medium flex items-center">
              {project.name}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-gray-400 hover:text-white transition"
              >
                <FiExternalLink size={16} />
              </a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
