#!/bin/bash
# MyPhone Remote — macOS Installer
# One-line install: curl -sSL https://myphoneremote.com/install.sh | bash

set -e

BOLD='\033[1m'
GREEN='\033[32m'
CYAN='\033[36m'
NC='\033[0m'

echo ""
echo -e "${BOLD}${CYAN}📱 MyPhone Remote — Installer${NC}"
echo -e "${CYAN}   Your iPhone. Your Mac. One touch.${NC}"
echo ""

# Check macOS
if [[ "$(uname)" != "Darwin" ]]; then
  echo "❌ MyPhone Remote requires macOS."
  exit 1
fi

INSTALL_DIR="$HOME/MyPhone-Remote"
REPO_URL="https://github.com/whodaniel/MyPhone-Remote"

# Step 1: Clone or update
if [ -d "$INSTALL_DIR" ]; then
  echo -e "${GREEN}⬆️  Updating existing installation...${NC}"
  cd "$INSTALL_DIR" && git pull -q 2>/dev/null || true
else
  echo -e "${GREEN}📥 Cloning MyPhone Remote...${NC}"
  git clone -q "$REPO_URL" "$INSTALL_DIR" 2>/dev/null || {
    echo "⚠️  Git clone failed. Creating local install..."
    mkdir -p "$INSTALL_DIR/server"
  }
fi

cd "$INSTALL_DIR/server"

# Step 2: Check Python
PYTHON=""
for py in python3.14 python3.13 python3.12 python3 python; do
  if command -v "$py" &>/dev/null; then
    PYTHON="$py"
    break
  fi
done

if [ -z "$PYTHON" ]; then
  echo "❌ Python 3 not found. Install from https://python.org"
  exit 1
fi

echo -e "${GREEN}🐍 Using $PYTHON ($($PYTHON --version 2>&1))${NC}"

# Step 3: Install dependencies
echo -e "${GREEN}📦 Installing dependencies...${NC}"
$PYTHON -m pip install -r requirements.txt --user --break-system-packages -q 2>/dev/null || \
  $PYTHON -m pip install -r requirements.txt --user -q 2>/dev/null || \
  $PYTHON -m pip install -r requirements.txt -q 2>/dev/null

# Step 4: Get local IP
LOCAL_IP=$(ipconfig getifaddr en0 2>/dev/null || echo "YOUR_MAC_IP")

# Step 5: Start server
echo ""
echo -e "${BOLD}${GREEN}✅ MyPhone Remote installed!${NC}"
echo ""
echo -e "  Start the server:"
echo -e "    ${CYAN}$PYTHON $INSTALL_DIR/server/myphone_remote.py --port 8080${NC}"
echo ""
echo -e "  Then on your iPhone, open Safari:"
echo -e "    ${BOLD}${CYAN}http://$LOCAL_IP:8080${NC}"
echo ""
echo -e "  🎉 That's it. No App Store. No account. Just go."
echo ""

# Optional: launch now
read -p "Start MyPhone Remote now? [Y/n] " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Nn]$ ]]; then
  $PYTHON "$INSTALL_DIR/server/myphone_remote.py" --port 8080
fi
