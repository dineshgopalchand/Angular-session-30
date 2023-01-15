class Student {
    detailsObj={
        name:{
            fname:'d',
            mname:'G',
            lName:'C'
        }
    }
    constructor(private stuName: string, private loc: string) {
    }

    set studentName(name:string){
        this.stuName=name;
    }
    get studentName(){
        return this.stuName;
    }
    get fname(){
        return this.detailsObj.name.fname;
    }
    get lname(){
        return this.detailsObj.name.lName;
    }
    protected showDetails() {
        return { name: this.stuName, location: this.loc };
    }
    showFormattedDetails() {
        console.log('Student details :', this.showDetails())
    }
}

const s1=new Student('d','B');
console.log(s1.showFormattedDetails());
s1.studentName='G';
console.log(s1.showFormattedDetails());
console.log(s1.studentName)
s1.detailsObj.name.fname + s1.detailsObj.name.lName
s1.fname;
s1.lname;