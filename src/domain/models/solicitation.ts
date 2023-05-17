type ISolicitation = {
    id: string
    keyword?: string
    status: 'active' | 'done'
    urls?: string[]
}

export default ISolicitation