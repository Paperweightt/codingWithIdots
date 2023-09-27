// getEntities() is a dimension thing
// getAllPlayers(): Player[] | returns all the players
// getPlayers(options?:EntityQueryOptions): Player[] | returns players depending on the EntityQueryOptions

//https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/entityqueryoptions
const EntityQueryOptions = {
    closest: 12 ,// closest?: int | searches for entities in order of closest, the number is how many entities to return 
    excludeFamilies: ["monster","undead"],// exdcludeFamilies?: string[] | removes players with certain families
    excludeGameModes: ["creative"],// excludeGameModes?: string[] | removes players with certain gamemodes
    excludeNames: ["Paperweightt192"],// excludeNames?: stringp[] | removes players with certain names
    
    /*
    you guys can just ask questions
    excludeTags?: string[],
    excludeTypes?: string[],
    families?: string[],
    farthest?: int,
    gameMode?: string[],
    location?: vector3, // {x:int,y:int,z:int}
    maxDistance?: int, 
    maxHorizontalRotation:? float,
    maxLevel:? int,
    maxVertiaclRotation?: float,
    minDistance?: float,
    minHorizontalRotation?: float,
    minLevel?: int,
    minVerticalRotation?: float,
    name?: string,
    scoreOptions:EntityQueryScoreOptions[] | yup thats right, its an array of objects in the object 
    tags:string,
    type:string,
    volume:BlockArea, | dont ask im tired
    */
}

// so lets say you want a specific player object ;)
import { world } from "@minecraft/server"
const paperInAList = world.getPlayers({name:'Paperweightt192'}) // returns [Player], because of this you need to exit the list

const paper = world.getPlayers({name:'Paperweightt192'})[0]