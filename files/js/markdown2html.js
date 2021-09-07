/**
 * Coerce anything into an array
 * @param {*} any 
 */
function arrify(any) {
  return any ? (Array.isArray(any) ? any : [any]) : [];
}

/**
 * Promisify an element's onload callback
 * @param {node} node
 */
function onload(node) {
  return new Promise((resolve, reject) => {
    node.onload = resolve;
    node.onerror = err => reject(err.path ? err.path[0] : err.composedPath()[0]);
  });
}

/**
 * Loads scripts (dependencies) given a list of script urls.
 * @param {*} urls 
 */
function loadScript(urls) {
  urls = arrify(urls);
  return Promise.all(urls.map(item => {
    const [url, ...attrs] = arrify(item);
    const el = document.createElement('script');
    el.src = url;
    el.async = false;
    attrs.forEach(attr => el.setAttribute(attr, ''));
    return onload(document.head.appendChild(el));
  }));
}

function getTagLevel(name) {
  if (name[0].toLowerCase() != 'h') {
      return 0;
  }
  const i = parseInt(name.substr(1));
  if (isNaN(i)) {
      throw 'invalid tag name ' + name;
  }
  return i;
}

function createTableOfContents(container) {
  let container_element = $(container);
  let tag_level = 0;
  $('h1, h2, h3, h4, h5, h6').each((index, header) => {
    const current_tag_level = getTagLevel($(header).prop("tagName"));

    // if this is a sub-heading
    if (current_tag_level > tag_level) {
        const new_container = $("<ul></ul>")
        container_element.append(new_container);
        container_element = new_container;
    }
    // if this is a heading on a parent level, go up to the container's parent.
    else if (current_tag_level < tag_level) {
        container_element = container_element.parent();
    }
    tag_level = current_tag_level;

    const list_entry = $("<li></li>");
    container_element.append(list_entry);

    // set up IDs for header and corresponding TOC element
    const entry_id = $(header).attr('id') || $(header).prop('tagName') + '_' + index;
    $(header).attr('id', entry_id);
    list_entry.attr('id', 'toc_' + entry_id);

    // create link
    const entry_link = $('<a></a>').attr('href', '#' + entry_id);
    list_entry.append(entry_link);

    // set TOC entry content
    entry_link.text($(header).text());
  });
}

function updateTableOfContentsHighlight() {
  const scroll = $(document).scrollTop();
  let highlight_id = null;
  $('h1, h2, h3, h4, h5, h6').each((index, header) => {
    const current_element = header;
    const toc_id = '#toc_' + $(current_element).attr('id');
    const elem_ypos = $(current_element).offset().top;
    if (elem_ypos < scroll + 10) {
        highlight_id = toc_id;
    }
    if ($(toc_id).length > 0) {
      $(toc_id).removeClass('active');
    }
  });
  // only highlight *last* element that is above the window's scroll position.
  if ($(highlight_id).length > 0) {
    $(highlight_id).addClass('active');
  }
}

async function markdown2html(path, options) {
  // process options
  const defaultOptions = {
    contentContainer: 'main',
    includeToc: true,
    includeCss: true,
    onDomReady: () => {},
  };
  const {
    contentContainer,
    includeToc,
    includeCss,
    onDomReady,
  } = { ...defaultOptions, ...options };

  // hide content container until rendering is finished
  document.querySelector(contentContainer).style.visibility = 'hidden';

  // urls of scripts and stylesheets to load
  const markedUrl = 'https://cdn.jsdelivr.net/gh/markedjs/marked@1/marked.min.js';
  const prismUrl = [
    ['https://cdn.jsdelivr.net/gh/PrismJS/prism@1/prism.min.js', 'data-manual'],
    'https://cdn.jsdelivr.net/gh/PrismJS/prism@1/plugins/autoloader/prism-autoloader.min.js'
  ];
  const mathjaxUrl = 'https://cdn.jsdelivr.net/npm/mathjax@3.0.1/es5/tex-mml-chtml.js';
  const jqueryUrl = 'https://code.jquery.com/jquery-3.5.1.slim.min.js';
  const cssUrls = [
    'https://cdn.jsdelivr.net/gh/sindresorhus/github-markdown-css@4/github-markdown.min.css',
    'https://cdn.jsdelivr.net/gh/PrismJS/prism@1/themes/prism.min.css'
  ];

  // load the CSS
  if (includeCss) {
    cssUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';  
      link.type = 'text/css'; 
      link.href = url;
      document.getElementsByTagName('head')[0].appendChild(link);
    });
  }

  // load the scripts
  await Promise.all([
    !!window.marked || loadScript(markedUrl), // markdown parsing and conversion
    !!window.Prism || loadScript(prismUrl), // code block syntax highligting
    !!window.MathJax || loadScript(mathjaxUrl), // latex typesetting
    !!window.jQuery || loadScript(jqueryUrl), // table of contents generation
  ]);

  // generate and insert the html from markdown
  const md = await fetch(path).then(file => file.text());
  const container = document.querySelector(contentContainer);
  if (includeCss) {
    container.classList.add('markdown-body');
  }
  container.innerHTML += window.marked(md);

  // call callback function in case anything is waiting on the DOM to be ready
  await onDomReady();

  // handle code block syntax highlighting
  window.Prism.highlightAllUnder(container);

  // handle LaTeX
  await window.MathJax.typesetPromise();

  // create table of contents
  if (includeToc) {
    const tocContainer = document.createElement('aside');
    tocContainer.id = 'table-of-contents';
    tocContainer.setAttribute('role', 'navigation');
    tocContainer.title = 'Table of Contents';
    container.appendChild(tocContainer);
    createTableOfContents(tocContainer);

    // update highlighted section in table of contents when user scrolls
    $(window).scroll(updateTableOfContentsHighlight);
  }

  // if url has hash, jump to section after everything is loaded
  const hash = document.location.hash;
  if (hash) {
    window.location = window.location.origin + window.location.pathname + hash;
  }

  // set content container to be visible again
  document.querySelector(contentContainer).style.visibility = 'visible';
}

