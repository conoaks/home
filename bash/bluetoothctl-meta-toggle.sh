if (bluetoothctl devices Connected | grep -q "Device 98:59:49:36:B1:B0")
then
    bluetoothctl disconnect 98:59:49:36:B1:B0
else
    bluetoothctl connect 98:59:49:36:B1:B0
fi