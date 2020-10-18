const locators = {
    PLATEAU: {
        MENU: ':nth-child(3) > .v-list-group__header > .left-drawer-item > .v-list-item__content > .v-list-item__title',
        CREATE_NEW: '.pb-6 > .v-btn > .v-btn__content',
        CODE: ':nth-child(1) > .v-input',
        NAME: ':nth-child(2) > .v-input',
        X: ':nth-child(3) > .v-input',
        Y: ':nth-child(4) > .v-input',
        CODE_MESSAGE: ':nth-child(1) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message',
        NAME_MESSAGE: ':nth-child(2) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message',
        X_MESSAGE: ':nth-child(3) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message',
        Y_MESSAGE: ':nth-child(4) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message',
        COMPANY: '.row > :nth-child(5)',
        BTN_SAVE: '.v-card__actions > .theme--light > .v-btn__content',
        BTN_CLOSE: '.v-card__actions > .v-btn--flat',
        ERROR_MESSAGE: '.v-snack__content',
        BTN_DELETE: '.mdi-delete'
    },

    ROVER: {
        MENU: ':nth-child(4) > .v-list-group__header > .left-drawer-item > .v-list-item__content > .v-list-item__title',
        CREATE_NEW: ".pb-6 > .v-btn > .v-btn__content",
        CODE: '.row > :nth-child(1) > .v-input',
        NAME: ':nth-child(2) > .v-input',
        X: ':nth-child(3) > .v-input',
        Y: ':nth-child(4) > .v-input',
        CARDINAL: ':nth-child(5) > .v-input',
        CODE_MESSAGE: ':nth-child(1) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message',
        NAME_MESSAGE: ':nth-child(2) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message',
        X_MESSAGE: ':nth-child(3) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message',
        Y_MESSAGE: ':nth-child(4) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message',
        CARDINAL_MESSAGE: ':nth-child(5) > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message',
        CARDINAL_ERROR: '.row > :nth-child(5)',
        COMPANY: ':nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon',
        BTN_SAVE: '.v-card__actions > .theme--light > .v-btn__content',
        BTN_EDIT: '.mdi-pencil',
        BTN_DELETE: '.mdi-delete',
        BTN_MOVE: '.mdi-arrow-all',
        MOVE_INSTRUCTIONS: '.col > .v-input',
        MOVE_SAVE: '.v-card__actions > .theme--light > .v-btn__content',
        MOVE_ERROR: '.v-messages__message',
        NEW_POSITION_X: 'tbody > tr > :nth-child(3)',
        NEW_POSITION_Y: 'tbody > tr > :nth-child(4)',
        NEW_POSITION_CARDINAL: 'tbody > tr > :nth-child(5)',
        
    }
}

export default locators;


