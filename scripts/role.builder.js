var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.memory.builder && creep.store['RESOURCE_ENERGY'] === 0){
            creep.memory.building = false;
            creep.say('Harvesting 🔄')
        }
        if(!creep.memory.builder && creep.store.getFreeCapacity() === 0){
            creep.memory.building = true;
            creep.say('Building 🚧')
        }
        if (creep.memory.building){
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if (creep.build(targets[0])===ERR_NOT_IN_RANGE){
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#fff'}});
                }
        }
    }
    else {
        var sources = creep.room.find(FIND_SOURCES);
        if(creep.harvest(sources[0])===ERR_NOT_IN_RANGE){
            creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
};

module.exports = roleBuilder;