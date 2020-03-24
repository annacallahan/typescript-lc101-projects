"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var results = 0;
        for (var i = 0; i < items.length; i++) {
            results += items[i].massKg;
        }
        return results;
    };
    Rocket.prototype.currentMassKg = function () {
        var results = 0;
        results = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return results;
    };
    Rocket.prototype.canAdd = function (item) {
        var results = false;
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            results = true;
        }
        return results;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
