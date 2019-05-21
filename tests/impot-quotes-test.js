const rule = require('../lib/rules/import-quotes');
const RuleTester = require("eslint").RuleTester;
RuleTester.setDefaultConfig({
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	}
});

const ruleTester = new RuleTester();
ruleTester.run("import quotes test", rule, {
    valid: [
		{
			code: `import React from 'react'`,
			options: ['single']	
		},
		{
			code: `import React from "react"`,
			options: ['double']
		}
    ],
    invalid: [
        {
            code: `import React from "react"`,
			options: ['single'],
            errors: [{ message: 'Use only single quotes for import' }]
        },
		{
            code: `import React from 'react'`,
			options: ['double'],
            errors: [{ message: 'Use only double quotes for import' }]
        }
    ]
});
