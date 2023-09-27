
const inv = entity.getComponent('inventory').container

// getItem(slot:int): itemStack
// setItem(slot:int,item:itemStack)

// to get the item the player is holding

function getHeldItem(player) {
    const inv = player.getComponent('inventory').container
    const slot = player.selectedSlot // returns the slot the player is holding
    const item = getItem(slot)

    return item
}


