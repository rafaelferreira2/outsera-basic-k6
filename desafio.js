import http from 'k6/http'
import { sleep, check } from 'k6'

import uuid from './libs/uuid.js';

export const options = {
  stages: [
    { duration: '1m', target: 500 },
    { duration: '5m', target: 500 },
    { duration: '1m', target: 0 }
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'], // 95% das requisicoes devem responder em até 2s
    http_req_failed: ['rate<0.01'] // 1% das requisicoes podem ocorrer erro
  }
}

export default function () {
  const url = 'https://reqres.in/api/users'

  const headers = {
    'headers': {
      'Content-Type': 'application/json'
    }
  }

  const identify = uuid.v4().substring(24)
  const userName = `user_perform ${identify}`
  const jobCode = `job_perform code ${identify}`

  const payload = JSON.stringify({ name: userName, job: jobCode })

  const resp = http.post(url, payload, headers)

  check(resp, {
    'status should be 201': (r) => r.status === 201,
    'validade user name': (r) => r.body.includes(userName),
    'validade user job': (r) => r.body.includes(jobCode),
  })
  sleep(1)
}