# cocktailApp - Tests con Jest y react testing library

Para correr las pruebas:
> yarn install

> yarn test 
(Corre todas las pruebas realizadas hasta el momento)

### En el proyecto ya se realizó la configuración de Jest, pero a modo de documentación dejo los pasos que se siguieron

> yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react 

> yarn add --dev @testing-library/react @types/jest jest-environment-jsdom

> yarn add --dev whatwg-fetch

- Actualizar el script en el package.json
```
"scripts: {
  "test": "jest --watchAll"
```
- configurar babel.config.js
```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```
- crear un archivo jest.config.js
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```
- crear un archivo jest.setup.js
```
import 'whatwg-fetch'; // 
```
> Nota: En el caso de tener un error, se puede remover el modules en el package.json 

#### Luego de toda la instalación y configuración 
1) Crear la carpeta tests
2) Replicar dentro de esa carpeta la misma estructura de archivos que tenemos en nuestra app.
3) Trazar la ruta crítica.

- Algunos de los tests realizados fueron la creación del snapshot,para disparar eventos se utilizó fireEvent de react testing library, la mayoría de las veces se accedió a los elementos con getByRole
- toHaveBeenCalled nos permite saber si se llamó una función, si se le pasaron parámetros, etc.



Para saber más:
- https://testing-library.com/docs/react-testing-library/intro/
- https://jestjs.io/

Podés ver el proyecto desplegado en: 
https://pruebas-test.netlify.app/
