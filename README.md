
# DevStreamTestTask

## Developer test
<center>Task 1 – Design</>

- Create three Vehicle classes, e.g. Car, Bicycle etc. Give each class some relevant properties.

- Set all properties to fixed values in their constructor, e.g. MaxSpeed of Car is set to 150.  

It is not relevant to consider the fact that different cars have different maximum speeds, nor is it relevant whether the properties are assignable outside of the constructor.

<center>Task 2 – Reflection</> 

- Create an InstanceService class with the method IEnumerable<T> GetInstances() which returns an instance of every class of type T.

- Create a fourth Vehicle class. This new class should automatically be returned from InstanceService.GetInstances() without necessitating changes to the implementation of InstanceService.

<center>Task 3 – Functionality</>

- Create a console application which writes every Vehicle type name to the console, sorted alphabetically.

- Create a method which can search for types by specifying part of the name.

- Create a method which can write all instances returned from InstanceService.GetInstances() to disk.

<center>Task 4 – Problem-solving</>

- Create a method string  ReverseString(string s) which returns a reversed version of the input string.

  - Do not use String.Reverse()

- Create a method with the signature bool IsPalindrome(string s) which checks whether the input string is a palindrome (see definition below)

- Create a method IEnumerable<int> MissingElements (int[] arr) which takes as an argument an array of integers. It may be assumed that the input sequence is sorted in ascending order.   
Two conditions are placed on arr:

  - The sequence must increase by 1 for each element of arr, starting with the smallest element present.

  - The number sequence must be complete, starting with the smallest element of arr, and ending with the largest.

  - If numbers are missing from arr in order to fulfill these conditions, they should be returned by the method.

  - If no elements are missing, the call should result in an empty collection.

  - Example inputs and results:

    - §  arr = [4,6,9] should result in [5,7,8]

    - §  arr = [2,3,4] should result in [ ]

	- §  arr = [1,3,4] should result in [2]

## react-app
> This version has been developed using [React](https://react.dev/).
### <center>Image gallery application

Each time the application is loaded - terms of use should be shown and have to be accepted. As soon as they have been accepted the main content of the application can be displayed, which is a collection of pictures with the possibility to save them to the file system.

### <center>Functionality

JSON_DATA for steps 1-2 should be fetched from here [http://188.166.203.164/static/test.json](http://188.166.203.164/static/test.json). Allowed origin: http://localhost:3000.

1. **Terms of Use**
Show terms of use and allow accepting them by clicking the “Accept” button
2. **Show an image collection**
Show images as canvas elements. image_urls are relative to the host.
3. **Save an image**
Implement "Save Image" functionality via button. By clicking on this button the image should be saved to the file system.

## vanilla-app
> This version has been developed using vanilla JS.
### <center>Image gallery application

Each time the application is loaded - terms of use should be shown and have to be accepted. As soon as they have been accepted the main content of the application can be displayed, which is a collection of pictures with the possibility to save them to the file system.

### <center>Functionality

JSON_DATA for steps 1-2 should be fetched from here [http://188.166.203.164/static/test.json](http://188.166.203.164/static/test.json). Allowed origin: http://localhost:3000.

1. **Terms of Use**
Show terms of use and allow accepting them by clicking the “Accept” button. This version of functionality must be Implemented as an ``async function acceptTermsOfUse(termsOfUse)`` so it can be awaited before showing the main content of the app.
2. **Show an image collection**
Show images as canvas elements. image_urls are relative to the host. This version of  functionality must be Implemented as a single ``async function renderImageToCanvas(imageUrl)`` so you can easily reuse it for rendering as many pictures as you need.
3. **Save an image**
Implement "Save Image" functionality via button. By clicking on this button the image should be saved to the file system.