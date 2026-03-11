@echo off
cd /d "%~dp0"
echo.
echo Starting FITOUT Expo...
echo Make sure your iPhone and laptop are on the SAME WiFi!
echo.
"C:\Program Files\nodejs\npx.cmd" expo start --port 8082
pause
