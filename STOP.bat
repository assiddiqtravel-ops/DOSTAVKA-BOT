@echo off
chcp 65001 >nul
title Elif Fast Food - To'xtatish
echo Barcha jarayonlar to'xtatilmoqda...
taskkill /F /IM node.exe /T >nul 2>&1
taskkill /F /IM cloudflared.exe /T >nul 2>&1
echo Tayyor. Hammasi to'xtatildi.
timeout /t 2 >nul
