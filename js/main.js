
import Home from '../pages/home.js';
import About from '../pages/about.js'

const routes = {
  '/': Home,
  '/about': About,
};

const routesDev = {
  // '/about': '../pages/htmlEntry/about.html',
  '/contact': '../pages/htmlEntry/contact.html'
};

async function router() {
  const app = document.getElementById('app');
  const hash = window.location.hash.replace('#', '') || '/';
  const Page = routes[hash];
  if (Page) {
    app.innerHTML = '';
    app.appendChild(Page());
  } else {
    const route = routesDev[hash]
    const res = await fetch(route || '../404.html');
    const html = await res.text();
    app.innerHTML = html;
  }
}
window.addEventListener('hashchange', router);
window.addEventListener('load', router);




// ROUTING --------------------------------------------------------------
// const routes = {
//   '/': '../pages/htmlEntry/home.html',
//   '/about': '../pages/htmlEntry/about.html',
//   '/contact': '../pages/htmlEntry/contact.html'
// };

// async function router() {
//   const path = window.location.hash.replace('#', '') || '/';
//   const route = routes[path] || '../pages/htmlEntry/404.html'; 

//   try {
//     const res = await fetch(route);
//     const html = await res.text();
//     document.getElementById('app').innerHTML = html;
//   } catch (err) {
//     document.getElementById('app').innerHTML = '<h1>404</h1><p>Page not found</p>';
//     console.error('Error loading page:', err);
//   }

//   highlightActiveLink();
// }

// function highlightActiveLink() {
//   document.querySelectorAll('nav a').forEach(a => {
//     a.classList.remove('active');
//     if (a.getAttribute('href') === window.location.hash) {
//       a.classList.add('active');
//     }
//   });
// }

// window.addEventListener('hashchange', router);
// window.addEventListener('load', router);
