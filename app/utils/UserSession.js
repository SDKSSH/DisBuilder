const fs = require("fs");
const path = require("path");

module.exports = class UserSession {
    constructor(){
        this.discord_token = "";
        this.addons = [];
        this.load();
    }

    getAddons(){
        return this.addons;
    }

    getToken(){
        return this.discord_token;
    }

    setToken(token){
        this.discord_token = token;
    }
    
    load(){
        if(fs.existsSync(path.join(__dirname, "../../config.json"))){
            const file = require(path.join(__dirname, "../../config.json"));
            this.setToken(file.token)
        }else{
            const json = {
                "token" : "token"
            }
            fs.writeFileSync(path.join(__dirname, "../../config.json"), JSON.stringify(json))
        }
    }

};