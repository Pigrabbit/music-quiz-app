const fetchProblems = () => {
    return [
        {
            id: 1,
            problemDescription: "Choose which is not pilars OOP",
            options: ["Polymorphism", "Inheritance", "Abstraction", "Encapsulation", "Class"],
            answer: ["Class"]
        },
        {
            id: 2,
            problemDescription: "Choose HTTP method which does not match to CRUD operations",
            options: ["GET", "POST", "OPTION", "UPDATE", "DELETE"],
            answer: ["OPTION"]
        }
    ]
}

export default fetchProblems;