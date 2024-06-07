const assert = require("assert");
const { helloWorld } = require("./main");

describe("Pruebas unitarias", () => {
    it("Debe imprimir '¡Hola Mundo!'", () => {
        assert.strictEqual(helloWorld(), "¡Hola Mundo!");
    });
});
