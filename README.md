# Ética en código — Blog académico

Blog académico de la Evidencia 3 (Parte 2) del curso **Ética profesional y ciudadanía (LSHU1802)** de la **Universidad Tecmilenio**.

Sitio publicado en GitHub Pages: **https://miltonmenchaca.github.io/evidence3/**

## Autor

**Milton Emilio Menchaca Manero**  
Matrícula: 2901032  
Ingeniería en Desarrollo de Software  
Villahermosa, Tabasco — Julio 2026

## Stack técnico

- [Jekyll](https://jekyllrb.com/) 4.x — generador de sitios estáticos
- Tema [Minima](https://github.com/jekyll/minima) — nativo de GitHub Pages
- HTML5 + CSS3 + JavaScript vanilla (sin frameworks)
- Hospedaje: [GitHub Pages](https://pages.github.com/)

## Estructura

```
.
├── _config.yml                 Configuración de Jekyll
├── _posts/                     Entradas del blog (Markdown)
├── _includes/                  Widgets reusables
├── _layouts/                   Layouts personalizados
├── assets/
│   ├── css/style.css           Tema académico clásico
│   └── js/                     Lógica de widgets interactivos
├── index.md                    Portada y bienvenida
├── actividades.md              Trivia + autodiagnóstico + calculadora
└── referencias.md              Referencias en formato APA
```

## Desarrollo local

```bash
# Instalar Ruby + Jekyll (una sola vez)
gem install jekyll bundler

# Clonar e instalar dependencias
git clone https://github.com/MiltonMenchaca/evidence3.git
cd evidence3
bundle install

# Servidor local con recarga automática
bundle exec jekyll serve

# Abrir en el navegador
# http://localhost:4000/evidence3/
```

## Publicación

El sitio se publica automáticamente con cada `push` a la rama `main`, gracias a GitHub Pages. No requiere build manual.

## Contenido

5 entradas sobre filosofía aplicada al trabajo técnico en TI y ciberseguridad:

1. Los códigos que nos toca a todos — DUDH y Carta de la Tierra
2. ¿Qué tipo de ciudadano eres? — Conceptos de ciudadanía
3. El término medio — Ética aristotélica
4. Ponerse en los zapatos del otro — Entendimiento intercultural
5. Aprendemos a cuidar o perecemos — Desarrollo sustentable

## Licencia

Texto del blog © 2026 Milton Emilio Menchaca Manero.  
Código bajo licencia MIT.
