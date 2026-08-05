# ======================================================
# Techgenius Haiti Brand Downloader
# ======================================================

$base = ".\public\images\brands"

New-Item -ItemType Directory -Force -Path $base | Out-Null

$logos = @(
"microsoft",
"apple",
"dell",
"hp",
"lenovo",
"asus",
"acer",
"intel",
"amd",
"ubuntu",
"kalilinux",
"adobe",
"adobephotoshop",
"adobeillustrator",
"adobepremierepro",
"visualstudio",
"visualstudiocode",
"androidstudio",
"github",
"git",
"docker",
"vmware",
"google",
"googlechrome",
"android",
"firefox",
"opera",
"debian",
"fedora",
"nvidia",
"cisco",
"mikrotik",
"ubiquiti",
"tplink"
)

foreach ($icon in $logos) {

    $url = "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/$icon.svg"

    $output = Join-Path $base "$icon.svg"

    try {

        Invoke-WebRequest -Uri $url -OutFile $output

        Write-Host "Downloaded $icon" -ForegroundColor Green

    }
    catch {

        Write-Host "Missing $icon" -ForegroundColor Yellow

    }

}

Write-Host ""
Write-Host "====================================="
Write-Host "Finished!"
Write-Host "====================================="