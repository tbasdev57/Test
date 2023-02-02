// Le code définit une fonction que_fais_je qui prend deux arguments, str et separator.
// Si l'argument séparateur est truey (non nul, indéfini, 0, NaN, faux, "" ou ' ') et que l'argument str n'est pas un tableau, la fonction divise l'argument str en un tableau en utilisant l'argument séparateur comme séparateur.
// Ensuite, la fonction supprime tous les éléments en double dans le tableau à l'aide de l'objet Set, qui stocke des valeurs uniques, et de la méthode Array.from, qui convertit un ensemble en tableau.Enfin, la fonction renvoie le tableau résultant.
// Si l'argument séparateur est faux ou si l'argument str est un tableau, la fonction renvoie faux.

var str = "apple,banana,apple,orange,banana";
var separator = ",";

function que_fais_je(str, separator) {
    if (separator && !Array.isArray(str)) {
        var arr = str.split(separator);
        return Array.from(new Set(arr));
    }
    else return false;
}

var result = que_fais_je(str, separator);
console.log(result);

// Sortir: [ 'apple', 'banana', 'orange' ]

// Dans cet exemple, l'argument str est une chaîne contenant une liste de fruits séparés par des virgules, et l'argument séparateur est une virgule ,.
//  La fonction divise la chaîne en un tableau de fruits à l'aide du séparateur, puis renvoie le tableau avec les doublons supprimés.