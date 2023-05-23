type Solicitation = {
    id: string
    keyword?: string
    status: 'active' | 'done'
    urls?: string[]
}

export default Solicitation