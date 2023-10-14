# [Laith Harb] The Next.js 13 Bootcamp - The Complete Developer Guide [ENG, 2023]

<br/>

## 06. Database Integration with Prisma

<br/>

[Chapter Code Changes](https://github.com/webmakaka/Mastering-Next.js-13-with-TypeScript/pull/2)

<br/>

### 02. Installing MySQL

```json
version: '3'
services:
  mysql-dev:
    restart: always
    image: mysql:8.1
    ports:
      - '3306:3306'
    volumes:
      - ./mysql:/etc/mysql/conf.d
    environment:
      MYSQL_DATABASE: nextapp
      MYSQL_ROOT_PASSWORD: pA55w0rd123
```

<br/>

### 03. Setting Up Prisma

```
$ npm install prisma
$ npx prisma init
```

<br/>

https://www.prisma.io/docs/reference/database-reference/connection-urls

<br/>

### 04. Defining Models

```
$ npx prisma format
```

<br/>

### 05. Creating Migrations

```
$ npx prisma migrate dev
```

<br/>

```
✔ Enter a name for the new migration: … [Initial]
Applying migration `20231014100313_initial`
```

<br/>

### 06. Creating a Prisma Client

https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices

<br/>

### 07. Getting Data

<br/>

### 08. Creating Data

<br/>

```
// POST
// OK!
$ curl \
    --data '{
      "name":"Marley",
      "email":"marley@example.com"}' \
    --header "Content-Type: application/json" \
    --request POST \
    --url http://localhost:3000/api/users \
    | jq
```

**response:**

```json
{
  "id": 1,
  "email": "marley@example.com",
  "name": "Marley",
  "followers": 0,
  "isActive": true,
  "registeredAt": "2023-10-14T10:51:25.524Z"
}
```

<br/>

### 09. Updating Data

<br/>

```
// GET ALL
// OK!
$ curl \
    --header "Content-Type: application/json" \
    --request GET \
    --url http://localhost:3000/api/users \
    | jq
```

<br/>

```
[
  {
    "id": 1,
    "email": "marley@example.com",
    "name": "Marley",
    "followers": 0,
    "isActive": true,
    "registeredAt": "2023-10-14T10:51:25.524Z"
  }
]
```

<br/>

```
// GET
// OK!
$ curl \
    --header "Content-Type: application/json" \
    --request GET \
    --url http://localhost:3000/api/users/1 \
    | jq
```

<br/>

```
// PUT
// OK!
$ curl \
    --data '{
      "name": "Marley1",
      "email": "marley1@example.com"}' \
    --header "Content-Type: application/json" \
    --request PUT \
    --url http://localhost:3000/api/users/1 \
    | jq
```

<br/>

### 10. Deleting Data

<br/>

```
// DELETE
// OK!
$ curl \
    --header "Content-Type: application/json" \
    --request DELETE \
    --url http://localhost:3000/api/users/1 \
    | jq
```

<br/>

### 11. Exercise - Storing Products in DB

```
$ npx prisma format
$ npx prisma migrate dev
```

```
✔ Enter a name for the new migration: … create product
```

<br/>

```
// POST
// OK!
$ curl \
    --data '{
      "name":"Milk",
      "price":2.5}' \
    --header "Content-Type: application/json" \
    --request POST \
    --url http://localhost:3000/api/products \
    | jq
```

<br/>

```
// GET
// OK!
$ curl \
    --header "Content-Type: application/json" \
    --request GET \
    --url http://localhost:3000/api/products \
    | jq
```

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
