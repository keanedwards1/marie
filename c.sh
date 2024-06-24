git add .
if [ -z "$1" ]; then
    git commit -m "minor changes"
else
    git commit -m "$1"
fi
git push origin main