# 👨‍💻 foodExplorer - Backend 🔙🔚
This project is a digital menu for a fictional restaurant called Food Explorer.

<h1 align="center">
    <img src="https://github.com/jescatolini/foodExplorer_API/assets/99694816/744b39a6-88c4-4122-b4c4-a1312526ae85" alt="Project Cover">
</h1>

## :scroll: Table of Contents

- [Notice](#loudspeaker-notice)
- [About](#blue_book-about)
- [Technologies](#man_technologist-technologies)
- [Features](#toolbox-features)
- [Usage](#briefcase-usage)
- [Author](#ghost-author)

</br>

## :loudspeaker: Notice

- API deployment is in: https://foodexplorer-api-o3ol.onrender.com

- The first version of the project is finalized.

- To test the project or clone the repository and test it locally using NodeJS and Postman.

- You can download NodeJS by [clicking here](https://nodejs.org/pt-br/download/).

- You can download Postman by [clicking here](https://www.postman.com/downloads/).

- The database modeling was done by me.

</br>

## :blue_book: About

This is the backend of the Final Challenge of the [Explorer program by Rocketseat](https://www.rocketseat.com.br/explorer).

This application simulates a fictional restaurant called foodExplorer, where users can register and log in.

If the user is an Administrator, they can add dishes, ingredients, update orders, etc.

If the user is a Client, they can update their profile, place an order, add a product to favorites, etc.

Below is the database modeling:

<h1 align="center">
    <img src="https://github.com/jescatolini/foodExplorer_API/assets/99694816/4b7b5457-a4f2-42ca-a215-efafb715da87" alt="Database Modeling Image">
</h1>

</br>

## :man_technologist: Technologies

- **JS** - used to handle all the application logic.
- **Node.js** - used to run JavaScript outside the browser.
- **Express** - responsible for handling HTTP requests.
- **Jest** - used for integration testing.
- **SQLite** - used to store data.
- **Knex** - used to generate SQL commands.
- **Multer** - used to manage image uploads.
- **Git** - responsible for version control of the code.

</br>

## :toolbox: Features

- :ballot_box_with_check: Register a user.
- :ballot_box_with_check: Update user's email, password, or name.
- :ballot_box_with_check: Show information for a specific order.
- :ballot_box_with_check: Show all orders for a user or all users.
- :ballot_box_with_check: Create, update, show, or delete a dish.
- :ballot_box_with_check: Create or show an ingredient.
- :ballot_box_with_check: Create, update, show order information.

</br>

## :briefcase: Usage

- [Starting the application](#starting-the-application)
- [Using the resources](#using-the-resources)
  - [Sections](#sessions)
    - [Create](#create-a-session)
  - [Users](#users)
    - [Register](#register-a-user)
    - [Update](#update-a-user)
  - [Dishes](#dishes)
    - [Create](#create-a-dish)
    - [Update](#update-a-dish)
    - [Show all](#retrieve-all-meals)
    - [Search](#search-for-a-meal)
    - [Show specific](#show-a-specific-meal)
    - [Delete](#delete-a-meal)
    - [Update photo](#update-a-meal's-photo)
  - [Ingredients](#ingredients)
    - [Create](#create-an-ingredient)
    - [Update photo](#update-an-ingredient's-photo)
    - [Show all](#show-all-ingredients)
  - [Favorites](#favorites)
    - [Add](#add-a-favorite)
    - [Remove](#remove-a-favorite)
    - [Show all](#*show-all-favorites)
  - [Orders](#orders)
    - [Create](#create-an-order)
    - [Update](#update-an-order)
    - [Show one](#show-an-order)
    - [Show all](#show-all-orders)
  - [Photos](#photos)
    - [Dish](#show-photo-of-a-dish)
    - [Ingredient](#show-photo-of-an-ingredient)

### _Starting the application_

- Start by cloning the project:

  ```bash
    $ git clone https://github.com/jescatolini/foodExplorer_API
  ```

- Enter the directory:

  ```bash
    $ cd food_explorer-backend/
  ```

- Install the dependencies:

  ```bash
    $ npm install
  ```

- Set up the environment variables. For example:

  ```JS
    ADMIN_EMAIL=@admin.com
    PORT=3333
    AUTH_SECRET=698dc19d489c4e4db73e28a713eab07b
  ```
- Start the local server:

  ```bash
    $ npm run dev
  ```
- If everything goes well, you should see the following message in your terminal/console:

  ```bash
    Server is running on port 3333.
  ```

- To access the resources of this API, use the following base URL:

  `http://localhost:3333`

- For making requests, you can use Insomnia.

### _Using the resources_

Since the application has three types of user roles, the resources are divided into three categories:

- All:

  - Show all dishes
  - Search for a dish
  - Show a specific dish
  - Show all ingredients
  - Show a dish photo
  - Show an ingredient photo

- Public (not logged in):

  - Create a session
  - Register a user
  - Show all dishes
  - Search for a dish
  - Show a specific dish
  - Show all ingredients
  - Show a dish photo
  - Show an ingredient photo

- Customer:

  - Update a User
  - Add a favorite
  - Remove a favorite
  - Show all favorites
  - Create an order
  - Show an order
  - Show all orders

- Administrator:

  - Update a User
  - Create a dish
  - Update a dish
  - Delete a dish
  - Update a dish photo
  - Create an ingredient
  - Update an ingredient photo
  - Update an order
  - Show an order
  - Show all orders

- #### **SESSIONS**


  ##### **Create a Session**
    For most of the requests, the application expects a Bearer token (JWT) in the request header, which means the user needs to be authenticated.
    The following resources do not require authentication:

    - Show all dishes.
    - Show dish details.
    - Create an account.
    - Log in.

    To generate a token, make a request to the URL:

    `http://localhost:3333/sessions`

    The request should be made with the POST method, using JSON with the following format:

    ```JSON
      {
          "email": "your@email.com",
          "password": "yourPassword123"
      }
    ```
    If everything goes well, you should receive the following response:

    ```JSON
      {
      "user": {
          "name": "User",
          "email": "user@email.com",
          "avatar": "cdcdd64d04f5a7a79897-your-photo.jpeg"
      },
      "token": "158525ede2c8d232cca.5f0cc70b2547d642f44ede2c1715455cca.2655254cc70b2542f44ede2c8d232cca"
      }
    ```

- #### **USERS**


  - ##### **Register a User**

    To create a user, we will use the "users" resource, and the URL will be:

    `http://localhost:3333/users`

    The request should be made with the POST method, using JSON with the following format:

    ```JSON
      {
          "name": "Your Name",
          "email": "your@email.com",
          "password": "yourPassword123"
      }
    ```

    If everything goes well, you should receive a response with the status code 201.

    **Note**: To register a user as an administrator, the user's email must have the same structure as defined in the environment variables.

  - ##### Update a User
    To update a user, we will use the "users" resource, and the URL will be:

    `http://localhost:3333/users/`

    The request should be made with the PUT method, using JSON with the following format:

    ```JSON
    {
      "name": "Jhonata",
      "email": "jhonata@email.com",
      "old_password": "123",
      "new_password": "123456"
    }
    ```
    **ATTENTION**: Only the information that is sent will be updated.

    If everything goes well, you should receive a response with the status code 201.

- #### **DISHES**


  - ##### **Create a Dish**
    To create a dish, we will use the "meals" resource, and the URL will be:

    `http://localhost:3333/meals`

    The request should be made with the POST method, using JSON with the following format:

    ```JSON
      {
        "title": "Salada de Coentro",
        "category": "Refeições",
        "description": "Salada, coentro, tomate e rabanete. Crocantes e frescos",
        "price": "15.00",
        "ingredients": [
          {
            "id": 1,
            "name": "Alface"
          },
          {
            "id": 23,
            "name": "Tomate"
          },
          {
            "id": 21,
            "name": "Rabanete"
          }
        ]
      }
    ```
    If everything goes well, you should receive the following response:

    ```JSON
      {
        "id": 13,
         "title": "Salada de Coentro",
        "category": "Refeições",
        "description": "Salada, coentro, tomate e rabanete. Crocantes e frescos",
        "price": "15.00",
        "ingredients": [
          {
            "id": 1,
            "name": "Alface"
          },
          {
            "id": 23,
            "name": "Tomate"
          },
          {
            "id": 21,
            "name": "Rabanete"
          }
        ]
      }

    ```

    NOTE: Before creating a dish, you need to register its ingredients.

  - ##### **Update a Dish**
    To update a dish, we will use the "meals" resource along with the dish's id, and the URL will be:

    `http://localhost:3333/meals/5`

    The request should be made with the PUT method, using JSON with the following format:

    ```JSON
      {
        "title": "Salada Tradicional",
        "category": "Refeições",
        "description": "Salada, pepino, tomate. Frescos e saborosos",
        "price": "8.97",
        "ingredients": [
          {
            "id": 1,
            "name": "Alface"
          },
          {
            "id": 23,
            "name": "Tomate"
          },
          {
            "id": 18,
            "name": "Pepino"
          }
        ]
      }
    ```

  - ##### **Retrieve All Meals**
    To retrieve all meals, use the "meals" resource. The URL should be formatted as follows:

    `http://localhost:3333/meals`

    The request should be made using the GET method.

    If successful, the API will respond with the following data:

    ```JSON
      [
        {
            "id": 1,
            "title": "Salada Ravanello",
            "description": "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.",
            "price": 49.97,
            "image": "d03ed8e924c7c0911714-salada-ravanello.png",
            "created_at": "2023-06-22 02:21:51",
            "updated_at": "2023-06-22 02:21:51",
            "category": "Refeições"
        },
        {
            "id": 2,
            "title": "Spaguetti Gambe",
            "description": "Massa fresca com camarões e pesto.",
            "price": 79.97,
            "image": "2042ee6e486f88b3a1ca-spaguetti-gambe.png",
            "created_at": "2023-06-22 02:26:27",
            "updated_at": "2023-06-22 02:26:27",
            "category": "Refeições"
        },
        {
            "id": 3,
            "title": "Torradas de Parma",
            "description": "Presunto de parma e rúcula em um pão com fermentação natural.",
            "price": 25.97,
            "image": "721e783ebe34586a8967-torradas-de-parma.png",
            "created_at": "2023-06-22 02:29:26",
            "updated_at": "2023-06-22 02:29:26",
            "category": "Refeições"
        },
      ]
    ```

  - ##### **Search for a Meal**

    You can search for a meal by its name or by the name of an ingredient it contains. Use the "meals" resource along with the "search" parameter to indicate your search query. For example, the URL should be formatted as follows:

    `http://localhost:3333/meals?search=canela`

    The request should be made using the GET method.

    If successful, the API will respond with the following data:

    ```JSON
      [
        {
            "id": 11,
            "title": "Tè d'autunno",
            "description": "Chá de anis, canela e limão. Sinta o outono italiano.",
            "price": 19.97,
            "image": "3b41d41608cff3f60b52-te-d-autunno.png",
            "category": "Bebidas"
        },
        {
            "id": 12,
            "title": "Pomo bourbon",
            "description": "Maçã, whisky, canela. Com gelo.",
            "price": 79.97,
            "image": "d74dd4e982112e4efb8c-pomo-bourbon.png",
            "category": "Bebidas"
        }
      ]
    ```

  - ##### **Show a Specific Meal**
    To display the details of a specific meal, use the "meals" resource along with the meal ID that will be shown. The URL should be formatted as follows:

    `http://localhost:3333/meals/5`

    The request should be made using the GET method.

    If successful, the API will respond with the following data:

    ```JSON
      {
          "id": 5,
          "title": "Prugna Pie",
          "description": "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
          "price": 79.97,
          "image": "66651b4709e981f0dbdf-prugna-pie.png",
          "created_at": "2023-06-22 02:58:44",
          "updated_at": "2023-06-22 02:58:44",
          "category": "Sobremesas",
          "ingredients": [
              {
                  "id": 2,
                  "name": "Ameixa",
                  "image": "c3d9469d969c0e2f3fd4-ameixa.png"
              },
              {
                  "id": 10,
                  "name": "Farinha",
                  "image": "4c255c04de3eb41d1f55-farinha.png"
              }
          ]
      }
    ```

  - ##### **Delete a Meal**
      We also have the option to delete a meal. To do this, use the "meals" resource along with the meal ID that will be deleted. The URL should be formatted as follows:

      http://localhost:3333/meals/5

      The request should be made using the DELETE method.

      If successful, we will receive a response with the status code 201.

  - ##### **Update a Meal's Photo**
    To update a meal's photo, use the "meals" resource along with the meal ID that will be updated. The URL should be formatted as follows:

    `http://localhost:3333/meals/6`

    The request should be made using the PATCH method, and it should send a form. Within this form, there should be an item called "image" that contains the photo.

    If successful, we will receive a response with the status code 200.

- #### **INGREDIENTS**


  - ##### **Create an Ingredient**

    To create an ingredient, use the "ingredients" resource. The URL should be formatted as follows:

    `http://localhost:3333/ingredients`

    The request should be made using the POST method, and it should include JSON data with the following format:

    ```JSON
      {
        "name": "Goiaba"
      }
    ```
    If successful, you will receive the following response:

    ```JSON
      {
        "id": 28,
        "name": "Goiaba",
        "image": null
      }
    ```

  - ##### **Update an Ingredient's Photo**

    You can also update an ingredient's photo. To do this, use the "ingredients" resource along with the ingredient's ID. The URL should be formatted as follows:

    `http://localhost:3333/ingredients/28`

    The request should be made using the PATCH method, and it should send a form. Within this form, there should be an item called "image" that contains the photo.

    If successful, you will receive the following response:

    ```JSON
      {
        "id": "28",
        "image": "73749580ec193d608ef1-goiaba.png"
      }
    ```
    
  - ##### **Show All Ingredients**

    To display all ingredients, use the "ingredients" resource. The URL should be formatted as follows:

    `http://localhost:3333/ingredients`

    The request should be made using the GET method. If successful, you will receive the following response:

    ```JSON
      [
          {
              "id": 1,
              "name": "Alface",
              "image": "ec64458bba8bf26a998d-alface.png"
          },
          {
              "id": 2,
              "name": "Ameixa",
              "image": "c3d9469d969c0e2f3fd4-ameixa.png"
          },
          {
              "id": 3,
              "name": "Amêndoas",
              "image": "068219261a56ebe8c484-amÃªndoas.png"
          }
      ]
    ```

- #### **FAVORITES**


  - ##### **Add a Favorite**
    You also have the option to add a dish to your favorites. To do this, use the "favorites" resource followed by the dish's ID. The URL should be formatted as follows:

    `http://localhost:3333/favorites/12`

    The request should be made using the POST method. If successful, you will receive a response with the status code 200.

  - ##### **Remove a Favorite**

    To remove a dish from your favorites, use the "favorites" resource followed by the dish's ID. The URL should be formatted as follows:

    `http://localhost:3333/favorites/12`

    The request should be made using the DELETE method. If successful, you will receive a response with the status code 200.

  - ##### **Show All Favorites**
  
    You can display all favorite dishes of a user by using the "favorites" resource. The URL should be formatted as follows:

    `http://localhost:3333/favorites`

    The request should be made using the GET method. If successful, you will receive the following response:

    ```JSON
      [
        {
          "id": 12,
          "title": "Pomo bourbon",
          "description": "Maçã, whisky, canela. Com gelo.",
          "price": 79.97,
          "image": "d74dd4e982112e4efb8c-pomo-bourbon.png"
        },
        {
          "id": 9,
          "title": "Espresso",
          "description": "Café cremoso feito na temperatura e pressões perfeitas.",
          "price": 15.97,
          "image": "4798897a37d87ec49cd9-espresso.png"
        }
      ]
    ```

- #### **ORDERS**


  - ##### **Create an Order**
    
    To create a new order, use the "orders" resource. The URL should be formatted as follows:

    `http://localhost:3333/orders`

    The request should be made using the POST method, and it should include JSON data with the following format:

    ```JSON
    [
      { "meal_id": 2, "amount": 3 },
      { "meal_id": 3, "amount": 5 },
      { "meal_id": 4, "amount": 2 }
    ]
    ```
    If successful, you will receive a response with the status code 201.

  - ##### **Update an Order**

    We can update the status of an order using the "orders" resource. The URL should be formatted as follows:

    `http://localhost:3333/orders`

    The request should be made using the PUT method and should include JSON data with the following format:

    ```JSON
      {
        "order_id": 9,
        "status": "delivered"
      }
    ```
    If successful, you will receive a response with the status code 200.

    Note: The allowed status types are:

      -"pending"
      -"preparing"
      -"delivered"

  - ##### **Show an Order**
    We can display detailed information about an order by using the "orders" resource followed by the order ID. The URL should be formatted as follows:

    `http://localhost:3333/orders/5`

    The request should be made using the GET method. If successful, you will receive the following response:

    ```JSON
      {
        "id": 5,
        "status": "pending",
        "price": 522.67,
        "user_id": 24,
        "created_at": "2023-06-21 11:56:24",
        "meals": [
          {
            "id": 2,
            "title": "Spaguetti Gambe",
            "price": 79.97,
            "image": "2042ee6e486f88b3a1ca-spaguetti-gambe.png",
            "meal_amount": 4
          },
          {
            "id": 3,
            "title": "Torradas de Parma",
            "price": 25.97,
            "image": "721e783ebe34586a8967-torradas-de-parma.png",
            "meal_amount": 4
          },
          {
            "id": 6,
            "title": "Peachy pastrie",
            "price": 32.97,
            "image": "2b58316d6b139a186956-peachy-pastrie.png",
            "meal_amount": 3
          }
        ]
      }

     ```

  - ##### **Show All Orders**
    We can also display all orders placed by making a request to the "orders" resource. The URL should be formatted as follows:

    `http://localhost:3333/orders`

    The request should be made using the GET method. If successful, you will receive the following response:

    ```JSON
          [
            {
              "id": 40,
              "status": "pending",
              "created_at": "2023-06-21 11:56:24",
              "meals": [
                {
                  "order_meal_id": 63,
                  "title": "Peachy pastrie",
                  "meal_amount": 3
                },
                {
                  "order_meal_id": 62,
                  "title": "Torradas de Parma",
                  "meal_amount": 4
                },
                {
                  "order_meal_id": 61,
                  "title": "Spaguetti Gambe",
                  "meal_amount": 4
                }
              ]
            },
            {
              "id": 39,
              "status": "pending",
              "created_at": "2023-06-21 11:47:44",
              "meals": [
                {
                  "order_meal_id": 60,
                  "title": "Suco de maracujá",
                  "meal_amount": 3
                },
                {
                  "order_meal_id": 59,
                  "title": "Torradas de Parma",
                  "meal_amount": 3
                }
              ]
            }
          ]
    ```
    Note: If the user is an administrator, all orders from all customers will be displayed. However, if not, only their own orders will be shown.

- #### **Photos**


  - ##### **Show Photo of a Dish**
  
    To display the photo of a dish, we will use the "files/meals" resource followed by the file name. The URL should be formatted as follows:

    `http://localhost:3333/files/meals/d03ed8e924c7c0911714-salada-ravanello.png`

    The request should be made using the GET method. If successful, you will receive the requested photo as a response.

  - ##### **Show Photo of an Ingredient**
    To display the photo of an ingredient, we will use the "files/ingredients" resource followed by the file name. The URL should be formatted as follows:

    `http://localhost:3333/files/ingredients/068219261a56ebe8c484-amÃªndoas.png`

    The request should be made using the GET method. If successful, you will receive the requested photo as a response.

  
  ---
  ## :ghost: Author
  Made with :heart: by Dev Jhonata Escatolini :grinning: Check out my [LinkedIn profile](https://www.linkedin.com/in/jhonata-escatolini/).