const fs = require('fs');
const path = require('path');

const htmlTemplates = path.resolve(__dirname,'../src');

const create = employees => {
    const html = [];
  
    html.push(...employees
      .filter(employee => employee.getJob() === "Manager")
      .map(manager => addManager(manager))
      .join("")
    );
    html.push(...employees
        .filter(employee => employee.getJob() === "Intern")
        .map(intern => addIntern(intern))
        .join("")
      );
    html.push(...employees
      .filter(employee => employee.getJob() === "Engineer")
      .map(engineer => addEngineer(engineer))
      .join("")
    );
  
    return createSite(html.join(""));
  
  };
  
  const addManager = manager => {
    let template = fs.readFileSync(path.resolve(htmlTemplates, "Manager.html"), "utf8");
    template = addContent(template, "job", manager.getJob());
    template = addContent(template, "name", manager.getName());
    template = addContent(template, "email", manager.getEmail());
    template = addContent(template, "id", manager.getId());
    template = addContent(template, "officeNumber", manager.getOfficeNumber());
    return template;
  };
  
  const addEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(htmlTemplates, "Engineer.html"), "utf8");
    template = addContent(template, "job", engineer.getJob());
    template = addContent(template, "name", engineer.getName());
    template = addContent(template, "email", engineer.getEmail());
    template = addContent(template, "id", engineer.getId());
    template = addContent(template, "github", engineer.getGithub());
    return template;
  };
  
  const addIntern = intern => {
    let template = fs.readFileSync(path.resolve(htmlTemplates, "Intern.html"), "utf8");
    template = addContent(template, "job", intern.getJob());
    template = addContent(template, "name", intern.getName());
    template = addContent(template, "email", intern.getEmail());
    template = addContent(template, "id", intern.getId());
    template = addContent(template, "school", intern.getSchool());
    return template;
  };
  
  const createSite = html => {
    const template = fs.readFileSync(path.resolve(htmlTemplates, "main.html"), "utf8");
    return addContent(template, "team", html);
  };
  
  const addContent = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}");
    return template.replace(pattern, value);
  };
  
  module.exports = create;