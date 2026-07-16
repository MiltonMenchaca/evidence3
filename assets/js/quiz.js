/* Quiz DUDH — verifica respuestas y muestra puntaje */
(function () {
  'use strict';

  var answers = { q1: 'b', q2: 'b', q3: 'b', q4: 'c', q5: 'b' };
  var explanations = {
    q1: 'La DUDH fue proclamada por la Asamblea General de la ONU el 10 de diciembre de 1948.',
    q2: 'El artículo 12 protege contra injerencias arbitrarias en la vida privada, la familia, el domicilio y la correspondencia.',
    q3: 'Eleanor Roosevelt presidió el comité redactor de la DUDH.',
    q4: 'La DUDH tiene 30 artículos en total.',
    q5: 'El control de acceso y las políticas de retención son la forma técnica de aplicar el artículo 12.'
  };
  var labels = {
    a: 'A', b: 'B', c: 'C', d: 'D'
  };

  function init() {
    var form   = document.getElementById('quiz-form');
    var btn    = document.getElementById('quiz-check');
    var reset  = document.getElementById('quiz-reset');
    var result = document.getElementById('quiz-result');
    if (!form || !btn || !result) return;

    btn.addEventListener('click', function () {
      var total = Object.keys(answers).length;
      var score = 0;
      var html  = '<strong>Resultado: <span id="quiz-score"></span> / ' + total + '</strong>';
      var allAnswered = true;

      for (var q in answers) {
        var chosen = (form.elements[q] && form.elements[q].value) || '';
        if (!chosen) { allAnswered = false; }
        var correct = (chosen === answers[q]);
        if (correct) { score++; }

        html += '<span class="feedback-line ' + (correct ? 'correct' : 'wrong') + '">';
        html += (correct ? '✓' : '✗') + ' Pregunta ' + q.slice(1) + ': ';
        html += 'Tu respuesta ' + (chosen ? labels[chosen] : '(en blanco)') + ' — ';
        html += 'Correcta: ' + labels[answers[q]] + '.';
        html += '<br><em style="font-weight: 400;">' + explanations[q] + '</em>';
        html += '</span>';
      }

      if (!allAnswered) {
        result.className = 'widget-result wrong show';
        result.innerHTML = '⚠️ Responde todas las preguntas antes de verificar.';
        return;
      }

      result.className = 'widget-result ' + (score === total ? 'correct' : 'wrong') + ' show';
      result.innerHTML = html;
      document.getElementById('quiz-score').textContent = score;
    });

    reset.addEventListener('click', function () {
      setTimeout(function () {
        result.className = 'widget-result';
        result.innerHTML = '';
      }, 10);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
