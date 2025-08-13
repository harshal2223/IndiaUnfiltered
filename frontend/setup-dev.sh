#!/bin/bash

echo "========================================"
echo "    NITYAM AI - Development Setup"
echo "========================================"
echo

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "ERROR: package.json not found!"
    echo "Please run this script from the project root directory."
    exit 1
fi

echo "✓ Found package.json - we're in the right directory"
echo

# Check if node_modules exists
if [ -d "node_modules" ]; then
    echo "✓ Dependencies already installed"
else
    echo "Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "ERROR: Failed to install dependencies"
        exit 1
    fi
    echo "✓ Dependencies installed successfully"
fi

echo
echo "Starting development server..."
echo "========================================"
npm run dev