# [Laith Harb] The Next.js 13 Bootcamp - The Complete Developer Guide [ENG, 2023]

<br/>

## 08. Authentication with Next Auth

<br/>

[Chapter Code Changes](https://github.com/webmakaka/Mastering-Next.js-13-with-TypeScript/pull/4)

<br/>

### 02. Setting Up Next Auth

https://next-auth.js.org/

<br/>

```
$ npm install next-auth
```

<br/>

### 03. Configuring Google Provider

https://next-auth.js.org/providers/google

https://console.cloud.google.com/apis/credentials?project=apt-signifier-330519

```
New Project -> "My Next App"

CONFIGURE CONSENT SCREEN -> External -> Create

App Name: My Next App

CREATE
```

<br/>

```
ADD OR REMOVE SCOPES

+ userinfo.email
+ userinfo.profile

SAVE AND CONTINUE
```

<br/>

```
Test users

ADD USER

SAVE AND CONTINUE

BACK TO DASHBOARD
```

<br/>

```
Credentials -> Create Credentials -> OAuth client ID
```

<br/>

```
Application type: Web Application

Name: My Next App

Authorized JavaScript origins: http://localhost:3000

Authorized redirect URIs: http://localhost:3000/api/auth/callback/google

CREATE
```

<br/>

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>

```

```
