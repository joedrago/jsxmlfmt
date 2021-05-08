var fs = require('fs');
var xmlFormatter = require('xml-formatter');

function main() {
    var argv = process.argv.slice(2);
    if(argv.length < 1) {
        console.log("Syntax: jsxmlfmt [xmlFilename] ([xmlFilename]...)");
        process.exit(0);
    }

    for(arg of argv) {
        var rawXML = fs.readFileSync(arg, "utf8");
        var outputXML = xmlFormatter(rawXML);
        fs.writeFileSync(arg + ".out.xml", outputXML);
    }
}

main();
