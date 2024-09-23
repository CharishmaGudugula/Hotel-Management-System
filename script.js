javascript.js
// JavaScript for Hotel Management System
// Array to hold booking data
let roomBookings = [];

// Get form and table elements
const bookingForm = document.getElementById('booking-form');
const bookingTbody = document.getElementById('booking-tbody');

// Add event listener for booking form submission
bookingForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get booking and guest details from form
    const roomType = document.getElementById('room-type').value;
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const guestName = document.getElementById('name').value;
    const guestEmail = document.getElementById('email').value;
    const guestPhone = document.getElementById('phone').value;

    // Validation: Ensure all fields are filled
    if (!roomType || !checkIn || !checkOut || !guestName || !guestEmail || !guestPhone) {
        alert("All fields are required. Please fill out every detail.");
        return;
    }

    // Store booking data in an object
    const roomBooking = {
        roomType,
        checkIn,
        checkOut,
        guestName,
        guestEmail,
        guestPhone
    };

    // Add the booking to the bookings array
    roomBookings.push(roomBooking);

    // Display updated bookings in the table
    displayRoomBookings();

    // Clear the form after submission
    bookingForm.reset();

    // Alert booking success
    alert("Booking Successful!");
});

// Function to display bookings in the table
function displayRoomBookings() {
    bookingTbody.innerHTML = ''; // Clear the table before adding new rows

    roomBookings.forEach((booking, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${booking.roomType}</td>
            <td>${booking.checkIn}</td>
            <td>${booking.checkOut}</td>
            <td>${booking.guestName}</td>
            <td>${booking.guestEmail}</td>
            <td>${booking.guestPhone}</td>
            <td>
                <button class="delete-btn" data-index="${index}">Delete</button>
                <button class="edit-btn" data-index="${index}">Edit</button>
            </td>
        `;
        bookingTbody.appendChild(row);
    });

    // Add event listeners to delete and edit buttons
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', deleteBooking);
    });

    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', editBooking);
    });
}

// Function to delete a booking
function deleteBooking(event) {
    const index = event.target.dataset.index; // Get booking index from button
    roomBookings.splice(index, 1); // Remove booking from array
    displayRoomBookings(); // Update the table
}

// Function to edit a booking
function editBooking(event) {
    const index = event.target.dataset.index; // Get booking index from button
    const booking = roomBookings[index];

    // Populate the form with the booking details for editing
    document.getElementById('room-type').value = booking.roomType;
    document.getElementById('check-in').value = booking.checkIn;
    document.getElementById('check-out').value = booking.checkOut;
    document.getElementById('name').value = booking.guestName;
    document.getElementById('email').value = booking.guestEmail;
    document.getElementById('phone').value = booking.guestPhone;

    // Remove the old booking so it can be updated
    roomBookings.splice(index, 1);

    // Update the display
    displayRoomBookings();
}
