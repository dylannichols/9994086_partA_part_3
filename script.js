/* Simple form for employee details. Asks user for details then prints them back to them.

Version 1.1.0 - Dylan Nichols 2017 */

// connect submit button to variable
let submit = document.querySelector("#submit")

// sets up class to make employee objects, setters for employee properties and displayEmployee() method that prints the properties to the screen
class Employee {

    set fname(value) {
        this._fname = `${value}`
    }

    set lname(value) {
        this._lname = `${value}`
    }

    set salary(value) {
        this._salary = `${value}`
    }

    constructor(fname, lname, salary) {
        this._fname = fname
        this._lname = lname
        this._salary = salary
    }

    displayEmployee() {
        document.querySelector("#form").outerHTML = ""
        document.querySelector("#text").innerHTML = `First name: ${this._fname}<br> Last name: ${this._lname}<br> Salary: $${this._salary}`

    }
}

// when submit is clicked, removes form from screen, creates employee object and sets properties to html input then prints properties
let submitForm = () => {
    let user = new Employee()
    user.fname = document.querySelector("#fname").value
    user.lname = document.querySelector("#lname").value
    user.salary = document.querySelector("#salary").value
    user.displayEmployee()
}

submit.addEventListener('click', (e) => {
        submitForm();
        e.preventDefault()
    }) // if user clicks submit, call the above function