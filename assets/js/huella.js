/* Calculadora de huella de carbono personal */
(function () {
  'use strict';

  // Factores de emisión aproximados (kg CO₂ por unidad)
  var FACTORES = {
    auto:        0.21,  // kg CO₂ por km recorrido en auto de gasolina
    vuelo:       90,    // kg CO₂ por hora de vuelo (turista promedio)
    kwh:         0.45,  // kg CO₂ por kWh (promedio mundial; México ~0.45)
    dietaBase:   2500   // kg CO₂ base anual por alimentación (referencia)
  };

  // Promedio mundial de huella de carbono personal: ~4.8 t CO₂/año
  // Meta Acuerdo de París: 2.0 t CO₂/año per cápita para 2050
  var PROMEDIO_MUNDIAL = 4.8;
  var META_PARIS       = 2.0;

  function init() {
    var form   = document.getElementById('huella-form');
    var btn    = document.getElementById('huella-check');
    var reset  = document.getElementById('huella-reset');
    var result = document.getElementById('huella-result');
    if (!form || !btn || !result) return;

    btn.addEventListener('click', function () {
      var kmAuto   = parseFloat(form.elements['km_auto'].value) || 0;
      var vuelos   = parseFloat(form.elements['vuelos'].value)   || 0;
      var dietaF   = parseFloat(form.elements['dieta'].value)    || 1.5;
      var kwh      = parseFloat(form.elements['kwh'].value)      || 0;

      // Cálculos
      var co2Auto   = kmAuto * 52 * FACTORES.auto;                  // semanal → anual
      var co2Vuelo  = vuelos * FACTORES.vuelo;                     // ya es anual
      var co2Dieta  = FACTORES.dietaBase * dietaF;                 // factor por dieta
      var co2Kwh    = kwh * 12 * FACTORES.kwh;                     // mensual → anual

      var totalKg   = co2Auto + co2Vuelo + co2Dieta + co2Kwh;
      var totalT    = totalKg / 1000;

      // Comparación cualitativa
      var nivel, color;
      if (totalT < META_PARIS) {
        nivel = '🌱 Por debajo de la meta del Acuerdo de París (2 t/año). ¡Excelente!';
        color = 'correct';
      } else if (totalT < PROMEDIO_MUNDIAL) {
        nivel = '🌍 Por debajo del promedio mundial (4.8 t/año), pero aún arriba de la meta de 2 t/año.';
        color = 'correct';
      } else if (totalT < 8) {
        nivel = '⚠️ Por arriba del promedio mundial. Hay margen de mejora significativo.';
        color = 'wrong';
      } else {
        nivel = '🔴 Huella muy elevada. Conviene revisar transporte, dieta y consumo eléctrico.';
        color = 'wrong';
      }

      var html  = '<strong>Tu huella estimada: ' + totalT.toFixed(2) + ' toneladas de CO₂ al año</strong><br><br>';
      html += '<span class="feedback-line">🚗 Auto: '           + (co2Auto/1000).toFixed(2)  + ' t</span>';
      html += '<span class="feedback-line">✈️ Vuelos: '          + (co2Vuelo/1000).toFixed(2) + ' t</span>';
      html += '<span class="feedback-line">🍽️ Alimentación: '   + (co2Dieta/1000).toFixed(2) + ' t</span>';
      html += '<span class="feedback-line">⚡ Electricidad: '    + (co2Kwh/1000).toFixed(2)   + ' t</span>';
      html += '<br>';
      html += '<div style="margin-top: 0.5em;">' + nivel + '</div>';
      html += '<p style="margin-top: 0.6em; font-size: 0.9rem; color: var(--color-muted);">';
      html += '<em>Comparte tu resultado en los comentarios del blog y compáralo con tus compañeros. ';
      html += 'Los factores de emisión son aproximaciones promedio globales y pueden variar por país, mix eléctrico y tipo de vehículo.</em></p>';

      result.className = 'widget-result ' + color + ' show';
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
