# eslint-plugin-import-quotes

Allow only single quotes for import sourse

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-import-quotes`:

```
$ npm install eslint-plugin-import-quotes --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-import-quotes` globally.

## Usage

Add `import-quotes` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "import-quotes"
    ],
	"rules": {
		"import-quotes/import-quotes": [1, "single"] // or double
	},
}
```