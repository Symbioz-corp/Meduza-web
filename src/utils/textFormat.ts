export const FormatText = {
    name: (name: string): string => {
        console.log('name fromater: ', name);

        name = name.trim()
        const words = name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
        return words.join(' ')
    }
}