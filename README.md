## List Collection Type for Typescript. 
At the moment Typescript doesn't have a LIST<T> collection. This library helps developers to use LIST<T> collection in their application. 
  
## Documentation

### Construction
public List<T>() = Initialize a new instance of List class with T type. 

### Methods
- public add(value: T) = Add a T type value to the instance
- public remove(index: number): T[] = Remove the value at the given index from the instance, and retrieve the filtered instance (A copy of the original instance).
- public index(index: number): T = Retrieve the value at the given index

### Properties
- public get size(): number = Retrieve the length of the instance
- public get values(): Array<T> = Retrieve the instance itself.
