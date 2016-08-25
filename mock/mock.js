module.exports = {
  rules: [
    {
      pattern: /\/api\/home\.php\?type=more\&pageNo=1/,
      respondwith: './home.json'
    },
    {
      pattern: /\/api\/login\.php\?type=more\&pageNo=1/,
      respondwith: './login.json'
    },
    {
      pattern: /\/api\/livelist\.php\?type=refresh/,
      respondwith: './livelist-refresh.json'
    },
    {
      pattern: /\/api\/livelist\.php\?type=eat\&pageNo=1/,
      respondwith: './life_json/eat.json'
    },
    {
      pattern: /\/api\/livelist\.php\?type=car\&pageNo=1/,
      respondwith: './life_json/car.json'
    }
  ]
};

