# Define the path to the configuration file
$filePath = "F:\Users\Tom\Documents\MetaTraderPanel_Web\docs\de\faq\common-faq.md"
$oldValue = "DUMMY_LINK_START"
$URL = "<a href="FRITZ" title="MetaTrader-Panel" aria-label="MetaTrader-Panel">"
Write-host([URI]::EscapeUriString($URL)) 


(Get-Content -Path $filePath) -replace $oldValue, $[URI]::EscapeUriString($URL) | Set-Content -Path $filePath

$UpdatedContent1 = $Content -replace "DUMMY_LINK_END", "</a>"
 
# Write the updated content back to the file
Set-Content -Path $FilePath -Value $UpdatedContent1