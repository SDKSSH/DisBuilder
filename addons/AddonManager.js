const fs = require("fs");
const path = require("path");
const { disconnect } = require("process");
const folder = path.join(process.env.APPDATA, '.disbuilder', 'addons');
const Discord = require("../app/utils/Discord")
const Addon = require("./Addon")
const HashMap = require("hashmap");
const Addons = new HashMap();

exports.load = async () => {
    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder)
    }else{
        const files = await fs.readdirSync(folder).filter(f => f.endsWith('.js'));
        if(files.length == 0) return;
        for(let f of files){
            const file = require(path.join(folder, f));
            if(typeof file.load == "function" && typeof file.author == "string" && typeof file.version == "string" && typeof file.name == "string"){
                file.load(Discord.getBot);
                const a = new Addon(file.name, file.author, file.version);
                Addons.set(file.name, a);
            }
        }
    }
}

exports.getAddon = (name) => {
    return Addons.get(name);
}