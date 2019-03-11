console.log(traits)

const max = 7

let vue = new Vue({
    el: "#app",
    data: {
        dice,
        traits,
        max,
    },
    computed: {
        attributesTotal: function() {
            let total = 0
            for (let item in traits) {
                total += traits[item].value
            }
            return total - 5
        },
        skillsTotal: function() {
            //  LOOK AT THIS MESS LMAO
            let total = 0

            // set up iteration in a stupid way
            for (let attr in traits) {
                let attribute = traits[attr]
                let skills = attribute.skills
                for (let sk in skills) {
                    let skill = skills[sk]

                    // do maths for skill values
                    if (skill.value <= attribute.value) {
                        total += skill.value
                    } else {
                        total +=
                            attribute.value +
                            (skill.value - attribute.value) * 2
                    }
                }
            }
            return total - 5
        },
        attributesOver: function() {
            return this.attributesTotal > 5
        },
        skillsOver: function() {
            return this.skillsTotal > 12
        },
    },
    methods: {
        increase: function(tName, sName = null) {
            if (!sName) {
                if (traits[tName].value < this.max) {
                    traits[tName].value += 1
                }
            } else {
                if (traits[tName].skills[sName].value < this.max) {
                    traits[tName].skills[sName].value += 1
                }
            }
        },
        decrease: function(tName, sName = null) {
            if (!sName) {
                if (traits[tName].value > 1) {
                    traits[tName].value -= 1
                }
            } else {
                if (
                    traits[tName].skills[sName].value >
                    traits[tName].skills[sName].min
                ) {
                    traits[tName].skills[sName].value -= 1
                }
            }
        },
    },
})
