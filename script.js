let submit = document.querySelector("#submit")

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