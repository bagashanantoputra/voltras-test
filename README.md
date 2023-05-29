# Junior Software Engineer Test

* Eclipse or VSCode IDE installed on your laptop.
* Online IDE's are also allowed.
* **You are free to use any programming language.**
* **JAVA is a plus**
* You are free to choose which questions to answer first.
* Your answer should be runnable.

## 1. Remove duplicates item.

Create a function called removeDuplicate() that takes a list of integer argument, and print the last ( rightmost ) occurrence of each element.

Example: For argument: \[3, 4, 4, 3, 6, 3\]

remove the 3 at index 0 remove the 4 at index 1 remove the 3 at index 3

Expected output: \[4, 6, 3\]

```java

removeDuplicate([3, 4, 4, 3, 6, 3]); 
//  [4, 6, 3]
```

## 2. Forbidden If.

Create a function called ifFobidden() that accepts two numbers a and b and returns whether a is smaller than, bigger than, or equal to b, as a string.

Example:

```java
ifFobidden(5, 4)   ---> "5 is greater than 4"
ifFobidden(-4, -7) ---> "-4 is greater than -7"
ifFobidden(2, 2)   ---> "2 is equal to 2"
```

There is only one problem...

**You cannot use if statements, and you cannot use the ternary operator ? : .**

In fact the word **if** and the character **?** are not allowed in your code.

## 3. Diamond pattern.

Create a function called diamondGenerator() that takes an integer argument and print a diamond pattern with given argument as diamond height.

```java

diamondGenerator(3); 
//     *
//    ***
//     *

diamondGenerator(6); 
//     *
//    ***
//   *****
//   *****
//    ***
//     *
```

## 4. Filter list object

Create a function called filterList() that takes one arguments: List of class. The class has 3 attributes: type, name, price. The function returns filtered List of class where there are only cheapest price with unique type-name in there.

```java
List<Item> arg1 = [	
	{
		"type"	: "Pen"
		"name"	: "Snowman",
		"price"	: 10000
	},
	{
		"type"	: "Ruler"
		"name"	: "Butterfly",
		"price"	: 5000
	},
	{
		"type"	: "Pen"
		"name"	: "Snowman",
		"price"	: 12000
	},
	{
		"type"	: "Eraser"
		"name"	: "Kenko",
		"price"	: 12000
	},
	{
		"type"	: "Pen"
		"name"	: "Kenko",
		"price"	: 10000
	},
	{
		"type"	: "Eraser"
		"name"	: "Kenko",
		"price"	: 9000
	},
	{
		"type"	: "Eraser"
		"name"	: "Snowman",
		"price"	: 2000
	},
	{
		"type"	: "Ruler"
		"name"	: "Snowman",
		"price"	: 10000
	}
];

filterList(args1);
// [	
// 	{
// 		"type"	: "Pen"
// 		"name"	: "Snowman",
// 		"price"	: 10000
// 	},
// 	{
// 		"type"	: "Ruler"
// 		"name"	: "Butterfly",
// 		"price"	: 5000
// 	},
// 	{
// 		"type"	: "Pen"
// 		"name"	: "Kenko",
// 		"price"	: 10000
// 	},
// 	{
// 		"type"	: "Eraser"
// 		"name"	: "Kenko",
// 		"price"	: 9000
// 	},
// 	{
// 		"type"	: "Eraser"
// 		"name"	: "Snowman",
// 		"price"	: 2000
// 	},
// 	{
// 		"type"	: "Ruler"
// 		"name"	: "Snowman",
// 		"price"	: 100000
// 	}
// ]
```

## 5. String picker

Create a function called stringPicker() that takes string argument and print a list of string from the argument given.

```java

String arg = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur sagittis risus ${PRICE}, sed finibus ante ornare a. Donec a dolor ultricies, bibendum eros in ${Ticket 09}, commodo nibh. Morbi eget dui facilisis, imperdiet quam vitae, faucibus sem.";

stringPicker(arg);
// ["PRICE", "Ticket 09"]
```

## 6. Tree view

Create a function called treeViewBuilder() that takes a list of string argument and print a tree pattern string, from the argument given.

```dart
List<String> arg1 = [
    "A-B-C",
    "A-B-G",
    "A-B-H",
    "A-C-D",
    "A-C-K-L",
    "A-C-K-M",
    "A-E-F",
    "A-E-I",
    "A-E-J",
];

treeViewBuilder(arg1);

// A
//     B
//         C
//         G
//         H
//     C
//         D
//         K
//             L
//             M
//     E
//         F
//         I
//         J
```

```dart
List<String> arg2 = [
    "FLIGHT-REPORT-DOMESTIC",
    "HOTEL-REPORT-DOMESTIC",
    "FLIGHT-REPORT-INTERNATIONAL",
    "HOTEL-REPORT-INTERNATIONAL",
    "HOTEL-BOOKING-CONFIRMED",
    "HOTEL-BOOKING-CANCELED",
    "HOTEL-LIST",
    "VOLTRAS-BOD",
    "VOLTRAS-HR",
    "VOLTRAS-ITDEV-FRONT END-JUNIOR SOFTWARE ENGINEER",
    "VOLTRAS-ITDEV-FRONT END-SENIOR SOFTWARE ENGINEER",
    "VOLTRAS-ITDEV-BACK END-JUNIOR SOFTWARE ENGINEER",
    "VOLTRAS-ITDEV-BACK END-SENIOR SOFTWARE ENGINEER",
    "VOLTRAS-ITDEV-IT OPS",
];

treeViewBuilder(arg2);

// FLIGHT
//     REPORT
//         DOMESTIC
//         INTERNATIONAL
// HOTEL
//     BOOKING
//         CONFIRMED
//         CANCELED
//     LIST
//     REPORT
//         DOMESTIC
//         INTERNATIONAL
// VOLTRAS
//     BOD
//     HR
//     ITDEV
//         BACK END
//             JUNIOR SOFTWARE ENGINEER
//             SENIOR SOFTWARE ENGINEER
//         FRONT END
//             JUNIOR SOFTWARE ENGINEER
//             SENIOR SOFTWARE ENGINEER
//         IT OPS
```

## Do your best and happy coding.