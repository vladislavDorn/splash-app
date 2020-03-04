export interface imageData {
    id: string
    created_at: string
    updated_at: string
    width: number
    height: number
    color: string
    alt_description: string
    urls: {raw: string, full: string, regular: string, small: string, thumb: string}
    likes: number
    liked_by_user: false
}