const Discord = require("discord.js");
const { fstat } = require("fs");
const Client = new Discord.Client;
const bdd = require("./bdd.json");
const fs = require("fs");
const { randomBytes } = require("crypto");
const { isDeepStrictEqual } = require("util");
nombre = 1
nombree = 1
Client.on("ready", () => {
    console.log("bot opérationnel");
});

//test
Client.on("message", message => {
    const args = message.content.split(" ");
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    //comande !help pour voir commandes
    if(message.content.startsWith("!help")){
        if(message.channel.id === "691690960848945182"){
            message.channel.send("**COMMANDES POUR LE BOT INSCRIPTIONS-COC**\n\n__!insc [pseudo] : inscrit [pseudo] en gdc__\n*ex : !insc LaGios : @LaGios, Vous avez bien inscrit LaGios dans l'emplacement 1*\n\n__!dinsc [emplacement] : désinscrit le joueur enregistré dans [emplacement] de la gdc__\n*ex : !dinsc 1 : @LaGios, Vous avez bien désinscrit le joueur à l'emplacement 1*\n\n__!listinsc : affiche le tableau des inscrits__\n\n__(admin) !startgdc : lance les inscriptions pour la gdc__\n\n__(admin) !finsc [emplacement] [pseudo] : force l'inscription de [pseudo] dans [emplacement]__\n*ex : !finsc 23 LaGios : @LaGios, Vous avez bien forcé l'inscription de LaGios dans l'emplacement 23*");
        }
    }
        
    //commande !insc pour inscire un compte
    if(message.content.startsWith("!insc")){
        if(message.channel.id === "691690960848945182"){
            if(message.content.length > 7){
                joueur_inscrit = message.content.slice(6)
                bdd["1_joueur_inscrit_" + nombre] = joueur_inscrit
                Savebdd()
                message.reply("Vous avez bien inscrit **" + joueur_inscrit + "** dans l'emplacement **" + nombre + "**")
                nombre = nombre + 1
            }
        }
    }
    //commande !dinsc pour désinscire un compte
    if(message.content.startsWith("!dinsc")){
        if(message.channel.id === "691690960848945182"){
            if(message.content.length > 7){
                nb_inscrit = message.content.slice(7)
                bdd["1_joueur_inscrit_" + nb_inscrit] = ""
                Savebdd()
                message.reply("Vous avez bien désinscrit le joueur à l'emplacement **" + nb_inscrit + "**")
            }
        }
    }
    //commande !listinsc afficher le tableau des inscrits
    if(message.content.startsWith("!listinsc")){
        if(message.channel.id === "691690960848945182"){
            message.channel.send("●▬▬▬▬▬▬ ꧁꧂⪓⪔꧁꧂ ▬▬▬▬▬▬●\n●▬▬▬▬▬●PARTICIPANTS GDC●▬▬▬▬▬●\n●▬▬▬▬▬▬ ꧁꧂⪓⪔꧁꧂ ▬▬▬▬▬▬●\n01 - " + bdd["1_joueur_inscrit_1"] + "\n02 - " + bdd["1_joueur_inscrit_2"] + "\n03 - " + bdd["1_joueur_inscrit_3"] + "\n04 - " + bdd["1_joueur_inscrit_4"] + "\n05 - " + bdd["1_joueur_inscrit_5"] + "\n06 - " + bdd["1_joueur_inscrit_6"] + "\n07 - " + bdd["1_joueur_inscrit_7"] + "\n08 - " + bdd["1_joueur_inscrit_8"] + "\n09 - " + bdd["1_joueur_inscrit_9"] + "\n10 - " + bdd["1_joueur_inscrit_10"] + "\n11 - " + bdd["1_joueur_inscrit_11"] + "\n12 - " + bdd["1_joueur_inscrit_12"] + "\n13 - " + bdd["1_joueur_inscrit_13"] + "\n14 - " + bdd["1_joueur_inscrit_14"] + "\n15 - " + bdd["1_joueur_inscrit_15"] + "\n16 - " + bdd["1_joueur_inscrit_16"] + "\n17 - " + bdd["1_joueur_inscrit_17"] + "\n18 - " + bdd["1_joueur_inscrit_18"] + "\n19 - " + bdd["1_joueur_inscrit_19"] + "\n20 - " + bdd["1_joueur_inscrit_20"] + "\n21 - " + bdd["1_joueur_inscrit_21"] + "\n22 - " + bdd["1_joueur_inscrit_22"] + "\n23 - " + bdd["1_joueur_inscrit_23"] + "\n24 - " + bdd["1_joueur_inscrit_24"] + "\n25 - " + bdd["1_joueur_inscrit_25"] + "\n26 - " + bdd["1_joueur_inscrit_26"] + "\n27 - " + bdd["1_joueur_inscrit_27"] + "\n28 - " + bdd["1_joueur_inscrit_28"] + "\n29 - " + bdd["1_joueur_inscrit_29"] + "\n30 - " + bdd["1_joueur_inscrit_30"] + "\n31 - " + bdd["1_joueur_inscrit_31"] + "\n32 - " + bdd["1_joueur_inscrit_32"] + "\n33 - " + bdd["1_joueur_inscrit_33"] + "\n34 - " + bdd["1_joueur_inscrit_34"] + "\n35 - " + bdd["1_joueur_inscrit_35"]);
        }
    }
    //commande !startgdc pour reinitialiser les variables et relancer les inscriptions
    if(message.content.startsWith("!startgdc")){
        if(message.channel.id === "691690960848945182"){
            if(message.member.hasPermission("MANAGE_MESSAGES")){
                for(let i = 1; i < 36; i++){
                    bdd["1_joueur_inscrit_" + i] = ""
                    Savebdd()
                }
                message.channel.send("@everyone\n●▬▬▬▬▬▬꧁꧂⪓⪔꧁꧂▬▬▬▬▬▬●\n●▬▬▬▬▬▬●   DEBUT DES   ●▬▬▬▬▬▬●\n●▬▬▬▬▬●INSCRIPTIONS  GDC●▬▬▬▬▬●\n●▬▬▬▬▬▬꧁꧂⪓⪔꧁꧂▬▬▬▬▬▬●")
                nombre = 1
            }
        }
    }
    //commande !finsc pour forcer l'inscription d'un joueur dans un emplacement
    if(message.content.startsWith("!finsc")){
        if(message.channel.id === "691690960848945182"){
            if(message.member.hasPermission("MANAGE_MESSAGES")){
                if(message.content.length > 7){
                    nb = args[1]
                    joueur_inscrit =  message.content.slice(args[0].length + args[1].length + 2);
                    bdd["1_joueur_inscrit_" + nb] = joueur_inscrit
                    Savebdd()
                    message.reply("Vous avez bien forcé l'inscription de **" + joueur_inscrit + "** dans l'emplacement **" + nb + "**")

                }
            }
        }
    }
    //commande !startldc pour reinitialiser les variables et relancer les inscriptions
    if(message.content.startsWith("!startldc")){
        if(message.channel.id === "691690960848945182"){
            if(message.member.hasPermission("MANAGE_MESSAGES")){
                for(let i = 1; i < 36; i++){
                    bdd["2_joueur_inscrit_" + i] = ""
                    Savebdd()
                }
                message.channel.send("@everyone\n●▬▬▬▬▬▬꧁꧂⪓⪔꧁꧂▬▬▬▬▬▬●\n●▬▬▬▬▬▬●   DEBUT DES   ●▬▬▬▬▬▬●\n●▬▬▬▬▬●INSCRIPTIONS  LDC●▬▬▬▬▬●\n●▬▬▬▬▬▬꧁꧂⪓⪔꧁꧂▬▬▬▬▬▬●")
                nombree = 1
            }
        }
    }
});


