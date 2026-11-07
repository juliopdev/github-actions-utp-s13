# github-actions-utp-s13

Pequeña librería de **utilidades matemáticas** en JavaScript, usada como demo de
**revisión automática de código con GitHub Actions**.

## ¿Qué hace?

En cada `push` (y en cada pull request), GitHub Actions ejecuta automáticamente:

1. **ESLint** (`npm run lint`) — revisa el estilo y los errores del código.
2. **Tests** (`npm test`) — ejecuta las pruebas con el runner nativo de Node.js.

Si algo falla, el workflow sale en **rojo** ❌. Si todo pasa, sale en **verde** ✅.

## Funciones

| Función | Descripción |
|---|---|
| `add(a, b)` | Suma |
| `subtract(a, b)` | Resta |
| `multiply(a, b)` | Multiplicación |
| `divide(a, b)` | División (error si `b === 0`) |
| `isPrime(n)` | ¿`n` es primo? |
| `factorial(n)` | Factorial de `n` |

## Uso local

```bash
npm install
npm run lint   # revisar el código
npm test       # ejecutar los tests
```

## Estructura

```
.
├── .github/workflows/ci.yml   # workflow de GitHub Actions
├── src/mathUtils.js           # la librería
├── test/mathUtils.test.js     # los tests
├── eslint.config.js           # configuración de ESLint
└── package.json
```

---

Proyecto de demostración · UTP Ica · Herramientas de Desarrollo (S13)
