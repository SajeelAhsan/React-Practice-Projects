import React from "react";

function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="../src/data/sajeel.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      👋 About Me
Hi there! I'm a passionate Full Stack Developer and DevOps Engineer with a knack for crafting scalable, efficient, and user-friendly solutions.

With expertise in both front-end and back-end development, I create seamless web applications that look great and perform even better. My skills span across frameworks like React, Angular, and Vue on the front-end, and Node.js, Python (Django/Flask), and Java on the back-end.

As a DevOps enthusiast, I thrive on streamlining workflows and enhancing deployment pipelines. I have hands-on experience with tools like Docker, Kubernetes, Jenkins, and AWS, ensuring smooth CI/CD processes and high-availability architectures.

🔧 What I Bring to the Table

End-to-end development of robust, responsive web applications.
Deployment and infrastructure automation with cutting-edge DevOps tools.
Problem-solving mindset to tackle complex challenges.
A collaborative approach to teamwork and a commitment to delivering high-quality solutions.
                      </p>
                      <p className="mt-4 text-gray-600">
                      🌟 My Philosophy
I believe technology should empower and inspire. Whether it's a sleek front-end design, a secure API, or a reliable cloud setup, my goal is to blend innovation with functionality to bring ideas to life.

💻 Let’s Connect
If you're looking for a dynamic developer to join your team, collaborate on a project, or discuss exciting tech trends, feel free to reach out. Let’s build something amazing together!


                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
export default About;