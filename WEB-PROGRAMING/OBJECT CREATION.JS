let student = {     firstName: "Raghav",     lastName: "Singh",     section: "S13",     eno: 6,     branch: "AI+DS",     specialization : function() { 
        return this.firstName + " " + this.lastName + " is a Data Scientist."; 
      } 
} 
student.id = function () { 
    return "Section : "+ this.section + "\nBranch: " + this.branch + "\nE.No: " + this.eno ; 
};  
console.log(student.id()) console.log(student.specialization()) 
function Skills(S1, S2, S3, S4) {     this.S1 = S1;     this.S2 = S2;     this.S3 = S3;     this.S4 = S4;         this.skillset = function () { 
        return this.S1 + " "+ this.S2 +" "+ this.S3 + " " + this.S4; 
    } 
} 
const mySkills = new Skills("C++", "Py", "C", "Web"); mySkills.language = "Prolog" 
console.log("Skillset : " + mySkills.skillset()) console.log("New skill added: "+ mySkills.language) 
