# valle-fab

> Awesome valle material design: [Floating Action Button](https://material.io/guidelines/components/buttons-floating-action-button.html) (FAB).

[![Travis CI Status](https://travis-ci.org/valleweb/valle-fab.svg?branch=master)](https://travis-ci.org/valleweb/valle-fab)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/valleweb/valle-fab)

## How to install and use:

1 - Install the element using [Bower](http://bower.io/):

```sh
$ bower install valle-fab --save
```

2 -  Import the element:

```html
<link rel="import" href="bower_components/valle-fab/valle-fab.html">
```

3 - Start using it!

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="valle-fab.html">
    <style is="custom-style">
      valle-fab[icon] {
        --valle-fab-color: #ffeb00;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<valle-fab></valle-fab>
<valle-fab disabled></valle-fab>
<valle-fab mini></valle-fab>
<valle-fab toggle></valle-fab>
<valle-fab
  icon="https://uploaddeimagens.com.br/images/001/071/867/full/iconmonstr-fast-food-3-32.png">
</valle-fab>
```

## Properties

Property    | Type      | Default | Description
:---        |:---       |:---     |:---
`icon`      | *String*  | `''`    | Icon url
`mini`      | *Boolean* | `false` | Allow mini size
`disabled`  | *Boolean* | `false` | Allow disabled state
`elevation` | *Number*  | `1`     | Add material design elevation level (1-5)
`label`     | *String*  | `''`    | Label for screen readers
`toggle`    | *Boolean* | `false` | Allow toggle mode
`pressed`   | *Boolean* | `false` | Set the pressed state (toggled)
`sloted`    | *Boolean* | `false` | Allow inline icon (slot)

## Styling

The following custom properties and mixins are available for styling:

Custom property                     | Default | Description
:---                                |:---     |:---
--valle-fab-color              | #ff6d00 | Button background color
--valle-fab-size               | 56px    | Button size (width and height)
--valle-fab-mini-size          | 40px    | Button mini size (width and height)
--valle-fab-icon-size          | 24px    | Icon size (width and height)
--valle-fab-default-icon-color | #ffffff | Default icon background color
--valle-fab-pressed-coulor     | #ff0101 | Pressed button background color (toggle)

## Browser Support

Using the [webcomponents.js](https://github.com/WebComponents/webcomponentsjs):

 ![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/chrome/chrome_48x48.png) | ![Opera](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/opera/opera_48x48.png) | ![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/firefox/firefox_48x48.png) | ![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/safari/safari_48x48.png) |![IE](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |  ![Edge](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.2.2/edge/edge_48x48.png) |
:---: | :---: | :---: | :---: | :---: | :---: |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11+ | Latest ✔

## Development

1 - Install [Bower](http://bower.io/) & [Polymer-CLI](https://www.polymer-project.org/1.0/docs/tools/polymer-cli):

```sh
$ [sudo] yarn global add bower polymer-cli
```

2 - Install local dependencies:

```sh
$ bower install
```

3 - Start the development server:

```sh
$ polymer serve
```

Go to [localhost:8080/components/valle-fab/](http://localhost:8080/components/valle-fab/)


## Tests

#### Linting

Linting with eslint:

```sh
$ [sudo] yarn global add eslint
$ [sudo] yarn global add eslint-plugin-html

$ eslint *.html
```

Linting with polylint:

```sh
$ polymer lint
```

#### Unit tests

Install the Web Component Tester (WCT) test runner:

```sh
$ [sudo] yarn global add web-component-tester
```

Run tests:

```sh
$ wct
```

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/valleweb/valle-fab/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/valleweb/valle-fab/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/valleweb/valle-fab/releases) for detailed changelog.

## License

[MIT License](https://github.com/valleweb/valle-fab/blob/master/LICENSE.md) © [valleweb](https://github.com/orgs/valleweb/people)
