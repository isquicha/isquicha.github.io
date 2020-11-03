const get_page_section = (page) => {
    const text = page.querySelector("a").innerHTML.toLowerCase();
    const section = document.querySelector("#" + text);

    return section;
}
const change_page = (to_page) => {
    const section = get_page_section(to_page);
    to_page.classList.add("current_page_item");
    section.classList.remove("hide");
}

const remove_active_page = (pages) => {
    for (const page of pages) {
        page.classList.remove("current_page_item");
    }
}

const hide_pages = (pages) => {
    for (const page of pages) {
        const section = get_page_section(page);
        console.log(section)
        section.classList.add("hide");
    }
}

window.onload = () => {
    const pages = document.querySelectorAll("#menu li");
    for (const page of pages) {
        page.onclick = (event) => {
            event.preventDefault();
            remove_active_page(pages);
            hide_pages(pages);
            change_page(page);
        }
    }
}