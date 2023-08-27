# Understanding JSON Serialization of JavaScript Objects using JSON.stringify

## Introduction

In this video, we will talk about Javascript Objects and their serialisation into JSON text using the `JSON.stringify` function.

I wanted to make this video because some developers treat javascript objects and JSON as the same thing because they looks exactly the same.

But javascript objects are much more than JSON text, they are first class variables and are part of primitive features available in the JS Language. They can contain anything from 

- primitive types - string, number, boolean, null, undefined, array, nested objects,
- derived types - Map, Set, Date etc, or
- even functions
- Instances of custom classes

On the other hand JSON text JSON (which stands for Javascript Object Notation) is just a ***plain text format*** to store and transport data. It supports only the following types

- String
- Number
- Boolean
- Null
- Array
- Nested JSON Objects

We can convert JS Objects to JSON text using `JSON.stringify` function and it’s also called `serialising` and we can also convert JSON text to JS Objects using `JSON.parse` function which is also called `deserialising`.

Similarly, all modern programming languages support converting variables into JSON data and also converting JSON text into corresponding variables.

## Example

So let’s proceed, we have this simple user object which is a javascript object, and which means it can contain ***any*** property with javascript supported type. so it has `id`, `email`, etc. but also special properties - `closingBalance` and `accounts` with `Map` and `Set` types respectively.

We can proceed and convert or serialise this javascript object into JSON text right now using `JSON.stringify` , so let’s do that and see what we get.

It works just as expected. Our JSON text has everything we need. That’s good.

## Introducing Map and Set

However our JS object can hold any valid Javascript datatype, so let’s add some special properties - having Map, Set types.

When we convert the JS object to JSON text, let’s see what we get now. 

This time we see that it is not able to hold all of the original information and it replaces values for these properties `closing_balance` and `accounts` with empty objects.

More specifically it loses the values stored in `Map` and `Set` types. 

All of it has to do with serialising one type into another.

Let’s understand what is going on here.

Since JSON is essentially just plain text, ****`Map` and `Set` can not be represented as text in JSON text. And that’s why their values are dropped while converting to JSON (or we say serialising values in text).

## Introducing Date, Address and function in the Object

Now let’s take a look at what happens if we add more different types of properties and try to see their behaviour in this conversion.

We will add `created_at` and `addresses` property to this object of type `Date` and see the effect…

It seems like with `Custom Classed`, default behaviour of `JSON.stringify` is to serialise all properties into JSON objects.

And with `Date` type, it’s preparing a string.

That is very mysterious behaviour, where `Date` and `Address` classes are handled nicely but `Map` and `Set` values are dropped completely.

So is that it, should we just accept this behaviour and what if we want to customise the serialisation of `Address` class?

So let’s understand the working of `JSON.stringify()` and see if we can control that as per our need.

## toJSON Function

There is also a standard way to handle this conversion or serialisation.

`JSON.stringify` while converting objects to JSON text, checks for a function called `toJSON` on each property and if it’s available on that property, it uses that preferrably to derive the JSON value. 

Strangely, this function is available on `Date` type but not on `Map` and `Set`.

We can also customise the serialising behaviour of our custom classes by adding a custom implementation of `toJSON` function if we want to control which properties we want to export.

We can obviously go ahead and try to add this function and see if our Map and Set also behave like Date.

We will convert Map to an Object and Set to an array. And most certainly it will work.

## Using Replacer Function in JSON.stringify

Having to define a function on each Map and Set variable seems like an overkill.

So let’s see if there is any general way to serialise each type.

`JSON.stringify` function provides a way to replace such values using a callback. And that is the second argument to this function called `replacer` function.

The replacer function takes two arguments - key and value for each property and it’s called recursively on the entire JS object when we call `JSON.stringify`

So let’s use that to convert Map  → JS object and Set → array so that they can be represented in JSON text.

## JSON in API Response

Why is all this important? 

Well, we use JSON for multiple use-cases:

- We may want to export our data in JSON files
- We send data as JSON text in API response

I will show you using the API response.

When we send the response without using `replacer`, we see that these properties in this response are empty.

With HTTP, we know that the response is always sent as text content.

So what `express` framework does is it converts this JS object to plain text first before transporting the response and sets the `content-type` header as `application/json`  so that the client understands that the response is to be read as JSON format.

So the values are dropped in transition because their type is not supported.
