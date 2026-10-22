function inject_html(html_name_element_id) {
    const html_to_inject_file = "src/html/" + html_name_element_id + ".html";
    const at_element_id = html_name_element_id;

    return fetch(html_to_inject_file)
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


function format_single_tag(item_tag_string) {
    const item_tag_html = `
        <div class="tag">
            ${item_tag_string}
        </div>
    `;

    return item_tag_html;
}


function format_all_tags() {
    const divs = document.querySelectorAll(".xTags");

    divs.forEach((main_tag_div) => {
        const tags = main_tag_div.textContent.split(",");
        const tags_composite = tags
            .map((tag) => format_single_tag(tag))
            .join("");
        main_tag_div.innerHTML = tags_composite
    });
}



function main() {
    inject_html("xProjects").then(format_all_tags);
}

main();