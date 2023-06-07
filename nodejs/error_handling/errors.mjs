//import { readFile } from 'fs';

// The last argument is a callback (error, data) - How errors were handled in Node.js before
// If we use callbacks for async code, the pattern is 
// Async Errors that use callbacks
readFile(new URL('app.js', import.meta.url), 'utf-8', (err, data) => {
    if (err) {
        // Handle error
        console.error(err)
        // If we want this to crash
        throw err;
        // If we dont want this to crash
    } else {

    }
});

// Using promises
import { readFile } from 'fs/promises';

// Error promised based that we dont know what type its gonna be if we gonna do await
// Await is supposed to feel synchronous
try {
    const result = await readFile(new URL('app.mjs', import.meta.url), 'utf-8');
} catch (e) {
    console.log(e);
    console.log('Still working');
}

// Using promises based workflow with error handling
const dataResult = await readFile(new URL('app.mjs', import.meta.url), 'utf-8')
    .catch(e => {

    });

// The ways above is to handle the errors that we have control over

// If we are using a library that we dont know what type of error it will throw
// We can use catch all implementation, which is gonna be called process.on uncought Exception
// Only save this for someone didn't catch this error
// Useful just for helping you figure it out what happened