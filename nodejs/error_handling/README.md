When an exception is thrown in node or an error, the current process will exit with a code.

If a exit code is 1 -> Something bad happen
If a exit code is 0 -> It was successful

YOU SHOULD ALMOST NEVER BE USING process.exit EVER, because you're not giving the chance to catch the error.