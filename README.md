# Drupal and GatsbyJS project

## Sourcing Gatsby from drupal

1. open gatsbysite/gatsby-config.js
2. change base url 
```
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://path-to-your.site`,
      },
    },
```
3. Make sure that JSON Api module is installed for the Drupal site.

## Strating up your Gatsby site

Go to [ROOT]/gatsbysite/
```sh
gatsby develop
```
