module.exports = {
    meta: {
        docs: {
            description: "allow only single quotes for imports",
            category: "Best Practices",
            recommended: false
        },
		fixable: 'code',
        schema: []
    },

    create(context) {
		const sourceCode = context.getSourceCode();
		function checkSpecifiers(node) {
			if (node.type !== 'ImportDeclaration') return;
			if (node.source.raw.indexOf("'")===-1) {
				const msg = 'Use only single quotes for import';
				context.report({ 
					node,
					message: msg,
					fix (fixer) {
					  const replacement = sourceCode.getText(node).replace(`"`, `'`);
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
