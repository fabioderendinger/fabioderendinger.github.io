# Project 1: Build a Personal Site
### by Fabio Derendinger

Personal Site project, part of the Udacity [Full Stack Web Developer
Nanodegree](https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004).

## Demo

For a demo, check out <https://fabioderendinger.github.io>

## What it is and does

The goal of the project was to build a personal portfolio website. Udacity provides its students a [design mockup](https://storage.googleapis.com/supplemental_media/udacityu/2655898586/design-mockup-portfolio.pdf) which should be replicated.

I decided to significantly enrich the design and content defined as minimal requirement by Udacity. To be able to also use the site as a personal blog I integrated Jekyll. The site structure has been copied from [Jekyll Now](https://github.com/barryclark/jekyll-now). The individual html, css and js files, however, are all custom made (except for the html files in the _includes folder).

## Project contents

In it's core, the project consists of the following files/folders:

* index.html - landing page of the portfolio site
* css folder - contains materialize framework files and custom css files (style.css & jekyll_style.css)
* js folder - contains materialize framework files and custom js files (functions.css & jekyll_functions.js)
* images folder - contains the images for the landing page
* blog folder - contains the index.html file that renders a page listing all blog posts
* _config.yml - parameter configuration for Jekyll
* _layouts folder - contains custom Jekyll layouts designed for my portfolio site
* _posts - conains all posts which have been published on my site
* _assets - contains images used in posts
* _includes - Jekyll snippets (from [Jekyll Now](https://github.com/barryclark/jekyll-now))

## How to add a new blog post

My personal portfolio site uses [Jekyll](https://jekyllrb.com/) to manage blog posts conveniently. To add a new blog post simply create a new md-file in the folder _posts and follow the naming convention "year-month-day-post-title.md".

Use markdown language to write the content you the blog post.

Once saved, the blog post will automatically be available under https://fabioderendinger.github.io/post-title.

## Extra Credit Description

The following features were implemented to gain an extra credit from Udacity:

* Richer design and content compared to the [design mockup](https://storage.googleapis.com/supplemental_media/udacityu/2655898586/design-mockup-portfolio.pdf) provided by Udacity.
* Integration of Jekyll to handle blogging

## Miscellaneous

This README document is based on a template suggested by PhilipCoach in this
Udacity forum [post](https://discussions.udacity.com/t/readme-files-in-project-1/23524).


## Credits

- [Jekyll Now](https://github.com/barryclark/jekyll-now)