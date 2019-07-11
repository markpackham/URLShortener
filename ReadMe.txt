To test this you want to have "Rest Client" installed in VS Code

Run the MongoDB database first
This is my cluster "customURLShortener" that I already created

Run the site:
npm run dev

To create shortend urls go to the file
"api.http" in the "requests" folder.

Edit the long value with another long url eg

  "longUrl": "https://www.amazon.com/Constantine-Keanu-Reeves/dp/B0091W10TS/ref=sr_1_1?keywords=constantine&qid=1562834020&s=gateway&sr=8-1"

And click "Send Request" in the file "api.http"