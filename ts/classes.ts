class Student {
    // public studentName:string;
    // private location:string;
    // constructor(name: string, location: string) {
    //     this.studentName = name;
    //     this.location = location;
    // }
    constructor(private studentName: string, private location: string) {
    }

    protected showDetails() {
        return { name: this.studentName, location: this.location };
    }
    showFormattedDetails() {
        console.log('Student details :', this.showDetails())
    }
}

const studentObj = new Student('dinesh', 'BRL');
const studentObj1 = new Student('Gopal', 'BBSR');
console.log(studentObj.showFormattedDetails());
console.log(studentObj1.showFormattedDetails());
// studentObj1.location='DHN';
console.log(studentObj1.showFormattedDetails());

class MedicalStudent extends Student {
    constructor(name: string, location: string, private collageName: string) {
        super(name, location);

    }
    showAllDetails() {
        return { ...this.showDetails(), collage: this.collageName }
    }
}

const mstudent1 = new MedicalStudent('runa', 'BBSR', 'sumHospital');

console.log(mstudent1.showAllDetails())



