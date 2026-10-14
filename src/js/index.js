function inject_html(html_to_inject_file, at_element_id) {
    fetch("src/html/" + html_to_inject_file)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load " + html_to_inject_file);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(at_element_id).innerHTML = html;
        })
        .catch(error => console.error(error));
}

function main() {
   inject_html("projects.html", "projects");
}

main();