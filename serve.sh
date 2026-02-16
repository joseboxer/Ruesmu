#!/bin/bash
# Servidor HTTP para Almacenes Ruesmu
# Puerto 80 requiere permisos de administrador (sudo)

cd "$(dirname "$0")"

echo "Iniciando servidor en http://localhost:80"
echo "Pulsa Ctrl+C para detener"
echo ""

# Puerto 80 requiere sudo en la mayoría de sistemas
sudo python3 -m http.server 80
