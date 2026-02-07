# Подключение к репозиторию GitHub

Репозиторий: **[coofx/CURSOR-TEST](https://github.com/coofx/CURSOR-TEST)**

## Быстрый способ

**Запусти файл `connect_repo.bat`** (двойной клик в проводнике). Он выполнит `git init` и добавит remote `origin`. После этого в терминале в папке проекта выполни:

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

## Вручную

Выполни в папке проекта в терминале (Git Bash или CMD, где установлен Git):

```bash
git init
git remote add origin https://github.com/coofx/CURSOR-TEST.git
git fetch origin
git branch -M main
git branch -u origin/main main
```

Если в удалённом репо уже есть коммиты и ты хочешь с ними синхронизироваться:

```bash
git pull origin main --allow-unrelated-histories
```

Дальше добавляй файлы и делай коммиты:

```bash
git add .
git commit -m "Initial commit: Voltiga hero section"
git push -u origin main
```

Если репо пустой и ты хочешь просто отправить текущий код:

```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

---

*Если Git не установлен: скачай его с [git-scm.com](https://git-scm.com/) и перезапусти терминал.*
