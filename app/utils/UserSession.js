const fs = require("fs");
const path = require("path");
const folder = path.join(process.env.APPDATA, ".disbuilder");

module.exports = class UserSession {
    constructor(){
        this.discord_token = "";
        this.load();
    }
    getToken(){
        return this.discord_token;
    }

    setToken(token){
        this.discord_token = token;
    }
    
    load(){
        if(!fs.existsSync(folder)){
            fs.mkdirSync(folder);
        }
        if(fs.existsSync(path.join(folder, "config.json"))){
            const file = require(path.join(folder, "config.json"));
            this.setToken(file.token)
        }else{
            const json = {
                "token" : "token"
            }
            fs.writeFileSync(path.join(folder, "config.json"), JSON.stringify(json))
        }
    }

};