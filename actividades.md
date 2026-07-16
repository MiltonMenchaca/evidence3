---
layout: page
title: "Actividades interactivas"
permalink: /actividades.html
---

Aquí encontrarás tres actividades para poner en práctica lo leído en las entradas del blog. Todas funcionan directamente en tu navegador, sin enviar datos a ningún servidor.

---

## 🎯 1. Trivia DUDH

<a id="trivia"></a>

Pon a prueba cuánto sabes de la Declaración Universal de los Derechos Humanos. Cada pregunta tiene una sola respuesta correcta.

<div class="widget" id="quiz-widget">
  <h3>Trivia — Declaración Universal de los Derechos Humanos</h3>
  <p class="widget-intro">Relaciona cada artículo o principio con su situación cotidiana.</p>

  <form id="quiz-form">

    <div class="widget-question">
      <p>1. ¿En qué año fue proclamada la DUDH?</p>
      <label><input type="radio" name="q1" value="a"> 1918</label>
      <label><input type="radio" name="q1" value="b"> 1948</label>
      <label><input type="radio" name="q1" value="c"> 1968</label>
      <label><input type="radio" name="q1" value="d"> 2000</label>
    </div>

    <div class="widget-question">
      <p>2. ¿Qué principio cubre principalmente el artículo 12 de la DUDH?</p>
      <label><input type="radio" name="q2" value="a"> Derecho a la educación</label>
      <label><input type="radio" name="q2" value="b"> Derecho a la privacidad — no ser objeto de injerencias arbitrarias</label>
      <label><input type="radio" name="q2" value="c"> Derecho a la propiedad</label>
      <label><input type="radio" name="q2" value="d"> Libertad de culto</label>
    </div>

    <div class="widget-question">
      <p>3. ¿Quién dirigió el comité redactor de la DUDH?</p>
      <label><input type="radio" name="q3" value="a"> Mahatma Gandhi</label>
      <label><input type="radio" name="q3" value="b"> Eleanor Roosevelt</label>
      <label><input type="radio" name="q3" value="c"> René Cassin</label>
      <label><input type="radio" name="q3" value="d"> Simone de Beauvoir</label>
    </div>

    <div class="widget-question">
      <p>4. ¿Cuántos artículos contiene la DUDH?</p>
      <label><input type="radio" name="q4" value="a"> 10</label>
      <label><input type="radio" name="q4" value="b"> 20</label>
      <label><input type="radio" name="q4" value="c"> 30</label>
      <label><input type="radio" name="q4" value="d"> 50</label>
    </div>

    <div class="widget-question">
      <p>5. ¿Cuál de estas acciones aplica mejor el artículo 12 (privacidad) en un servidor?</p>
      <label><input type="radio" name="q5" value="a"> Compartir logs con cualquier técnico que lo pida</label>
      <label><input type="radio" name="q5" value="b"> Configurar control de acceso y políticas de retención de datos</label>
      <label><input type="radio" name="q5" value="c"> Publicar la base de datos en Internet para "transparencia"</label>
      <label><input type="radio" name="q5" value="d"> Desactivar todos los respaldos por ahorrar espacio</label>
    </div>

    <div class="widget-actions">
      <button type="button" class="btn" id="quiz-check">Verificar respuestas</button>
      <button type="reset"  class="btn btn-secondary" id="quiz-reset">Reiniciar</button>
    </div>

    <div class="widget-result" id="quiz-result"></div>
  </form>
</div>

---

## 🧭 2. Autodiagnóstico de ciudadanía

<a id="diagnostico"></a>

Marca del 1 al 5 qué tanto te identificas con cada afirmación (1 = nada, 5 = mucho). Al final verás qué perfil de Westheimer y Kahne predomina en tu forma de ejercer ciudadanía.

