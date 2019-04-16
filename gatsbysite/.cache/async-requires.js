// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/home/al/www/lando/drupal-gatsby/gatsbysite/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/home/al/www/lando/drupal-gatsby/gatsbysite/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/home/al/www/lando/drupal-gatsby/gatsbysite/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("/home/al/www/lando/drupal-gatsby/gatsbysite/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/al/www/lando/drupal-gatsby/gatsbysite/.cache/data.json")

