# ============================================================
#  Elif Fast Food — hammasini bir marta ishga tushirish
#  (Backend + Bot, Mini App, Admin Panel, cloudflared tunnel)
# ============================================================

$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
$node = "C:\Program Files\nodejs"
$cf   = "C:\Program Files (x86)\cloudflared\cloudflared.exe"
$env:Path = "$node;" + $env:Path

Write-Host "=== ELIF FAST FOOD ishga tushmoqda ===" -ForegroundColor Yellow

# 1) Mini App (5173)
Write-Host "[1/5] Mini App..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit","-Command","cd '$root\mini-app'; `$env:Path='$node;'+`$env:Path; npm run dev"

# 2) Admin Panel (5174)
Write-Host "[2/5] Admin Panel..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit","-Command","cd '$root\admin-panel'; `$env:Path='$node;'+`$env:Path; npm run dev"

# 3) cloudflared tunnel (Mini App uchun HTTPS)
Write-Host "[3/5] Tunnel (cloudflared) ochilmoqda..." -ForegroundColor Cyan
$log = "$env:TEMP\elif_tunnel.log"
Remove-Item $log -ErrorAction SilentlyContinue
Start-Process -FilePath $cf -ArgumentList "tunnel","--url","http://localhost:5173" -RedirectStandardError $log -WindowStyle Minimized

Write-Host "      URL kutilmoqda (30 soniyagacha)..." -ForegroundColor DarkGray
$url = $null
for ($i = 0; $i -lt 30; $i++) {
    Start-Sleep -Seconds 2
    if (Test-Path $log) {
        $m = Select-String -Path $log -Pattern "https://[a-z0-9-]+\.trycloudflare\.com" -ErrorAction SilentlyContinue | Select-Object -First 1
        if ($m) { $url = $m.Matches[0].Value; break }
    }
}
if (-not $url) {
    Write-Host "XATO: Tunnel URL topilmadi. Internetni tekshirib, qayta urinib ko'ring." -ForegroundColor Red
    Read-Host "Chiqish uchun Enter"
    exit
}
Write-Host "      Tunnel URL: $url" -ForegroundColor Green

# 4) .env ichidagi MINI_APP_URL ni yangilaymiz
Write-Host "[4/5] .env yangilanmoqda..." -ForegroundColor Cyan
$envFile = "$root\backend\.env"
$content = Get-Content $envFile -Raw
$content = $content -replace 'MINI_APP_URL=".*?"', "MINI_APP_URL=`"$url`""
[System.IO.File]::WriteAllText($envFile, $content, (New-Object System.Text.UTF8Encoding($false)))

# 5) Backend + Bot
Write-Host "[5/5] Backend + Bot..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit","-Command","cd '$root\backend'; `$env:Path='$node;'+`$env:Path; npm start"

Write-Host ""
Write-Host "==================== TAYYOR! ====================" -ForegroundColor Green
Write-Host " Telegram botда  /start  bosing va tugmani bosing." -ForegroundColor White
Write-Host " Admin Panel : http://localhost:5174" -ForegroundColor White
Write-Host " Mini App    : $url" -ForegroundColor White
Write-Host "=================================================" -ForegroundColor Green
Write-Host " Ushbu oynani va boshqa ochilgan oynalarni YOPMANG." -ForegroundColor Yellow
Write-Host " To'xtatish uchun: STOP.bat" -ForegroundColor DarkGray
Read-Host "Yopish uchun Enter"
