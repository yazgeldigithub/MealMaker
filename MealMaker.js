const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },

    //Getters for appetizers, mains, desserts
    get appetizer() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    }, 
    get desserts() {
        return this._courses.desserts;
    },

    //Setters for appetizers, mains, desserts
    set appetizers(appetizers) {
        return this._courses.appetizers = appetizers;
    },
    set mains(mains) {
        return this._courses.mains = mains;
    },
    set desserts(desserts) {
        return this._courses.desserts = desserts;
    },

    //Getter method for the _courses
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        }
    },

    //Add a new dish to the specified course on the menu
    addNewDishToCourse(courseName, dishNAme, dishPrice) {
        const dish = {
            name: dishNAme,
            price: dishPrice,
        },
        return this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName){
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

      generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}`
    }
}

menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'wings', 5.00)
menu.addDishToCourse('appetizers', 'fries', 6.00)

menu.addDishToCourse('mains', 'steak', 15.00)
menu.addDishToCourse('mains', 'salmon', 20.00)
menu.addDishToCourse('mains', 'tofu', 18.00)

menu.addDishToCourse('desserts', 'ice cream', 3.00)
menu.addDishToCourse('desserts', 'coffee', 3.00)
menu.addDishToCourse('desserts', 'cake', 2.00)

const meal = menu.generateRandomMeal();
console.log(meal);
