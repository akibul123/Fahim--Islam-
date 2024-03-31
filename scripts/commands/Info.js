module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "info",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/nhybf9W7/received-320490950683263.jpg", 
            
            "https://i.postimg.cc/DwxJ3yCd/Screenshot-20231020-155148.jpg", 
            
            "https://i.postimg.cc/43mJvNkz/1698472327307.jpg",

"https://i.postimg.cc/nhybf9W7/received-320490950683263.jpg",
            
            "https://i.postimg.cc/43mJvNkz/1698472327307.jpg"];
  
var callback = () => api.sendMessage({body:`ADMIN AND BOT INFORMATION 
________________________________________

❇️BOT NAME : FAHIM BOSS🤖🤖

❇️BOT ADMIN : FAHIM ISLAM 

❇️ADDRESS: Faridpur. Dhaka, Bangladesh 

_____________CONTACT_____________

❇️FACEBOOK ID: https://www.facebook.com/profile.php?id=100046430705172

❇️FACEBOOK PAGE: 👅❌

❇️BOT PREFIX : ${global.config.PREFIX}

❇️BOT OWNER : {Fahim  KING} 

OTHER NFORMATION____________________

TYPE /admin 

➟ UPTIME

TODAY IS TIME : ${juswa} 

BOT IS RUNNING ${hours}:${minutes}:${seconds}.

THANKS FOR USING Fahim Islam  『🤖🖤』`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
