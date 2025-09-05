#!/bin/bash

# Simple script to run the portfolio website locally
echo "🚀 Starting Shanmukha Tharun Turpudi's Portfolio Website..."
echo "📱 Website will be available at: http://localhost:8000"
echo "❌ Press Ctrl+C to stop the server"
echo ""

# Check if python3 is available
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
# Fallback to python
elif command -v python &> /dev/null; then
    python -m http.server 8000
# Fallback to other methods
else
    echo "❌ Python not found. Please install Python or use another web server."
    echo "💡 Alternative: Open index.html directly in your browser"
    exit 1
fi
