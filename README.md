


<!-- This is a basic template for ReadMe files -->

# bamazon
A basic Storefront that uses Node.js and MySQL.
  

## :mag: Table of contents :mag:

  

### [1-Description](https://github.com/nick-d-brown/bamazon#1-description-page_facing_up)
### [2-Technologies](https://github.com/nick-d-brown/bamazon#2-technologies--computer)
### [3-Challenges](https://github.com/nick-d-brown/bamazon#3-challenges-screamboom)
### [4-Issues](https://github.com/nick-d-brown/bamazon#4-issues-questionexclamation)
### [5-Desired Features](https://github.com/nick-d-brown/bamazon#5-desired-features-star2)
### [6-Contributors](https://github.com/nick-d-brown/bamazon#6-contributors-raised_hands)

 ---

### 1-Description :page\_facing\_up:

This Node.js application allows the user to interact with a basic product storefront. Upon starting up the bamazonCustomer.js file using node the user will be asked whether they would like to make a purchase. If no, the application exits the store. If yes, the user is asked to enter a product id (from the provided product table) that they would like to purchase. They then must enter a quatity to purchase. 

Upon entering this data the application will first determine whether there is enough product in stock to complete the order. If no, it then re-prompts the user to place a new order (this time with an acceptable quantity). If yes, then the order is placed and the total the user owes is totaled. All of the information is displayed to the user. The table is then re-displayed with updated quantities and the user is again asked whether they would like to make a purchase.

The user also has the ability to access bamazonManager.js. This side of the app allows the user to view all products (including their quantities), view only the products with low quantity(less than 5 products left), increase the quantity of a product, and add a new product.

This app is meant to showcase the ability to interact with a server using MySQL and to utilize Node.js as the medium to interact/dislay the content. 

> **Note:** Below are three gifs to showcase the working project.




![Customer View](https://github.com/nick-d-brown/bamazon/blob/master/assets/bamazonCustomer1.gif)
![Manager View - Part 1](https://github.com/nick-d-brown/bamazon/blob/master/assets/bamazonManager1.gif)
![Manager View - Part 1](https://github.com/nick-d-brown/bamazon/blob/master/assets/bamazonManager2.gif)



---


### 2-Technologies  :computer:

  This project utilizes the following technologies:
  > **Note: Delete this note and the following technologies that do not apply.**



- Vanilla JavaScript
- [Node.js](https://nodejs.org/en/)
- [npm colors](https://www.npmjs.com/package/colors)
- [npm dotenv](https://www.npmjs.com/package/dotenv)
- [npm inquirer](https://www.npmjs.com/package/inquirer)
- [npm cli-table](https://www.npmjs.com/package/cli-table)
- [npm figlet](https://www.npmjs.com/package/figlet)
- [MySQL](https://www.mysql.com/npm)

---

### 3-Challenges :scream::boom:

> **Note:** This section is meant for beginners an idea of what the *crux* technology was for this project. Ideally by seeing this first they will be able tackle the hard problem first to start the learning/absorption process as soon as possible.

The main chllenges encountered with this project were interacting with my server using MySQL and determining the proper functional logic to use in my inquirer prompts. 

I first tackled the issue of using CRUD operations in the JavaScript logic to manipulate the server data. I order to do this though, I first had to learn how to properly structure my Data Types using proper syntax in my Database tables. To learn these data types I used the MySQL Data Types link that is provided below. I then used the second link to learn more about CRUD operations. This was mainly a start though, I utilized the Udemy course on MySQL by Colt Steele and other resources to build my knowledge. Research is your friend. 

After building my knowledge of these two things the rest of the project was simply doing my best to keep things simple. I found myself overcomplicating the logic from time to time. 

Use the links listed below to learn more about the technology and remember **you will eventually learn how everything works!**

---**Suggested Links**---

- [MySQL Data Types](https://dev.mysql.com/doc/refman/5.7/en/data-type-overview.html)
- [MySQL CRUD Operations](https://www.nodejsera.com/nodejs-tutorial-day17-crud-in-mysql.html)
- [Colt Steele MySQL Course](https://www.udemy.com/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/)

### 4-Issues :question::exclamation:

  Currently there are no known issues that need to be resolved. If you find an issue please submit it using the issues tab, or contact [Nick Brown](https://github.com/nick-d-brown/).

---

### 5-Desired Features :star2:

  Below is a list of possible features that we would like to add to the project. If You would like to propose a feature to add please feel free to create a PR to add it to the list. **We love it when others can help propose ideas!**


---

### 6-Contributors :raised_hands:

- [Nick Brown](https://github.com/nick-d-brown/)

> **PS:** If you would like to contribute please contact Nick Brown on GitHub or at n.brown.professional@gmail.com. We welcome bot first time contributors and experienced developers with critical feedback. 

---

## Thanks for visiting!
### [Top of Page](https://github.com/nick-d-brown/bamazon#bamazon)