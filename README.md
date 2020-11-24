## 1. Страница Главная.

На ней должен быть текст: Привет, Гость, если пользователь не авторизован и текст
Привет, {LOGIN}, если пользователь авторизован.

## 2. Вход

Производится на попапе, вводится логин и пароль (для упрощения правильную пару
логин и пароль можно зашить в коде). При неверном вводе должна быть индикация
ошибки.
После успешного входа попап закрывается.

## 3. Новости

Отображается список новостей и поиск по новостям. Фильтрация новостей должна
производиться сразу при вводе текста поиска. У каждой новости есть: название, текст
и дата создания.

## 4. Должно быть 2 пользователя:

-   пользователь
-   админ

У пользователя должна быть возможность добавить новость. У админа должна быть
возможность одобрить новость или удалить. По умолчанию созданная
пользователем новость не является одобренной, но сам создатель её видит.
Гость должен видеть только одобренные админом новости. Гость не может создавать
или одобрять новости.

## Пользователи

-   ### Администратор

    `login: newsAdmin` <br/>
    `password: admin12345`

-   ### Пользователь
    `login: KoliaUser` <br/>
    `password: kolia25121990`