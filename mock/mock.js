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
      pattern: /\/api\/more\.php\?type=more\&pageNo=1/,
      respondwith: './more.json'
    },
    {
      pattern: /\/api\/livelist\.php\?type=more\&pageNo=2/,
      respondwith: './home-more.json'
    },
    {
      pattern: /\/api\/livelist\.php\?type=refresh/,
      respondwith: './home.json'
    },
    {
      pattern: /\/api\/livelist\.php\?type=eat\&pageNo=1/,
      respondwith: './life_json/eat.json'
    },
    {
      pattern: /\/api\/livelist\.php\?type=car\&pageNo=1/,
      respondwith: './life_json/car.json'
    },
    {
      pattern: /\/api\/livelist\.php\?type=detail\&pageNo=1/,
      respondwith: './life_json/dedail.json'
    }
  ]
};

