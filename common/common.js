/* header footer 공통 */
async function loadHTML(id, file) {
    const response = await fetch(file);
    const content = await response.text();
    document.getElementById(id).innerHTML = content;
}

loadHTML('header', '../common/header.html');
loadHTML('footer', '../common/footer.html');
