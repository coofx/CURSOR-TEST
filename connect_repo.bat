@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo Connecting to https://github.com/coofx/CURSOR-TEST ...
echo.

git init 2>nul
git remote remove origin 2>nul
git remote add origin https://github.com/coofx/CURSOR-TEST.git

if %errorlevel% neq 0 (
  echo ERROR: Git not found. Install Git from https://git-scm.com/ and run this script again.
  pause
  exit /b 1
)

echo.
echo Remote "origin" set to: https://github.com/coofx/CURSOR-TEST.git
echo.
echo Next: add, commit, push:
echo   git add .
echo   git commit -m "Initial commit"
echo   git branch -M main
echo   git push -u origin main
echo.
pause
