let obj = JSON.parse($response.body);

if (Array.isArray(obj)) {
  obj.forEach(app => {
    app.entitled = true;
    app.is_active = true;
  });
}

$done({body: JSON.stringify(obj)});
