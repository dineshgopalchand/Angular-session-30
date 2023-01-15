const odishaLang='Odiha';
const biharLang='Hindi';
const AndhraLang='Telgu';

const LANG={
    odisha:'Odiha',
    'bihar':'hindi',
    'andhra':'telegu'
}
console.log(LANG.andhra)
LANG.andhra='tamil';
console.log(LANG.andhra)

enum LANG1{
    odisha='Odiha',
    'bihar'='hindi',
    'andhra'='telegu'
}
console.log(LANG1.andhra)
// LANG1.andhra='tamil'; // not allowed
console.log(LANG1.andhra)
