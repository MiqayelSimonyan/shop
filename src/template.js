import styles from './assets/styles/shop.scss';

export default (body) => `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Shop</title>
	</head>
	<body>
        <div id="container">${body}</div>
        <script src="../dist/app.js"></script>
	</body>
	</html>
`