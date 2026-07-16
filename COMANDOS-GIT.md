# Comandos Git para publicar el blog

Abre **PowerShell** o **Git Bash** en `C:\Users\PC\Desktop\evidencia3` y ejecuta los siguientes comandos en orden.

## 1. Configurar identidad (solo la primera vez)

```bash
git config --global user.name  "Milton Emilio Menchaca Manero"
git config --global user.email "tu-email-de-github@example.com"
```

> Usa aquí el **mismo email** que tienes registrado en tu cuenta de GitHub.

## 2. Inicializar el repositorio

```bash
cd C:\Users\PC\Desktop\evidencia3
git init
git branch -M main
```

## 3. Conectar con el repositorio remoto

```bash
git remote add origin https://github.com/MiltonMenchaca/evidence3.git
```

## 4. Verificar estado antes del primer commit

```bash
git status
```

Deberías ver los archivos del blog en verde/naranja (los `.docx` deberían NO aparecer gracias al `.gitignore`).

## 5. Hacer el primer commit

```bash
git add .
git commit -m "Blog Ética en código - Evidencia 3 (Jekyll + GitHub Pages)"
```

## 6. Subir a GitHub

```bash
git push -u origin main
```

Cuando lo pida, **inicia sesión en GitHub** con tu cuenta. Si tienes autenticación de dos factores, te pedirá un código o PAT (Personal Access Token).

### Si pide contraseña y no funciona:

GitHub ya no acepta contraseñas para `git push`. Necesitas un **Personal Access Token (PAT)**:

1. GitHub → clic en tu foto (esquina superior derecha) → **Settings**
2. Scroll hasta el final → **Developer settings**
3. **Personal access tokens** → **Tokens (classic)** → **Generate new token**
4. Scope: marca solo **`repo`**
5. Expira: 30 días (suficiente para esta entrega)
6. Cópialo y úsalo como contraseña cuando `git push` lo pida

## 7. Activar GitHub Pages

Una vez que el código esté en GitHub:

1. Abre https://github.com/MiltonMenchaca/evidence3
2. **Settings** → **Pages** (en el menú lateral izquierdo)
3. En **Source** selecciona **Deploy from a branch**
4. En **Branch** elige **`main`** y la carpeta **`/ (root)`**
5. Clic en **Save**
6. Espera 1-2 minutos. La URL será:

```
https://miltonmenchaca.github.io/evidence3/
```

## 8. Verificar

- Abre la URL en tu navegador.
- Revisa que las 5 entradas, las actividades, la conclusión y las referencias se vean bien.
- Prueba los 3 widgets (quiz, autodiagnóstico, calculadora).
- Si ves un 404: revisa que Pages esté apuntando a `main / (root)` y que la build haya terminado (sección "Actions" en GitHub).

## 9. Actualizar el sitio después de un cambio

```bash
git add .
git commit -m "Descripción breve del cambio"
git push
```

GitHub Pages se reconstruirá solo en 1-2 minutos.

---

## Respaldo: si algo falla con el remote

```bash
# Ver remote actual
git remote -v

# Si está mal configurado
git remote remove origin
git remote add origin https://github.com/MiltonMenchaca/evidence3.git

# Forzar subida (cuidado: sobrescribe el remoto)
git push -u origin main --force
```

---

## Soporte adicional

- **Documentación GitHub Pages:** https://docs.github.com/es/pages
- **Documentación Jekyll:** https://jekyllrb.com/docs/
- **Si ves error 404 en assets:** verifica que el build se completó en `Actions` y que `_config.yml` tiene `baseurl: ""`.
