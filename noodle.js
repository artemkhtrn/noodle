// массив с регулярными выражениями c пропагандой
var pr = [];
// заполняем элементы массива нашими выражениями
pr.push(/\Bвраг\W{0,3}\B/);
pr.push(/\Bвойн\W{1,3}\B/);
pr.push(/\Bбор\W\W?с[ья]\B/);
pr.push(/\Bмраз\W{0,3}\B/);
pr.push(/\Bгад\W{0,3}\B/);
pr.push(/\Bурод\W{0,3}\B/);
pr.push(/\Bпредател\W{0,3}\B/);
pr.push(/\Bиуд\W{0,3}\B/);
pr.push(/\Bпаразит\W{0,3}\B/);
pr.push(/\Bагент\W{0,3}\B/);
pr.push(/\Bметодичк\W{0,3}\B/);
pr.push(/\Bпо +указке\B/);
pr.push(/\Bвероломн\W{0,3}\B/);
pr.push(/\Bопуска\W{1,3}с[яь]\B/);
pr.push(/\Bпровальн\W{0,3}\B/);
pr.push(/\Bунизительн\W{0,3}\B/);
pr.push(/\Bчудовищн\W{0,3}\B/);
pr.push(/\Bварварск\W{0,3}\B/);
pr.push(/\Bзверск\W{0,3}\B/);
pr.push(/\B(об)?нищ\W{2,6}\B/);
pr.push(/\B(на|с) +колен\W{0,3}\B/);
pr.push(/\Bдави\W{2,4}\B/);
pr.push(/\Bподавля\W{1,4}\B/);
pr.push(/\Bвырва\W{1,4}\B/);
pr.push(/\Bуничтожи\W{1,4}\B/);
pr.push(/\Bрастопта\W{1,4}\B/);
pr.push(/\Bпроглоти\W{1,4}\B/);
pr.push(/\Bподстави\W{1,4}\B/);
pr.push(/\Bдоби\W{1,4}с[ья]\B/);
pr.push(/\Bдоби\W{1,4}\B/);
pr.push(/\Bнеудивительно\B/);
pr.push(/\Bв +то +время +как\B/);
pr.push(/\Bразумеетс[ья]\B/);
pr.push(/\B(мы|каждый) +(из +нас)? +долж\W{2,4}\B/);
pr.push(/\B(мы|каждый) +(из +нас)? +обяза\W{1,3}\B/);
pr.push(/\Bостава\W{1,4}с[ья] +в +стороне\B/);
pr.push(/\Bвсе +только +начинаетс[ья]\B/);
pr.push(/\Bсу\W{1,4} +котор\W{2,4}\B/);
pr.push(/\Bединственн\W{2,4}\B/);
pr.push(/\Bв +упор +не +виде\W{1,4}\B/);
pr.push(/\Bзакрыва\W{1,4} +глаза\B/);
pr.push(/\Bжестк\W{1,4}\B/);
pr.push(/\Bбескомпромиссн\W{1,4}\B/);
pr.push(/\Bбесцеремонн\W{1,4}\B/);
pr.push(/\Bмощн\W{1,4}\B/);
pr.push(/\Bрезонанс\W{0,4}\B/);
pr.push(/\Bэпопе\W{1,4}\B/);
pr.push(/\Bгеро\W{1,4}\B/);
pr.push(/\Bгероическ\W{1,4}\B/);
pr.push(/\B(с|на) +колен\W{0,4}\B/);
pr.push(/\Bподвиг\W{0,4}\B/);
pr.push(/\Bдолг\W{0,4}\B/);
pr.push(/\Bсвященн\W{1,4}\B/);
pr.push(/\Bдля +кажд\W{1,4}\B/);
pr.push(/\Bбезучастн\W{1,4}\B/);
pr.push(/\Bскорее +всего\B/);
pr.push(/\Bвероятнее +всего\B/);
pr.push(/\Bперспектив\W{0,3} +развития\B/);
pr.push(/\Bмы +как +страна\B/);
pr.push(/\Bнарод\W{0,2}\B/);
pr.push(/\Bобществ\W{1,4}\B/);
pr.push(/\Bдеградац\W{2,4}\B/);
pr.push(/\Bразвал\W{0,4}\B/);
pr.push(/\Bбез +лишнего +шума\B/);
pr.push(/\Bтак +называем\W{0,4}\B/);
pr.push(/\Bдно \B/);
pr.push(/\Bпросто\B/);
pr.push(/\Bпросто-напросто\B/);
pr.push(/\Bсотни +тысяч\B/);
pr.push(/\Bмиллионы\B/);
pr.push(/\Bдесятки +миллионов\B/);
pr.push(/\Bбудущ\W{2,4}\B/);
pr.push(/\Bпобед\W{1,4}\B/);
pr.push(/\Bсветл\W{2,4}\B/);
pr.push(/\Bскорее +всего\B/);
pr.push(/\Bвсе +стороны +(\W{5,15} )?жизни\B/);
pr.push(/\Bвсеобщ\W{2,4}\B/);
pr.push(/\Bвсе\B/);
pr.push(/\Bкаждый\B/);
pr.push(/\Bразвити\W{1,4} +страны\B/);
pr.push(/\Bнедаром\B/);
pr.push(/\Bмноголетн\W{2,4}\B/);
pr.push(/\Bмы +как +страна\B/);
pr.push(/\Bотсутствие +какого-либо\B/);
pr.push(/\Bкаки\W{1,3}-либо +перспектив\W{0,4}\B/);
pr.push(/\Bдостойн\W{2,4} +рол\W{1,3}\B/);
pr.push(/\Bдостоинств\W{1,4}\B/);
pr.push(/\Bгордос\W{1,4}\B/);
pr.push(/\Bсвобод\W{0,4}\B/);
pr.push(/\Bтотальн\W{1,4}\B/);
pr.push(/\Bмассовое +(\W{5,15} )?сознание\B/);
pr.push(/\Bпо-видимому\B/);
pr.push(/\Bнет +даже +подобия\B/);
pr.push(/\Bочевидно\B/);
pr.push(/\Bтоталитарн\B/);
pr.push(/\Bавторитарн\B/);
pr.push(/\Bтиран\B/);
pr.push(/\Bавтократ\B/);
pr.push(/\Bуголовн\B/);

