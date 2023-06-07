How we include javascript inside another javascript?

Universal module syntax - Transformed all of your files to be encapsulated in their own closure(function() {
    let alou = 'alou';
}())


Transportable piece of code that was shared across other js files (no conflict, no global space leaking)
Common modules CommonJS
I want this piece of code to be a module = module.exports = variableToExport

Future way to work with modules - ECMAScript modules

We have to say what versions of module that we are using


Explicit by using the .mjs extension to say 'I'm using Es modules in this file so use that instead of the .js'

Or we can add in the package.json

and continue using .js extension

export const action = ...

In the import we have to use the name of variable that is being exported

import {action } from ...