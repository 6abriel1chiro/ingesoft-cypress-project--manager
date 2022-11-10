import Materia from "./materia.js";

describe("CREAR MATERIA", () => {
    let materia = new Materia();
    it("Deberia devolver la sigla de la materia y el nombre", () => {
        materia.crearMateria("LEN-5 Ingles V","Aprende ingles", "Susan");
        expect(materia.obtenerNombre()).toEqual("LEN-5 Ingles V");
    });
    
    it("Deberia devolver una corta descripcion de la materia", () => {
        materia.crearMateria("LEN-5 Ingles V","Aprende ingles", "Susan");
        expect(materia.obtenerDescripcion()).toEqual("Aprende ingles");
    });
    it("Deberia devolver el docente encargado de la materia", () => {
        materia.crearMateria("LEN-5 Ingles V","Aprende ingles", "Susan");
        expect(materia.obtenerDocente()).toEqual("Susan");
    });
    it("Deberia mostrar todos los datos de la materia en un formato", () => {
        materia.crearMateria("LEN-5 Ingles V","Aprende ingles", "Susan");
        expect(materia. obtenerTodosLosDatos()).toEqual("<p> Materia:LEN-5 Ingles V<p><p> Tarea:Aprende ingles<p><p> Fecha:Susan<p></p>");
    });
});