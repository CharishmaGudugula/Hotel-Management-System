Hotel Management System

Overview

A simple web-based hotel management system built using HTML, CSS, and JavaScript. The system allows users to book rooms, view bookings, and manage guest information.


Features

- Room booking form with validation
- Display bookings in a table
- Guest information management
- Local storage support for data persistence


Requirements

- Modern web browser
- Local storage support


Usage

1. Open index.html in a web browser.
2. Fill out the room booking form and submit.
3. View bookings in the table below.


File Structure

- index.html: Main HTML file
- style.css: CSS stylesheet
- script.js: JavaScript file for functionality


Functionality

- script.js handles form submission, validates input, and stores data in local storage.
- script.js displays bookings in the table.


Local Storage

- bookings key: Stores an array of booking objects in JSON format.


Booking Object Structure


{
  "roomType": string,
  "checkIn": string,
  "checkOut": string,
  "name": string,
  "email": string,
  "phone": string
}



