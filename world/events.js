import { world } from "@minecraft/server"
// minecraft has events, each time the event is fired you can add code to be ran either before or after the event is fired

world.afterEvents
world.beforeEvents


// afterEvents is used more often than beforeEvents and also usually contains more data
// however in some situations it is necessary to use beforeEvents

world.afterEvents.chatSend.subscribe((data)=> {
    // the object data contains various values including methods

    // const data = {
    //     message: str | the input message,
    //     sender: Player | the player object,
    //     sendToTargets(): boolean | returns true or false depeding of if the msg is sent to players
    //     getTargets() : Player[] | returns a list of players who recieved the message
    // }
})

world.beforeEvents.chatSend.subscribe((data)=> {
    // const data = {
    //     message: str | the input message,
    //     sender: Player | the player object,
    //     setTargets(Player[]) : void | sets a list of players to recieved the message
    //     cancel: boolean | a settable value that decides if players get sent the message or not
    // }

    // to make it so that messages are never sent:
    data.cancel = true;
})

// only in the beforeEvents can chatSend prevent the message from appearing in chat
// there may be a bug in beforeEvents where code is unable to be sent unless wrapped in system.run(()=>{})

// this runs after right-click
world.afterEvents.itemUse.subscribe((data) => {
    // const data = {
    //     source: Player | the player who used the itemUse
    //     itemStack: ItemStack | the data of the item that was used by the player
    // }

    // to parse the data there is many ways

    const item = data.itemStack
    const player = data.source

    const {itemStack,source} = data // however in this case the variable to be used is not renamed
    // my fav 
    // const {itemStack:item,source:player} = data
})

// by now utilizing the variable data should make sense however the lable of the object could be anything
world.afterEvents.entityHurt.subscribe((idk)=> {
    // const idk = {
    //     damage: int | returns the amount of damage,
    //     damageSource: EntityDamageSource | the source of damage
    //     hurtEntity: Entity | the entity that was hurt
    // }

    // const damageSource = {
    //     cause: EntityDamageCause | what type of damage,
    //     damageingEntity: Entity | the entity that caused the damage,
    //     damagingParticle: Entity | optional data for a projcectile that caused the damage, like an arrow
    // }
})