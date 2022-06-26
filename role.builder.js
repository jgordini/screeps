var roleBuilder = {
    /** @param {Creep} creep **/
    run: function(creep) {
        if (creep.memory.builder && creep.store[RESOURCE_ENERGY] === 0) {
           creep.memory.building === true; 
            creep.say("Building")
                }
            }
        if (creep.memory.builder && creep.store.getFreeCapacity() > 0) {
           creep.memory.building === false; 
            creep.say("Harvesting")
        }
        if (creep.memory.building){
            if (targets.length) {
                if (creep.build(targets)=== ERR_NOT_IN_RANGE){
                creep.moveTo(targets[0])
            }
        else {
	    if(creep.store.getFreeCapacity() > 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
                }
           }
        }
        else if(Game.spawns['Spawn1'].energy < Game.spawns['Spawn1'].energyCapacity) {
            if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
        }
	}
};

module.exports = roleBuilder;
