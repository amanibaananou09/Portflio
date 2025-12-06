import { Code2, Database, Zap, GitBranch, Box, TestTube } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code2,
      skills: ["Java", "Spring Boot", "React.js", "TypeScript", "Angular", "Node.js", "Hibernate"],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "Oracle", "Liquibase", "NoSQL"],
      color: "from-teal-500 to-teal-600",
    },
    {
      title: "Data Science & ML",
      icon: Zap,
      skills: ["NumPy", "Pandas", "Scikit-learn", "OpenCV", "TensorFlow", "Keras", "CNN", "GAN"],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "DevOps & Tools",
      icon: GitBranch,
      skills: ["Git", "Bitbucket", "Docker", "CI/CD Pipelines", "Bitbucket Pipelines"],
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "API & Integration",
      icon: Box,
      skills: ["REST", "SOAP", "OAuth2", "Swagger/OpenAPI", "Keycloak"],
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Testing & Methodologies",
      icon: TestTube,
      skills: ["JUnit", "Jest", "Jira", "Agile", "Scrum", "Clean Code"],
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-50 dark:bg-slate-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-4 animate-fadeInUp">MY TOOLKIT</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fadeInUp animation-delay-100">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full" />
        </div>

        {/* Skill Boxes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white/80 dark:bg-slate-800/90 backdrop-blur-lg rounded-2xl border border-gray-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:border-blue-500/50 dark:hover:border-blue-400/50"
              >
                <div className={`inline-block p-3 bg-gradient-to-br ${category.color} rounded-xl text-white mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-white to-gray-50 dark:from-slate-700 dark:to-slate-600 text-gray-800 dark:text-gray-300 text-sm font-semibold rounded-full border border-gray-300 dark:border-slate-600 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-300 cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 p-10 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 rounded-2xl text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="grid md:grid-cols-3 gap-8 text-center relative z-10">
            <div className="hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">2+</div>
              <p className="text-blue-100">Years of Experience</p>
            </div>
            <div className="hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">12+</div>
              <p className="text-blue-100">Business Modules</p>
            </div>
            <div className="hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">5+</div>
              <p className="text-blue-100">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
