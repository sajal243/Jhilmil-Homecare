# Jhilmil Homecare Dashboard

A frontend dashboard built using **React** to manage patients and homecare services for a home healthcare provider.  
The application allows viewing patient details, filtering records, browsing services, and booking homecare services through an interactive UI.

## LIVE URL - https://jhilmil-homecare-3uhn3wclu-sajal243s-projects.vercel.app/

---

## 🚀 Project Setup

### Prerequisites
- Node.js (v20 or  >= 22)
- npm or yarn

### Steps to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/sajal243/Jhilmil-Homecare.git

2. Navigate to the project folder:
   
   cd my-react-app


3. Install dependencies:

  npm install


4. Start the development server:

  npm run dev

  (If using Create React App, use npm start instead)
  Open the app in your browser:
  http://localhost:5173

### ✨ Features Implemented
#### 🧑‍⚕️ Patient Management

1. Display patient cards with basic details
2. View detailed patient information in a modal (React Portal)
3. Filter patients by:
4. Status (Active / Inactive)
5. Type of Care
6. Search patient by name
7. Hospital-style UI with a blue theme

#### 🏥 Services Management

  List of healthcare services with:

  1. Service ID
  2. Name & description
  3. Duration / visit frequency
  4. Cost range
  5. Service cards with Popular and Recommended tags

#### 📝 Service Booking

1. Interactive booking form inside a modal
2. Controlled inputs with validation
3. Stores booking data in localStorage
4. Prevents invalid submissions

#### 🎨 UI / UX

1. Smooth modals with backdrop
2. Accessible form inputs
3. Consistent spacing & typography
4. Reusable components

#### 📌 Assumptions Made

1. Backend APIs are not available, so:
2. Patient and service data are static JSON
3. Bookings are stored in browser localStorage
4. Authentication and user roles are out of scope
5. Focus is on UI clarity and interaction
6. Dataset size is small to medium (no pagination)

#### 🛠️ Tech Stack

1. React
2. JavaScript (ES6+)
3. CSS
4. React Portals
5. Browser localStorage

#### 📄 Future Improvements

1. Backend integration
2. Edit / cancel bookings
3. Pagination & sorting
4. Authentication & role-based access
5. Notifications and service tracking
