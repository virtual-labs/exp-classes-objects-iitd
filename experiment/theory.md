## Class
In Java everything is **encapsulated under classes.** Class is the core of Java language. It can be defined as **a template** that describes the behaviors and states of a particular entity.A class defines new data type. Once defined this new type can be used to create object of that type.
In Java, to declare a class **class** keyword is used. A class contain both **data and methods** that operate on that data. The data or variables defined within a class are called **instance variables** and the code that operates on this data is known as **methods.**

##### Rules for Java Class
-	A class can have only public or default(no modifier) access specifier.
-	It can be either abstract, final or concrete (normal class).
-	It must have the class keyword, and class must be followed by a legal identifier.
-	It may optionally extend only one parent class. By default, it extends Object class.
-	The variables and methods are declared within a set of curly braces.

Let’s see a general structure of a class.

#### Class Syntax
```sh
class  class_name {
field;
method;
}
```
#### A simple class example
Suppose, Student is a class and student's name, roll number, age are its fields and info() is a method.
```sh
class Student
{
 String name;
introllno;
int age;
void info(){
 // some code
}
}
```
#### Java Object
Object is an instance of a class while class is a blueprint of an object. An object represents the class and consists of properties and behavior.
In real world, we can understand object as a cell phone that has its properties like: name, cost, color etc and behavior like calling, chatting etc.
So we can say that object is a real world entity. Some real world objects are: ball, fan, car etc.
#### Java Object Syntax
```sh
className variable_name = new className();
```
#### Example: Object creation
```sh
Student std = new Student();
```
#### Example: Creating a Class and its object
```sh
public class Student{      

	String name;
	int rollno;
	int age;
	
	void info(){
	System.out.println("Name: "+name);
	System.out.println("Roll Number: "+rollno);
	System.out.println("Age: "+age);
	}  
	public static void main(String[] args) {
		Student student = new Student();
		student.name = "Ramesh";
		student.rollno = 253;
		student.age = 25;
		
		// Calling method
		student.info();
		
	}
}  
```
#### OUTPUT

```sh
Name: Ramesh
Roll Number: 253
Age: 25
```
