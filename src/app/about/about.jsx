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
  	temp_string = "";
  	for (var i = 0; i <= content.length; i++) {
      check_string = content.toLocaleLowerCase().substr(i,1);
      if (i===0) temp_string = check_string;
      if (i>0 && (check_string !== "a")) {
        if (check_string !== "e") {
          if (check_string !== "i") {
            if (check_string !== "h") {
              if (check_string !== "o") {
                if (check_string !== "u") {
                  if (check_string !== "w") {
                    if (check_string !== "y") {
                  		temp_string += check_string;
                    }
                  }
                }
              }
            }
          }
        }
      }
  	}
    return temp_string;
  	if (temp_string === ma) {
	  	return "is a phonetic";
  	} else {
  		return "is not a phonetic";
  	}
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