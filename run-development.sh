#!/bin/bash


echo ""
echo "Starting Development server on port 44947"
echo ""

pm2 kill
pm2 start serve-dev.js --name "shaded-menus"

echo ""
echo "Running grunt for Development"
echo ""

grunt run-dev
