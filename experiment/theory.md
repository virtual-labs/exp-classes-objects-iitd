### What is class in JAVA?
- A class is a group of objects which have common properties.
- It is a template or blueprint from which objects are created. 
- It is a logical entity. It can't be physical.

A class in Java can contain:
- Fields
- Methods
- Constructors
- Blocks
- Nested class and interface

### Syntax to declare a class:
```sh
class  class_name {
field OR Instance Variables;
method;
}
```
---

### Instance variable in Java
- A variable which is created inside the class but outside the method is known as an instance variable. 
- Instance variable doesn't get memory at compile time. It gets memory at runtime when an object or instance is created. That is why it is known as an instance variable.

---

### Method in Java
In Java, a method is like a function which is used to expose the behavior of an object.

#### Advantage of Method
- Code Reusability
- Code Optimization

---

### new keyword in Java
The new keyword is used to allocate memory at runtime. All objects get memory in Heap memory area.

---

### What is an object in Java?
- An entity that has state and behavior is known as an object e.g., chair, bike, marker, pen, table, car, etc. 
- It can be physical or logical (tangible and intangible). 
- The example of an tangible object is chair, bike, marker.
- The example of an intangible object is the banking system, shopping system.
- An object is an instance of a class. A class is a template or blueprint from which objects are created. So, an object is the instance(result) of a class.
* An object has three characteristics:
 	1. **State:** represents the data (value) of an object.
	2. **Behavior:** represents the behavior (functionality) of an object such as deposit, withdraw, etc.
	3. **Identity:** An object identity is typically implemented via a unique ID. The value of the ID is not visible to the external user. However, it is used internally by 	  the JVM to identify each object uniquely.
	
 **For Example,** Pen is an object. Its name is Reynolds; color is white, known as its state. It is used to write, so writing is its behavior.
 
 ---
 
 ### Examples of Class and Object
 Here we are going to explain you two example:
 - Object and Class Example: main method within the class
 - Object and Class Example: main method outside the class
 
 #### 1. Object and Class Example: main method within the class
 In this example, we have created a Student class which has two fields or instance variables id and name. We are creating the object of the Student class by new keyword and printing the object's value.

Here, we are creating a main() method inside the class.
 
 ```
// This program maintains the student record
//Defining a Student class.  

class Student{  
 //field or instance variable  
 int id; 
 String name;  
 
 //creating main method inside the Student class  
 public static void main(String args[]){ 
 
 //creating an object of Student  
  Student s1=new Student();
  
  //Printing values of the object  
  System.out.println(s1.id); //accessing member through reference variable  
  System.out.println(s1.name);  
 }  
}  

```
#### Output

```
0 
null

```

#### 2. Object and Class Example: main method outside the class

In real time development, we create classes and use it from another class. It is a better approach than previous one.

``` 
//Creating Student class.  
class Student{ 

//field or instance variable 
 int id = 1;  
 String name= "Kanishak";  
}  

//Creating another class TestStudent1 which contains the main method  
class TestStudent1{

//creating main method 
 public static void main(String args[]){ 
 
//creating an object of Student  
  Student s1=new Student();  

//Printing values of the object 
  System.out.println(s1.id);  
  System.out.println(s1.name);  
 }  
}  

```

#### Output

```
1 
Kanishak

```
