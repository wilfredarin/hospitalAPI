# Hospital API
This is a RESTful API service that provides endpoints for managing doctors, patients, and their medical reports.
## Project Setup
### Step 1: Clone the Repository
```bash
  git clone https://github.com/wilfredarin/hospitalAPI
```
### Step 2: Install Dependencies
```bash
  cd <project-directory>
  npm install
```
### Step 3: Configure Environment Variables
Create a .env file in the root of your project directory and add the following environment variables:
```
PORT=3000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```
Replace <your-mongodb-uri> with the URI of your MongoDB database and <your-jwt-secret> with a secret key for JWT token generation.

### Step 4: Start the Server
```bash
node server.js
```

### Step 5: Test Endpoints
You can now test the endpoints using tools like cURL, Postman, or any HTTP client of your choice. Refer to the README.md file for information on available endpoints and their usage.


## API Endpoints

### 1. Register a Doctor
**Endpoint:** `POST /doctors/register`

**Input JSON:**
```json
{
  "username": "example1",
  "name": "a b",
  "password": "pass"
}
```
**OUTPUT:**
```json
{
    "username": "example1",
    "password": "$2b$12$AEcxsX3RfIdbbKJFRB1fn.08MdIRBe2Tp75Z7O3pXnG1gVEhaWMsa",
    "name": "a b",
    "_id": "665d1c0a55548d0b0b1df5ce",
    "__v": 0
}
```

### 2. Doctor Login
**Endpoint:** `POST /doctors/login`

**Input JSON:**
```json
{
  "username": "example1",
  "password": "pass"
}
```
**OUTPUT:**
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImV4YW1wbGUxIiwiaWQiOiI2NjVkMWMwYTU1NTQ4ZDBiMGIxZGY1Y2UiLCJpYXQiOjE3MTczNzg2NjYsImV4cCI6MTcxNzM4MjI2Nn0.qMLLeEaV2xn5b5cFIDEeWALFxtNzKxusBjYr9PSLe48"
}
```

### 3. Register a Patient
**Endpoint:** `POST /patients/register`

**Input JSON:**
#### Body
```json
{  
    "username":979728,
    "name":"Jhon K"
}
```
#### Headers
```
Key:authorization, Value:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImV4YW1wbGUxIiwiaWQiOiI2NjVkMWMwYTU1NTQ4ZDBiMGIxZGY1Y2UiLCJpYXQiOjE3MTczNzg2NjYsImV4cCI6MTcxNzM4MjI2Nn0.qMLLeEaV2xn5b5cFIDEeWALFxtNzKxusBjYr9PSLe48
```
**OUTPUT:**
```json
{
    "username": "979728",
    "name": "Jhon K",
    "reports": [],
    "_id": "665d1f3055548d0b0b1df5d2",
    "__v": 0
}
```

### 4. Create a Report for a Patient
**Endpoint:** `POST /patients/:id/create_report`
### List of Valid Status
```
["Negative", "Travelled-Quarantine", "Symptoms-Quarantine",
            "Positive-Admit"]
```
**Input JSON:**
```json
{
    "status":"Negative"
}
```
#### Headers
```
Key:authorization, Value:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImV4YW1wbGUxIiwiaWQiOiI2NjVkMWMwYTU1NTQ4ZDBiMGIxZGY1Y2UiLCJpYXQiOjE3MTczNzg2NjYsImV4cCI6MTcxNzM4MjI2Nn0.qMLLeEaV2xn5b5cFIDEeWALFxtNzKxusBjYr9PSLe48
```
**OUTPUT:**
```json
{
    "patient_id": "665d1f3055548d0b0b1df5d2",
    "creator_id": "665d1c0a55548d0b0b1df5ce",
    "time": "2024-06-03T01:07:18.422Z",
    "status": "Negative",
    "_id": "665d210355548d0b0b1df5d5",
    "__v": 0
}
```

### 5. List All Reports of a Patient
**Endpoint:** `GET /patients/:id/all_reports`

#### Headers
```
Key:authorization, Value:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImV4YW1wbGUxIiwiaWQiOiI2NjVkMWMwYTU1NTQ4ZDBiMGIxZGY1Y2UiLCJpYXQiOjE3MTczNzg2NjYsImV4cCI6MTcxNzM4MjI2Nn0.qMLLeEaV2xn5b5cFIDEeWALFxtNzKxusBjYr9PSLe48
```

**OUTPUT:**
```json
{
    [
    {
        "_id": "665d210355548d0b0b1df5d5",
        "patient_id": "665d1f3055548d0b0b1df5d2",
        "creator_id": "665d1c0a55548d0b0b1df5ce",
        "time": "2024-06-03T01:07:18.422Z",
        "status": "Negative",
        "__v": 0
    }
]
}
```

### 6. List All Reports by Status
**Endpoint:** `GET /reports/:status`

### List of Valid Status
```
["Negative", "Travelled-Quarantine", "Symptoms-Quarantine",
            "Positive-Admit"]
```

#### Headers
```
Key:authorization, Value:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImV4YW1wbGUxIiwiaWQiOiI2NjVkMWMwYTU1NTQ4ZDBiMGIxZGY1Y2UiLCJpYXQiOjE3MTczNzg2NjYsImV4cCI6MTcxNzM4MjI2Nn0.qMLLeEaV2xn5b5cFIDEeWALFxtNzKxusBjYr9PSLe48
```


**OUTPUT:**
```json
{
    [
    {
        "_id": "665d210355548d0b0b1df5d5",
        "patient_id": "665d1f3055548d0b0b1df5d2",
        "creator_id": "665d1c0a55548d0b0b1df5ce",
        "time": "2024-06-03T01:07:18.422Z",
        "status": "Negative",
        "__v": 0
    }
]
}
```