//clan 1
Client.on("message", message => {
    const args = message.content.split(" ");
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    //comande !help pour voir commandes
    if(message.content.startsWith("!help")){
        if(message.channel.id === "666337437395583026"){
            message.channel.send("**COMMANDES POUR LE BOT INSCRIPTIONS-COC**\n\n__!insc [pseudo] : inscrit [pseudo] en gdc__\n*ex : !insc LaGios : @LaGios, Vous avez bien inscrit LaGios dans l'emplacement 1*\n\n__!dinsc [emplacement] : désinscrit le joueur enregistré dans [emplacement] de la gdc__\n*ex : !dinsc 1 : @LaGios, Vous avez bien désinscrit le joueur à l'emplacement 1*\n\n__!listinsc : affiche le tableau des inscrits__\n\n__(admin) !startgdc : lance les inscriptions pour la gdc__\n\n__(admin) !finsc [emplacement] [pseudo] : force l'inscription de [pseudo] dans [emplacement]__\n*ex : !finsc 23 LaGios : @LaGios, Vous avez bien forcé l'inscription de LaGios dans l'emplacement 23*");
        }
    }
        
    //commande !insc pour inscire un compte
    if(message.content.startsWith("!insc")){
        if(message.channel.id === "666337437395583026"){
            if(message.content.length > 7){
                joueur_inscrit = message.content.slice(6)
                bdd["1_joueur_inscrit_" + nombre] = joueur_inscrit
                Savebdd()
                message.reply("Vous avez bien inscrit **" + joueur_inscrit + "** dans l'emplacement **" + nombre + "**")
                nombre = nombre + 1
            }
        }
    }
    //commande !dinsc pour désinscire un compte
    if(message.content.startsWith("!dinsc")){
        if(message.channel.id === "666337437395583026"){
            if(message.content.length > 7){
                nb_inscrit = message.content.slice(7)
                bdd["1_joueur_inscrit_" + nb_inscrit] = ""
                Savebdd()
                message.reply("Vous avez bien désinscrit le joueur à l'emplacement **" + nb_inscrit + "**")
            }
        }
    }
    //commande !listinsc afficher le tableau des inscrits
    if(message.content.startsWith("!listinsc")){
        if(message.channel.id === "666337437395583026"){
            message.channel.send("●▬▬▬▬▬▬ ꧁꧂⪓⪔꧁꧂ ▬▬▬▬▬▬●\n●▬▬▬▬▬●PARTICIPANTS GDC●▬▬▬▬▬●\n●▬▬▬▬▬▬ ꧁꧂⪓⪔꧁꧂ ▬▬▬▬▬▬●\n01 - " + bdd["1_joueur_inscrit_1"] + "\n02 - " + bdd["1_joueur_inscrit_2"] + "\n03 - " + bdd["1_joueur_inscrit_3"] + "\n04 - " + bdd["1_joueur_inscrit_4"] + "\n05 - " + bdd["1_joueur_inscrit_5"] + "\n06 - " + bdd["1_joueur_inscrit_6"] + "\n07 - " + bdd["1_joueur_inscrit_7"] + "\n08 - " + bdd["1_joueur_inscrit_8"] + "\n09 - " + bdd["1_joueur_inscrit_9"] + "\n10 - " + bdd["1_joueur_inscrit_10"] + "\n11 - " + bdd["1_joueur_inscrit_11"] + "\n12 - " + bdd["1_joueur_inscrit_12"] + "\n13 - " + bdd["1_joueur_inscrit_13"] + "\n14 - " + bdd["1_joueur_inscrit_14"] + "\n15 - " + bdd["1_joueur_inscrit_15"] + "\n16 - " + bdd["1_joueur_inscrit_16"] + "\n17 - " + bdd["1_joueur_inscrit_17"] + "\n18 - " + bdd["1_joueur_inscrit_18"] + "\n19 - " + bdd["1_joueur_inscrit_19"] + "\n20 - " + bdd["1_joueur_inscrit_20"] + "\n21 - " + bdd["1_joueur_inscrit_21"] + "\n22 - " + bdd["1_joueur_inscrit_22"] + "\n23 - " + bdd["1_joueur_inscrit_23"] + "\n24 - " + bdd["1_joueur_inscrit_24"] + "\n25 - " + bdd["1_joueur_inscrit_25"] + "\n26 - " + bdd["1_joueur_inscrit_26"] + "\n27 - " + bdd["1_joueur_inscrit_27"] + "\n28 - " + bdd["1_joueur_inscrit_28"] + "\n29 - " + bdd["1_joueur_inscrit_29"] + "\n30 - " + bdd["1_joueur_inscrit_30"] + "\n31 - " + bdd["1_joueur_inscrit_31"] + "\n32 - " + bdd["1_joueur_inscrit_32"] + "\n33 - " + bdd["1_joueur_inscrit_33"] + "\n34 - " + bdd["1_joueur_inscrit_34"] + "\n35 - " + bdd["1_joueur_inscrit_35"]);
        }
    }
    //commande !startgdc pour reinitialiser les variables et relancer les inscriptions
    if(message.content.startsWith("!startgdc")){
        if(message.channel.id === "666337437395583026"){
            if(message.member.hasPermission("MANAGE_MESSAGES")){
                for(let i = 1; i < 36; i++){
                    bdd["1_joueur_inscrit_" + i] = ""
                    Savebdd()
                }
                message.channel.send("@everyone\n●▬▬▬▬▬▬꧁꧂⪓⪔꧁꧂▬▬▬▬▬▬●\n●▬▬▬▬▬▬●   DEBUT DES   ●▬▬▬▬▬▬●\n●▬▬▬▬▬●INSCRIPTIONS  GDC●▬▬▬▬▬●\n●▬▬▬▬▬▬꧁꧂⪓⪔꧁꧂▬▬▬▬▬▬●")
                nombre = 1
            }
        }
    }
    //commande !finsc pour forcer l'inscription d'un joueur dans un emplacement
    if(message.content.startsWith("!finsc")){
        if(message.channel.id === "666337437395583026"){
            if(message.member.hasPermission("MANAGE_MESSAGES")){
                if(message.content.length > 7){
                    nb = args[1]
                    joueur_inscrit =  message.content.slice(args[0].length + args[1].length + 2);
                    bdd["1_joueur_inscrit_" + nb] = joueur_inscrit
                    Savebdd()
                    message.reply("Vous avez bien forcé l'inscription de **" + joueur_inscrit + "** dans l'emplacement **" + nb + "**")

                }
            }
        }
    }
    //commande !startldc pour reinitialiser les variables et relancer les inscriptions
    if(message.content.startsWith("!startldc")){
        if(message.channel.id === "666337437395583026"){
            if(message.member.hasPermission("MANAGE_MESSAGES")){
                for(let i = 1; i < 36; i++){
                    bdd["2_joueur_inscrit_" + i] = ""
                    Savebdd()
                }
                message.channel.send("@everyone\n●▬▬▬▬▬▬꧁꧂⪓⪔꧁꧂▬▬▬▬▬▬●\n●▬▬▬▬▬▬●   DEBUT DES   ●▬▬▬▬▬▬●\n●▬▬▬▬▬●INSCRIPTIONS  LDC●▬▬▬▬▬●\n●▬▬▬▬▬▬꧁꧂⪓⪔꧁꧂▬▬▬▬▬▬●")
                nombree = 1
            }
        }
    }
});

