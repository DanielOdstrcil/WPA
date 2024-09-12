// Čekáme na načtení celého dokumentu
document.addEventListener("DOMContentLoaded", function() {

    // Implementace metod pro zpracování řetězců

    // Metoda length - Vrátí délku řetězce.
    String.prototype.myLength = function() {
        return this.length;
    };

    // Metoda charAt - Vrátí znak na zadaném indexu v řetězci.
    String.prototype.myCharAt = function(index) {
        if (index < 0 || index >= this.length) {
            return '';
        }
        return this[index];
    };

    // Metoda charCodeAt - Vrátí Unicode hodnotu znaku na zadaném indexu v řetězci.
    String.prototype.myCharCodeAt = function(index) {
        if (index < 0 || index >= this.length) {
            return NaN;
        }
        return this.charCodeAt(index);
    };

    // Metoda slice - Vrátí podřetězec řetězce mezi zadanými indexy.
    String.prototype.mySlice = function(startIndex, endIndex) {
        return this.slice(startIndex, endIndex);
    };

    // Metoda substring - Vrátí podřetězec řetězce mezi zadanými indexy.
    String.prototype.mySubstring = function(startIndex, endIndex) {
        return this.substring(startIndex, endIndex);
    };

    // Metoda substr - Vrátí podřetězec řetězce počínaje zadaným indexem a s určitou délkou.
    String.prototype.mySubstr = function(startIndex, length) {
        return this.substr(startIndex, length);
    };

    // Metoda toUpperCase - Vrátí řetězec s velkými písmeny.
    String.prototype.myToUpperCase = function() {
        return this.toUpperCase();
    };

    // Metoda toLowerCase - Vrátí řetězec s malými písmeny.
    String.prototype.myToLowerCase = function() {
        return this.toLowerCase();
    };

    // Metoda trimStart - Vrátí řetězec s odstraněnými bílými znaky na začátku.
    String.prototype.myTrimStart = function() {
        return this.trimStart();
    };

    // Metoda trimEnd - Vrátí řetězec s odstraněnými bílými znaky na konci.
    String.prototype.myTrimEnd = function() {
        return this.trimEnd();
    };

    // Metoda replace - Nahradí všechny výskyty zadaného podřetězce jiným podřetězcem.
    String.prototype.myReplace = function(searchValue, replaceValue) {
        return this.replace(searchValue, replaceValue);
    };

    // Metoda replaceAll - Nahradí všechny výskyty zadaného podřetězce jiným podřetězcem.
    String.prototype.myReplaceAll = function(searchValue, replaceValue) {
        const regex = new RegExp(searchValue, 'g');
        return this.replace(regex, replaceValue);
    };

    // Metoda split - Rozdělí řetězec na pole podle zadaného oddělovače.
    String.prototype.mySplit = function(separator) {
        return this.split(separator);
    };

    // Příklad použití
    let str = "ORBIS ZLÍN";
    document.getElementById("length").innerHTML = "<span>Length:</span> " + str.myLength();
    document.getElementById("charAtIndex").innerHTML = "<span>Character at index 1:</span> " + str.myCharAt(1);
    document.getElementById("unicodeValue").innerHTML = "<span>Unicode value of character at index 1:</span> " + str.myCharCodeAt(1);
    document.getElementById("slice").innerHTML = "<span>Slice:</span> " + str.mySlice(2, 6);
    document.getElementById("substring").innerHTML = "<span>Substring:</span> " + str.mySubstring(2, 6);
    document.getElementById("substr").innerHTML = "<span>Substr:</span> " + str.mySubstr(2, 6);
    document.getElementById("toUpperCase").innerHTML = "<span>Uppercase:</span> " + str.myToUpperCase();
    document.getElementById("toLowerCase").innerHTML = "<span>Lowercase:</span> " + str.myToLowerCase();
    document.getElementById("trimStart").innerHTML = "<span>Trimmed start:</span> " + str.myTrimStart();
    document.getElementById("trimEnd").innerHTML = "<span>Trimmed end:</span> " + str.myTrimEnd();
    document.getElementById("replace").innerHTML = "<span>Replaced:</span> " + str.myReplace('ORBIS', 'AI');
    document.getElementById("replaceAll").innerHTML = "<span>Replaced all:</span> " + str.myReplaceAll('I', 'X');
    document.getElementById("split").innerHTML = "<span>Split:</span> " + str.mySplit(' ');
});
