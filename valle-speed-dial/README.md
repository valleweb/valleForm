# valle-speed-dial

> Awesome valle FAB with Speed Dial

[![Travis CI Status](https://travis-ci.org/valleweb/valle-speed-dial.svg?branch=master)](https://travis-ci.org/valleweb/valle-speed-dial)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/valleweb/valle-speed-dial)

## How to install and use:

1 - Install the element using [Bower](http://bower.io/):

```sh
$ bower install valle-speed-dial --save
```

2 -  Import the elements:

```html
<link rel="import" href="bower_components/valle-speed-dial/valle-speed-dial.html">
<link rel="import" href="bower_components/valle-speed-dial/valle-speed-dial-action.html">
```

3 - Start using it!

<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="valle-speed-dial.html">
    <link rel="import" href="valle-speed-dial-action.html">
    <style is="custom-style">
      valle-speed-dial-action {
        --valle-speed-dial-action-fab-color: #d4f442;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->

```html
<valle-speed-dial backdrop>
  <valle-speed-dial-action label="copy" label-direction="left"></valle-speed-dial-action>
  <valle-speed-dial-action label="print" label-direction="left"></valle-speed-dial-action>
</valle-speed-dial>
```

## `<valle-speed-dial>`

### Properties

Property    | Type        | Default   | Description
:---        |:---         |:---       |:---
`direction` | *String*    | `up`      | Speed Dial direction (up / down / left / right)
`backdrop`  | *Boolean*   | `false`   | Allow backdrop effect
`label`     | *String*    | `''`      | Label for screen readers
`icon`      | *String*    | `''`      | Custom icon url

### Styling

The following custom properties and mixins are available for styling:

Custom property                         | Default        | Description
:---                                    |:---            |:---
--valle-speed-dial-fab-color          | #00b0ba        | Toggle button background color
--valle-speed-dial-pressed-color      | #00676d        | Toggle button background color (Pressed)
--valle-speed-dial-default-icon-color | #ffffff        | Toggle button default icon color
--valle-speed-dial-backdrop-color     | rgba(0,0,0,.8) | Backdrop color

## `<valle-speed-dial-action>`

### Properties

Property          | Type        | Default   | Description
:---              |:---         |:---       |:---
`label-direction` | *String*    | `''`      | Allow floating label (left / right)
`label`           | *String*    | `''`      | Text for  floating label and screen readers
`icon`            | *String*    | `''`      | Custom icon url
`sloted`          | *Boolean*   | `false`   | Allow inline icon (slot)

### Styling

The following custom properties and mixins are available for styling:

Custom property                                | Default  | Description
:---                                           |:---      |:---
--valle-speed-dial-action-fab-color          | #00b0ba  | Mini button background color
--valle-speed-dial-action-default-icon-color | #ffffff  | Mini button default icon color
--valle-speed-dial-action-label-bg-color     | #f5f5f5  | Float label background color
--valle-speed-dial-action-label-text-color   | #000000  | Float label text color
--valle-speed-dial-action-label              | {}       | Float label `@apply` mixin

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

Go to [localhost:8080/components/valle-speed-dial/](http://localhost:8080/components/valle-speed-dial/)


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

Find on our [issues](https://github.com/valleweb/valle-speed-dial/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/valleweb/valle-speed-dial/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/valleweb/valle-speed-dial/releases) for detailed changelog.

## License

[MIT License](https://github.com/valleweb/valle-speed-dial/blob/master/LICENSE.md) © [valleweb](https://github.com/orgs/valleweb/people)
