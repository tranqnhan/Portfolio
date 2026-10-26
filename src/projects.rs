use askama::Template; 
use serde::Deserialize;

#[derive(Deserialize)]
struct Project {
    name: String,
    description: String,
    tags: Vec<String>,
    demo: String
}


#[derive(Template)] 
#[template(path = "projects.html")]                         
pub struct ProjectsTemplate {
    projects: Vec<Project>
}


impl ProjectsTemplate {
    pub fn new () -> Self {
        let projects_json = std::fs::read_to_string("data/projects.json").unwrap();
        let projects: Vec<Project> = serde_json::from_str(&projects_json).unwrap();

        Self {
            projects: projects
        }
    }

    pub fn generate(&self) -> String {
        self.render().unwrap()
    }
}