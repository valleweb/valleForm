# valle-select

> Awesome valle salect Web Component using Polymer 2x

[![Travis CI Status](https://travis-ci.org/valleweb/valle-select.svg?branch=master)](https://travis-ci.org/valleweb/valle-select)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/valleweb/valle-select)

## How to install and use:

1 - Install the element using [Bower](http://bower.io/):

```sh
$ bower install valle-select --save
```

2 -  Import the elements:

```html
<link rel="import" href="bower_components/valle-select/valle-select.html">
<link rel="import" href="bower_components/valle-select/valle-option.html">
```

3 - Start using it!

```html
<valle-select label="Names" helpertext="Choose your name">
  <valle-option value="option 1">Example 1</valle-option>
  <valle-option value="option 2">Example 2</valle-option>
  <valle-option value="option 3">Example 3</valle-option>
</valle-select>
```

## &lt;valle-select&gt;

### Properties

Property      | Type        | Default   | Description
:---          |:---         |:---       |:---
`label`       | *String*    | `""`      | Default label
`disabled`    | *Boolean*   | `false`   | Disabled state
`required`    | *Boolean*   | `false`   | Required validate
`helpertext`  | *String*    | `""`      | Description text for help
`errortext`   | *String*    | `""`      | Error message
`placeholder` | *String*    | `""`      | Default placeholder
`error`       | *Boolean*   | `false`   | Error state
`open`        | *Boolean*   | `false`   | Open state
`autofocus`   | *Boolean*   | `false`   | Default autofocus

### Styling

The following custom properties and mixins are available for styling:

Custom property       | Default                  | Description
:---                  |:---                      |:---
--valle-select-color  | `rgba(5, 159, 183, .87)` | Primary color
--valle-input-width   | `100%`                   | Select width

### API

The following properties are available via javascript:

Property    | Type      | Description
:---        |:---       |:---
value       | `String`  | Selected value
disabled    | `Boolean` | Disabled state
options     | `Array`   | All `valle-options` available
open        | `Boolean` | Open state
error       | `Boolean` | Error state
current     | `Object`  | Selected `valle-options`

## &lt;valle-option&gt;

### Properties

Property   | Type        | Default   | Description
:---       |:---         |:---       |:---
`selected` | *Boolean*   | `false`   | Selected state
`value`    | *String*    | `""`      | Default value

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

Go to [localhost:8080/components/valle-select/](http://localhost:8080/components/valle-select/)


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

Find on our [issues](https://github.com/valleweb/valle-select/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/valleweb/valle-select/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/valleweb/valle-select/releases) for detailed changelog.

## License

[MIT License](https://github.com/valleweb/valle-select/blob/master/LICENSE.md) © [valleweb](https://github.com/orgs/valleweb/people)
