# Academia Hub


## Overview
Academia Hub is a comprehensive educational platform designed to empower learners and educators. Featuring over 30+ categories for creating and consuming educational content, it provides a seamless experience with robust user authentication, course management, payment integration, and advanced content formatting capabilities.

### Features
- **Scalable User Authentication:** Efficiently manages 1,000+ users with JWT-based authentication and Bcrypt-encrypted passwords.
- **Course Management:** Create, edit, and manage courses with ease.
- **Payment Integration:** Secure transactions powered by Razorpay.
- **Media Handling:** Utilize Cloudinary for seamless media uploads and management.
- **Rich Content Formatting:** Supports Markdown for a user-friendly writing experience.
- **Responsive UI:** Styled with Tailwind CSS for consistent design across devices.

### Tech Stack
- **Frontend:** React.js, TailwindCSS, Redux, video-react
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT, Bcrypt
- **Payment Gateway:** Razorpay
- **Media Management:** Cloudinary

## Installation

### Prerequisites
- Node.js installed on your system
- MongoDB set up locally or on a cloud server

### Steps to Run Locally

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/shahzan01/Academia-Hub.git
   cd Academia-Hub
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   cd server
   npm install
   cd ..
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the server directory with the following variables:
   ```env
   
   MONGO_URI=your_mongo_connection_string
   
   JWT_SECRET=your_jwt_secret
   
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
  
    # Nodemailer
    MAIL_HOST = 
    MAIL_USER = 
    MAIL_PASS = 
 

    #cloudinary
    CLOUD_NAME = 
    API_KEY =
    API_SECRET = 
    FOLDER_NAME = 

   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```

5. **Access the App:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage
- **Sign Up/Login:** Create an account or log in to access features.
- **Browse Courses:** Explore content across 30+ categories.
- **Create Content:** Instructors can create and upload their courses.
- **Purchase Courses:** Use Razorpay for secure payments.

## Contributing
Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Submit a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact
For queries, contact [m.shahzan2003@gmail.com](mailto:m.shahzan2003@gmail.com) or connect via [LinkedIn](https://www.linkedin.com/in/mohd-shahzan1/).

