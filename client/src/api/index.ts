// адрес сервера
import config from '../config'
// общий тип сообщения
import { Message } from '../../../shared'

// общие настройки запроса
const commonOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

// функция отправки неправильного сообщения
async function sendWrongMessage() {
  const options = {
    ...commonOptions,
    body: JSON.stringify({
      title: 'Message from client',
      // как самонадеянно
      body: 'I know JavaScript'
    })
  }

  try {
    const response = await fetch(config.SERVER_URI, options)
    if (!response.ok) throw response
    const data = await response.json()
    if (data?.message) {
      // это называется утверждением типа (type assertion)
      // при использовании JSX возможен только такой способ
      return data.message as Message
    }
  } catch (e: any) {
    if (e.status === 400) {
      // сообщение об ошибке
      const data = await e.json()
      throw data
    }
    throw e
  }
}

// функция отправки правильного сообщения
async function sendRightMessage() {
  console.log("sendRightMessage")
  const options = {
    ...commonOptions,
    body: JSON.stringify({
      title: 'Message from client',
      body: 'Hello from client!'
    })
  }

  const response = await fetch(config.SERVER_URI, options)
  if (!response.ok) throw response
  const data = await response.json()
  if (data?.message) {
    // !
    return data.message as Message
  } else {
    return {title: 'Message from server', body: 'Shit'} as Message
  }
}

export default { sendWrongMessage, sendRightMessage }