# Welcome to the BIOSKOP Demo
----

This demo can be used to train your backend development skills with cinemas online ticketing case.

In order to use this demo, please fill in the base Url of your own backend from the beginning prompt! don't worry if you accidentally skip or make a mistake, just reload the page to start over.

## API Contract
To use this FE demo, you're required to comply with this API contract

### User

**POST /api/user/new**

Registering new user
* **URL Params**  
  None
* **Data Params**  
```
{
    fullName: "Rizky Mochamad Fauzi",
    username: "rizkyfauzi123",
    email: "rizkydummy@gmail.com",
    password: "supersecretpassword"
}
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    status: "OK",
    message: "You are now registered!"
}
```

**PUT /api/user/edit**

Update an user
* **URL Params**  
  None
* **Data Params**  
```
{
    fullName: "Rizky Mochamad Fauzi",
    username: "rizkyfauzi123",
    email: "rizkydummy@gmail.com",
    password: "supersecretpassword"
}
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    status: "OK",
    message: "Your user has been updated!"
}
```

**DELETE /api/user/delete**

Delete an user
* **URL Params**  
    id of the user

  *Required:* id=[String]
* **Data Params**  
    None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    status: "OK",
    message: "we're sad to see you go :("
}
```

### Movies

**GET /api/movies/get-movies**

Return all movies which is currently showing
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
[
    {
        id: "12345",
        name: "The Amazing Java-man",
        img: "http://yourimageurl.com/image_sub_path_1"
    },
    {
        id: "78762",
        name: "Avatar : The way of fire",
        img: "http://yourimageurl.com/image_sub_path_2"
    }
]
```

**GET /api/movies/schedules**

Get available schedules of respected movie
* **URL Params**  
    id of movie

  *Required:* `id=[String]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    id: "12345",
    name: "The Amazing Java-man",
    img: "http://yourimageurl.com/image_sub_path_1",
    schedules: [
        {
            id: "1234520221230173050001",
            schedule: "Jum'at 30 Desember 2022, 17:30:50 WIB"
        },
        {
            id: "1234520221230205000001",
            schedule: "Jum'at 30 Desember 2022, 20:50:00 WIB"
        }
    ]
}
```

**GET /api/movies/seats**

Return all available seats
* **URL Params**  
    id of schedule

  *Required:* `id=[String]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
[
    {
        id: "1234520221230173050001-A01",
        studio: "A",
        seat: "A01"
    },
    {
        id: "1234520221230173050001-A02",
        studio: "A"
        seat: "A02"
    }
]
```

**POST /api/movies/order**

Order a movie
* **URL Params**  
  None
* **Data Params**  
```
{
    movieId: "12345",
    scheduleId: "1234520221230173050001",
    seatId: "1234520221230173050001-A02"
}
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    status: "OK",
    message: "Your ticket has been ordered! We will also send you an email of your invoice"
}
```

**POST /api/movies/add**

Add new Movies
* **URL Params**  
  None
* **Data Params**  
```
{
    name: "The Amazing Java-man 2",
    img: "http://yourimageurl.com/image_sub_path_1",
    schedules: [
        {
            schedule: "Jum'at 30 Desember 2022, 17:30:50 WIB"
        }
    ],
    studio: ["A", "C"]
}
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    status: "OK",
    message: "movies created!" 
}
```

**PUT /api/movies/order**

Edit movies name
* **URL Params**  
  None
* **Data Params**  
```
{
    movieId: "12345",
    name: "The Amazing JavaMan"
}
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    status: "OK",
    message: "movies updated!" 
}
```

**DELETE /api/movies/delete**

Delete movie
* **URL Params**  
    id of movie

  *Required:* id=[String]
* **Data Params**  
    None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    status: "OK",
    message: "movies deleted!" 
}
```