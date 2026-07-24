#!/bin/bash
# ============================================
# 大学生黑客松注册系统 - 华为云 ECS 一键部署脚本
# 适用系统: Ubuntu 20.04/22.04 LTS
# 使用方式: chmod +x deploy.sh && sudo ./deploy.sh
# ============================================

set -e

echo "🚀 开始部署黑客松注册系统到华为云 ECS..."

# 1. 安装 Node.js 20.x LTS
echo "📦 [1/5] 安装 Node.js..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
fi
echo "   Node.js 版本: $(node -v)"

# 2. 安装 PM2 进程管理器
echo "📦 [2/5] 安装 PM2..."
npm install -g pm2
echo "   PM2 版本: $(pm2 -v)"

# 3. 安装 Nginx
echo "📦 [3/5] 安装 Nginx..."
if ! command -v nginx &> /dev/null; then
    apt-get update
    apt-get install -y nginx
fi
echo "   Nginx 版本: $(nginx -v 2>&1)"

# 4. 配置 Nginx 反向代理
echo "⚙️  [4/5] 配置 Nginx..."
cp nginx-hackathon.conf /etc/nginx/sites-available/hackathon
ln -sf /etc/nginx/sites-available/hackathon /etc/nginx/sites-enabled/hackathon
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl restart nginx
echo "   Nginx 配置完成并已重启"

# 5. 用 PM2 启动应用
echo "⚙️  [5/5] 启动应用服务..."
mkdir -p logs
pm2 delete hackathon-registration 2>/dev/null || true
pm2 start ecosystem.config.js
pm2 save
pm2 startup systemd -u $(whoami) --hp $HOME 2>/dev/null || true
echo "   PM2 应用已启动并设置开机自启"

echo ""
echo "===================================================="
echo "✅ 部署完成！"
echo "===================================================="
echo ""
echo "📱 报名注册页面:  http://$(curl -s ifconfig.me)/"
echo "💻 管理后台页面:  http://$(curl -s ifconfig.me)/admin"
echo ""
echo "📋 常用运维命令:"
echo "   pm2 status              # 查看应用状态"
echo "   pm2 logs                # 查看实时日志"
echo "   pm2 restart all         # 重启应用"
echo "   pm2 monit               # 监控面板"
echo "===================================================="
