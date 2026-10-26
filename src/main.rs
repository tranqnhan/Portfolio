use askama::Template; 

mod projects;

#[derive(Template)] 
#[template(path = "index.html")]                         
struct IndexTemplate {
    projects_html: String,
}


fn main() {
    let projects = projects::ProjectsTemplate::new();

    let index = IndexTemplate { projects_html: projects.generate() };

    std::fs::write("index.html", index.render().unwrap())
        .expect("Unable to write to index.html");
}