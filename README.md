# List Collection Type for Typescript. 
At the moment Typescript doesn't have a LIST&lt;T&gt; collection. This library helps developers to use LIST&lt;T&gt; collection in their application. 
  
# Version
0.1 Beta

# Requirements
- Any text editor, preferablly Visual Studio Code

# Features
- Add, remove values to the list
- Retrieve the value of a given index
- Find the size of the List
- Retrieve all the values of the list as an array
- Ability to define the type of the list

# Installation
- Download the list.ts file from this repositary 
- Add it to your project
- Link the file to the project. (In Aangular export keyword has to be used in front of the class keyword in the file)

# Technologies
- Typescript
- Javascript

# License 
MIT

# Author
Badde Liyanage Don Dilanga, 2020/October, github@dilanga.com. Sri Lanka LK.
  
# Documentation

### Construction
public List&lt;T&gt;() = Initialize a new instance of List class with T type. 

### Methods
- public add(value: T) = Add a T type value to the instance
- public remove(index: number): T[] = Remove the value at the given index from the instance, and retrieve the filtered instance (A copy of the original instance).
- public index(index: number): T = Retrieve the value at the given index

### Properties
- public get size(): number = Retrieve the length of the instance
- public get values(): Array&lt;T&gt; = Retrieve the instance itself.
