#!/bin/bash

echo ""
echo "Installing / updating grunt-cli and bower for Development."
echo ""

npm install -g grunt-cli bower

echo ""
echo "You're half way there... ;)"
echo "Installing local project dependencies ;)"
echo ""

npm install

echo ""
echo "You're good to go... ;)"
echo ""
