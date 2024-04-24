"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getOtherEmail = (users, currentUser) => {
    return users === null || users === void 0 ? void 0 : users.filter(user => user !== currentUser.email)[0];
};
exports.default = getOtherEmail;
