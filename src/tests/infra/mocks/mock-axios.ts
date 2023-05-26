import axios from 'axios'
import { faker } from '@faker-js/faker'

export const mockHttpResponse = (): any => ({
    data: {
        key: faker.helpers.objectKey({ myProperty: 'myValue' })
    },
    status: faker.number.int()
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
    const mockedAxios = axios as jest.Mocked<typeof axios>
    mockedAxios.request.mockClear().mockResolvedValue(mockHttpResponse())
    return mockedAxios
}
