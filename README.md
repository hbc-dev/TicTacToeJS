# TicTacToeJS
## Introducción
Sencillo módulo para poder crear partidas del tradicional Tic Tac Toe (tres en raya).

¡Configura los tableros, las normas, las fichas de juego, los jugadores e incluso crea poderes para tus partidas!

## Instalación
Módulo aún en Alpha 0.0.1.

Aún está imposibilitada la opción de crear partidas.

¡Pásame tus sugerencias por [aquí](https://github.com/167BOT/tictactoejs)!

## Clase
La clase `Game` instancia los valores por defecto de tus partidas que podrás cambiar al iniciarlas. Sirve como template para crear tus partidas.

| Parámetro | Descripción | Por defecto
| - | - | - |
| `options` | Las opciones por defecto del juego | `GameData`

| Propiedades de `options` | Descripción | Por defecto
| - | - | - |
| `defaultBoard` | Las propiedades del tablero | `boardData \| 'default'`
| `defaultRecords` | Las fichas de cada jugador en orden de introducción | `['⭕', '❌', '❗', '❓'] \| 'default'`
| `registerGames` | Registra todas las partidas en caché para poder manejarlas | `true`
| `defaultRules` | Las reglas por defecto del juego (*aún en desarrollo* ⚠️) | `RulesData`

| Propiedades de `BoardData` | Descripción | Por defecto
| - | - | - |
| `anc` | El ancho del tablero | `3`
| `alt` | El alto del tablero | `3`

| Propiedades de `RulesData` | Descripción | Por defecto
| - | - | - |
| `maxPlayers` | El máximo de jugadores que pueden acceder a la partida | `BoardData.maxPlayers`

Si quieres leer más sobre las propiedades de solo lectura, puedes leer [aquí](https://github.com/167BOT/tictactoejs)
