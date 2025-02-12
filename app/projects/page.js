'use client'
import { useState } from "react";

const projects = [
  {
    name: "Faithly",
    description: "An app that helps users improve their posture and track height-related goals.",
    url: "#",
  },
  {
    name: "LockedIn",
    description: "AI-powered analysis tool for optimizing fitness and diet plans.",
    url: "#",
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
            <span className="text-lg font-medium">{project.name}</span>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-800 text-gray-300 px-3 py-1 text-sm rounded hover:bg-gray-600 transition"
            >
              Visit
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
