# [Outsera] Testes de performance com k6 

## Para uma execução com acompanhamento em tempo real, executar o comando de exemplo:

```sh
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_PERIOD=2s K6_WEB_DASHBOARD_EXPORT=./reports/graphic-report.html K6_WEB_DASHBOARD_OPEN=true k6 run desafio.js
```

Ou acessar a seguinte URL durante a execução:
http://127.0.0.1:5665/ui/?endpoint=/

## Para uma execução onde é apenas gerado um report em html:

```sh
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_PERIOD=2s K6_WEB_DASHBOARD_EXPORT=./reports/report_performance_test.html k6 run desafio.js
```

## Análise sobre o relatório anexado [AQUI](./reports/graphic-report.html):
- API teve uma vazão de pouco mais de 128 mil requisições
- 99% das requisicoes responderam em menos de 500ms
- As falhas foram abaixo de 1%
- Em todas as respostas, as regras de negócio como status_code, name e job foram validados com sucesso
- Houveram requisições que tiveram duração de até 1 minuto


---
