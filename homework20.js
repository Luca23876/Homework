////////////////////////////////////////////////////////////////////////////////////////
//Okay Semicolon, see if you can make some headway on these, there are going to be a lot of semicolons!
//
//**Make sure you test your answers in whatever environment you choose, and you will
//definitely need to use the internet for this.

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//1a  In your own words, can you tell me what a constructor function is, or just 
//    anything about them?
A constructor function is a function that defines variables. So basicly if you have a variable lets say person and it is defined by age and height then a constructor function can take inputs and define person.
I am really bad at defining stuff so I will just write one out below.

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//2a. Create a constructor function, any constructor function!
	var person = function(first, last, age, height){
		this.firstName = first
		this.lastName = last
		this.age = age
		this.height = height
	};

	var codeInstructor = new person("Chase", "terzian", 23, "6 feet 1 inch");
	var student = new person("Luca", "Ciancanelli", 13, "5 feet 5 inches");
    console.log(student);
    console.log(codeInstructor);

//2b. Create two objects that are each an instance of that constructor

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//3a.  Create a constructor function that has at least 4 properties, including one method
       //HINT: a method is a property that is a function
       //...or...
       //methods are stored in properties as function definitions
       	var person = function(first, last, age, height, sort){
		this.firstName = first
		this.lastName = last
		this.age = age
		this.height = height
        this.studentTeacher = sort
		this.studentOrTeacher = function(){
			alert(this.firstName + " is a " + this.studentTeacher)
		};
		this.tsac = function(){
			var coa = 0;
			if(this.age > 18){
				coa = "adult"
			}else{
				coa = "kid"
			};
			console.log(this.firstName + this.lastName + " is a " + coa + " and is " + this.height);
		};
	};

	var codeInstructor = new person("Chase", "terzian", 23, "6 feet 1 inch", "teacher");
    console.log(codeInstructor);
    codeInstructor.studentOrTeacher()
	var student = new person("Luca", "Ciancanelli", 13, "5 feet 5 inches", "student");
    console.log(student)
    student.studentOrTeacher()
//3b.  Create two objects that are each an instance of that constructor

//3c.  Call your home-made method on each of these objects (however you choose to do so) 
//     and record the results.

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// BONUS: 4a.  Where do the methods we use like toString(); or .log(); come from?