<div class="widget" id="ciudadania-widget">
  <h3>¿Ciudadano responsable, participativo o por justicia?</h3>
  <p class="widget-intro">9 afirmaciones · 3 por cada tipo de ciudadanía. Suma tus puntos al final.</p>

  <form id="ciudadania-form">

    <div class="widget-question">
      <p>1. Dono o ayudo cuando hay campañas locales.</p>
      <div class="widget-scale">
        <label><input type="radio" name="c1" value="1"><span>1</span></label>
        <label><input type="radio" name="c1" value="2"><span>2</span></label>
        <label><input type="radio" name="c1" value="3"><span>3</span></label>
        <label><input type="radio" name="c1" value="4"><span>4</span></label>
        <label><input type="radio" name="c1" value="5"><span>5</span></label>
      </div>
    </div>

    <div class="widget-question">
      <p>2. Asisto a reuniones vecinales o asambleas para organizarme con otros.</p>
      <div class="widget-scale">
        <label><input type="radio" name="c2" value="1"><span>1</span></label>
        <label><input type="radio" name="c2" value="2"><span>2</span></label>
        <label><input type="radio" name="c2" value="3"><span>3</span></label>
        <label><input type="radio" name="c2" value="4"><span>4</span></label>
        <label><input type="radio" name="c2" value="5"><span>5</span></label>
      </div>
    </div>

    <div class="widget-question">
      <p>3. Cuando veo un problema estructural, busco entender sus causas antes de actuar.</p>
      <div class="widget-scale">
        <label><input type="radio" name="c3" value="1"><span>1</span></label>
        <label><input type="radio" name="c3" value="2"><span>2</span></label>
        <label><input type="radio" name="c3" value="3"><span>3</span></label>
        <label><input type="radio" name="c3" value="4"><span>4</span></label>
        <label><input type="radio" name="c3" value="5"><span>5</span></label>
      </div>
    </div>

    <div class="widget-question">
      <p>4. Cumplo las normas aunque no me gusten.</p>
      <div class="widget-scale">
        <label><input type="radio" name="c4" value="1"><span>1</span></label>
        <label><input type="radio" name="c4" value="2"><span>2</span></label>
        <label><input type="radio" name="c4" value="3"><span>3</span></label>
        <label><input type="radio" name="c4" value="4"><span>4</span></label>
        <label><input type="radio" name="c4" value="5"><span>5</span></label>
      </div>
    </div>

    <div class="widget-question">
      <p>5. Organizo o participo activamente en actividades de mi comunidad.</p>
      <div class="widget-scale">
        <label><input type="radio" name="c5" value="1"><span>1</span></label>
        <label><input type="radio" name="c5" value="2"><span>2</span></label>
        <label><input type="radio" name="c5" value="3"><span>3</span></label>
        <label><input type="radio" name="c5" value="4"><span>4</span></label>
        <label><input type="radio" name="c5" value="5"><span>5</span></label>
      </div>
    </div>

    <div class="widget-question">
      <p>6. Prefiero atacar la causa de un problema que solo aliviar sus síntomas.</p>
      <div class="widget-scale">
        <label><input type="radio" name="c6" value="1"><span>1</span></label>
        <label><input type="radio" name="c6" value="2"><span>2</span></label>
        <label><input type="radio" name="c6" value="3"><span>3</span></label>
        <label><input type="radio" name="c6" value="4"><span>4</span></label>
        <label><input type="radio" name="c6" value="5"><span>5</span></label>
      </div>
    </div>

    <div class="widget-question">
      <p>7. Cuando alguien necesita ayuda concreta, respondo de inmediato.</p>
      <div class="widget-scale">
        <label><input type="radio" name="c7" value="1"><span>1</span></label>
        <label><input type="radio" name="c7" value="2"><span>2</span></label>
        <label><input type="radio" name="c7" value="3"><span>3</span></label>
        <label><input type="radio" name="c7" value="4"><span>4</span></label>
        <label><input type="radio" name="c7" value="5"><span>5</span></label>
      </div>
    </div>

    <div class="widget-question">
      <p>8. Me informo antes de votar y participo en debates públicos.</p>
      <div class="widget-scale">
        <label><input type="radio" name="c8" value="1"><span>1</span></label>
        <label><input type="radio" name="c8" value="2"><span>2</span></label>
        <label><input type="radio" name="c8" value="3"><span>3</span></label>
        <label><input type="radio" name="c8" value="4"><span>4</span></label>
        <label><input type="radio" name="c8" value="5"><span>5</span></label>
      </div>
    </div>

    <div class="widget-question">
      <p>9. Me involucro en movimientos o proyectos que buscan cambios sistémicos.</p>
      <div class="widget-scale">
        <label><input type="radio" name="c9" value="1"><span>1</span></label>
        <label><input type="radio" name="c9" value="2"><span>2</span></label>
        <label><input type="radio" name="c9" value="3"><span>3</span></label>
        <label><input type="radio" name="c9" value="4"><span>4</span></label>
        <label><input type="radio" name="c9" value="5"><span>5</span></label>
      </div>
    </div>

    <div class="widget-actions">
      <button type="button" class="btn" id="ciudadania-check">Ver mi perfil</button>
      <button type="reset"  class="btn btn-secondary" id="ciudadania-reset">Reiniciar</button>
    </div>

    <div class="widget-result" id="ciudadania-result"></div>
  </form>

  <p style="font-size: 0.85rem; color: var(--color-muted); margin-top: 1em;">
    <em>Indicaciones: las preguntas 1, 4 y 7 corresponden al perfil <strong>responsable</strong>; las preguntas 2, 5 y 8 al perfil <strong>participativo</strong>; las preguntas 3, 6 y 9 al perfil <strong>por justicia</strong> (Westheimer y Kahne, citados en Vega, 2015).</em>
  </p>
