
//
// USAGE: resultString = ReplaceParams(quoteString, param1, param2, ... paramN);
//
//  Replaceable params in a string are specified by "%<param-num><optional-placeholder>%".  <param-num> should start with 1 and increment by 1.
//  i.e., "Now is the %1time% for all %2good% %3men% to come to the %4aid% of their %5country%."
//
function ReplaceParams() {
    var result = arguments[0];
    for (var iArg = 1; iArg < arguments.length; iArg++) {       // Start at second arg (first arg is the pattern)
        var pattern = new RegExp('%' + iArg + '\\w*%');
        result = result.replace(pattern, arguments[iArg]);
    }
    return result;
}


function buildThumbnails() {
    // Load drawings
    var images = "";
    for (i = 1; i <= 25; i++) {
        images += ReplaceParams("<img src='images/drawing/thumbs/artwork_%1%.jpg' />", i);
    }
    document.getElementById("thumbsDrawings").innerHTML = images;

    // Load watercolor paintings
    images = "";
    for (i = 1; i <= 10; i++) {
        images += ReplaceParams("<img src='images/watercolor/thumbs/artwork_%1%.jpg' />", i);
    }
    document.getElementById("thumbsWatercolors").innerHTML = images;

    // Load oil paintings
    images = "";
    for (i = 1; i <= 8; i++) {
        images += ReplaceParams("<img src='images/oil/thumbs/artwork_%1%.jpg' />", i);
    }
    document.getElementById("thumbsOils").innerHTML = images;
}


window.onload = function () {
    buildThumbnails();
}

