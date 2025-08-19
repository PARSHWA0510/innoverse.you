#!/bin/bash

echo "🚀 Starting Community Platform Landing Page..."
echo "📦 Installing dependencies..."
npm install

echo "🔥 Starting development server..."
npm run dev

echo "🌐 Opening browser..."
sleep 3
open http://localhost:3000
