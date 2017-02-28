/* Other config */
//Bootstrap requires JQuery. You can get standalone JQuery or get bootstrap+jquery
var jquery = true
var bootstrap = true
//Fancy personal tool library
var geniescript = false
//Personal idle game maker
var idlekit = false
//Bootstrap theme. Themes include: Cerulean, Cosmo, Cyborg, Darkly, Flatly, Journal, Lumen, Paper, Readable, Sandstone, Simplex, Slate, Spacelab, Superhero, United, and Yeti. Set theme to one of those as a string for BEAUTY!
var theme = "Flatly"
if (jquery || bootstrap) { document.write('<script src = C://Users/Luke/Desktop/myLibraries/jquery.min.js></script>') }
if (bootstrap) { document.write('<link href=C://Users/Luke/Desktop/myLibraries/bootstrap.min.css rel=stylesheet><script src=C://Users/Luke/Desktop/myLibraries/bootstrap.min.js></script>') }
if (geniescript) { document.write('<script src = C://Users/Luke/Desktop/myLibraries/geniescript.js></script>') }
if (idlekit) { document.write('<script src = C://Users/Luke/Desktop/myLibraries/idlekit.js></script>') }
//Uses internetwebs! Be warned!
if (!theme == false) { document.write('<link rel = stylesheet type = text/css href = https://bootswatch.com/' + theme.toLowerCase() + '/bootstrap.min.css></link> ') }

document.write('<script src = main.js></script>')
