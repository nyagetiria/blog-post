# Blog Post Manager

A simple web application for managing blog posts. Users can view, add, edit, and delete blog entries. This project is built using vanilla JavaScript and interacts with a local RESTful API via [JSON Server](https://github.com/typicode/json-server).

##  Features

- View a list of blog post titles
- View detailed content of a selected post
- Add a new blog post
- Edit an existing post
- Delete a post

##  Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- JSON Server (mock API)

## Project Structure

```

├── index.html
├── index.js
├── style.css
├── db.json (mock database for JSON Server)

````

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/blog-post-manager.git
cd blog-post-manager
````

### 2. Install JSON Server

Make sure you have [Node.js](https://nodejs.org/) installed. Then install JSON Server globally:

```bash
npm install -g json-server
```

### 3. Start the JSON Server

```bash
json-server --watch db.json
```

By default, this will start your mock API at:

```
http://localhost:3000/posts
```

### 4. Open the App

Simply open `index.html` in your browser.

>  You can use the Live Server extension in VS Code for automatic refresh and local server features.

---

##  Example Blog Post Format

Each post in `db.json` should look like this:

```json
{
  "id": 1,
  "title": "My First Post",
  "author": "Naomi",
  "content": "This is the body of the post.",
  "image": "https://via.placeholder.com/150"
}
```

---

##  Future Improvements

* Form validation
* Tags or categories
* User authentication
* Persistent edit mode
* Dark mode

---

##  License

This project is licensed under the [MIT License](LICENSE).

---

##  Author

**Naomi Kemunto**
GitHub: [@nyagetiria](https://github.com/nyagetiria)

```

---

