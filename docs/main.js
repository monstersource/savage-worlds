"use strict";
console.log(traits);
var max = 7;
var vue = new Vue({
    el: "#app",
    data: {
        dice: dice,
        traits: traits,
        max: max
    },
    computed: {
        attributesTotal: function () {
            var total = 0;
            for (var item in traits) {
                total += traits[item].value;
            }
            return total - 5;
        },
        skillsTotal: function () {
            //  LOOK AT THIS MESS LMAO
            var total = 0;
            // set up iteration in a stupid way
            for (var attr in traits) {
                var attribute = traits[attr];
                var skills = attribute.skills;
                for (var sk in skills) {
                    var skill = skills[sk];
                    // do maths for skill values
                    if (skill.value <= attribute.value) {
                        total += skill.value;
                    }
                    else {
                        total +=
                            attribute.value +
                                (skill.value - attribute.value) * 2;
                    }
                }
            }
            return total - 5;
        },
        attributesOver: function () {
            return this.attributesTotal > 5;
        },
        skillsOver: function () {
            return this.skillsTotal > 12;
        }
    },
    methods: {
        increase: function (tName, sName) {
            if (sName === void 0) { sName = null; }
            if (!sName) {
                if (traits[tName].value < this.max) {
                    traits[tName].value += 1;
                }
            }
            else {
                if (traits[tName].skills[sName].value < this.max) {
                    traits[tName].skills[sName].value += 1;
                }
            }
        },
        decrease: function (tName, sName) {
            if (sName === void 0) { sName = null; }
            if (!sName) {
                if (traits[tName].value > 1) {
                    traits[tName].value -= 1;
                }
            }
            else {
                if (traits[tName].skills[sName].value >
                    traits[tName].skills[sName].min) {
                    traits[tName].skills[sName].value -= 1;
                }
            }
        }
    }
});
