@echo off
echo ========================================
echo    NITYAM AI - Development Setup
echo ========================================
echo.

REM Check if we're in the right directory
if not exist "package.json" (
    echo ERROR: package.json not found!
    echo Please run this script from the project root directory.
    pause
    exit /b 1
)

echo ✓ Found package.json - we're in the right directory
echo.

REM Check if node_modules exists
if exist "node_modules" (
    echo ✓ Dependencies already installed
) else (
    echo Installing dependencies...
    npm install
    if errorlevel 1 (
        echo ERROR: Failed to install dependencies
        pause
        exit /b 1
    )
    echo ✓ Dependencies installed successfully
)

echo.
echo Starting development server...
echo ========================================
npm run dev