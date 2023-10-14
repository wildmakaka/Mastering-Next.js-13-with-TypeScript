# [Laith Harb] The Next.js 13 Bootcamp - The Complete Developer Guide [ENG, 2023]

<br/>

## 06. Database Integration with Prisma

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

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
