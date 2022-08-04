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
| `options` | Las opciones por defecto del juego | `DefaultGameData`

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
| `maxGames` | El máximo de juegos simultáneos que se pueden hacer | `undefined`
| `maxMovements` | El máximo de movimientos que puede un jugador hacer | `3`
| `maxPlayers` | El máximo de jugadores que pueden acceder a la partida | `BoardData.maxPlayers`

## Métodos
La clase cuenta con funciones para crear tus juegos de forma más sencilla y ver y activar propiedades.

### `initGame(options)`
El inicializador de cualquier partida

Por construir

| Parámetro | Descripción | Por defecto
| - | - | - |
| options | Las opciones por defecto del juego | `GameData`

### `getGames()`
Obtén todos los juegos actuales. Si no está activada la propiedad `DefaultGameData.registerGames`, aparecerá un objeto con un contador de las partidas activas y más estadísticas.


### `registerGames(boolean)`
Activa y desactiva el registro de juegos. Próximamente opciones de registro

| Parámetro | Descripción | Por defecto
| - | - | - |
| boolean | Un boleano con para habilitar o deshabilitar los registros | `undefined`

<hr>

Si quieres leer más sobre las propiedades de solo lectura, puedes leer [aquí](https://github.com/167BOT/tictactoejs)
