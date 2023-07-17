function convertMarkdownToHTML(markdown) {
  return marked(markdown);
}

fetch("readme.md")
  .then((res) => res.text())
  .then((readmeContent) => {
    document.getElementById("readme-content").innerHTML = convertMarkdownToHTML(readmeContent);
  })
  .catch((e) => console.error(e));