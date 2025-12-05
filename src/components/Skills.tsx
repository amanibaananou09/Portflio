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
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-lg mb-4">MY TOOLKIT</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto" />
        </div>

        {/* Skill Boxes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all"
              >
                <div className={`inline-block p-3 bg-gradient-to-br ${category.color} rounded-lg text-white mb-5`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white dark:bg-slate-700 text-gray-800 dark:text-gray-300 text-sm font-semibold rounded-full border border-gray-300 dark:border-slate-600 hover:border-blue-600 hover:text-blue-600 transition-colors"
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
        <div className="mt-16 p-10 bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl text-white shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">2+</div>
              <p className="text-blue-100">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12+</div>
              <p className="text-blue-100">Business Modules</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <p className="text-blue-100">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
