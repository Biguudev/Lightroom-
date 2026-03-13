let body = $response.body;

body = body.replace(/^while\s*\(1\)\s*\{\}\s*/, "");

let obj = JSON.parse(body);

if (obj.entitlement) {

  obj.entitlement.status = "subscriber";

  obj.entitlement.current_subs = {
    "product_id": "lightroom",
    "store": "adobe"
  };

}

$done({body: JSON.stringify(obj)});
