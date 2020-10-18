/// <reference types="cypress" />

import env from '../support/env'
import loc from '../support/locators'
import '../support/commands'

before(() => {
    cy.exec('resetdb.bat')
})

describe('Voyager Mars Rovers QA', () => {

    context('Define the plateau size by company like describe on plateau', () => {

        it('Running enviroment', () => {
            cy.visit(env.LOCALHOST);
        });

        it('Inserting a new plateau and testing the error when we keep some blank fields', () => {
            cy.get(loc.PLATEAU.MENU).click();
            cy.get(loc.PLATEAU.CREATE_NEW).click();
            cy.get(loc.PLATEAU.BTN_SAVE).click();
            cy.get(loc.PLATEAU.CODE_MESSAGE).should("contain", 'Required.')
            cy.get(loc.PLATEAU.NAME_MESSAGE).should("contain", 'Required.')
            cy.get(loc.PLATEAU.X_MESSAGE).should("contain", 'Required.')
            cy.get(loc.PLATEAU.Y_MESSAGE).should("contain", 'Required.')

        });

        it('Inserting a new plateau filling all the fields', () => {
            const uuid = () => Cypress._.random(0, 1e6)
            const id = uuid()
            const testname = `testname${id}`
            cy.get(".row > :nth-child(1) > .v-input").type(id)
            cy.get(":nth-child(2) > .v-input").type(testname)
            cy.get(loc.PLATEAU.X).type(2)
            cy.get(loc.PLATEAU.Y).type(5)
            cy.get(loc.PLATEAU.COMPANY).type("{downarrow} {enter}")
            cy.get(loc.PLATEAU.BTN_SAVE).click();

        });

        it('Inserting a new plateau with the same information to check the error mensage', () => {
            cy.get(loc.PLATEAU.CREATE_NEW).click();
            const uuid = () => Cypress._.random(0, 1e6)
            const id = uuid()
            const testname = `testname${id}`
            cy.get(".row > :nth-child(1) > .v-input").type(id);
            cy.get(":nth-child(2) > .v-input").type(testname);
            cy.get(loc.PLATEAU.X).type(2);
            cy.get(loc.PLATEAU.Y).type(5);
            cy.get(loc.PLATEAU.COMPANY).type("{downarrow} {enter}")
            cy.get(loc.PLATEAU.BTN_SAVE).click();
            cy.get(loc.PLATEAU.ERROR_MESSAGE).should('exist');
        });

        it('Deleting the plateau to check the delete function', () => {
            cy.get(loc.PLATEAU.BTN_DELETE).click({ force: true });
            cy.get(loc.PLATEAU.BTN_CLOSE).click({ force: true });
        });

    });

    context("Create, update and delete the company's rovers", () => {

        it('Inserting a new plateau for some company', () => {
            cy.visit(env.LOCALHOST);
            cy.get(loc.PLATEAU.MENU).click();
            cy.get(loc.PLATEAU.CREATE_NEW).click();
            const uuid = () => Cypress._.random(0, 1e6)
            const id = uuid()
            const testname = `testname${id}`
            cy.get(".row > :nth-child(1) > .v-input").type(id);
            cy.get(":nth-child(2) > .v-input").type(testname);
            cy.get(loc.PLATEAU.X).type(2);
            cy.get(loc.PLATEAU.Y).type(5);
            cy.get(loc.PLATEAU.COMPANY).type("{downarrow} {enter}")
            cy.get(loc.PLATEAU.BTN_SAVE).click();
        });

        it('Inserting a new rover for this company and testing the error when we keep some blank fields', () => {

            cy.visit(env.LOCALHOST);
            cy.get(loc.ROVER.MENU).click();
            cy.get(loc.ROVER.CREATE_NEW).click();
            cy.get(loc.ROVER.BTN_SAVE).click();
            cy.get(loc.ROVER.CODE_MESSAGE).should("contain", 'Required.')
            cy.get(loc.ROVER.NAME_MESSAGE).should("contain", 'Required.')
            cy.get(loc.ROVER.X_MESSAGE).should("contain", 'Required.')
            cy.get(loc.ROVER.Y_MESSAGE).should("contain", 'Required.')
            cy.get(loc.ROVER.CARDINAL_MESSAGE).should("contain", 'Required.')
        });

        it('Inserting a new rover for this company filling all the fields', () => {
            const uuid2 = () => Cypress._.random(0, 1e6)
            const id2 = uuid2()
            const testname2 = `testname${id2}`
            cy.get(loc.ROVER.CODE).type(id2);
            cy.get(loc.ROVER.NAME).type(testname2);
            cy.get(loc.ROVER.X).type(1);
            cy.get(loc.ROVER.Y).type(2);
            cy.get(loc.ROVER.CARDINAL).type('e');
            cy.get(loc.ROVER.COMPANY).type("{downarrow} {enter}")
            cy.get(loc.ROVER.BTN_SAVE).click()
            cy.get(loc.ROVER.CARDINAL_ERROR).should("contain", 'Invalid chars. Only accept one occurrence of S (South), N (North), W (West) or E (East)')
            cy.get(loc.ROVER.CARDINAL).type("{backspace}E");
            cy.get(loc.ROVER.BTN_SAVE).click()

        });

        it('Updating a rover', () => {
            cy.get(loc.ROVER.BTN_EDIT).click({ multiple: true });
            cy.get(loc.ROVER.CARDINAL).type("{backspace}N");
            cy.get(loc.ROVER.BTN_SAVE).click();

        });

        it('Deleting a rover', () => {
            cy.get(loc.ROVER.BTN_DELETE).click({ multiple: true });

        });

    })

    context("Add the rover landing position, send commands to the rovers and check the rover new position", () => {

        it('Adding a rover', () => {

            cy.visit(env.LOCALHOST);
            cy.get(loc.ROVER.MENU).click();
            cy.get(loc.ROVER.CREATE_NEW).click();
            const uuid2 = () => Cypress._.random(0, 1e6)
            const id2 = uuid2()
            const testname2 = `testname${id2}`
            cy.get(loc.ROVER.CODE).type(id2);
            cy.get(loc.ROVER.NAME).type(testname2);
            cy.get(loc.ROVER.X).type(1);
            cy.get(loc.ROVER.Y).type(2);
            cy.get(loc.ROVER.CARDINAL).type("E");
            cy.get(loc.ROVER.COMPANY).type("{downarrow} {enter}")
            cy.get(loc.ROVER.BTN_SAVE).click()

        });

        it('Sending new command position to a rover', () => {
            cy.get(loc.ROVER.BTN_MOVE).click();
            cy.get(loc.ROVER.MOVE_INSTRUCTIONS).type('l');
            cy.get(loc.ROVER.MOVE_ERROR).should("contain", "Invalid chars. Only accept L, R or M")
            cy.get(loc.ROVER.MOVE_INSTRUCTIONS).type("{backspace}L");
            cy.get(loc.ROVER.MOVE_SAVE).click();
            
        });

        it('Checking the new position', () => {
            cy.get(loc.ROVER.NEW_POSITION_CARDINAL).should("contain", 'N');

        });
    })

    context("Use the coordinates and command patterns like it is described on Voyager Mars Rover, Rover and Commands Example", () => {

        it('Sending new command position to a rover', () => {
            cy.get(loc.ROVER.BTN_MOVE).click();
            cy.get(loc.ROVER.MOVE_INSTRUCTIONS).type('LMLMLMRRM');
            cy.get(loc.ROVER.MOVE_SAVE).click();

        });

        it('Checking the new position', () => {
            cy.get(loc.ROVER.NEW_POSITION_X).should("contain", '0');
            cy.get(loc.ROVER.NEW_POSITION_Y).should("contain", '1');
            cy.get(loc.ROVER.NEW_POSITION_CARDINAL).should("contain", 'W');

        });

    })

})