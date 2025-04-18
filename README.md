# HomiQ Platform

![HomiQ Logo](https://via.placeholder.com/150x50?text=HomiQ)

Инновационная платформа для поиска и анализа жилья в Узбекистане. HomiQ помогает пользователям находить доступное жильё с учетом их потребностей и бюджета, а также предоставляет аналитику рынка недвижимости на основе искусственного интеллекта.

## Возможности

- 🏠 Поиск жилья по различным параметрам (район, цена, количество комнат)
- 📊 Анализ рынка недвижимости и тенденций цен
- 📈 Рейтинг районов по инвестиционной привлекательности
- ❤️ Возможность добавления объектов в избранное
- 👤 Персональный аккаунт пользователя

## Технологии

- React.js
- Tailwind CSS
- JavaScript ES6+

## Установка и запуск

### Предварительные требования

- Node.js (версия 14.0.0 или выше)
- npm (версия 6.0.0 или выше)

### Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/TemurTurayev/homiq-platform.git
   cd homiq-platform
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

### Запуск

Для запуска проекта в режиме разработки:

```bash
npm start
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000).

### Сборка

Для создания production-сборки:

```bash
npm run build
```

Готовые файлы будут размещены в папке `build`.

## Структура проекта

```
homiq-platform/
├── public/                # Статические файлы
├── src/                   # Исходный код
│   ├── components/        # React компоненты
│   │   ├── Header.js      # Компонент шапки сайта
│   │   ├── Hero.js        # Главный баннер
│   │   ├── SearchForm.js  # Форма поиска
│   │   └── ...            # Другие компоненты
│   ├── data/              # Данные для разработки
│   │   └── mockData.js    # Тестовые данные
│   ├── App.js             # Основной компонент приложения
│   ├── index.js           # Точка входа
│   └── index.css          # Основные стили
├── package.json           # Зависимости и скрипты
└── tailwind.config.js     # Конфигурация Tailwind CSS
```

## Автор

**Темур Тураев** - Основатель и разработчик проекта HomiQ

## Лицензия

Этот проект лицензирован под MIT License