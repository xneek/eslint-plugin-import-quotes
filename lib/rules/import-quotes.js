module.exports = {
    meta: {
        docs: {
            description: "allow only single quotes for ES6 imports",
            category: "Best Practices",
            recommended: false
        },
		fixable: 'code',
        schema: [{ 
			enum: ['double', 'single']
		}]
    },

    create(context) {
		const sourceCode = context.getSourceCode();
		const double = context.options[0] !== 'single';
		const quoteChar = double ? '"' : "'";
		const quoteName = double ? 'double quotes' : 'single quotes';
		const replacePattern = !double ? /"/g : /'/g;
		
		function checkSpecifiers(node) {
			if (node.type !== 'ImportDeclaration') return;
			if (node.source.raw.indexOf(quoteChar)===-1) {
				const msg = 'Use only '+ quoteName +' for import';
				context.report({ 
					node,
					message: msg,
					fix (fixer) {
					  const replacement = sourceCode.getText(node).replace(replacePattern, quoteChar);
					  return fixer.replaceText(node, replacement);
					}
				})
			}
		}
        return {
			'Program': ({ body }) => body.forEach(checkSpecifiers)
        };
    }
};
