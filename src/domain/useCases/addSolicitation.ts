import { Solicitation } from '../models'

export interface AddSolicitation {
    add: (params: Params) => Promise<Solicitation>
}

type Params = {
    keyword: string
}