// когда документ загрузился — начинаем работу
$(document).ready(function () {
  // функция, которая оборачивает найденное регулярное выражение в тег с подсветкой
  // в качестве аргументов мы передаём регулярное выражение и текст, который нужно обработать
  function highlightText(regular, originalHtml) {
    // переменная, в которую мы поместим итоговое значение
    var newHtml;
    // оборачиваем найденное значение в тег <span>
    // решение подсмотрели здесь: https://www.telerik.com/support/kb/aspnet-ajax/details/highlight-text-inside-html-elements-and-templates
    newHtml = originalHtml.replace(
      new RegExp(regular, "gi"),
      function replace(match) {
        return '<span class="highlight">' + match + "</span>";
      }
    );
    // возвращаем результат обработки
    return newHtml;
  }

  // функция, которая подсвечивает текст в содержимом какого-то элемента на странице
  function lst(txt) {
    // перебираем по очереди все абзацы, которые есть на странице, используя возможности jQuery
    $(txt).each(function () {
      // по очереди проходим по массиву с регулярными выражениями
      for (var z = 0; z < pr.length; z++) {
        // на каждом шаге цикла берём содержимое очередного абзаца
        var par = this.innerHTML;
        // и прогоняем его через подсветку каждого найденного регулярного выражения
        this.innerHTML = highlightText(pr[z], par);
      }
    });
  }
  // подсвечиваем все слова внутри абзацев на странице
  lst("body");
});

var style = document.createElement("style");
style.innerHTML = ` 
.highlight {
      background: #4CFF00;
    }
`;
document.head.appendChild(style);
