how to contribute
I'm so glad you're reading this🎉🎊.

If you still don't know me go to my main Github page🎈.

Here are some important features🎁:

This is a project that can get huge, so we must follow all the good practices of React applied in 2022🚀.

Mailing list: Join our developer list🏆.

bugs? You can report them by adding the applied solution in a Pull request github🐔.

Test
We have a handful of Jest features, but most of the testing is best practices applied to jest. Please write examples for the new code you create👌.

submitting changes
Please send a GitHub Pull Request to gilles30 with a clear list of what you've done (read more about pull requests if needed). When you submit a pull request, we'll love you forever if you include examples. We can always use more test coverage. Please follow the coding conventions (below) and make sure all your commits are atomic (one resource per commit)🔥.

✔ Always write a clear log message for your commits. One-line messages are fine for small changes, but larger changes should look like this:

$ git commit -m "A brief summary of the commit

> A paragraph describing what has changed and its impact."
> coding conventions
> Start reading our code and you'll get the hang of it. We optimize for readability:

We indent using two spaces (smooth guides)

We bypassed logic in views by putting HTML generators in helpers.

We ALWAYS put spaces after list items and method parameters ([1, 2, 3], not [1,2,3]), around operators (x += 1, not x+=1) and around arrows of hash.

✔ FOLLOW the Prettier pattern of the project.

This is open source software. Consider the people who will read your code and make it look nice to them. It's like driving a car: maybe you love making donuts when you're alone, but with passengers the goal is to make the ride as smooth as possible.
So that we can consistently serve images from the CDN, always use image_path or image_tag when referring to images. Never put "/images/" when using image_path or image_tag.
Also for CDN, always use cwd-relative paths instead of root-relative paths in image URLs in any CSS. So instead of url('/images/blah.gif'), use url('../images/blah.gif').

Thanks Lorison Gilles, A simple dev.💕
