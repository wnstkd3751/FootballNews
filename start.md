cd news
./gradlew bootRun

cd frontend
npm run dev

docker run \
-p 8081:8080 \
-e MONGO_URL="mongodb+srv://jun1234755_db_user:5rpqJ8AG9zK4UM9P@cluster0.stk2lp3.mongodb.net/footballnews?appName=Cluster0" \
-e X_BEARER_TOKEN="AAAAAAAAAAAAAAAAAAAAABlh9wEAAAAA1%2FrQLPs%2BrRlqHroVoagqwx8gOQM%3DINBySVEJkKhGc7mVG5eeIQOHJhjH9Sg6b1ty9unQ3mEiCv1ILq" \
-e X_CLIENT_ID="S21nQi1oOW1hSVJBYlBvMW5HWTM6MTpjaQ" \
-e X_CLIENT_SECRET="q6ISxaR1RfKLoAALtVdG0nHtijHTMu_rndZ4QvC9fCdfh5k9O4" \
football-news-api