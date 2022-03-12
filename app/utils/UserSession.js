const fs = require("fs");
const path = require("path");

module.exports = class UserSession {
    constructor(){
        this.discord_token = "";
        this.addons = [];
    }

    getAddons(){
        return this.addons;
    }

    getToken(){
        return this.discord_token;
    }

};