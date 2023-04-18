describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have working number buttons", () => {
    cy.get("#number2").click();
    cy.get(".display").should("contain", "2");
  });
  it("should have working number and total buttons", () => {
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "2");
  });
  it("should have working arithmetical operation and display result", () => {
    cy.get("#number2").click();
    cy.get("#operator-add").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "4");
  });
  it("should have working multiple operations be chained together", () => {
    cy.get("#number3").click();
    cy.get("#operator-add").click();
    cy.get("#number1").click();
    cy.get("#operator-subtract").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "2");
  });
  it("should have output as expected for positive numbers", () => {
    cy.get("#number2").click();
    cy.get("#operator-add").click();
    cy.get("#number1").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "3");
  });
  it("should have output as expected for negative numbers", () => {
    cy.get("#number2").click();
    cy.get("#operator-subtract").click();
    cy.get("#number5").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "-3");
  });
  it("should have output as expected for decimal numbers", () => {
    cy.get("#number0").click();
    cy.get("#decimal").click();
    cy.get("#number6").click();
    cy.get("#operator-multiply").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "1.2");
  });
  it("should have output as expected very large numbers", () => {
    cy.get("#number1").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get(".display").should("contain", "1e+21");
  });
  it("should get infinity if divide by 0", () => {
    cy.get("#number6").click();
    cy.get("#operator-divide").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "Infinity");
  });
});
