// JavaScript Hodnoty
document.getElementById('valuesOutput').innerText = 'JavaScript Hodnoty: 42, "Ahoj světe", true, null, undefined';
let valuesExplanation = "JavaScript hodnoty představují základní datové typy, jako jsou čísla, řetězce, boolean hodnoty, null a undefined. Tyto hodnoty se často používají k reprezentaci různých informací v kódu a jsou základem pro práci s daty.";
document.getElementById('valuesOutput').insertAdjacentHTML('beforebegin', '<p class="explanation">' + valuesExplanation + '</p>');

// JavaScript Literály
document.getElementById('literalsOutput').innerText = 'JavaScript Literály: 42 (číselný), "Ahoj světe" (řetězcový), true/false (logický), null, undefined';
let literalsExplanation = "JavaScript literály jsou konkrétní zápisy hodnot do kódu. Například číselný literál 42, nebo řetězcový literál 'Ahoj světe'. Tyto zápisy představují konkrétní hodnoty v kódu.";
document.getElementById('literalsOutput').insertAdjacentHTML('beforebegin', '<p class="explanation">' + literalsExplanation + '</p>');

// JavaScript Proměnné
let variableExample = 'Toto je proměnná.';
document.getElementById('variablesOutput').innerText = 'JavaScript Proměnné: ' + variableExample;
let variablesExplanation = "JavaScript proměnné slouží k uchovávání a manipulaci s daty v kódu. Jsou to označené úložiště pro hodnoty, které mohou být měněny během běhu programu.";
document.getElementById('variablesOutput').insertAdjacentHTML('beforebegin', '<p class="explanation">' + variablesExplanation + '</p>');

// JavaScript Operátory
let a = 10;
let b = 5;
document.getElementById('operatorsOutput').innerText = 'JavaScript Operátory: a + b = ' + (a + b) + ', a - b = ' + (a - b) + ', a * b = ' + (a * b) + ', a / b = ' + (a / b);
let operatorsExplanation = "JavaScript Operátory jsou symboly používané k provádění operací s proměnnými a hodnotami. Například sčítání, odčítání, násobení a dělení. Tyto operátory jsou základní pro matematické a logické operace v kódu.";
document.getElementById('operatorsOutput').insertAdjacentHTML('beforebegin', '<p class="explanation">' + operatorsExplanation + '</p>');

// JavaScript Výrazy
let expressionResult = (a + b) * 2;
document.getElementById('expressionsOutput').innerText = 'JavaScript Výrazy: (a + b) * 2 = ' + expressionResult;
let expressionsExplanation = "JavaScript Výrazy jsou kombinace hodnot, proměnných a operátorů, které vedou k jediné hodnotě. Jsou klíčové pro vytváření dynamických výpočtů a manipulaci s daty v kódu.";
document.getElementById('expressionsOutput').insertAdjacentHTML('beforebegin', '<p class="explanation">' + expressionsExplanation + '</p>');
