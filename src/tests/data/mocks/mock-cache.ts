import { GetStorage } from '../../../data/protocols/cache'

import { faker } from '@faker-js/faker'


export class GetStorageSpy implements GetStorage {
    key: string
    value: string = faker.string.alpha()
    
    get (key: string): string {
        this.key = key
        return this.value
    }
}
