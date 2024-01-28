const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];
function createColorString() {
    return colors.filter(el=> [ "черный", "красный", "желтый"].includes(el)).join('-')
}
console.log(createColorString());