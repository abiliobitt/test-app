import axios from 'axios'
import { faker } from '@faker-js/faker'
import { HttpResponse } from '../../../data/protocols/http'

export const mockHttpResponse = (): HttpResponse => ({
    body: {
        key: faker.helpers.objectKey({ myProperty: 'myValue' })
    },
    statusCode: faker.number.int()
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
    const mockedAxios = axios as jest.Mocked<typeof axios>
    mockedAxios.request.mockClear().mockResolvedValue(mockHttpResponse())
    return mockedAxios
}
