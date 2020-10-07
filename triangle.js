function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    return true;
  }
  return false;
}

Test.describe("PublicTest", function () {
  Test.assertEquals(isTriangle(1, 2, 2), true);
  Test.assertEquals(isTriangle(7, 2, 2), false);
});

// Реалізуйте метод, який приймає 3 цілі значення a, b, c.Метод повинен повертати true, якщо трикутник можна побудувати зі сторонами заданої довжини, а false в будь - якому іншому випадку.

// (У цьому випадку всі трикутники повинні мати поверхню більше 0, щоб їх прийняли).
