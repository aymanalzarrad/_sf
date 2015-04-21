_sf
-----------------
A clean/blank _s (underscores) + Zurb foundation skeleton/boilerplate.
With absolutely no additions so it's always a blank/clean start.

Getting Started
---------------

Download/clone `_sf` from GitHub. The first thing you want to do is copy the `_sf` directory and change the name to something else (like, say, `megatherium`), and then you'll need to do a five-step find and replace on the name in all the templates.

1. Search for `'_sf'` (inside single quotations) to capture the text domain.
2. Search for `_sf_` to capture all the function names.
3. Search for `Text Domain: _sf` in style.css.
4. Search for <code>&nbsp;_s</code> (with a space before it) to capture DocBlocks.
5. Search for `_sf-` to capture prefixed handles.

OR

* Search for: `'_sf'` and replace with: `'megatherium'`
* Search for: `_sf_` and replace with: `megatherium_`
* Search for: `Text Domain: _sf` and replace with: `Text Domain: megatherium` in style.css.
* Search for: <code>&nbsp;_s</code> and replace with: <code>&nbsp;Megatherium</code>
* Search for: `_sf-` and replace with: `megatherium-`


Then, update the stylesheet header in `/sass/style.scss` or `style.css` and the links in `footer.php` with your own information. Next, update or delete this readme.

Now you're ready to go! The next step is easy to say, but harder to do: make an awesome WordPress theme. :)

Good luck!

Folder structure:
-----------------
1. In the root dir you will find `'/config.rb'` to use with compass.
2. Under `'/sass/'` you will find all _s scss files + `'/_sf_settings.scss'` where we apply our foundation settings.
3. All scss files are imported and compiled from `'/sass/style.scss'`.
4. Under `'/js/'` you will find all _s js files + `'_sf.js'` where we make sure jQuery runs in noConflict mode and foundation js is initiated.
5. All foundation core and vendor files are located under `'/foundation/'`.


Note:
-----------------
The only changes that are done to `_s` are in:

1. `'/sass/style.scss'` So foundation sass is loaded.
2. `'/functions.php'` so modernizr.js, fastclick.js and foundation.js are loaded.

