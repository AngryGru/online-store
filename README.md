# Geeks Alley

🛒 A store page with a list of products (PS4 games) and a shopping cart.

### Product List

🔹 The page displays a list of product cards. Each card contains:

<ul>
<li>image</li>
<li>title</li>
<li>small description</li>
<li>price</li>
<li>"Buy" button</li>
</ul>

🔹 Clicking on the product card opens a small modal window with a more detailed description of the product (enlarged image of the product, languages, release date, genres, cost).

### Shopping Cart

🔹 On the right side of the page displays a shopping cart, initially empty. When the <b>Buy</b> button is clicked, the product is added to the cart.

🔹 If a product has already been added, then the quantity of this product in the basket simply increases by 1.

🔹 In the cart, the products are displayed in a list with the following information: product title, price and quantity, and also the <b>Delete</b> button.

🔹 When the <b>Delete</b> button is clicked, the entire quantity of this product is removed from the cart.

🔹 The <b>Total amount</b> and the <b>Checkout</b> button are also displayed in the shopping cart.

🔹 When you click the <b>Checkout</b> button, a small modal window with a message about a successful purchase is displayed and the basket is cleared.

## Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
