

// Q.1- .....

function Parent() {
    this.name = 'Parent';
  }
  
  Parent.prototype.sayHello = function() {
    console.log(`Hello, I'm ${this.name}`);
  }
  
  function Child() {
    Parent.call(this);
    this.name = 'Child';
  }
  
  Child.prototype = Object.create(Parent.prototype);
  
  Child.prototype.sayGoodbye = function() {
    console.log(`Goodbye, I'm ${this.name}`);
  }
  
  const child = new Child();
  
  child.sayHello(); 
  child.sayGoodbye(); 
  
  
  // Q.2- .....
  
  
  function Animal(name) {
      this.name = name;
    }
    
    Animal.prototype.speak = function() {
      console.log(this.name + ' make a noise.');
    };
    
    function Dog(name, breed) {
      Animal.call(this, name);
      this.breed = breed;
    }
    
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;
    
    Dog.prototype.speak = function() {
      console.log(this.name + ' barks.');
    };
    
    var res = new Dog('Fido', 'Labrador');
    res.speak();
  
  
    // Q.3- .....
  
  
  
  Array.prototype.sum = function() {
    return this.reduce((total, current) => total + current, 0);
  };
  
  
  const arr1 = [10, 20, 30];
  const arr2 = [45, 85, 60];
  const arr3 = [150, 200, 0];
  
  const sum1 = arr1.sum();
  const sum2 = arr2.sum();
  const sum3 = arr3.sum();
  
  
  console.log(`The sum of arr1 is ${sum1}`);
  console.log(`The sum of arr2 is ${sum2}`);
  console.log(`The sum of arr3 is ${sum3}`);
  
  
  // Q.4- .....
  
  function allPropertyNames(obj) {
   
  
      let res = [];
    
      while (obj) {
        res = res.concat(Object.getOwnPropertyNames(obj));
    
        obj = Object.getPrototypeOf(obj);
      }
    
      return res;
    }
  
    const person = {
      name: 'John',
      age: 30
    };
    
    const employee = Object.create(person, {
      salary: {
        value: 50000
      }
    });
    
    const propertyNames = allPropertyNames(employee);
    
    console.log(propertyNames);