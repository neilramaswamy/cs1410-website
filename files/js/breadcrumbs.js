/**
 * The purpose of this script is to automatically generate breadcrumbs from
 * the url of the webpage that the script is run in.
 * 
 * There are a few 'hacks' to get the location of the website root directory. 
 * These hacks are necessary for the script to work no matter if the document
 * location origin is the same as the root website directory or not (e.g.
 * GitHub Pages deployments can have the repo name in the url).
 * 
 * The key assumption made in this script is that it is run on a webpage using
 * something like the following script tag:
 * 
 * <script src="../../js/breadcrumbs.js"></script>
 * 
 * The script thus assumes that `../../` is the location of the website's root
 * directory, and that `js/breadcrumbs.js` is the location of this script with
 * respect to the root directory. This means that this script will break if
 * it is not in `js/breadcrumbs.js` or if the string path before `js/` is not
 * the website's root directory.
 */
(function() {
  // this is a hack to see how "far" the document is from the root directory
  const scriptPath = document
    .querySelector('script[src$="breadcrumbs.js"]')
    .getAttribute('src');
  
  // assume that breadcrumbs.js is in the 'js' directory
  const rootPath = scriptPath.substring(0, scriptPath.indexOf('js'));
  const levelsAwayFromRoot = (rootPath.match(/\.\./g) || []).length;

  // parse the parts of the url that we care about
  let pathParts = window.location.pathname.split('/').filter(x => !!x);
  pathParts = pathParts.slice(-levelsAwayFromRoot); // ignore parts before root

  // create breadcrumbs html
  let breadcrumbs = pathParts.reduce((acc, cur, i, arr) => {
    const isLastPart = i + 1 === arr.length;

    // link is essentially (root) + (path parts before cur) + (cur)
    const link = rootPath + arr.slice(0, i).map(x => x + '/').join('') + cur;

    // create the text that is actually shown in the breadcrumbs
    let name = cur;
    if (isLastPart) {
      // last link in breadcrumbs is the page itself, so we can just use title
      name = document.title;
    } else {
      // replace '_' and '-' with spaces
      name = name.replace(/[_-]/g, ' ');

      // capitalize words in name
      name = name.replace(/\w\S*/g, w => {
        return w.replace(/^\w/, c => c.toUpperCase());
      });
    }

    const breadcrumb = isLastPart
      ? `<li><a href="${link}" aria-current="page">${name}</a></li>`
      : `<li><a href="${link}">${name}</a></li>`;

    return `${acc}\n${breadcrumb}`;
  }, `<li><a href="${rootPath}">Home</a></li>`);
  breadcrumbs = `
    <a class="sr-only nav-skip" href="#nav-end">
      Skip to main content
    </a>
    <nav class="breadcrumbs" aria-label="Breadcrumb" role="navigation">
      <ol>${breadcrumbs}</ol>
    </nav>
    <div id="nav-end"></div>
  `;

  // draw breadcrumbs after `main` element has been added to DOM
  setTimeout(() => {
    document.querySelector('main').innerHTML += breadcrumbs;
  }, 0); // timeout is 0 because event loop takes care of timing
})();
