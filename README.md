# Angular Gulp Boilerplate

Clean Angular 1.6 boilerplate with basic Gulp tasks designed to automate your daily development routine such as
templates, scripts, styles and translations concatenation, uglification and minimisation.

As a result your entire Angular project will be compiled to five files (`index.html`, `app.js` and `vendor.js`,
`app.css` and `vendor.css`), translations files and source maps if needed.

## What you will get?

![Angular](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/angular.png)
![npm](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/npm.png)
![Gulp](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/gulp.png)
![Bower](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/bower.png)
![SASS](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/sass.png)
![ESLint](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/eslint.png)
![Browsersync](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/browsersync.png)
![Normalize](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/normalize.png)
![Autoprefixer](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/autoprefixer.png)
![UI-Router](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/ui-router.png)
![angular-translate](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/angular-translate.png)

**Angular 1.6** with **UI-Router** and **angular-translate**, automated services injecting by **ng-annotate**, gathering
HTML templates into **$templateCache** and making **source maps** for debug.

**SASS** compiler with **Autoprefixer** and making source maps for development and production versions,
**Normalize.css**.

**ESLint** with Angular plugin for code linting.

**Bower** and **Wiredep** for automated injecting vendor dependencies.

**Browsersync** for comfortable development and live reloading.

HTML, JS and CSS concatenation, uglification, minimisation and adding hash like app-**442e02212b**.js to avoid caching
for production version.

Dynamic internationalization and localization with translation files separated by the components. Gulp tasks can help
you with translation files concatenation that will be used dynamically by **angular-translate**. **angular-i18n** and
**angular-dynamic-locale** implements native dynamic Angular localization.

## Quick start

### Dependencies

Boilerplate needs `npm` and `bower` to work. For running gulp tasks from command line, install it globally:

```sh
npm install -g gulp-cli bower
```

### Install

Clone repository from GitHub:

```sh
git clone https://github.com/angusm73/Web-Starter-Pack.git NewProject
```

Jump into `NewProject` directory and install `npm` + `bower` dependencies:

```sh
cd NewProject
npm install && bower install
```

And that's it! Now, you can use gulp task to check if everything is awesome:

```sh
gulp serve
```

Your default browser will be launched at `http://localhost:3000` serving your project.

## Gulp tasks

### General

* `gulp default` - Clean used directories and build production version ready to deploy.
* `gulp serve` - Build project, start watching for all changes and serve it using Browsersync.

### Other

* `gulp build` - Build production version ready to deploy.
* `gulp build-app` - Build production version of app only, without assets.
* `gulp clean` - Clean distribution and temporary directories.
* `gulp fonts` - Copy and flatten fonts from Bower packages to distribution dir.
* `gulp inject` - Inject scripts and styles into HTML entry.
* `gulp inject:reload` - Start `inject` task and launch Browsersync reloading after.
* `gulp locales` - Build locales.
* `gulp locales-angular` - Build Angular locales only.
* `gulp locales-angular:dist` - Build Angular locales only to distribution dir.
* `gulp locales:dist` - Build locales to distribution dir.
* `gulp locales:watch` - Build locales and watch for changes.
* `gulp other` - Copy various not handled stuff to distribution dir.
* `gulp partials` - Create template cache from HTML partials.
* `gulp scripts` - Build scripts.
* `gulp scripts:watch` - Build scripts and watch for changes.
* `gulp serve:dist` - Build production version and serve it using Browsersync.
* `gulp styles` - Build styles.
* `gulp styles:watch` - Build styles and watch for changes.
* `gulp watch` - Build project and watch for all changes.
