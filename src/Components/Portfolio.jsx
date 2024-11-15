/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Quiz App",
    description:
      "An interactive Quiz App using HTML, CSS, and JavaScript, featuring multiple-choice questions, instant scoring, and a clean, responsive design. Challenge yourself and track your progress!",
    url: "https://github.com/sakshijagdale/Quiz-App",
  },
  {
    title: "To-Do List",
    description:
      "A fully functional To-Do List app built with HTML, CSS, and JavaScript, designed to help users manage their tasks effectively. Features include adding tasks with a single click, editing existing tasks, marking tasks as complete, and deleting tasks when no longer needed. The app provides a simple, clean interface and is responsive, making it accessible on any device. It's a practical tool to stay organized and improve productivity in daily life.",
    url: "https://github.com/sakshijagdale/To-Do-List",
  },
  {
    title: "Portfolio",
    description:
      "A responsive and dynamic portfolio built with React, HTML, CSS, and JavaScript, showcasing my skills, projects, and experience in web development. The portfolio highlights my expertise in creating interactive and user-friendly applications, with smooth navigation and clean design. Explore my work, learn about my journey, and connect with me for collaborations or opportunities!",
    url: "https://github.com/sakshijagdale/Portfolio",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
