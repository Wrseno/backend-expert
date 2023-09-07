const createServer = require("./createServer");
const MathBasic = require("./MathBasic");
const FigureCalculator = require("./FigureCalculator");

describe("A HTTP Server", () => {
  describe("when GET /add/{a}/{b}", () => {
    it("should respond with a status code of 200 and the payload value is addition result of a and b correctly", async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, "add");
      const server = createServer({mathBasic: MathBasic});

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/add/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(30);
      expect(spyAdd).toBeCalledWith(a, b);
    });
  });

  describe("when GET /subtract/{a}/{b}", () => {
    it("should respond with a status code of 200 and the payload value is subtraction result of a and b correctly", async () => {
      // Arrange
      const a = 12;
      const b = 8;
      const spySubtract = jest.spyOn(MathBasic, "subtract");
      const server = createServer({mathBasic: MathBasic});

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/subtract/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(4);
      expect(spySubtract).toBeCalledWith(a, b);
    });
  });

  describe("when GET /multiply/{a}/{b}", () => {
    it("should respond with a status code of 200 and the payload value is multiply result of a and b correctly", async () => {
      // Arrange
      const a = 5;
      const b = 11;
      const spyMultiply = jest.spyOn(MathBasic, "multiply");
      const server = createServer({mathBasic: MathBasic});

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/multiply/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(55);
      expect(spyMultiply).toBeCalledWith(a, b);
    });
  });

  describe("when GET /divide/{a}/{b}", () => {
    it("should respond with a status code of 200 and the payload value is dividen result of a and b correctly", async () => {
      // Arrange
      const a = 42;
      const b = 2;
      const spyDivide = jest.spyOn(MathBasic, "divide");
      const server = createServer({mathBasic: MathBasic});

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/divide/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(21);
      expect(spyDivide).toBeCalledWith(a, b);
    });
  });

  describe("when GET /rectangle/perimeter/{length}/{width}", () => {
    it("should respond with a status code of 200 and the payload return correct value based on rectangle perimeter formula", async () => {
      // Arrange
      const length = 20;
      const width = 10;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyCalculateRectanglePerimeter = jest.spyOn(
        figureCalculator,
        "calculateRectanglePerimeter"
      );
      const server = createServer({figureCalculator});

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/rectangle/perimeter/${length}/${width}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(60);
      expect(spyCalculateRectanglePerimeter).toBeCalledWith(length, width);
    });
  });

  describe("when GET /rectangle/area/{length}/{width}", () => {
    it("should respond with a status code of 200 and the payload return correct value based on rectangle area formula", async () => {
      // Arrange
      const length = 20;
      const width = 15;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyCalculateRectangleArea = jest.spyOn(
        figureCalculator,
        "calculateRectangleArea"
      );
      const server = createServer({figureCalculator});

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/rectangle/area/${length}/${width}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(300);
      expect(spyCalculateRectangleArea).toBeCalledWith(length, width);
    });
  });

  describe("when GET /triangle/perimeter/{sideA}/{sideB}/{base}", () => {
    it("should respond with a status code of 200 and the payload return correct value based on triangle perimeter formula", async () => {
      // Arrange
      const sideA = 20;
      const sideB = 20;
      const base = 15;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyCalculateTrianglePerimeter = jest.spyOn(
        figureCalculator,
        "calculateTrianglePerimeter"
      );
      const server = createServer({figureCalculator});

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/triangle/perimeter/${sideA}/${sideB}/${base}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(55);
      expect(spyCalculateTrianglePerimeter).toBeCalledWith(sideA, sideB, base);
    });
  });

  describe("when GET /triangle/area/{base}/{height}", () => {
    it("should respond with a status code of 200 and the payload return correct value based on triangle area formula", async () => {
      // Arrange
      const base = 15;
      const height = 20;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyCalculateTriangleArea = jest.spyOn(
        figureCalculator,
        "calculateTriangleArea"
      );
      const server = createServer({figureCalculator});

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/triangle/area/${base}/${height}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(150);
      expect(spyCalculateTriangleArea).toBeCalledWith(base, height);
    });
  });
});
