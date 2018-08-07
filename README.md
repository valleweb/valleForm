# Valle form
[![Build Status](https://travis-ci.org/lyef/valleForm.svg?branch=master)](https://travis-ci.org/lyef/valleForm)
![Badge size](https://badge-size.herokuapp.com/lyef/valleForm/master/dist/Main.min.js.svg)
![Badge gzip size](https://badge-size.herokuapp.com/lyef/valleForm/master/dist/Main.min.js.svg?compression=gzip)

## Demo

[Live examples](https://lyef.github.io/valleForm)

## Installation

```sh
$ npm install --save valleForm
```

*Remember to import the styles on `css/main.css` folder to your project.*

## Basic Usage

```jsx
import valleForm from 'valleForm';

...
render() {
    return (
        <valleForm />
    );
}
...
```

## Props

- `rows` (array) - All form rows with valle data structure.
- `baseApi` (string) - Base API url for RESTFul.
- `canonicalApi` (string) - Canonial API url for RESTFul.

## Architecture

We've developed this component using the following boilerplate:
[lyef-react-component](https://github.com/lyef/lyef-react-component).

To know more about the architecture or if you want to contribute with this component:
[Contributing Documentation](https://github.com/lyef/valleForm/blob/master/CONTRIBUTING.md).

## License

[MIT License](https://github.com/lyef/valleForm/blob/master/LICENSE.md) @ [lyef](https://lyef.github.io/)