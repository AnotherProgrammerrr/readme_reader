function convertMarkdownToHTML(markdown) {
  return marked(markdown);
}

fetch("README.md")
  .then((res) => res.text())
  .then((readmeContent) => {
    document.getElementById("readme-content").innerHTML = convertMarkdownToHTML(readmeContent);
  })
  .catch((e) => console.error(e));
