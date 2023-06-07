If dont you the sync version of a fs method it's going to be async

Set aside in the event loop to be processed on the next tick at some point (background).

If you do prefer to block the process, the sync version is the right one.

First step of this project - Get the string representation of the HTML file.

__dirname is only accesible using CommonJS

We can construct a absolute path using the new URL implementation -> new URL('fileName', import.meta.url)

import.meta.url - Absolute path to the file

If we not specify, we get the buffer, the buffer is all the bits that make up a file (when you want to stream something).

If the file had 1GB, we would have to load up a Gb in memory, and that is so bad. So it is better to stream them bit by bit (buffer).

But we have to work with the file as a string, we can use the method toString or we can pass the encoding as the second argument of the readFile function 'utf-8'.