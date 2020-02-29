const messages = [
    {
        user: {
          name: "James Horner",
          avatarURL: "https://avatarfiles.alphacoders.com/952/95227.jpg"
        },
        createDate: new Date().toLocaleString(),
        text: 'Я не уверен что могу волшебной палкой!',
        type: "message",
        comments:[
          {
            name: "HackFlex",
            avatarURL:
              "https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg",
              text: 'Сомнительное сообщение!'
          }
        ]
      }
]

export const actions = {
    async fetchMessages(){
        try {
            return await new Promise(resolve => setTimeout(() =>{
                resolve(messages)
            }))
        } catch (error) {
            throw error
        }
    }
}