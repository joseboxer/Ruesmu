#!/bin/bash
# Servidor HTTP para Almacenes Ruesmu
# Puerto 80 requiere permisos de administrador (sudo)

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Sirviendo desde: $SCRIPT_DIR"
echo "Iniciando servidor en http://localhost:80"
echo "Pulsa Ctrl+C para detener"
echo ""

# --directory evita que sudo cambie el directorio de trabajo (que haría que css/, js/, etc. no se encuentren)
sudo python3 -m http.server 80 --directory "$SCRIPT_DIR"
