taskkill /F /IM chrome.exe /T > nul

iisreset /stop
echo "IIS Is Stop"

cd C:\ConicErpDeploy-main
mkdir Test
git remote add origin https://github.com/shweiki/ConicErpDeploy.git
echo "add origin"

git fetch origin

iisreset /start
echo "IIS Is Start"
