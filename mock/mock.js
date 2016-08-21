module.exports = {
  rules: [
    {
      pattern: /\/api\/home\.php\?type=more\&pageNo=1/,
      respondwith: './home.json'
    },
    {
      pattern: /\/api\/livelist\.php\?type=more\&pageNo=2/,
      respondwith: './livelist-more.json'
    },
    {
      pattern: /\/api\/livelist\.php\?type=refresh/,
      respondwith: './livelist-refresh.json'
    }
  ]
};
