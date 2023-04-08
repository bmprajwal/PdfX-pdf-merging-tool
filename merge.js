const PDFMerger = require('pdf-merger-js');


const mergePdfs = async (f1, f2) => {
    var merger = new PDFMerger();
    await merger.add(f1);  //merge all pages. parameter is the path to file and filename.
    await merger.add(f2)
    await merger.save(`public/merged.pdf`); //save under given name and reset the internal document
}

module.exports = { mergePdfs }


