body {
    font-family: Arial, sans-serif;
    background: #f4f4f9;
    margin: 0;
    padding: 0;
    text-align: center;
}

header {
    background: #5A67D8;
    color: white;
    padding: 20px 0;
    position: fixed;
    width: 100%;
    top: 0;
    transition: all 0.3s ease;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

section {
    padding: 80px 20px;
    margin-top: 80px;
}

.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease-in-out;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

.project-box {
    background: #FFD700;
    padding: 15px;
    margin: 10px auto;
    width: 50%;
    border-radius: 5px;
}

form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
}

input, textarea {
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    background: #5A67D8;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background: #4C51BF;
}
