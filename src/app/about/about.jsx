var u = require('com/u');

function controller() {
  this.filterText = m.prop("");

  modal = function(content,phrase) {
  	return [
		m('.col-md-3',[
			m('h4',content),
			m('p',
				m('span',phrase)
			)
		])
  	];
  };
/*    
1. Todo caracter não-alfabético deve ser ignorado
2. Não deve haver diferença entre letras minúsculas e maiúsculas
3. Depois da primeira letra, qualquer uma das seguintes letras devem ser descartadas: A, E, I, H, O, U, W, Y.
4. Os seguintes conjuntos de letras são considerados equivalentes:
{A, E, I, O, U}
{C, G, J, K, Q, S, X, Y, Z}
{B, F, P, V, W}
{D, T}
{M, N}
Todas as outras letras não tem equivalente
5. Quaisquer ocorrências consecutivas de letras equivalentes (depois de descartas as letras no passo 3) são consideradas como uma ocorrência única
*/
  check_phonetic = function(content) {
  	ma = content.toLocaleLowerCase();
  	content_string = "";
    score1 = 1;
    score2 = 1;
    score3 = 1;
    score4 = 1;
    score5 = 1;
    for (var i = 0; i <= content.length; i++) {
      discarts = ["a","e","i","h","o","u","w","y"];
      equivalents1 = ["a", "e", "i", "o", "u"];
      equivalents2 = ["c","g","j","k","q","s","x","y","z"];
      equivalents3 = ["b","f","p","v","w"];
      equivalents4 = ["d","t"];
      equivalents5 = ["m","n"];
      check_string = content.toLocaleLowerCase().substr(i,1);
      // if (i===0) content_string = check_string;
      if (i>0 && discarts.indexOf(check_string) < 0) {
        // content_string += check_string;
        if (equivalents1.indexOf(check_string) >= 0){
          if (score1 > 0 && score1 < 2) {
            content_string += (!content_string) ? show_equivalents(equivalents1) :  ","+show_equivalents(equivalents1);
          }
          score1++;
        }
        if (equivalents2.indexOf(check_string) >= 0){
          if (score2 > 0 && score2 < 2) {
            content_string += (!content_string) ? show_equivalents(equivalents2) :  ","+show_equivalents(equivalents2);
          }
          score2++;
        }
        if (equivalents3.indexOf(check_string) >= 0){
          if (score3 > 0 && score3 < 2) {
            content_string += (!content_string) ? show_equivalents(equivalents3) :  ","+show_equivalents(equivalents3);
          }
          score3++;
        }
        if (equivalents4.indexOf(check_string) >= 0){
          if (score4 > 0 && score4 < 2) {
            content_string += (!content_string) ? show_equivalents(equivalents4) :  ","+show_equivalents(equivalents4);
          }
          score4++;
        }
        if (equivalents5.indexOf(check_string) >= 0){
          if (score5 > 0 && score5 < 2) {
            content_string += (!content_string) ? show_equivalents(equivalents5) :  ","+show_equivalents(equivalents5);
          }
          score5++;
        }
      }
    }
    return content_string;
  };
  show_equivalents = function(content) {
    //load dictionary
    dictionary = ["angel", "brave", "Braev", "Don", "Engel", "go", "goal", "son", "sunny", "Tom","Tooonnnnyyyy"];
    count_eq=0;
    mount_result = "";
    for (var i = 0; i < dictionary.length; i++) {
      for (var l = 0; l < content.length; l++) {
        if (dictionary[i].indexOf(content[l]) >= 0) {
          count_eq++;
          if (count_eq > 1) {
            mount_result += (!mount_result) ? dictionary[i] : ", "+dictionary[i];
          }
        }
      }
    }
    return mount_result;
  };
  this.phonetic = function() {
    word_to_check = text_tempo.value;
    this.values = [];
    this.values.push(modal(check_phonetic(word_to_check),word_to_check));
	}.bind(this);
}

function view(ctrl) {
  var rows = [];
  

  return INCLUDE('about/about.tpl');
}

exports.label = 'words';
exports.controller = controller;
exports.view = view;