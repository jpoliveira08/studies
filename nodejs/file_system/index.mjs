import { readFile, writeFile } from 'fs/promises';

const templateFile = new URL('template.html', import.meta.url);

// Await because readFile is a promise
let template = await readFile(templateFile, 'utf-8');

const data = {
    title: 'Learn Node.js',
    body: 'This is the final HTML'
};

// Object.entries(data) - Return an array of key value pairs (tuples)
// key = title, value = 'Learn Node.js'
for (const [key, value] of Object.entries(data)) {
    // Replacing everywhere where there`s ${key} with the actual value
    template = template.replace(`{${key}}`, value);
}

// We need to write this file back into the disk
let outputFile = new URL('index.html', import.meta.url);
// second Argumenti is the file that we wanna write
await writeFile(outputFile, template)