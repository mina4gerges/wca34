# wca34

## Run with Docker Compose

From the repository root:

```bash
docker compose -f compose.yml -p wca34 up -d
```

## Database: connect and inspect

```bash
docker compose -f compose.yml -p wca34 exec -it db mysql -u root -p
```

When prompted for the password type `db-btf5q`

Inside the MySQL client:

```sql
SHOW DATABASES;
USE example;
```

## Create the `users` table and insert a row

Run these statements in the same MySQL session:

```sql
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  imageUrl VARCHAR(1000) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (firstName, lastName, email, password, imageUrl)
VALUES (
  'Mina',
  'Gerges',
  'minagerges4@gmail.com',
  'test123',
  'https://plus.unsplash.com/premium_photo-1667480556783-119d25e19d6e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
);
```
