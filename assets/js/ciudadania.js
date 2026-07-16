/* Autodiagnóstico de ciudadanía — perfil Westheimer & Kahne */
(function () {
  'use strict';

  // Índices por perfil (0-based sobre las preguntas c1..c9)
  var grupos = {
    responsable:  [0, 3, 6], // c1, c4, c7
    participativo:[1, 4, 7], // c2, c5, c8
    justicia:     [2, 5, 8]  // c3, c6, c9
  };

  var descripciones = {
    responsable: 'Ejerces ciudadanía de forma <strong>responsable</strong>: cumples normas, ayudas cuando puedes, donas a causas locales. Eres la base sobre la que se sostiene cualquier comunidad. <br><em>Tip:</em> considera sumarte a una iniciativa participativa para amplificar tu impacto.',
    participativo: 'Ejerces ciudadanía <strong>participativa</strong>: te organizas, asistes, debates e informas antes de decidir. Eres quien mueve la maquinaria cívica. <br><em>Tip:</em> busca una causa estructural donde aplicar esa energía más allá de tu entorno inmediato.',
    justicia: 'Tiendes a una ciudadanía <strong>orientada a la justicia</strong>: prefieres atacar las causas de los problemas y no solo sus síntomas. Es el perfil más escaso y, a la vez, el que más transforma sistemas. <br><em>Tip:</em> combínalo con práctica participativa para no agotarte en el activismo individual.'
  };

  function init() {
    var form   = document.getElementById('ciudadania-form');
    var btn    = document.getElementById('ciudadania-check');
    var reset  = document.getElementById('ciudadania-reset');
    var result = document.getElementById('ciudadania-result');
    if (!form || !btn || !result) return;

    btn.addEventListener('click', function () {
      var preguntas = ['c1','c2','c3','c4','c5','c6','c7','c8','c9'];
      var values = [];
      var allAnswered = true;

      for (var i = 0; i < preguntas.length; i++) {
        var v = (form.elements[preguntas[i]] && form.elements[preguntas[i]].value) || '';
        if (!v) { allAnswered = false; }
        values.push(parseInt(v, 10) || 0);
      }

      if (!allAnswered) {
        result.className = 'widget-result wrong show';
        result.innerHTML = '⚠️ Responde las 9 afirmaciones (1 a 5) antes de continuar.';
        return;
      }

      // Calcular puntajes por perfil
      var puntos = { responsable: 0, participativo: 0, justicia: 0 };
      for (var grupo in grupos) {
        for (var j = 0; j < grupos[grupo].length; j++) {
          puntos[grupo] += values[grupos[grupo][j]];
        }
      }

      // Determinar ganador
      var ganador = 'responsable';
      var max = -1;
      for (var g in puntos) {
        if (puntos[g] > max) { max = puntos[g]; ganador = g; }
      }

      var total = puntos.responsable + puntos.participativo + puntos.justicia;
      var empates = [];
      for (var g2 in puntos) {
        if (g2 !== ganador && puntos[g2] === puntos[ganador]) { empates.push(g2); }
      }

      var html = '<strong>Tu perfil de ciudadanía</strong><br><br>';
      html += '<span class="feedback-line">Responsable: '  + puntos.responsable  + ' / 15</span>';
      html += '<span class="feedback-line">Participativo: ' + puntos.participativo + ' / 15</span>';
      html += '<span class="feedback-line">Por justicia: ' + puntos.justicia      + ' / 15</span>';
      html += '<br>';
      html += '<div style="margin-top: 0.6em;">' + descripciones[ganador] + '</div>';

      if (empates.length > 0) {
        html += '<p style="margin-top: 0.8em; font-size: 0.9rem; color: var(--color-muted);">';
        html += '<em>Nota: empataste en puntaje con el perfil ' + empates.join(', ') +
                '. Los tres perfiles se necesitan; ninguno es "mejor" que los otros.</em></p>';
      }

      result.className = 'widget-result correct show';
      result.innerHTML = html;
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