//clan 2
Client.on("message", message => {
    const args = message.content.split(" ");
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    //comande !help pour voir commandes
    if(message.content.startsWith("!help")){
        if(message.channel.id === "812682677438251038"){
            message.channel.send("**COMMANDES POUR LE BOT INSCRIPTIONS-COC**\n\n__!insc [pseudo] : inscrit [pseudo] en gdc__\n*ex : !insc LaGios : @LaGios, Vous avez bien inscrit LaGios dans l'emplacement 1*\n\n__!dinsc [emplacement] : désinscrit le joueur enregistré dans [emplacement] de la gdc__\n*ex : !dinsc 1 : @LaGios, Vous avez bien désinscrit le joueur à l'emplacement 1*\n\n__!listinsc : affiche le tableau des inscrits__\n\n__(admin) !startgdc : lance les inscriptions pour la gdc__\n\n__(admin) !finsc [emplacement] [pseudo] : force l'inscription de [pseudo] dans [emplacement]__\n*ex : !finsc 23 LaGios : @LaGios, Vous avez bien forcé l'inscription de LaGios dans l'emplacement 23*");
        }
    }

    //commande !insc pour inscire un compte
    if(message.content.startsWith("!insc")){
        if(message.channel.id === "812682677438251038"){
            if(message.content.length > 7){
                joueur_inscrit = message.content.slice(6)
                bdd["2_joueur_inscrit_" + nombree] = joueur_inscrit
                Savebdd()
                message.reply("Vous avez bien inscrit **" + joueur_inscrit + "** dans l'emplacement **" + nombree + "**")
                nombree = nombree + 1
            }
        }
    }
    //commande !dinsc pour désinscire un compte
    if(message.content.startsWith("!dinsc")){
        if(message.channel.id === "812682677438251038"){
            if(message.content.length > 7){
                nb_inscrit = message.content.slice(7)
                bdd["2_joueur_inscrit_" + nb_inscrit] = ""
                Savebdd()
                message.reply("Vous avez bien désinscrit le joueur à l'emplacement **" + nb_inscrit + "**")
            }
        }
    }
    //commande !listinsc afficher le tableau des inscrits
    if(message.content.startsWith("!listinsc")){
        if(message.channel.id === "812682677438251038"){
            message.channel.send("●▬▬▬▬▬▬ ꧁꧂⪓⪔꧁꧂ ▬▬▬▬▬▬●\n●▬▬▬▬▬●PARTICIPANTS GDC●▬▬▬▬▬●\n●▬▬▬▬▬▬ ꧁꧂⪓⪔꧁꧂ ▬▬▬▬▬▬●\n01 - " + bdd["2_joueur_inscrit_1"] + "\n02 - " + bdd["2_joueur_inscrit_2"] + "\n03 - " + bdd["2_joueur_inscrit_3"] + "\n04 - " + bdd["2_joueur_inscrit_4"] + "\n05 - " + bdd["2_joueur_inscrit_5"] + "\n06 - " + bdd["2_joueur_inscrit_6"] + "\n07 - " + bdd["2_joueur_inscrit_7"] + "\n08 - " + bdd["2_joueur_inscrit_8"] + "\n09 - " + bdd["2_joueur_inscrit_9"] + "\n10 - " + bdd["2_joueur_inscrit_10"] + "\n11 - " + bdd["2_joueur_inscrit_11"] + "\n12 - " + bdd["2_joueur_inscrit_12"] + "\n13 - " + bdd["2_joueur_inscrit_13"] + "\n14 - " + bdd["2_joueur_inscrit_14"] + "\n15 - " + bdd["2_joueur_inscrit_15"] + "\n16 - " + bdd["2_joueur_inscrit_16"] + "\n17 - " + bdd["2_joueur_inscrit_17"] + "\n18 - " + bdd["2_joueur_inscrit_18"] + "\n19 - " + bdd["2_joueur_inscrit_19"] + "\n20 - " + bdd["2_joueur_inscrit_20"] + "\n21 - " + bdd["2_joueur_inscrit_21"] + "\n22 - " + bdd["2_joueur_inscrit_22"] + "\n23 - " + bdd["2_joueur_inscrit_23"] + "\n24 - " + bdd["2_joueur_inscrit_24"] + "\n25 - " + bdd["2_joueur_inscrit_25"] + "\n26 - " + bdd["2_joueur_inscrit_26"] + "\n27 - " + bdd["2_joueur_inscrit_27"] + "\n28 - " + bdd["2_joueur_inscrit_28"] + "\n29 - " + bdd["2_joueur_inscrit_29"] + "\n30 - " + bdd["2_joueur_inscrit_30"] + "\n31 - " + bdd["2_joueur_inscrit_31"] + "\n32 - " + bdd["2_joueur_inscrit_32"] + "\n33 - " + bdd["2_joueur_inscrit_33"] + "\n34 - " + bdd["2_joueur_inscrit_34"] + "\n35 - " + bdd["2_joueur_inscrit_35"]);
        }
    }
    //commande !startgdc pour reinitialiser les variables et relancer les inscriptions
    if(message.content.startsWith("!startgdc")){
        if(message.channel.id === "812682677438251038"){
            if(message.member.hasPermission("MANAGE_MESSAGES")){
                for(let i = 1; i < 36; i++){
                    bdd["2_joueur_inscrit_" + i] = ""
                    Savebdd()
                }
                message.channel.send("@everyone\n●▬▬▬▬▬▬꧁꧂⪓⪔꧁꧂▬▬▬▬▬▬●\n●▬▬▬▬▬▬●   DEBUT DES   ●▬▬▬▬▬▬●\n●▬▬▬▬▬●INSCRIPTIONS  GDC●▬▬▬▬▬●\n●▬▬▬▬▬▬꧁꧂⪓⪔꧁꧂▬▬▬▬▬▬●")
                nombree = 1
            }
        }
    }
    //commande !finsc pour forcer l'inscription d'un joueur dans un emplacement
    if(message.content.startsWith("!finsc")){
        if(message.channel.id === "812682677438251038"){
            if(message.member.hasPermission("MANAGE_MESSAGES")){
                if(message.content.length > 7){
                    nb = args[1]
                    joueur_inscrit =  message.content.slice(args[0].length + args[1].length + 2);
                    bdd["2_joueur_inscrit_" + nb] = joueur_inscrit
                    Savebdd()
                    message.reply("Vous avez bien forcé l'inscription de **" + joueur_inscrit + "** dans l'emplacement **" + nb + "**")

                }
            }
        }
    }
    //commande !startldc pour reinitialiser les variables et relancer les inscriptions
    if(message.content.startsWith("!startldc")){
        if(message.channel.id === "812682677438251038"){
            if(message.member.hasPermission("MANAGE_MESSAGES")){
                for(let i = 1; i < 36; i++){
                    bdd["2_joueur_inscrit_" + i] = ""
                    Savebdd()
                }
                message.channel.send("@everyone\n●▬▬▬▬▬▬꧁꧂⪓⪔꧁꧂▬▬▬▬▬▬●\n●▬▬▬▬▬▬●   DEBUT DES   ●▬▬▬▬▬▬●\n●▬▬▬▬▬●INSCRIPTIONS  LDC●▬▬▬▬▬●\n●▬▬▬▬▬▬꧁꧂⪓⪔꧁꧂▬▬▬▬▬▬●")
                nombree = 1
            }
        }
    }
});

Client.login(process.env.TOKEN);

function Savebdd() {
    fs.writeFile("./bdd.json", JSON.stringify(bdd, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue.")
    });
}