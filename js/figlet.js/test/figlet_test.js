// build time:Sun Apr 26 2020 11:42:26 GMT+0800 (GMT+08:00)
"use strict";var figlet=require("../lib/node-figlet"),grunt=require("grunt"),fs=require("fs"),path=require("path"),async=require("async");exports.figlet={setUp:function(t){t()},standard:function(t){t.expect(1);figlet("FIGlet\nFONTS",{font:"Standard",verticalLayout:"fitted"},function(e,n){var a=grunt.file.read("test/expected/standard");t.equal(n,a,'Standard font with a vertical layout of "fitted".');t.done()})},standardSync:function(t){t.expect(1);var e=grunt.file.read("test/expected/standard");var n=figlet.textSync("FIGlet\nFONTS",{font:"Standard",verticalLayout:"fitted"});t.equal(n,e,'Standard font with a vertical layout of "fitted".');t.done()},standardParse:function(t){t.expect(1);var e=grunt.file.read("test/expected/standard");var n=fs.readFileSync(path.join(__dirname,"../fonts/Standard.flf"),"utf8");var a=figlet.parseFont("StandardParseFontName",n);var i=figlet.textSync("FIGlet\nFONTS",{font:"StandardParseFontName",verticalLayout:"fitted"});t.equal(i,e,'Standard font with a vertical layout of "fitted" loaded using parseFont().');t.done()},graffiti:function(t){t.expect(1);figlet.text("ABC.123",{font:"Graffiti",horizontalLayout:"fitted"},function(e,n){var a=grunt.file.read("test/expected/graffiti");t.equal(n,a,'Graffiti font with a horizontal layout of "fitted".');t.done()})},graffitiSync:function(t){t.expect(1);var e=grunt.file.read("test/expected/graffiti");var n=figlet.textSync("ABC.123",{font:"Graffiti",horizontalLayout:"fitted"});t.equal(n,e,'Graffiti font with a horizontal layout of "fitted".');t.done()},dancingFont:function(t){t.expect(1);figlet.text("pizzapie",{font:"Dancing Font",horizontalLayout:"full"},function(e,n){var a=grunt.file.read("test/expected/dancingFont");t.equal(n,a,'Dancing Font with a horizontal layout of "full".');t.done()})},dancingFontSync:function(t){t.expect(1);var e=grunt.file.read("test/expected/dancingFont");var n=figlet.textSync("pizzapie",{font:"Dancing Font",horizontalLayout:"full"});t.equal(n,e,'Dancing Font with a horizontal layout of "full".');t.done()},printDirection:function(t){t.expect(1);figlet.text("pizzapie",{font:"Dancing Font",horizontalLayout:"full",printDirection:1},function(e,n){var a=grunt.file.read("test/expected/dancingFontReverse");t.equal(n,a,"Dancing Font with a reversed print direction.");t.done()})},loadAll:function(t){var e=0;t.expect(1);figlet.fonts(function(n,a){if(n){e++;return}async.eachSeries(a,function(t,n){figlet.text("abc ABC ...",{font:t},function(t,a){if(t){e++}n()})},function(n){t.equal(e,0,"A problem occurred while testing one of the fonts.");t.done()})})}};
//rebuild by neat 