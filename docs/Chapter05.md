# [Laith Harb] The Next.js 13 Bootcamp - The Complete Developer Guide [ENG, 2023]

<br/>

## 05. Building APIs

<br/>

### 02. Getting a Collection of Objects

http://localhost:3000/api/users

<br/>

### 03. Getting a Single Object

http://localhost:3000/api/users/1

<br/>

### 04. Creating an Object

<br/>

```
// POST
// OK!
$ curl \
    --data '{
      "name":"Mosh"}' \
    --header "Content-Type: application/json" \
    --request POST \
    --url http://localhost:3000/api/users \
    | jq
```

<br/>

### 05. Updating an Object

<br/>

```
// PUT
// OK!
$ curl \
    --data '{
      "name":"Mosh2"}' \
    --header "Content-Type: application/json" \
    --request PUT \
    --url http://localhost:3000/api/users/1 \
    | jq
```

<br/>

### 06. Deleting an Object

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

### 07. Validating Requests with Zod

```
$ npm install zod
```

<br/>

```
// PUT
// OK!
$ curl \
    --data '{
      "name":"AB"}' \
    --header "Content-Type: application/json" \
    --request PUT \
    --url http://localhost:3000/api/users/1 \
    | jq
```

**response:**

```json
[
  {
    "code": "too_small",
    "minimum": 3,
    "type": "string",
    "inclusive": true,
    "exact": false,
    "message": "String must contain at least 3 character(s)",
    "path": ["name"]
  }
]
```

<br/>

### 08. Exercise - Building Products API

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
