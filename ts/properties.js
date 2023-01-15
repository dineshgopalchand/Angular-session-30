class Student {
    constructor(stuName, loc) {
        this.stuName = stuName;
        this.loc = loc;
    }
    set studentName(name) {
        this.stuName = name;
    }
    // get studentName(){
    //     return this.stuName;
    // }
    showDetails() {
        return { name: this.stuName, location: this.loc };
    }
    showFormattedDetails() {
        console.log('Student details :', this.showDetails());
    }
}
const s1 = new Student('d', 'B');
console.log(s1.showFormattedDetails());
s1.studentName = 'G';
console.log(s1.showFormattedDetails());
console.log(s1.studentName);
