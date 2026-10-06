# Практическая работа №1 — Book Library (вариант 2)

Студент: Аделканов Рауат, группа CS-302(С)

Expo SDK 55 · React Native · TypeScript

## Состав

- `App.tsx` — экран приложения (тип `LibraryData`, объект `library`, стили)
- `books.jpg` — собственное изображение книжной полки
- `package.json`, `app.json`, `tsconfig.json` — конфигурация проекта

## Открытие в Expo Snack

1. [snack.expo.dev](https://snack.expo.dev) → новый Snack, SDK **v55.0.0**.
2. Переименовать `App.js` в `App.tsx` и вставить код из `App.tsx`.
3. В `package.json` добавить `"react-native-safe-area-context": "~5.6.2"`.
4. Project → Import files → `books.jpg` (файл в корне проекта).
5. Включить Web; для Android открыть QR-код в Expo Go 55.

## Локальный запуск

```bash
npm install
npm run typecheck
npx expo start
```
