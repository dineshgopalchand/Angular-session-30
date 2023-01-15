var odishaLang = 'Odiha';
var biharLang = 'Hindi';
var AndhraLang = 'Telgu';
var LANG = {
    odisha: 'Odiha',
    'bihar': 'hindi',
    'andhra': 'telegu'
};
console.log(LANG.andhra);
LANG.andhra = 'tamil';
console.log(LANG.andhra);
var LANG1;
(function (LANG1) {
    LANG1["odisha"] = "Odiha";
    LANG1["bihar"] = "hindi";
    LANG1["andhra"] = "telegu";
})(LANG1 || (LANG1 = {}));
console.log(LANG1.andhra);
LANG.andhra = 'tamil';
console.log(LANG1.andhra);