</div>

---

## 🌍 3. Calculadora de huella de carbono

<a id="huella"></a>

Estima tu huella de carbono personal anual con base en cuatro variables cotidianas. Los factores de emisión son aproximaciones promedio globales.

<div class="widget" id="huella-widget">
  <h3>Calculadora de huella de carbono personal</h3>
  <p class="widget-intro">Ingresa los valores en tu situación actual. El resultado se actualiza al hacer clic en "Calcular".</p>

  <form id="huella-form">

    <div class="widget-question">
      <p><strong>Transporte en auto:</strong> ¿cuántos kilómetros recorres en auto por semana?</p>
      <input type="number" name="km_auto" min="0" step="1" value="0"> km / semana
    </div>

    <div class="widget-question">
      <p><strong>Vuelos:</strong> ¿cuántas horas de vuelo realizas al año?</p>
      <input type="number" name="vuelos" min="0" step="1" value="0"> horas / año
    </div>

    <div class="widget-question">
      <p><strong>Dieta:</strong> ¿cuál describes mejor tu alimentación habitual?</p>
      <select name="dieta" style="width: 100%; padding: 0.4em; border: 1px solid var(--color-border); border-radius: 3px;">
        <option value="1.7">Carnívora (carne a diario)</option>
        <option value="1.5" selected>Omnívora promedio</option>
        <option value="1.2">Vegetariana (con lácteos y huevos)</option>
        <option value="0.8">Vegana</option>
      </select>
    </div>

    <div class="widget-question">
      <p><strong>Electricidad en casa:</strong> ¿cuántos kWh consumes al mes? (en México: 200–400 kWh es un hogar promedio)</p>
      <input type="number" name="kwh" min="0" step="10" value="250"> kWh / mes
    </div>

    <div class="widget-actions">
      <button type="button" class="btn" id="huella-check">Calcular mi huella</button>
      <button type="reset"  class="btn btn-secondary" id="huella-reset">Reiniciar</button>
    </div>

    <div class="widget-result" id="huella-result"></div>
  </form>

  <p style="font-size: 0.85rem; color: var(--color-muted); margin-top: 1em;">
    <em>Factores de emisión usados (aprox.): 0.21 kg CO₂/km en auto · 0.25 kg CO₂/km-hora de vuelo · dieta (factor multiplicativo sobre 2.5 t base) · 0.45 kg CO₂/kWh eléctrico.</em>
  </p>
</div>

---

## ✍️ 4. Dinámica: "Un día en los zapatos del otro"

<a id="zapatos"></a>

Esta no es interactiva en código, pero sí lo es en papel. Dedica 15 minutos a escribir:

1. Elige una persona con una vida muy distinta a la tuya (otra profesión, otro país, otra generación, otra condición).
2. Escribe un día normal en su vida **desde su voz**, en primera persona. No juzgues; solo describe lo que haría, sentiría y pensaría.
3. Al terminar, reflexiona: *¿qué di por sentado hoy que esa persona no puede dar por sentado?*

Esta actividad está inspirada en el ejercicio de empatía activa de Carl Rogers (citado por Barreda, 2020).

---

<p style="text-align: center; margin-top: 2em;">
  <a href="{{ '/2026/07/15/conclusion-reflexion/' | relative_url }}" class="btn">Leer la conclusión y reflexión →</a>
</p>

<script src="{{ '/assets/js/quiz.js' | relative_url }}"></script>
<script src="{{ '/assets/js/ciudadania.js' | relative_url }}"></script>
<script src="{{ '/assets/js/huella.js' | relative_url }}"></script>
