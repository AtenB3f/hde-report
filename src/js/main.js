async function fetchHtmlAsText(url) {
  return await (await fetch(url)).text();
}

async function importPage(target) {
  console(target);
  document.querySelector('#' + target).innerHTML = await fetchHtmlAsText(
    target + '.html'
  );
}

function loadPage(target) {}
