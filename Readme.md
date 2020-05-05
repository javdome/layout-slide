# Layout-Slide
This is a template for the creation of slides with vertical displacement.

It only includes the size of the slides (full width and height of the browser) and the transitions beetwen the slides.

In order to change the slide (next or previous) it can be used:
* The arrows in the bottom right.
* Swipe up or down in touchscreens.

Each slide must be created using `<section>` tags in the _index.html_ file.

This boilerplate does not includes any style, but **Tailwindcss** is already instaled (and **PurgeCSS** for the production bundling), so the user can style each slide that has created.

## Installation

Clone the repository.

```javascript
npm install
```

It has been used **Laravel-mix** as bundler, so you can use:

```javascript
npm run prod
```
For build the _dist_ folder.

For fast bundling, during development use: 
```javascript
npm run watch
```
