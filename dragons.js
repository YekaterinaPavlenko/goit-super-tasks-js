function hero(bullets, dragons) {
  if (bullets >= dragons * 2) {
    return true;
  }
  return false;
}

Test.assertEquals(hero(10, 5), true);
Test.assertEquals(hero(7, 4), false);
Test.assertEquals(hero(4, 5), false);
Test.assertEquals(hero(100, 40), true);
Test.assertEquals(hero(1500, 751), false);
Test.assertEquals(hero(0, 1), false);

// Герой вирушає до замку, щоб виконати свою місію.Однак йому сказали, що замок оточений парою могутніх драконів! Щоб вбити кожного дракона потрібно по 2 кулі, щоб перемогти, наш герой не уявляє, скільки куль він повинен нести.Чи виживе герой якщо припустимо, він візьме певну кількість куль і рухатиметься вперед, щоб битися проти певною кількісті драконів

// Повернути True, якщо так, False інакше: slight_smile:
